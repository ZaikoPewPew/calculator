export default function Comission({ className }: { className?: string }) {
  return (
    <div className={className || "content-stretch flex gap-[8px] items-start opacity-80 relative w-[308px]"} data-name=".comission">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-[48px] items-start justify-center min-h-px min-w-px relative" data-name="2-2">
        <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Label">
          <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(4,4,19,0.55)]">Комиссия в месяц + НДС 22%</p>
        </div>
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Value">
          <p className="flex-[1_0_0] font-['SF_Pro_Text:Regular',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[16px] text-[rgba(3,3,6,0.88)] whitespace-pre-wrap">111 100 ₽ + 24 442 ₽</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[4px] items-end justify-center relative shrink-0" data-name="2-2">
        <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Label">
          <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(4,4,19,0.55)]">Итого</p>
        </div>
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Value">
          <p className="font-['SF_Pro_Text:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(3,3,6,0.88)] text-right">135 542 ₽</p>
        </div>
      </div>
    </div>
  );
}