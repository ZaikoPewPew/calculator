import svgPaths from "./svg-mnistjrzlv";

function Caption() {
  return (
    <div className="absolute inset-[77.5%_0_0_0]" data-name=".Caption">
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] inset-[0_2.13%_0_0] leading-[18px] not-italic text-[14px] text-[rgba(4,4,19,0.55)] whitespace-pre-wrap">Caption</p>
    </div>
  );
}

function LightMode() {
  return (
    <div className="absolute inset-[0_0_30%_0] rounded-[8px]" data-name="LightMode">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 348 56">
        <path d={svgPaths.p23e5e000} data-figma-bg-blur-radius="20" fill="var(--fill-0, #263758)" fillOpacity="0.06" id="Background" />
        <defs>
          <clipPath id="bgblur_0_1_29608_clip_path" transform="translate(20 20)">
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
    <div className="absolute contents left-0 top-0">
      <div className="absolute h-[2px] left-0 right-0 top-[7px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 93.7872 2">
          <path clipRule="evenodd" d="M0 0L93.7872 0V2H0V0Z" fill="var(--fill-0, #EF3124)" fillRule="evenodd" id="Rectangle 2" />
        </svg>
      </div>
      <div className="absolute right-[-0.21px] size-[16px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <path clipRule="evenodd" d={svgPaths.p180dff00} fill="var(--fill-0, #EF3124)" fillRule="evenodd" id="Rectangle 3" />
        </svg>
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="absolute h-[16px] left-0 right-[73.05%] top-0" data-name=".Ползунок">
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
        <p className="leading-[18px] whitespace-pre-wrap">Label</p>
      </div>
      <div className="flex flex-col font-['SF_Pro_Text:Bold',sans-serif] justify-center relative shrink-0 text-[16px] text-[rgba(3,3,6,0.88)] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">500 000 ₽</p>
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