import { useState, useRef, useEffect } from 'react';
import svgPaths from '../../imports/svg-190y4npgvv';
import chevronSvg from '../../imports/svg-93q3wzl95q';

const businessSectors = [
  'Для всех отраслей',
  'Автоматизированные бензозаправки',
  'Агенты недвижимости и менеджеры - аренда',
  'Бары, ночные клубы, рюмочные',
  'Госпитали, больницы',
  'Доктора',
  'Жилищно-коммунальные услуги',
  'Кейтеринг',
  'Колледжи, университеты, профессиональные училища, техникумы',
  'Лимузины и такси',
  'Мануальная терапия',
  'Медицинские и стоматологические лаборатории',
  'Места общественного питания, рестораны',
  'Оптика, оптические товары и очки',
  'Ортопеды',
  'Остеопаты',
  'Офтальмология и оптометрия',
  'Персональный лечебный уход',
  'Предприятия быстрого питания, закусочные',
  'Продажа топлива, сопутствующих товаров и услги на АЗС',
  'Продажа, лизинг и обслуживание легковых и грузовых автомобилей',
  'Прочие медицинские услуги',
  'Прочие образовательные услуги',
  'Розничная продажа лекарств в БАД, аптеки',
  'Служба скорой помощи',
  'Специализированные курсы, профессиональные учебные заведения',
  'Стоматология',
  'Турагентства и туроператоры',
  'Универсальные продовольственные магазины, супермаркеты',
  'Учебные заведения: дистанционное обучение',
  'Школы: начальные и средние',
  'Другое',
];

interface BusinessSectorDropdownProps {
  value: string;
  onChange: (value: string) => void;
}

export default function BusinessSectorDropdown({ value, onChange }: BusinessSectorDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleSelect = (sector: string) => {
    onChange(sector);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full" ref={dropdownRef}>
      {/* Field */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`bg-[rgba(38,55,88,0.06)] w-full h-[56px] rounded-tl-[4px] rounded-tr-[4px] cursor-pointer ${
          isOpen ? 'border-b-2 border-[#212124] bg-[rgba(5,11,44,0.18)]' : 'border-b-2 border-[#babbc2]'
        } relative flex items-center justify-between px-3 hover:bg-[#DEE0E5] transition-colors`}
      >
        <div className="flex flex-col items-start">
          <p className="font-['SF_Pro_Text',sans-serif] text-[14px] leading-[20px] text-[rgba(4,4,19,0.55)] text-left">
            Отрасль бизнеса
          </p>
          <p className="font-['SF_Pro_Text',sans-serif] text-[16px] leading-[20px] text-[rgba(3,3,6,0.88)] text-left">
            {value}
          </p>
        </div>
        <div className="flex-shrink-0">
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
              <path d={svgPaths.p177c7600} fill="#040415" fillOpacity="0.47" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
              <path d={chevronSvg.p1f683700} fill="#040415" fillOpacity="0.47" />
            </svg>
          )}
        </div>
      </button>

      {/* Dropdown List */}
      {isOpen && (
        <div className="absolute z-50 w-full max-h-[240px] bg-white rounded-bl-[8px] rounded-br-[8px] border border-[#d2d3d9] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08),0px_8px_16px_0px_rgba(0,0,0,0.08)] overflow-y-auto">
          {businessSectors.map((sector) => (
            <button
              key={sector}
              onClick={() => handleSelect(sector)}
              className="w-full px-3 py-3 hover:bg-[#f5f5f7] flex items-center justify-between transition-colors text-left cursor-pointer"
            >
              <span className="font-['SF_Pro_Text',sans-serif] text-[16px] leading-[20px] text-[rgba(3,3,6,0.88)] flex-1">
                {sector}
              </span>
              {value === sector && (
                <svg className="w-6 h-6 flex-shrink-0 ml-3" fill="none" viewBox="0 0 24 24">
                  <path
                    clipRule="evenodd"
                    d={svgPaths.pd0c4640}
                    fill="#212124"
                    fillRule="evenodd"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}