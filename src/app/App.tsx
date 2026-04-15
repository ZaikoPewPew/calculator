import { useState, useEffect, useMemo } from 'react';
import confetti from 'canvas-confetti';
import { motion } from 'motion/react';
import svgPaths from '../imports/svg-93q3wzl95q';
import BusinessSectorDropdown from './components/BusinessSectorDropdown';
import TariffInfo from './components/TariffInfo';
import CommissionInfo from './components/CommissionInfo';
import TerminalInfo from './components/TerminalInfo';
import Tooltip from '../imports/Tooltip-58-2582';

// Tariff data with complete information
const tariffs = [
  { 
    id: 'industry', 
    name: 'Тариф\nОтраслевой', 
    badge: 'ОТРАСЛЕВОЙ', 
    badgeColor: 'purple' as const,
    rate: 1.8,
    rateThreshold: 2000000, // 2 млн ₽
    rateAbove: 2.3,
    terminalFee: 1290,
    termPeriod: null,
    hasRKO: false,
    monthlyFee: null,
    instantDepositBonus: 0 // Отраслевой тариф не поддерживает мгновенное зачисление (для Стартового)
  },
  { 
    id: 'starter', 
    name: 'Тариф\nСтартовый', 
    badge: 'ДЛЯ НОВЫХ', 
    badgeColor: 'blue' as const,
    rate: 1, // основная ставка
    rateThreshold: 500000, // порог для основной ставки
    rateAbove: 2.2, // ставка выше порога
    terminalFee: 0,
    termPeriod: '3 мес', // од детвия тарифа
    hasRKO: false,
    monthlyFee: null,
    instantDepositBonus: 0 // Стартовый не поддерживает мгновенное зачисление
  },
  { 
    id: 'mpos', 
    name: 'mPOS', 
    badge: 'ВЫГОДНЫЙ', 
    badgeColor: 'green' as const,
    rate: 1.79,
    rateThreshold: null,
    rateAbove: null,
    terminalFee: 0,
    termPeriod: null,
    hasRKO: false,
    monthlyFee: null,
    instantDepositBonus: 0.20, // mPOS +0.20%
    buyoutPrice: 2770 // Special buyout price for mPOS
  },
  { 
    id: 'basic', 
    name: 'Тариф\nБазовый', 
    badge: null, 
    badgeColor: null,
    rate: 2.99,
    rateThreshold: null,
    rateAbove: null,
    terminalFee: 0,
    termPeriod: null,
    hasRKO: false,
    monthlyFee: null, // Расчет от оборота, не фиксированная плата
    instantDepositBonus: 0.20 // Базовый +0.20%
  },
  { 
    id: 'affordable', 
    name: 'Тариф\nДоступный', 
    badge: null, 
    badgeColor: null,
    rate: 2.5,
    rateThreshold: null,
    rateAbove: null,
    terminalFee: 890,
    termPeriod: null,
    hasRKO: false,
    monthlyFee: null,
    instantDepositBonus: 0.20 // Доступный +0.20%
  },
  { 
    id: 'advanced', 
    name: 'Тариф\nПродвинутый', 
    badge: null, 
    badgeColor: null,
    rate: 1.99,
    rateThreshold: 2000000,
    rateAbove: 2.3,
    terminalFee: 1290,
    termPeriod: null,
    hasRKO: false,
    monthlyFee: null,
    instantDepositBonus: 0.20 // Продвинутый +0.20%
  },
  { 
    id: 'simple', 
    name: 'Тариф\nПростой', 
    badge: 'ПУ ПРОСТОЙ', 
    badgeColor: 'blue' as const,
    rate: 1,
    rateThreshold: null,
    rateAbove: null,
    terminalFee: 1490,
    termPeriod: null,
    hasRKO: true, // Тариф Простой имеет комиссию РКО +1%
    monthlyFee: null,
    instantDepositBonus: 1 // Простой +1%
  },
  { 
    id: 'optimal', 
    name: 'Тариф\nОптимальный', 
    badge: null, 
    badgeColor: null,
    rate: 2.2,
    rateThreshold: null,
    rateAbove: null,
    terminalFee: 1490,
    termPeriod: null,
    hasRKO: false,
    monthlyFee: null,
    instantDepositBonus: 0.20 // Оптимальный +0.20%
  },
];

// Helper function to format percentage with comma
const formatPercent = (value: number): string => {
  return value.toString().replace('.', ',');
};

// Tooltip texts for tariffs
const tariffTooltips: Record<string, string> = {
  starter: 'Тариф доступен только для новых клиентов на\u00A0первые 3\u00A0месяца',
  mpos: 'Для устройства mPOS. Стоимость терминала\u00A0— 2770\u00A0₽ единоразово',
  basic: 'Для одной или нескольких торговых точек, без доплат за\u00A0несоблюдение оборота',
  simple: 'Только для клиентов с\u00A0РКО ПУ\u00A0Простой',
  affordable: 'Для одной или нескольких торговых точек, при небольших оборотах',
  advanced: 'Для одной большой или нескольких торговых точек. Низкий процент без доплат при соблюдении оборота',
  optimal: 'Для клиентов со\u00A0средним оборотом на\u00A01\u00A0терминал более 500\u00A0тыс\u00A0₽ в\u00A0месяц',
  industry: 'Для клиентов с\u00A0отраслевыми тарифами'
};

