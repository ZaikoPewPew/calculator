type CommissionInfoProps = {
  commission: string;
  tax: string;
  total: string;
};

export default function CommissionInfo({ commission, tax, total }: CommissionInfoProps) {
  return (
    <div className="content-stretch flex gap-[8px] items-start opacity-80 relative w-full">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-[48px] items-start justify-center min-h-px min-w-px relative">
        <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
          <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(4,4,19,0.55)]">
            Комиссия в месяц + НДС 22%
          </p>
        </div>
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
          <p className="flex-[1_0_0] font-['SF_Pro_Text:Regular',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[16px] text-[rgba(3,3,6,0.88)] whitespace-pre-wrap">
            {commission} ₽ + {tax} ₽
          </p>
        </div>
      </div>
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
  );
}