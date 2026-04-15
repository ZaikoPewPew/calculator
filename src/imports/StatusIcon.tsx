import svgPaths from "./svg-oai8z24o87";

export default function StatusIcon() {
  return (
    <div className="bg-[#e4f0ff] content-stretch flex gap-[4px] items-center px-[8px] py-[2px] relative rounded-[6px] size-full" data-name="Status + Icon">
      <div className="overflow-clip relative shrink-0 size-[12px]" data-name="information-circle">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <path clipRule="evenodd" d={svgPaths.p25bab900} fill="var(--fill-0, #2A77EF)" fillRule="evenodd" id="icon" />
        </svg>
      </div>
      <div className="flex flex-col font-['SF_Pro_Text:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2a77ef] text-[11px] whitespace-nowrap">
        <p className="leading-[16px]">ДЛЯ НОВЫХ</p>
      </div>
    </div>
  );
}