export default function App() {
  const [businessSector, setBusinessSector] = useState('Для всех отраслей');
  const [turnover, setTurnover] = useState(10000);
  const [terminals, setTerminals] = useState(1);
  const [selectedTariff, setSelectedTariff] = useState('starter');
  const [instantDeposit, setInstantDeposit] = useState(false);
  const [tariffScrollIndex, setTariffScrollIndex] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);
  const [hoveredTariff, setHoveredTariff] = useState<string | null>(null);
  
  // Auto-disable instant deposit when switching to starter tariff
  useEffect(() => {
    if (selectedTariff === 'starter' && instantDeposit) {
      setInstantDeposit(false);
    }
  }, [selectedTariff, instantDeposit]);
  
  // Get selected tariff data
  const selectedTariffData = tariffs.find(t => t.id === selectedTariff);
  
  // Calculate commission based on tariff and turnover
  const calculateCommission = () => {
    if (!selectedTariffData) return 0;
    
    let commission = 0;
    
    let effectiveRate = selectedTariffData.rate;
    let effectiveRateAbove = selectedTariffData.rateAbove;
    
    // Add instant deposit bonus if enabled
    if (instantDeposit && selectedTariffData.instantDepositBonus) {
      effectiveRate = Math.round((effectiveRate + selectedTariffData.instantDepositBonus) * 100) / 100;
      if (effectiveRateAbove) {
        effectiveRateAbove = Math.round((effectiveRateAbove + selectedTariffData.instantDepositBonus) * 100) / 100;
      }
    }
    
    if (selectedTariffData.rateThreshold && effectiveRateAbove) {
      // Tariff with threshold
      if (turnover <= selectedTariffData.rateThreshold) {
        commission = turnover * effectiveRate / 100;
      } else {
        const belowThreshold = selectedTariffData.rateThreshold * effectiveRate / 100;
        const aboveThreshold = (turnover - selectedTariffData.rateThreshold) * effectiveRateAbove / 100;
        commission = belowThreshold + aboveThreshold;
      }
    } else {
      // Simple tariff
      commission = turnover * effectiveRate / 100;
    }
    
    // Add RKO commission if applicable
    if (selectedTariffData.hasRKO) {
      commission += turnover * 0.01; // +1% for RKO
    }
    
    return Math.round(commission);
  };
  
  const commission = calculateCommission();
  const tax = Math.round(commission * 0.22);
  const total = commission + tax;
  
  // Calculate terminal fee with special logic for Tariff Simple
  let terminalFee = 0;
  if (selectedTariffData) {
    if (selectedTariffData.id === 'simple') {
      // For Tariff Simple: check if turnover per terminal > 500,000
      const turnoverPerTerminal = turnover / terminals;
      if (turnoverPerTerminal <= 500000) {
        terminalFee = selectedTariffData.terminalFee * terminals;
      }
      // else terminalFee stays 0
    } else {
      terminalFee = selectedTariffData.terminalFee * terminals;
    }
  }
  
  const monthlyTotal = total + terminalFee;
  
  // Format numbers with proper spacing
  const formatNumber = (value: number) => {
    if (value < 10000) {
      return value.toString();
    }
    return value.toLocaleString('ru-RU');
  };
  
  // Format for rate display (with "тыс" and "млн")
  const formatRate = (value: number) => {
    if (value >= 1000000) {
      return `${value / 1000000} млн ₽`;
    } else if (value >= 1000) {
      return `${value / 1000} тыс ₽`;
    } else {
      return `${value} ₽`;
    }
  };
  
  // Get rate display for selected tariff
  const getRateDisplay = () => {
    if (!selectedTariffData) return { rate1: '', rate2: '', threshold: '' };
    
    if (selectedTariffData.rateThreshold && selectedTariffData.rateAbove) {
      return {
        rate1: `${selectedTariffData.rate}% до ${formatRate(selectedTariffData.rateThreshold)}`,
        rate2: `${selectedTariffData.rateAbove}%`,
        threshold: formatRate(selectedTariffData.rateThreshold)
      };
    } else {
      return {
        rate1: `${selectedTariffData.rate}%`,
        rate2: null,
        threshold: null
      };
    }
  };
  
  const rateDisplay = getRateDisplay();
  
  // Calculate monthly total for each tariff card
  const calculateTariffPrice = (tariff: typeof tariffs[0]) => {
    let commission = 0;
    
    let effectiveRate = tariff.rate;
    let effectiveRateAbove = tariff.rateAbove;
    
    // Add instant deposit bonus if enabled (but not for starter tariff)
    if (instantDeposit && tariff.instantDepositBonus && tariff.id !== 'starter') {
      effectiveRate = Math.round((effectiveRate + tariff.instantDepositBonus) * 100) / 100;
      if (effectiveRateAbove) {
        effectiveRateAbove = Math.round((effectiveRateAbove + tariff.instantDepositBonus) * 100) / 100;
      }
    }
    
    if (tariff.rateThreshold && effectiveRateAbove) {
      if (turnover <= tariff.rateThreshold) {
        commission = turnover * effectiveRate / 100;
      } else {
        const belowThreshold = tariff.rateThreshold * effectiveRate / 100;
        const aboveThreshold = (turnover - tariff.rateThreshold) * effectiveRateAbove / 100;
        commission = belowThreshold + aboveThreshold;
      }
    } else {
      commission = turnover * effectiveRate / 100;
    }
    
    // Add RKO commission if applicable
    if (tariff.hasRKO) {
      commission += turnover * 0.01; // +1% for RKO
    }
    
    const roundedCommission = Math.round(commission);
    const tax = Math.round(roundedCommission * 0.22);
    
    // Calculate terminal cost with special logic for Tariff Simple
    let terminalCost = 0;
    if (tariff.id === 'simple') {
      const turnoverPerTerminal = turnover / terminals;
      if (turnoverPerTerminal <= 500000) {
        terminalCost = tariff.terminalFee * terminals;
      }
      // else terminalCost stays 0
    } else {
      terminalCost = tariff.terminalFee * terminals;
    }
    
    return roundedCommission + tax + terminalCost;
  };
  
  // Get tariff name for display
  const getTariffName = () => {
    if (!selectedTariffData) return '';
    return selectedTariffData.name.replace('\n', ' ');
  };
  
  // Calculate slider position percentage
  const turnoverPercent = ((turnover - 10000) / (40000000 - 10000)) * 100;
  const terminalsPercent = ((terminals - 1) / (100 - 1)) * 100;
  
  // Handle turnover change with dynamic step (10k до 1 млн, 100k свыше)
  const handleTurnoverChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    let rounded;
    
    if (value <= 1000000) {
      // До 1 млн - шаг 10 000
      rounded = Math.round(value / 10000) * 10000;
    } else {
      // Свыше 1 млн - шаг 100 000
      rounded = Math.round(value / 100000) * 100000;
    }
    
    // Ensure minimum is 10 000
    rounded = Math.max(10000, rounded);
    setTurnover(rounded);
  };
  
  // Handle turnover input change
  const handleTurnoverInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\s/g, ''); // Remove spaces

    // Allow empty input
    if (value === '') {
      setTurnover(0);
      return;
    }

    const numValue = Number(value);
    if (!isNaN(numValue) && numValue >= 0) {
      // If value exceeds 40 000 000, set to maximum 40 000 000
      if (numValue > 40000000) {
        setTurnover(40000000);
      } else {
        setTurnover(numValue);
      }
    }
  };
  
  // Handle turnover blur (reset to minimum if too low)
  const handleTurnoverBlur = () => {
    if (turnover < 10000) {
      setTurnover(10000);
    }
  };
  
  // Handle terminals input change
  const handleTerminalsInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Allow empty input
    if (value === '') {
      setTerminals(0);
      return;
    }

    const numValue = Number(value);
    if (!isNaN(numValue) && numValue >= 0) {
      // If value exceeds 100, set to maximum 100
      if (numValue > 100) {
        setTerminals(100);
      } else {
        setTerminals(numValue);
      }
    }
  };
  
  // Handle terminals blur (reset to minimum if too low)
  const handleTerminalsBlur = () => {
    if (terminals < 1) {
      setTerminals(1);
    }
  };
  
  // Tariff carousel navigation
  // Filter tariffs based on business sector
  const availableTariffs = useMemo(() => {
    return businessSector === 'Для всех отраслей' 
      ? tariffs.filter(t => t.id !== 'industry') // Hide industry tariff for "Для всех отраслей"
      : tariffs; // Show all tariffs including industry tariff for specific sectors
  }, [businessSector]);
  
  // Sort tariffs by price from lowest to highest
  const sortedTariffs = useMemo(() => {
    return [...availableTariffs].sort((a, b) => {
      const priceA = calculateTariffPrice(a);
      const priceB = calculateTariffPrice(b);
      if (priceA !== priceB) {
        return priceA - priceB;
      }
      // If prices are equal, sort by ID for stability
      return a.id.localeCompare(b.id);
    });
  }, [turnover, terminals, instantDeposit, availableTariffs]);
  
  const maxVisibleTariffs = 4;
  const canScrollLeft = tariffScrollIndex > 0;
  const canScrollRight = tariffScrollIndex < sortedTariffs.length - maxVisibleTariffs;
  
  // Left-click drag to scroll (for Mac trackpad)
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragStartScrollIndex, setDragStartScrollIndex] = useState(0);
  const [hasMoved, setHasMoved] = useState(false);
  const [scrollOffset, setScrollOffset] = useState(0); // Free-form scroll offset in pixels

  // Add global mouse event listeners for dragging
  useEffect(() => {
    if (isDragging) {
      const handleGlobalMouseMove = (e: MouseEvent) => {
        const deltaX = dragStartX - e.clientX;

        // If moved more than 5px, consider it a drag
        if (Math.abs(deltaX) > 5) {
          setHasMoved(true);
        }

        const cardWidth = 174 + 8; // card width + gap
        const maxScrollOffset = (sortedTariffs.length - maxVisibleTariffs) * cardWidth;

        // Free scroll without snapping
        const newOffset = Math.max(0, Math.min(
          maxScrollOffset,
          dragStartScrollIndex * cardWidth + deltaX
        ));

        setScrollOffset(newOffset);
      };

      const handleGlobalMouseUp = () => {
        setIsDragging(false);

        // Snap to nearest card on release
        const cardWidth = 174 + 8;
        const nearestIndex = Math.round(scrollOffset / cardWidth);
        const clampedIndex = Math.max(0, Math.min(
          sortedTariffs.length - maxVisibleTariffs,
          nearestIndex
        ));

        setTariffScrollIndex(clampedIndex);
        setScrollOffset(clampedIndex * cardWidth);
      };

      document.addEventListener('mousemove', handleGlobalMouseMove);
      document.addEventListener('mouseup', handleGlobalMouseUp);

      return () => {
        document.removeEventListener('mousemove', handleGlobalMouseMove);
        document.removeEventListener('mouseup', handleGlobalMouseUp);
      };
    }
  }, [isDragging, dragStartX, dragStartScrollIndex, sortedTariffs.length, maxVisibleTariffs, scrollOffset]);

  const handleMouseDown = (e: React.MouseEvent) => {
    // Check if left mouse button (button === 0)
    if (e.button === 0) {
      setIsDragging(true);
      setDragStartX(e.clientX);
      setDragStartScrollIndex(tariffScrollIndex);
      setScrollOffset(tariffScrollIndex * (174 + 8)); // Initialize offset from current index
      setHasMoved(false);
    }
  };

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent context menu from appearing
  };
  
  const scrollLeft = () => {
    if (canScrollLeft) {
      const newIndex = tariffScrollIndex - 1;
      setTariffScrollIndex(newIndex);
      setScrollOffset(newIndex * (174 + 8));
    }
  };

  const scrollRight = () => {
    if (canScrollRight) {
      const newIndex = tariffScrollIndex + 1;
      setTariffScrollIndex(newIndex);
      setScrollOffset(newIndex * (174 + 8));
    }
  };
  
  const visibleTariffs = sortedTariffs.slice(tariffScrollIndex, tariffScrollIndex + maxVisibleTariffs);
  
  // Get tariff fields for display
  const getTariffFields = (): { label: string; value: string; isLink?: boolean; tooltipText?: string }[] => {
    if (!selectedTariffData) return [];
    
    const fields: { label: string; value: string; isLink?: boolean; tooltipText?: string }[] = [];
    
    // Calculate effective rates (with instant deposit if enabled)
    let effectiveRate = selectedTariffData.rate;
    let effectiveRateAbove = selectedTariffData.rateAbove;
    
    if (instantDeposit && selectedTariffData.instantDepositBonus) {
      effectiveRate = Math.round((effectiveRate + selectedTariffData.instantDepositBonus) * 100) / 100;
      if (effectiveRateAbove) {
        effectiveRateAbove = Math.round((effectiveRateAbove + selectedTariffData.instantDepositBonus) * 100) / 100;
      }
    }
    
    if (selectedTariffData.rateThreshold && effectiveRateAbove) {
      // Tariff with threshold - show both rates
      fields.push({
        label: 'Процентная ставка',
        value: `${formatPercent(effectiveRate)}% до ${formatRate(selectedTariffData.rateThreshold)}`
      });
      
      if (selectedTariffData.termPeriod) {
        fields.push({
          label: 'Срок тарифа',
          value: selectedTariffData.termPeriod
        });
      }
      
      let labelText = '';
      let tooltipContent = '';
      
      if (selectedTariffData.id === 'starter') {
        labelText = 'Свыше суммы / срока';
        tooltipContent = `При достижении оборота 500 тыс ₽ по всем терминалам в месяц комиссия составит ${formatPercent(effectiveRateAbove)}% на все платежи серх лимита`;
      } else if (selectedTariffData.id === 'advanced') {
        labelText = 'Всё выше 2 млн ₽';
        tooltipContent = `При достижении оборота 2 млн ₽ по всем терминалам в месяц комиссия составит ${formatPercent(effectiveRateAbove)}% на все платежи сверх лимита`;
      } else if (selectedTariffData.id === 'industry') {
        labelText = 'Свыше 2 млн ₽';
        tooltipContent = `ри достижении оброта 2 млн ₽ по всем терминалам в месяц комисси составит ${formatPercent(effectiveRateAbove)}% на все платежи сверх лимита`;
      } else {
        labelText = `Свыше ${formatNumber(selectedTariffData.rateThreshold)} ₽`;
        tooltipContent = `При достижении оборта ${formatRate(selectedTariffData.rateThreshold)} по всем термналам в месяц комиссия составит ${formatPercent(effectiveRateAbove)}% на все платежи сверх лимита`;
      }
      
      fields.push({
        label: labelText,
        value: `${formatPercent(effectiveRateAbove)}%`,
        isLink: true,
        tooltipText: tooltipContent
      });
    } else {
      // Simple tariff - just commission rate
      fields.push({
        label: 'Процентная ставка',
        value: `${formatPercent(effectiveRate)}%`
      });
      
      // Add RKO commission for tariff Simple
      if (selectedTariffData.hasRKO) {
        fields.push({
          label: 'Комиссия РКО',
          value: '+1%'
        });
      }
    }
    
    return fields;
  };
  
  // Get terminal state
  const getTerminalState = (): 'calculator' | 'limits' | 'free' | 'mpos' => {
    if (!selectedTariffData) return 'free';
    
    // Special handling for mPOS
    if (selectedTariffData.id === 'mpos') {
      return 'mpos';
    }
    
    // Special handling for Tariff Simple
    if (selectedTariffData.id === 'simple') {
      const turnoverPerTerminal = turnover / terminals;
      if (turnoverPerTerminal > 500000) {
        return 'limits'; // Show "0 ₽ при соблюдении лимитов" with tooltip
      } else {
        return 'calculator'; // Show calculation: price x quantity
      }
    }
    
    // For other tariffs, determine based on terminalFee
    if (selectedTariffData.terminalFee === 0) {
      return 'free'; // Show just "0 ₽"
    }
    
    return 'calculator';
  };
  
  // Handle connect button click with confetti
  const handleConnect = () => {
    window.location.href = 'https://alfabank.ru/_example/sme/payservice/acquiring/#Open-Account';

    // Fire confetti from multiple angles
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 10000 };

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      
      // Launch confetti from random positions
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      });
    }, 250);
  };
  
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="w-[1140px] flex flex-col">
        <h1 className="mb-10 max-w-[751px] grow shrink-0 basis-0 font-['SF_Pro_Display',sans-serif] text-[40px] font-bold leading-[48px] text-[rgba(3,3,6,0.88)]">
          Подберите выгодный тариф
        </h1>
        <div className="bg-[#f2f3f5] rounded-[32px] p-2 flex gap-2 w-[1140px]">
        {/* Left Panel - Calculator */}
        <div className="bg-[#f2f3f5] rounded-3xl p-6 w-[768px]">
          {/* Title */}
          <h1 className="font-['SF_Pro_Display',sans-serif] font-bold text-[30px] leading-[36px] text-[rgba(3,3,6,0.88)] mb-6">
            Параметры вашего бизнеса
          </h1>
          
          {/* Business Sector Dropdown */}
          <div className="mb-6">
            <BusinessSectorDropdown 
              value={businessSector}
              onChange={setBusinessSector}
            />
          </div>
          
          {/* Sliders Container */}
          <div className="flex gap-6 mb-6">
            {/* Turnover Slider */}
            <div className="flex-1 relative h-20 group">
              {/* Background */}
              <label 
                htmlFor="turnover-input"
                className="absolute inset-0 top-0 h-14 bg-[rgba(38,55,88,0.06)] rounded-tl-[8px] rounded-tr-[8px] transition-colors group-hover:bg-[#DEE0E5] cursor-text"
              >
                <div className="absolute bottom-0 h-px left-0 right-0 bg-[#babbc2]" />
              </label>
              
              {/* Content - Label and Value */}
              <label 
                htmlFor="turnover-input"
                className="absolute left-3 right-3 top-2 h-10 flex items-center z-10 cursor-text"
              >
                <div className="flex-1">
                  <p className="font-['SF_Pro_Text',sans-serif] text-[14px] leading-[18px] text-[rgba(4,4,19,0.55)]">
                    Оборот в месяц со всех торговых точек
                  </p>
                  <div className="flex items-baseline">
                    <input
                      id="turnover-input"
                      type="text"
                      value={turnover.toLocaleString('ru-RU')}
                      onChange={handleTurnoverInputChange}
                      onBlur={handleTurnoverBlur}
                      className="font-['SF_Pro_Text',sans-serif] font-bold text-[16px] leading-5 text-[rgba(3,3,6,0.88)] bg-transparent border-none outline-none p-0 m-0 cursor-text"
                      style={{ 
                        width: `${turnover.toLocaleString('ru-RU').length * 10}px`,
                        minWidth: '40px'
                      }}
                    />
                    <span className="font-['SF_Pro_Text',sans-serif] font-bold text-[16px] leading-5 text-[rgba(3,3,6,0.88)] -ml-[4px] text-[#5c5d66e0]">₽</span>
                  </div>
                </div>
              </label>
              
              {/* Slider text-[#5c5d66e0] */}
              <div className="absolute left-0 right-0 top-[47px] h-4">
                <div className="relative h-full">
                  {/* Track background */}
                  <div className="absolute w-full h-0.5 bg-[#babbc2] top-[7px]" />
                  {/* Track filled */}
                  <div 
                    className="absolute h-0.5 bg-[#EF3124] top-[7px]"
                    style={{ width: `${turnoverPercent}%` }}
                  />
                  {/* Input range (invisible but functional) */}
                  <input
                    type="range"
                    min="10000"
                    max="40000000"
                    step="10000"
                    value={turnover}
                    onChange={handleTurnoverChange}
                    className="absolute w-full h-full appearance-none bg-transparent cursor-pointer z-10"
                    style={{
                      WebkitAppearance: 'none',
                    }}
                  />
                  {/* Pointer circle */}
                  <div 
                    className="absolute w-4 h-4 bg-[#EF3124] rounded-full pointer-events-none top-0"
                    style={{ left: `calc(${turnoverPercent}% - 8px)` }}
                  />
                </div>
              </div>
              
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 flex justify-between font-['SF_Pro_Text',sans-serif] text-[14px] leading-[18px] text-[rgba(4,4,19,0.55)]">
                <span>10 тыс ₽</span>
                <span>20 млн ₽</span>
                <span>40 млн ₽</span>
              </div>
            </div>
            
            {/* Terminals Slider */}
            <div className="flex-1 relative h-20 group">
              {/* Background */}
              <label 
                htmlFor="terminals-input"
                className="absolute inset-0 top-0 h-14 bg-[rgba(38,55,88,0.06)] rounded-tl-[8px] rounded-tr-[8px] transition-colors group-hover:bg-[#DEE0E5] cursor-text"
              >
                <div className="absolute bottom-0 h-px left-0 right-0 bg-[#babbc2]" />
              </label>
              
              {/* Content - Label and Value */}
              <label 
                htmlFor="terminals-input"
                className="absolute left-3 right-3 top-2 h-10 flex items-center z-10 cursor-text"
              >
                <div className="flex-1">
                  <p className="font-['SF_Pro_Text',sans-serif] text-[14px] leading-[18px] text-[rgba(4,4,19,0.55)]">
                    Количество терминалов
                  </p>
                  <div className="flex items-baseline">
                    <input
                      id="terminals-input"
                      type="text"
                      value={terminals}
                      onChange={handleTerminalsInputChange}
                      onBlur={handleTerminalsBlur}
                      className="font-['SF_Pro_Text',sans-serif] font-bold text-[16px] leading-5 text-[rgba(3,3,6,0.88)] bg-transparent border-none outline-none p-0 m-0 cursor-text"
                      style={{ 
                        width: `${terminals.toString().length * 12}px`,
                        minWidth: '24px'
                      }}
                    />
                    <span 
                      className="font-['SF_Pro_Text',sans-serif] font-bold text-[16px] leading-5 text-[rgba(3,3,6,0.88)] text-[#5c5d66e0]"
                      style={{
                        marginLeft: terminals >= 100 ? '-5px' : terminals >= 10 ? '-2px' : '-9px'
                      }}
                    >
                      шт
                    </span>
                  </div>
                </div>
              </label>
              
              {/* Slider */}
              <div className="absolute left-0 right-0 top-[47px] h-4">
                <div className="relative h-full">
                  {/* Track background */}
                  <div className="absolute w-full h-0.5 bg-[#babbc2] top-[7px]" />
                  {/* Track filled */}
                  <div 
                    className="absolute h-0.5 bg-[#EF3124] top-[7px]"
                    style={{ width: `${terminalsPercent}%` }}
                  />
                  {/* Input range (invisible but functional) */}
                  <input
                    type="range"
                    min="1"
                    max="100"
                    value={terminals}
                    onChange={(e) => setTerminals(Number(e.target.value))}
                    className="absolute w-full h-full appearance-none bg-transparent cursor-pointer z-10"
                    style={{
                      WebkitAppearance: 'none',
                    }}
                  />
                  {/* Pointer circle */}
                  <div 
                    className="absolute w-4 h-4 bg-[#EF3124] rounded-full pointer-events-none top-0"
                    style={{ left: `calc(${terminalsPercent}% - 8px)` }}
                  />
                </div>
              </div>
              
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 flex justify-between font-['SF_Pro_Text',sans-serif] text-[14px] leading-[18px] text-[rgba(4,4,19,0.55)]">
                <span>1 шт</span>
                <span>50 шт</span>
                <span>100 шт</span>
              </div>
            </div>
          </div>
          
          {/* Tariffs */}
          <div className="mt-6">
            <div className="flex items-end justify-between mb-6">
              <h2 className="font-['SF_Pro_Display',sans-serif] font-bold text-[22px] leading-[26px] text-[rgba(3,3,6,0.88)]">
                Тарифы
              </h2>
              <div className="flex gap-[13.333px]">
                <button
                  onClick={scrollLeft}
                  disabled={!canScrollLeft}
                  className={`w-[40px] h-[40px] rounded-full flex items-center justify-center transition-all ${
                    canScrollLeft ? 'bg-[rgba(15,25,55,0.1)] cursor-pointer' : 'bg-[rgba(38,55,88,0.06)] cursor-not-allowed'
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                    <path d={svgPaths.p94e6680} fill={canScrollLeft ? '#1A1A1D' : '#ABACB4'} />
                  </svg>
                </button>
                <button
                  onClick={scrollRight}
                  disabled={!canScrollRight}
                  className={`w-[40px] h-[40px] rounded-full flex items-center justify-center transition-all ${
                    canScrollRight ? 'bg-[rgba(15,25,55,0.1)] cursor-pointer' : 'bg-[rgba(38,55,88,0.06)] cursor-not-allowed'
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                    <path d={svgPaths.pd100d00} fill={canScrollRight ? '#1A1A1D' : '#ABACB4'} />
                  </svg>
                </button>
              </div>
            </div>

            {/* Tariff Carousel with Animation */}
            <div className="relative">
              {/* Tooltip Layer - outside overflow-hidden */}
              {hoveredTariff && (
                <div
                  className="absolute left-0 pointer-events-none z-50"
                  style={{
                    bottom: 'calc(100% + 12px)',
                    transform: `translateX(${(sortedTariffs.findIndex(t => t.id === hoveredTariff) - tariffScrollIndex) * (174 + 8) + 87}px)`
                  }}
                >
                  <div className="absolute left-0 bottom-0 -translate-x-1/2 w-max max-w-[240px]">
                    <div className="bg-white rounded-[12px] shadow-[0px_20px_24px_0px_rgba(0,0,0,0.08),0px_12px_16px_0px_rgba(0,0,0,0.04),0px_4px_8px_0px_rgba(0,0,0,0.04),0px_0px_1px_0px_rgba(0,0,0,0.04)]">
                      <div className="p-4">
                        <p className="font-['SF_Pro_Text',sans-serif] text-[14px] leading-[20px] text-[#0e0e0e] whitespace-pre-wrap">
                          {tariffTooltips[hoveredTariff]}
                        </p>
                      </div>
                    </div>
                    {/* Arrow - Tail Bottom */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-[16px] h-[8px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 8">
                        <path d="M0 0H16L7.9841 8L0 0Z" fill="white" />
                      </svg>
                    </div>
                  </div>
                </div>
              )}

              <div className="overflow-hidden">
                <motion.div
                  className="flex gap-2"
                  animate={{
                    x: isDragging ? -scrollOffset : -tariffScrollIndex * (174 + 8)
                  }}
                  transition={
                    isDragging
                      ? { type: "tween", duration: 0 } // No animation during drag
                      : { type: "spring", stiffness: 300, damping: 30 } // Smooth snap on release
                  }
                >
                  {sortedTariffs.map((tariff) => (
                    <div
                      key={tariff.id}
                      onMouseEnter={() => setHoveredTariff(tariff.id)}
                      onMouseLeave={() => setHoveredTariff(null)}
                      onMouseDown={handleMouseDown}
                      onContextMenu={handleContextMenu}
                    >
                      <button
                        onClick={() => {
                          // Only select tariff if it wasn't a drag operation
                          if (!hasMoved) {
                            setSelectedTariff(tariff.id);
                          }
                        }}
                        className={`w-[174px] h-[174px] flex-shrink-0 rounded-2xl border flex flex-col justify-between transition-all hover:bg-white ${
                          selectedTariff === tariff.id
                            ? 'bg-white border-[#0b1f35] cursor-default'
                            : 'bg-[#f2f3f5] border-[#dbdee1] cursor-pointer'
                        }`}
                      >
                        {/* Header */}
                        <div className="pl-4 pt-4">
                          <p className="font-['SF_Pro_Text',sans-serif] font-medium text-[13px] leading-[16px] text-[#0e0e0e] text-left whitespace-pre-wrap">
                            {tariff.name}
                          </p>
                        </div>

                        {/* Body */}
                        <div className="px-4 pb-1 pt-4">
                          <p className="font-['SF_Pro_Display',sans-serif] font-bold text-[18px] leading-[22px] text-[#0e0e0e] text-left">
                            {formatNumber(calculateTariffPrice(tariff))} ₽
                          </p>
                          <p className="font-['SF_Pro_Text',sans-serif] font-medium text-[13px] leading-4 text-[rgba(4,4,19,0.55)] text-left">
                            в месяц
                          </p>
                        </div>

                        {/* Footer */}
                        <div className="px-4 pb-4 flex items-center justify-between">
                          {tariff.badge ? (
                            <div className={`px-2 py-0.5 rounded ${
                              tariff.badgeColor === 'green'
                                ? 'bg-[#e7f6ef]'
                                : tariff.badgeColor === 'purple'
                                ? 'bg-[rgba(103,58,183,0.1)]'
                                : 'bg-[rgba(0,122,255,0.1)]'
                            }`}>
                              <p className={`font-['SF_Pro_Text',sans-serif] font-bold text-[11px] leading-4 uppercase ${
                                tariff.badgeColor === 'green'
                                  ? 'text-[#13a463]'
                                  : tariff.badgeColor === 'purple'
                                  ? 'text-[#673ab7]'
                                  : 'text-[#007aff]'
                              }`}>
                                {tariff.badge}
                              </p>
                            </div>
                          ) : <div />}

                          <div className="ml-auto">
                            {selectedTariff === tariff.id ? (
                              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                                <path d={svgPaths.pace200} fill="#EF3124" />
                                <path d={svgPaths.p3cccb600} fill="white" />
                              </svg>
                            ) : (
                              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                                <path d={svgPaths.p2e3b7e00} fill="#F2F3F5" stroke="#86868A" strokeWidth="1.5" />
                              </svg>
                            )}
                          </div>
                        </div>
                      </button>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
          
          {/* Instant Deposit Toggle */}
          <div className="relative mt-6">
            <button
              onClick={() => {
                if (selectedTariff !== 'starter') {
                  setInstantDeposit(!instantDeposit);
                }
              }}
              disabled={selectedTariff === 'starter'}
              className={`flex gap-3 items-start w-full text-left ${
                selectedTariff === 'starter' ? 'cursor-not-allowed' : 'cursor-pointer'
              }`}
            >
              <div
                onMouseEnter={() => {
                  if (selectedTariff === 'starter') {
                    setShowTooltip(true);
                  }
                }}
                onMouseLeave={() => {
                  if (selectedTariff === 'starter') {
                    setShowTooltip(false);
                  }
                }}
                className={`w-10 h-6 rounded-full relative transition-colors flex-shrink-0 ${
                  selectedTariff === 'starter' 
                    ? 'bg-[rgba(30,43,68,0.08)]' 
                    : instantDeposit ? 'bg-[#EF3124]' : 'bg-[rgba(4,4,19,0.47)]'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full absolute top-0.5 transition-all ${
                    selectedTariff === 'starter'
                      ? 'bg-[rgba(9,12,37,0.28)] left-0.5'
                      : instantDeposit 
                      ? 'bg-white left-[18px]' 
                      : 'bg-white left-0.5'
                  }`}
                />
              </div>
              <p className={`font-['SF_Pro_Text',sans-serif] font-normal text-[16px] leading-6 flex-1 ${
                selectedTariff === 'starter' ? 'text-[rgba(3,3,6,0.4)]' : 'text-[rgba(3,3,6,0.88)]'
              }`}>
                Хочу мгновенное зачисление денег сразу на счёт (+% комиссии по тарифу)
              </p>
            </button>
            
            {/* Tooltip - Only shown for starter tariff */}
            {selectedTariff === 'starter' && showTooltip && (
              <div className="absolute left-[56px] top-1/2 -translate-y-1/2 pointer-events-none z-50">
                <Tooltip />
              </div>
            )}
          </div>
        </div>
        
        {/* Right Panel - Summary */}
        <div className="w-[356px] flex flex-col gap-2">
          {/* Top Card - Details */}
          <div className="bg-white rounded-3xl p-6 flex-1">
            {/* Tariff Info */}
            <TariffInfo 
              name={getTariffName()}
              badge={selectedTariffData?.badge || null}
              badgeColor={selectedTariffData?.badgeColor || null}
              fields={getTariffFields()}
            />
            
            {/* Spacer */}
            <div className="h-[16px]" />
            
            {/* Divider */}
            <div className="bg-[#d5d6dc] h-px rounded-[10px] w-full" />
            
            {/* Spacer */}
            <div className="h-[16px]" />
            
            {/* Commission Info */}
            <CommissionInfo 
              commission={formatNumber(commission)}
              tax={formatNumber(tax)}
              total={formatNumber(total)}
            />
            
            {/* Spacer */}
            <div className="h-[16px]" />
            
            {/* Divider */}
            <div className="bg-[#d5d6dc] h-px rounded-[10px] w-full" />
            
            {/* Spacer */}
            <div className="h-[16px]" />
            
            {/* Terminal Info */}
            <TerminalInfo 
              state={getTerminalState()}
              price={selectedTariffData?.id === 'mpos' && 'buyoutPrice' in selectedTariffData ? formatNumber(selectedTariffData.buyoutPrice) : selectedTariffData ? formatNumber(selectedTariffData.terminalFee) : '0'}
              quantity={terminals}
              total={selectedTariffData?.id === 'mpos' && 'buyoutPrice' in selectedTariffData ? formatNumber(selectedTariffData.buyoutPrice * terminals) : formatNumber(terminalFee)}
            />
            
            {/* Spacer */}
            <div className="h-[24px]" />
          </div>
          
          {/* Bottom Card - Total and Button */}
          <div className="bg-white rounded-[24px] p-6 flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <p className="font-['SF_Pro_Text',sans-serif] text-[16px] leading-6 text-[rgba(4,4,19,0.55)]">
                Ежемесячный платёж, включая НДС
              </p>
              <p className="font-['SF_Pro_Display',sans-serif] font-bold text-[22px] leading-[26px] text-[rgba(3,3,6,0.88)]">
                {monthlyTotal.toLocaleString('ru-RU')} ₽
              </p>
            </div>
            
            <button 
              className="bg-[#ef3124] hover:bg-[#d42a1e] text-[rgba(255,255,255,0.94)] font-['SF_Pro_Text',sans-serif] font-medium text-[16px] leading-6 px-5 py-1 rounded-lg transition-colors cursor-pointer w-full min-h-[48px] flex items-center justify-center"
              onClick={handleConnect}
            >
              Подключить эквайринг
            </button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}