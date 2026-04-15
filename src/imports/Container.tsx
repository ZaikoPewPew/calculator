import svgPaths from "./svg-nsiufwq5nn";

function SwitchLight() {
  return (
    <div className="h-[24px] relative shrink-0 w-[40px]" data-name="SwitchLight">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 24">
        <g id="SwitchLight">
          <rect fill="var(--fill-0, #1E2B44)" fillOpacity="0.08" height="20" id="area" rx="10" width="36" x="2" y="2" />
          <path clipRule="evenodd" d={svgPaths.p397f5500} fill="var(--fill-0, #090C25)" fillOpacity="0.28" fillRule="evenodd" id="Oval" />
        </g>
      </svg>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative" data-name="Content">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(3,3,6,0.88)] w-full">
        <p className="leading-[24px] whitespace-pre-wrap">Хочу мгновенное зачисление денег сразу на счёт (+% комиссии по тарифу)</p>
      </div>
    </div>
  );
}

function SwitchLabelLight() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="SwitchLabelLight">
      <SwitchLight />
      <Content />
    </div>
  );
}

function Component6Swipe() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="[6] swipe_1">
      <SwitchLabelLight />
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative size-full" data-name="Container">
      <Component6Swipe />
    </div>
  );
}