import { useState, useRef, useEffect } from 'react';

type TerminalInfoProps = {
  state: 'calculator' | 'limits' | 'free' | 'mpos';
  price?: string;
  quantity?: number;
  total?: string;
};

export default function TerminalInfo({ state, price, quantity, total }: TerminalInfoProps) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  const linkRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (showTooltip && linkRef.current) {
      const rect = linkRef.current.getBoundingClientRect();
      setTooltipPosition({
        top: rect.bottom + 16, // 16px below the link
        left: rect.left + rect.width / 2 // center horizontally
      });
    }
  }, [showTooltip]);
  
  if (state === 'free') {
    // State 3: Just "0 ₽"
    return (
      <div className="content-stretch flex items-start relative w-full flex-col gap-[4px] justify-center">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
            <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(4,4,19,0.55)]">
              Плата за терминалы
            </p>
          </div>
        </div>
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
          <p className="font-['SF_Pro_Text:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(3,3,6,0.88)]">
            0 ₽
          </p>
        </div>
      </div>
    );
  }

  if (state === 'limits') {
    // State 2: "0 ₽ при соблюдении лимитов" with link and tooltip
    return (
      <div className="content-stretch flex items-start relative w-full flex-col gap-[4px] justify-center">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
            <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(4,4,19,0.55)]">
              Плата за терминалы
            </p>
          </div>
        </div>
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
          <div 
            ref={linkRef}
            className="content-stretch flex flex-col items-start relative shrink-0 cursor-pointer z-10"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            <div className="content-stretch flex flex-col items-start relative shrink-0">
              <div className="flex flex-col font-['SF_Pro_Text:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(3,3,6,0.88)] whitespace-nowrap">
                <p className="leading-[24px]">0 ₽ при соблюдении лимитов</p>
              </div>
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute inset-[-0.5px_0]">
                  <svg className="block w-full h-[1px]" fill="none" preserveAspectRatio="none" viewBox="0 0 230 1">
                    <path d="M0 0.5H230" stroke="#464649" strokeDasharray="3 3" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Tooltip */}
            {showTooltip && (
              <div 
                className="fixed z-[9999] -translate-x-1/2" 
                style={{
                  top: `${tooltipPosition.top}px`,
                  left: `${tooltipPosition.left}px`,
                  maxWidth: '368px',
                  minWidth: '141px'
                }}
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
              >
                <div className="content-stretch flex flex-col items-center relative shadow-[0px_20px_24px_0px_rgba(0,0,0,0.08),0px_12px_16px_0px_rgba(0,0,0,0.04),0px_4px_8px_0px_rgba(0,0,0,0.04),0px_0px_1px_0px_rgba(0,0,0,0.04)] size-full">
                  <div className="content-stretch flex h-0 items-start justify-center relative shrink-0 w-full">
                    <div className="h-[8px] relative shrink-0 w-[16px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 8">
                        <path d="M0 8H16L8 0L0 8Z" fill="white" />
                      </svg>
                    </div>
                  </div>
                  <div className="bg-white content-stretch flex flex-col items-start relative rounded-[12px] shrink-0">
                    <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative shrink-0">
                      <div className="content-stretch flex items-start max-w-[368px] min-w-[141px] relative shrink-0">
                        <p className="flex-[1_0_0] font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#0e0e0e] text-[14px] whitespace-pre-wrap">
                          При обороте более 500 000 ₽ на один терминал в месяц дополнительная плата за использование терминалов не взымается
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (state === 'mpos') {
    // State 4: mPOS - Two column layout: left side with calculation, right side with total
    return (
      <div className="content-stretch flex gap-[8px] items-start justify-end relative w-full">
        {/* Left Column */}
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-h-px min-w-px relative">
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
            <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(4,4,19,0.55)]">
              Плата за терминалы
            </p>
          </div>
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
            <p className="flex-[1_0_0] font-['SF_Pro_Text:Regular',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[16px] text-[rgba(3,3,6,0.88)] whitespace-pre-wrap">
              {price} ₽ х {quantity} шт (Выкуп)
            </p>
          </div>
        </div>
        
        {/* Right Column */}
        <div className="content-stretch flex gap-[8px] items-center justify-end overflow-clip relative shrink-0">
          <div className="content-stretch flex flex-col gap-[4px] items-end justify-center relative shrink-0">
            <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
              <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(4,4,19,0.55)]">
                Итого
              </p>
            </div>
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
              <p className="font-['SF_Pro_Text',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(3,3,6,0.88)] text-right">
                {total} ₽
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // State 1: Calculator - "price ₽ х quantity шт" and "Итого: total ₽"
  return (
    <div className="content-stretch flex items-start relative w-full gap-[8px] justify-end">
      <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative flex-[1_0_0] min-h-px min-w-px">
        <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
          <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(4,4,19,0.55)]">
            Плата за терминалы
          </p>
        </div>
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
          <p className="flex-[1_0_0] font-['SF_Pro_Text:Regular',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[16px] text-[rgba(3,3,6,0.88)] whitespace-pre-wrap">
            {price} ₽ х {quantity} шт
          </p>
        </div>
      </div>
      <div className="content-stretch flex gap-[8px] items-center justify-end overflow-clip relative shrink-0">
        <div className="content-stretch flex flex-col gap-[4px] items-end justify-center relative shrink-0">
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
            <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(4,4,19,0.55)]">
              Итого
            </p>
          </div>
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
            <p className="font-['SF_Pro_Text',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(3,3,6,0.88)] text-right">
              {total} ₽
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}