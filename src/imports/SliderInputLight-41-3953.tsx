import svgPaths from "./svg-2rvs15sope";

function Caption() {
  return (
    <div className="absolute inset-[77.5%_0_0_0]" data-name=".Caption">
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] inset-[0_2.13%_0_0] leading-[18px] not-italic text-[14px] text-[rgba(4,4,19,0.55)] whitespace-pre-wrap">Максимум 100 шт.</p>
    </div>
  );
}

function LightMode() {
  return (
    <div className="absolute inset-[0_0_30%_0]" data-name="LightMode">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 348 56">
        <g data-figma-bg-blur-radius="20" id="Background">
          <path d={svgPaths.p23e5e000} fill="var(--fill-0, #0B1F35)" fillOpacity="0.07" />
          <path d={svgPaths.p23e5e000} fill="var(--fill-1, black)" fillOpacity="0.07" />
        </g>
        <defs>
          <clipPath id="bgblur_0_41_3967_clip_path" transform="translate(20 20)">
            <path d={svgPaths.p23e5e000} />
          </clipPath>
        </defs>
      </svg>
      <div className="absolute bg-[#babbc2] bottom-0 h-px left-0 right-0" data-name="Line" />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute left-[-7px] size-[16px] top-0">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group 163">
          <path clipRule="evenodd" d={svgPaths.p29c8ad80} fill="var(--fill-0, #EF3124)" fillRule="evenodd" id="Rectangle 2" />
          <path clipRule="evenodd" d={svgPaths.p180dff00} fill="var(--fill-0, #EF3124)" fillRule="evenodd" id="Rectangle 3" />
        </g>
      </svg>
    </div>
  );
}

function Component() {
  return (
    <div className="absolute h-[16px] left-0 top-0 w-[9px]" data-name=".Ползунок">
      <Group />
    </div>
  );
}

function Slider() {
  return (
    <div className="absolute inset-[58.75%_0_21.25%_0]" data-name=".Slider">
      <Component />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[0] min-h-px min-w-px not-italic relative" data-name="Text">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] h-[18px] justify-center relative shrink-0 text-[14px] text-[rgba(4,4,19,0.55)] w-full">
        <p className="leading-[18px] whitespace-pre-wrap">Количество терминалов</p>
      </div>
      <div className="flex flex-col font-['SF_Pro_Text:Bold',sans-serif] justify-center relative shrink-0 text-[16px] text-[rgba(3,3,6,0.88)] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">1</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="absolute content-stretch flex h-[40px] items-center left-[12px] right-[12px] top-[8px]" data-name="Content">
      <Text />
    </div>
  );
}

export default function SliderInputLight() {
  return (
    <div className="relative size-full" data-name="SliderInputLight">
      <Caption />
      <LightMode />
      <Slider />
      <Content />
    </div>
  );
}