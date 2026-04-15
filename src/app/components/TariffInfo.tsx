import { useState, useRef, useEffect } from 'react';
import BadgeTooltip from '../../imports/Tooltip-1-40719';
import SimpleTooltip from '../../imports/Tooltip-14-42778';

type TariffInfoProps = {
  name: string;
  badge?: string | null;
  badgeColor?: 'blue' | 'green' | 'purple' | null;
  fields: Array<{
    label: string;
    value: string;
    isLink?: boolean;
    tooltipText?: string;
  }>;
};

export default function TariffInfo({ name, badge, badgeColor, fields }: TariffInfoProps) {
  const [showBadgeTooltip, setShowBadgeTooltip] = useState(false);
  const [badgeTooltipPosition, setBadgeTooltipPosition] = useState({ top: 0, left: 0 });
  const badgeRef = useRef<HTMLDivElement>(null);
  
  const [showLinkTooltip, setShowLinkTooltip] = useState<number | null>(null);
  const [linkTooltipPosition, setLinkTooltipPosition] = useState({ top: 0, left: 0 });
  const linkRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    if (showBadgeTooltip && badgeRef.current) {
      const rect = badgeRef.current.getBoundingClientRect();
      setBadgeTooltipPosition({
        top: rect.top - 16, // 16px above the badge
        left: rect.left + rect.width / 2 // center horizontally
      });
    }
  }, [showBadgeTooltip]);
  
  useEffect(() => {
    if (showLinkTooltip !== null && linkRefs.current[showLinkTooltip]) {
      const element = linkRefs.current[showLinkTooltip];
      if (element) {
        const rect = element.getBoundingClientRect();
        setLinkTooltipPosition({
          top: rect.top - 16, // 16px above the link
          left: rect.left + rect.width / 2 // center horizontally
        });
      }
    }
  }, [showLinkTooltip]);
  
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative w-full">
      {/* Header with name and badge */}
      <div className="content-stretch flex gap-[8px] h-[24px] items-center overflow-visible relative shrink-0 w-full">
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
            <p className="font-['SF_Pro_Text',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(3,3,6,0.88)]">
              {name}
            </p>
          </div>
        </div>
        {badge && badge === 'ДЛЯ НОВЫХ' && (
          <div className="content-stretch flex items-start relative shrink-0 z-10">
            <div
              ref={badgeRef}
              className={`content-stretch flex gap-[4px] items-center overflow-clip px-[8px] py-[2px] relative rounded-[4px] shrink-0 cursor-pointer ${
                badgeColor === 'green' ? 'bg-[#e7f6ef]' : 'bg-[rgba(0,122,255,0.1)]'
              }`}
              onMouseEnter={() => setShowBadgeTooltip(true)}
              onMouseLeave={() => setShowBadgeTooltip(false)}
            >
              <div className="overflow-clip relative shrink-0 size-[12px]">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                  <path clipRule="evenodd" d="M12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6ZM6.68116 5.2V9.19688H5.32389V5.2H6.68116ZM6 4.4C6.48152 4.4 6.87188 4.00965 6.87188 3.52813C6.87188 3.0466 6.48152 2.65625 6 2.65625C5.51848 2.65625 5.12813 3.0466 5.12813 3.52813C5.12813 4.00965 5.51848 4.4 6 4.4Z" fill={badgeColor === 'green' ? '#13a463' : '#007aff'} fillRule="evenodd" />
                </svg>
              </div>
              <p
                className={`font-['SF_Pro_Text',sans-serif] font-bold text-[11px] leading-[16px] not-italic relative shrink-0 whitespace-nowrap ${
                  badgeColor === 'green' ? 'text-[#13a463]' : 'text-[#007aff]'
                }`}
              >
                {badge}
              </p>
            </div>
            
            {/* Tooltip */}
            {showBadgeTooltip && (
              <div 
                className="fixed z-[9999] -translate-x-1/2 -translate-y-full" 
                style={{
                  top: `${badgeTooltipPosition.top}px`,
                  left: `${badgeTooltipPosition.left}px`,
                  minWidth: '380px'
                }}
                onMouseEnter={() => setShowBadgeTooltip(true)}
                onMouseLeave={() => setShowBadgeTooltip(false)}
              >
                <BadgeTooltip />
              </div>
            )}
          </div>
        )}
        {badge && badge === 'ПУ ПРОСТОЙ' && (
          <div className="content-stretch flex items-start relative shrink-0 z-10">
            <div
              ref={badgeRef}
              className={`content-stretch flex gap-[4px] items-center overflow-clip px-[8px] py-[2px] relative rounded-[4px] shrink-0 cursor-pointer bg-[rgba(0,122,255,0.1)]`}
              onMouseEnter={() => setShowBadgeTooltip(true)}
              onMouseLeave={() => setShowBadgeTooltip(false)}
            >
              <div className="overflow-clip relative shrink-0 size-[12px]">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                  <path clipRule="evenodd" d="M12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6ZM6.68116 5.2V9.19688H5.32389V5.2H6.68116ZM6 4.4C6.48152 4.4 6.87188 4.00965 6.87188 3.52813C6.87188 3.0466 6.48152 2.65625 6 2.65625C5.51848 2.65625 5.12813 3.0466 5.12813 3.52813C5.12813 4.00965 5.51848 4.4 6 4.4Z" fill="#007aff" fillRule="evenodd" />
                </svg>
              </div>
              <p
                className={`font-['SF_Pro_Text',sans-serif] font-bold text-[11px] leading-[16px] not-italic relative shrink-0 whitespace-nowrap text-[#007aff]`}
              >
                {badge}
              </p>
            </div>
            
            {/* Tooltip */}
            {showBadgeTooltip && (
              <div 
                className="fixed z-[9999] -translate-x-1/2 -translate-y-full" 
                style={{
                  top: `${badgeTooltipPosition.top}px`,
                  left: `${badgeTooltipPosition.left}px`,
                  maxWidth: '368px',
                  minWidth: '141px'
                }}
                onMouseEnter={() => setShowBadgeTooltip(true)}
                onMouseLeave={() => setShowBadgeTooltip(false)}
              >
                <SimpleTooltip />
              </div>
            )}
          </div>
        )}
        {badge && badge !== 'ДЛЯ НОВЫХ' && badge !== 'ПУ ПРОСТОЙ' && (
          <div className="content-stretch flex items-start relative shrink-0">
            <div 
              className={`content-stretch flex items-center overflow-clip px-[8px] py-[2px] relative rounded-[4px] shrink-0 ${
                badgeColor === 'green' 
                  ? 'bg-[#e7f6ef]' 
                  : badgeColor === 'purple'
                  ? 'bg-[rgba(103,58,183,0.1)]'
                  : 'bg-[rgba(0,122,255,0.1)]'
              }`}
            >
              <p 
                className={`font-['SF_Pro_Text',sans-serif] font-bold text-[11px] leading-[16px] not-italic relative shrink-0 whitespace-nowrap ${
                  badgeColor === 'green' 
                    ? 'text-[#13a463]' 
                    : badgeColor === 'purple'
                    ? 'text-[#673ab7]'
                    : 'text-[#007aff]'
                }`}
              >
                {badge}
              </p>
            </div>
          </div>
        )}
      </div>
      
      {/* Fields */}
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
        {fields.map((field, index) => (
          <div key={index} className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-h-px min-w-px relative">
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
                {field.isLink ? (
                  <div 
                    ref={(el) => { linkRefs.current[index] = el; }}
                    className="content-stretch flex flex-col items-start relative flex-1 cursor-pointer z-10"
                    onMouseEnter={() => setShowLinkTooltip(index)}
                    onMouseLeave={() => setShowLinkTooltip(null)}
                  >
                    <div className="content-stretch flex flex-col items-start relative shrink-0">
                      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(4,4,19,0.55)] whitespace-nowrap">
                        <p className="leading-[20px]">{field.label}</p>
                      </div>
                      <div className="h-0 relative shrink-0 w-full">
                        <div className="absolute inset-[-0.5px_0]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 151 1">
                            <path d="M0 0.5H151" stroke="#464649" strokeDasharray="3 3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    {/* Link Tooltip */}
                    {showLinkTooltip === index && field.tooltipText && (
                      <div 
                        className="fixed z-[9999] -translate-x-1/2 -translate-y-full" 
                        style={{
                          top: `${linkTooltipPosition.top}px`,
                          left: `${linkTooltipPosition.left}px`,
                          maxWidth: '368px',
                          minWidth: '141px'
                        }}
                        onMouseEnter={() => setShowLinkTooltip(index)}
                        onMouseLeave={() => setShowLinkTooltip(null)}
                      >
                        <div className="content-stretch flex flex-col items-center relative shadow-[0px_20px_24px_0px_rgba(0,0,0,0.08),0px_12px_16px_0px_rgba(0,0,0,0.04),0px_4px_8px_0px_rgba(0,0,0,0.04),0px_0px_1px_0px_rgba(0,0,0,0.04)] size-full">
                          <div className="bg-white content-stretch flex flex-col items-start relative rounded-[12px] shrink-0 overflow-hidden">
                            <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative shrink-0">
                              <div className="content-stretch flex items-start max-w-[368px] min-w-[141px] relative shrink-0">
                                <p className="flex-[1_0_0] font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#0e0e0e] text-[14px] whitespace-pre-wrap">
                                  {field.tooltipText}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="content-stretch flex h-0 items-start justify-center relative shrink-0 w-full">
                            <div className="h-[8px] relative shrink-0 w-[16px]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 8">
                                <path d="M0 0C0 0 4 4 8 8C12 4 16 0 16 0H0Z" fill="white" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <p className="flex-[1_0_0] font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[14px] text-[rgba(4,4,19,0.55)] whitespace-pre-wrap">
                    {field.label}
                  </p>
                )}
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[4px] items-end justify-center relative shrink-0">
              <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0">
                <p className="font-['SF_Pro_Text',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(3,3,6,0.88)] text-right">
                  {field.value}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}