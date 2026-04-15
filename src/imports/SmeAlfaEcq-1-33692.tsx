import svgPaths from "./svg-auyb9zqtzx";

function Title() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Title">
      <p className="flex-[1_0_0] font-['SF_Pro_Display:Bold',sans-serif] leading-[36px] max-w-[751px] min-h-px min-w-px not-italic relative text-[30px] text-[rgba(3,3,6,0.88)] whitespace-pre-wrap">Параметры вашего бизнеса</p>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Header">
      <Title />
    </div>
  );
}

function Component1ThSlotHeader() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="1th slot Header">
      <Header />
    </div>
  );
}

function Fixer() {
  return <div className="h-[24px] shrink-0 w-[64px]" data-name="Fixer" />;
}

function SpacingVertical() {
  return (
    <div className="content-stretch flex h-[24px] items-start relative shrink-0 w-full" data-name=".↕ SpacingVertical">
      <Fixer />
    </div>
  );
}

function LabelInner() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[240px]" data-name=".LabelInner">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[14px] text-[rgba(4,4,19,0.55)] text-ellipsis whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">Отрасль бизнеса</p>
      </div>
    </div>
  );
}

function Value() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[240px]" data-name="Value">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[16px] text-[rgba(3,3,6,0.88)] text-ellipsis w-full whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">Для всех отраслей</p>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Content">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[12px] py-[18px] relative size-full">
          <LabelInner />
          <Value />
        </div>
      </div>
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="chevron-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="chevron-down">
          <path d={svgPaths.p1f683700} fill="var(--fill-0, #040415)" fillOpacity="0.47" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function RightAddon() {
  return (
    <div className="content-stretch flex items-start relative rounded-[4px] shrink-0" data-name="RightAddon1">
      <ChevronDown />
    </div>
  );
}

function RightAddonsDefault() {
  return (
    <div className="content-stretch flex gap-[4px] h-full items-start justify-end pr-[12px] py-[16px] relative shrink-0" data-name="RightAddonsDefault">
      <RightAddon />
    </div>
  );
}

function Field() {
  return (
    <div className="bg-[rgba(38,55,88,0.06)] content-stretch flex h-[56px] items-start min-h-[56px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Field">
      <div aria-hidden="true" className="absolute border-[#babbc2] border-b-2 border-solid inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px]" />
      <Content1 />
      <RightAddonsDefault />
    </div>
  );
}

function Select() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Select">
      <Field />
    </div>
  );
}

function Component2Swipe() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="[2] swipe_1">
      <Select />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <Component2Swipe />
    </div>
  );
}

function Component2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[720px]" data-name="2">
      <SpacingVertical />
      <Container />
    </div>
  );
}

function Fixer1() {
  return <div className="h-[24px] shrink-0 w-[64px]" data-name="Fixer" />;
}

function SpacingVertical1() {
  return (
    <div className="content-stretch flex h-[24px] items-start relative shrink-0 w-full" data-name=".↕ SpacingVertical">
      <Fixer1 />
    </div>
  );
}

function Caption() {
  return (
    <div className="absolute content-stretch flex font-['SF_Pro_Text:Regular',sans-serif] inset-[77.5%_0_0_0] items-start justify-between leading-[18px] not-italic text-[14px] text-[rgba(4,4,19,0.55)]" data-name=".Caption">
      <p className="relative shrink-0">10 тыс ₽</p>
      <p className="relative shrink-0 text-center">20 млн ₽</p>
      <p className="relative shrink-0 text-right">40 млн ₽</p>
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
        <p className="leading-[18px] whitespace-pre-wrap">Оборот в месяц со всех торговых точек</p>
      </div>
      <div className="flex flex-col font-['SF_Pro_Text:Bold',sans-serif] justify-center relative shrink-0 text-[16px] text-[rgba(3,3,6,0.88)] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">500 000 ₽</p>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="absolute content-stretch flex h-[40px] items-center left-[12px] right-[12px] top-[8px]" data-name="Content">
      <Text />
    </div>
  );
}

function SliderInputLight() {
  return (
    <div className="h-[80px] relative shrink-0 w-full" data-name="SliderInputLight">
      <Caption />
      <LightMode />
      <Slider />
      <Content2 />
    </div>
  );
}

function Component3Swipe() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="[3] swipe_1">
      <SliderInputLight />
    </div>
  );
}

function Caption1() {
  return (
    <div className="absolute font-['SF_Pro_Text:Regular',sans-serif] inset-[77.5%_0_0_0] leading-[18px] not-italic text-[14px] text-[rgba(4,4,19,0.55)]" data-name=".Caption">
      <p className="absolute left-0 top-0">1 шт</p>
      <p className="-translate-x-1/2 absolute left-[calc(50%-1.5px)] text-center top-0">50 шт</p>
      <p className="absolute right-0 text-right top-0">100 шт</p>
    </div>
  );
}

function LightMode1() {
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

function Group1() {
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

function Component1() {
  return (
    <div className="absolute h-[16px] left-0 right-[73.05%] top-0" data-name=".Ползунок">
      <Group1 />
    </div>
  );
}

function Slider1() {
  return (
    <div className="absolute inset-[58.75%_0_21.25%_0]" data-name=".Slider">
      <Component1 />
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[0] min-h-px min-w-px not-italic relative" data-name="Text">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] h-[18px] justify-center relative shrink-0 text-[14px] text-[rgba(4,4,19,0.55)] w-full">
        <p className="leading-[18px] whitespace-pre-wrap">Количество терминалов</p>
      </div>
      <div className="flex flex-col font-['SF_Pro_Text:Bold',sans-serif] justify-center relative shrink-0 text-[16px] text-[rgba(3,3,6,0.88)] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">16 шт</p>
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="absolute content-stretch flex h-[40px] items-center left-[12px] right-[12px] top-[8px]" data-name="Content">
      <Text1 />
    </div>
  );
}

function SliderInputLight1() {
  return (
    <div className="h-[80px] relative shrink-0 w-full" data-name="SliderInputLight">
      <Caption1 />
      <LightMode1 />
      <Slider1 />
      <Content3 />
    </div>
  );
}

function Component3Swipe1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="[3] swipe_2">
      <SliderInputLight1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <Component3Swipe />
      <Component3Swipe1 />
    </div>
  );
}

function Component3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[720px]" data-name="3">
      <SpacingVertical1 />
      <Container1 />
    </div>
  );
}

function Fixer2() {
  return <div className="h-[24px] shrink-0 w-[64px]" data-name="Fixer" />;
}

function SpacingVertical2() {
  return (
    <div className="content-stretch flex h-[24px] items-start relative shrink-0 w-full" data-name=".↕ SpacingVertical">
      <Fixer2 />
    </div>
  );
}

function ChevronLeftCompact() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.33px)] size-[20px] top-[calc(50%+0.33px)]" data-name="chevron-left-compact">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="chevron-left-compact">
          <path d={svgPaths.p94e6680} fill="var(--fill-0, #050B2C)" fillOpacity="0.18" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function ControlLight() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name=".ControlLight">
      <div className="bg-[rgba(38,55,88,0.06)] rounded-[1250px] shrink-0 size-[33.333px]" />
      <ChevronLeftCompact />
    </div>
  );
}

function ChevronRightCompact() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.33px)] size-[20px] top-[calc(50%+0.33px)]" data-name="chevron-right-compact">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="chevron-right-compact">
          <path d={svgPaths.pd100d00} fill="var(--fill-0, #030306)" fillOpacity="0.88" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function ControlLight1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name=".ControlLight">
      <div className="bg-[rgba(15,25,55,0.1)] rounded-[1250px] shrink-0 size-[33.333px]" />
      <ChevronRightCompact />
    </div>
  );
}

function Controls1() {
  return (
    <div className="content-stretch flex gap-[6.667px] items-start relative shrink-0" data-name="Controls">
      <ControlLight />
      <ControlLight1 />
    </div>
  );
}

function Controls() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Controls">
      <Controls1 />
    </div>
  );
}

function ScrollSelector() {
  return (
    <div className="content-stretch flex gap-[13.333px] items-start relative shrink-0" data-name=".ScrollSelector">
      <Controls />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
      <p className="font-['SF_Pro_Display:Bold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[22px] text-[rgba(3,3,6,0.88)]">Тарифы</p>
      <ScrollSelector />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full">
      <Frame2 />
    </div>
  );
}

function HeaderSlot() {
  return (
    <div className="relative shrink-0 w-full" data-name=".HeaderSlot">
      <div className="content-stretch flex flex-col gap-[4px] items-start pl-[16px] pt-[16px] relative w-full">
        <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0e0e0e] text-[13px] w-[115px] whitespace-pre-wrap">mPOS</p>
      </div>
    </div>
  );
}

function BodySlot() {
  return (
    <div className="relative shrink-0 w-full" data-name=".BodySlot">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-center not-italic pb-[4px] pt-[16px] px-[16px] relative w-full whitespace-pre-wrap">
          <p className="font-['SF_Pro_Display:Bold',sans-serif] leading-[22px] relative shrink-0 text-[#0e0e0e] text-[18px] w-full">10 919 ₽</p>
          <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[16px] relative shrink-0 text-[13px] text-[rgba(4,4,19,0.55)] w-full">в месяц</p>
        </div>
      </div>
    </div>
  );
}

function DetailsStatusLightMaster() {
  return (
    <div className="bg-[#e7f6ef] content-stretch flex items-center overflow-clip px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name=".Details / Status / Light / Master">
      <div className="flex flex-col font-['SF_Pro_Text:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#13a463] text-[11px] whitespace-nowrap">
        <p className="leading-[16px]">ВЫГОДНЫЙ</p>
      </div>
    </div>
  );
}

function Status1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Status">
      <DetailsStatusLightMaster />
    </div>
  );
}

function Status() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Status">
      <Status1 />
    </div>
  );
}

function RadioItem() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Radio / Item">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Radio / Item">
          <path d={svgPaths.p2e3b7e00} fill="var(--fill-0, #F2F3F5)" id="Oval" stroke="var(--stroke-0, #86868A)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function RadioButton() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-end min-h-px min-w-[32px] relative" data-name="RadioButton">
      <RadioItem />
    </div>
  );
}

function FooterSlot() {
  return (
    <div className="relative shrink-0 w-full" data-name=".FooterSlot">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[16px] px-[16px] relative w-full">
          <Status />
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <RadioButton />
          </div>
        </div>
      </div>
    </div>
  );
}

function Bottom() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-end relative shrink-0 w-full" data-name="bottom">
      <BodySlot />
      <FooterSlot />
    </div>
  );
}

function Card() {
  return (
    <div className="content-stretch flex flex-col items-center justify-between relative rounded-[16px] shrink-0 size-[174px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#dbdee1] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <HeaderSlot />
      <Bottom />
    </div>
  );
}

function HeaderSlot1() {
  return (
    <div className="relative shrink-0 w-full" data-name=".HeaderSlot">
      <div className="content-stretch flex flex-col gap-[4px] items-start pl-[16px] pt-[16px] relative w-full">
        <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0e0e0e] text-[13px] w-[115px] whitespace-pre-wrap">Тариф Продвинутый</p>
      </div>
    </div>
  );
}

function BodySlot1() {
  return (
    <div className="relative shrink-0 w-full" data-name=".BodySlot">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-center not-italic pb-[4px] pt-[16px] px-[16px] relative w-full whitespace-pre-wrap">
          <p className="font-['SF_Pro_Display:Bold',sans-serif] leading-[22px] relative shrink-0 text-[#0e0e0e] text-[18px] w-full">29 490 ₽</p>
          <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[16px] relative shrink-0 text-[13px] text-[rgba(4,4,19,0.55)] w-full">в месяц</p>
        </div>
      </div>
    </div>
  );
}

function RadioItem1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Radio / Item">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Radio / Item">
          <path d={svgPaths.p2e3b7e00} fill="var(--fill-0, #F2F3F5)" id="Oval" stroke="var(--stroke-0, #86868A)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function RadioButton1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-end min-h-px min-w-[32px] relative" data-name="RadioButton">
      <RadioItem1 />
    </div>
  );
}

function FooterSlot1() {
  return (
    <div className="relative shrink-0 w-full" data-name=".FooterSlot">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[16px] px-[16px] relative w-full">
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <RadioButton1 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Bottom1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-end relative shrink-0 w-full" data-name="bottom">
      <BodySlot1 />
      <FooterSlot1 />
    </div>
  );
}

function Card1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-between relative rounded-[16px] shrink-0 size-[174px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#dbdee1] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <HeaderSlot1 />
      <Bottom1 />
    </div>
  );
}

function HeaderSlot2() {
  return (
    <div className="relative shrink-0 w-full" data-name=".HeaderSlot">
      <div className="content-stretch flex flex-col gap-[4px] items-start pl-[16px] pt-[16px] relative w-full">
        <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0e0e0e] text-[13px] w-[115px] whitespace-pre-wrap">Тариф Доступный</p>
      </div>
    </div>
  );
}

function BodySlot2() {
  return (
    <div className="relative shrink-0 w-full" data-name=".BodySlot">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-center not-italic pb-[4px] pt-[16px] px-[16px] relative w-full whitespace-pre-wrap">
          <p className="font-['SF_Pro_Display:Bold',sans-serif] leading-[22px] relative shrink-0 text-[#0e0e0e] text-[18px] w-full">18 239 ₽</p>
          <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[16px] relative shrink-0 text-[13px] text-[rgba(4,4,19,0.55)] w-full">в месяц</p>
        </div>
      </div>
    </div>
  );
}

function RadioItem2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Radio / Item">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Radio / Item">
          <path d={svgPaths.p2e3b7e00} fill="var(--fill-0, #F2F3F5)" id="Oval" stroke="var(--stroke-0, #86868A)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function RadioButton2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-end min-h-px min-w-[32px] relative" data-name="RadioButton">
      <RadioItem2 />
    </div>
  );
}

function FooterSlot2() {
  return (
    <div className="relative shrink-0 w-full" data-name=".FooterSlot">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[16px] px-[16px] relative w-full">
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <RadioButton2 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Bottom2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-end relative shrink-0 w-full" data-name="bottom">
      <BodySlot2 />
      <FooterSlot2 />
    </div>
  );
}

function Card2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-between relative rounded-[16px] shrink-0 size-[174px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#dbdee1] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <HeaderSlot2 />
      <Bottom2 />
    </div>
  );
}

function HeaderSlot3() {
  return (
    <div className="relative shrink-0 w-full" data-name=".HeaderSlot">
      <div className="content-stretch flex flex-col gap-[4px] items-start pl-[16px] pt-[16px] relative w-full">
        <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0e0e0e] text-[13px] w-[115px] whitespace-pre-wrap">Тариф Стартовый</p>
      </div>
    </div>
  );
}

function BodySlot3() {
  return (
    <div className="relative shrink-0 w-full" data-name=".BodySlot">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-center not-italic pb-[4px] pt-[16px] px-[16px] relative w-full whitespace-pre-wrap">
          <p className="font-['SF_Pro_Display:Bold',sans-serif] leading-[22px] relative shrink-0 text-[#0e0e0e] text-[18px] w-full">6100 ₽</p>
          <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[16px] relative shrink-0 text-[13px] text-[rgba(4,4,19,0.55)] w-full">в месяц</p>
        </div>
      </div>
    </div>
  );
}

function DetailsStatusLightMaster1() {
  return (
    <div className="bg-[rgba(0,122,255,0.1)] content-stretch flex items-center overflow-clip px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name=".Details / Status / Light / Master">
      <div className="flex flex-col font-['SF_Pro_Text:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#007aff] text-[11px] whitespace-nowrap">
        <p className="leading-[16px]">ДЛЯ НОВЫХ</p>
      </div>
    </div>
  );
}

function Status3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Status">
      <DetailsStatusLightMaster1 />
    </div>
  );
}

function Status2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Status">
      <Status3 />
    </div>
  );
}

function RadioItem3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Radio / Item">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Radio / Item">
          <path d={svgPaths.pace200} fill="var(--fill-0, #EF3124)" id="Oval" />
          <path d={svgPaths.p3cccb600} fill="var(--fill-0, white)" id="Internal Oval" />
        </g>
      </svg>
    </div>
  );
}

function RadioButton3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-end min-h-px min-w-[32px] relative" data-name="RadioButton">
      <RadioItem3 />
    </div>
  );
}

function FooterSlot3() {
  return (
    <div className="relative shrink-0 w-full" data-name=".FooterSlot">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[16px] px-[16px] relative w-full">
          <Status2 />
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <RadioButton3 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-end relative shrink-0 w-full">
      <BodySlot3 />
      <FooterSlot3 />
    </div>
  );
}

function Card3() {
  return (
    <div className="bg-white content-stretch flex flex-col items-end justify-between relative rounded-[16px] shrink-0 size-[174px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#0b1f35] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <HeaderSlot3 />
      <Frame />
    </div>
  );
}

function HeaderSlot4() {
  return (
    <div className="relative shrink-0 w-full" data-name=".HeaderSlot">
      <div className="content-stretch flex flex-col gap-[4px] items-start pl-[16px] pt-[16px] relative w-full">
        <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0e0e0e] text-[13px] w-[115px] whitespace-pre-wrap">Тариф 5</p>
      </div>
    </div>
  );
}

function BodySlot4() {
  return (
    <div className="relative shrink-0 w-full" data-name=".BodySlot">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-center not-italic pb-[4px] pt-[16px] px-[16px] relative w-full whitespace-pre-wrap">
          <p className="font-['SF_Pro_Display:Bold',sans-serif] leading-[22px] relative shrink-0 text-[#0e0e0e] text-[18px] w-full">10 400 ₽</p>
          <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[16px] relative shrink-0 text-[13px] text-[rgba(4,4,19,0.55)] w-full">в месяц</p>
        </div>
      </div>
    </div>
  );
}

function RadioItem4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Radio / Item">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Radio / Item">
          <path d={svgPaths.p2e3b7e00} fill="var(--fill-0, #F2F3F5)" id="Oval" stroke="var(--stroke-0, #86868A)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function RadioButton4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-end min-h-px min-w-[32px] relative" data-name="RadioButton">
      <RadioItem4 />
    </div>
  );
}

function FooterSlot4() {
  return (
    <div className="relative shrink-0 w-full" data-name=".FooterSlot">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[16px] px-[16px] relative w-full">
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <RadioButton4 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Bottom3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-end relative shrink-0 w-full" data-name="bottom">
      <BodySlot4 />
      <FooterSlot4 />
    </div>
  );
}

function Card4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-between relative rounded-[16px] shrink-0 size-[174px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#dbdee1] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <HeaderSlot4 />
      <Bottom3 />
    </div>
  );
}

function HeaderSlot5() {
  return (
    <div className="relative shrink-0 w-full" data-name=".HeaderSlot">
      <div className="content-stretch flex flex-col gap-[4px] items-start pl-[16px] pt-[16px] relative w-full">
        <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0e0e0e] text-[13px] w-[115px] whitespace-pre-wrap">Тариф 6</p>
      </div>
    </div>
  );
}

function BodySlot5() {
  return (
    <div className="relative shrink-0 w-full" data-name=".BodySlot">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-center not-italic pb-[4px] pt-[16px] px-[16px] relative w-full whitespace-pre-wrap">
          <p className="font-['SF_Pro_Display:Bold',sans-serif] leading-[22px] relative shrink-0 text-[#0e0e0e] text-[18px] w-full">16 000 ₽</p>
          <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[16px] relative shrink-0 text-[13px] text-[rgba(4,4,19,0.55)] w-full">в месяц</p>
        </div>
      </div>
    </div>
  );
}

function RadioItem5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Radio / Item">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Radio / Item">
          <path d={svgPaths.p2e3b7e00} fill="var(--fill-0, #F2F3F5)" id="Oval" stroke="var(--stroke-0, #86868A)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function RadioButton5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-end min-h-px min-w-[32px] relative" data-name="RadioButton">
      <RadioItem5 />
    </div>
  );
}

function FooterSlot5() {
  return (
    <div className="relative shrink-0 w-full" data-name=".FooterSlot">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[16px] px-[16px] relative w-full">
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <RadioButton5 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Bottom4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-end relative shrink-0 w-full" data-name="bottom">
      <BodySlot5 />
      <FooterSlot5 />
    </div>
  );
}

function Card5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-between relative rounded-[16px] shrink-0 size-[174px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#dbdee1] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <HeaderSlot5 />
      <Bottom4 />
    </div>
  );
}

function Scroll() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-0 top-0" data-name="scroll">
      <Card />
      <Card1 />
      <Card2 />
      <Card3 />
      <Card4 />
      <Card5 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-[720px]">
      <Scroll />
    </div>
  );
}

function Tariffs() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name=".tariffs">
      <Frame3 />
      <Frame1 />
    </div>
  );
}

function Component5Swipe() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="[5] swipe_1">
      <Tariffs />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <Component5Swipe />
    </div>
  );
}

function Component5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[720px]" data-name="5">
      <SpacingVertical2 />
      <Container2 />
    </div>
  );
}

function Fixer3() {
  return <div className="h-[24px] shrink-0 w-[64px]" data-name="Fixer" />;
}

function SpacingVertical3() {
  return (
    <div className="content-stretch flex h-[24px] items-start relative shrink-0 w-full" data-name=".↕ SpacingVertical">
      <Fixer3 />
    </div>
  );
}

function SwitchLight() {
  return (
    <div className="h-[24px] relative shrink-0 w-[40px]" data-name="SwitchLight">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 24">
        <g id="SwitchLight">
          <rect fill="var(--fill-0, #040415)" fillOpacity="0.47" height="20" id="area" rx="10" width="36" x="2" y="2" />
          <path clipRule="evenodd" d={svgPaths.p27bb2800} fill="var(--fill-0, white)" fillRule="evenodd" id="Oval" />
        </g>
      </svg>
    </div>
  );
}

function Content4() {
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
      <Content4 />
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

function Container3() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <Component6Swipe />
    </div>
  );
}

function Fixer4() {
  return <div className="h-[24px] shrink-0 w-[64px]" data-name="Fixer" />;
}

function SpacingVertical4() {
  return (
    <div className="content-stretch flex h-[24px] items-start relative shrink-0 w-full" data-name=".↕ SpacingVertical">
      <Fixer4 />
    </div>
  );
}

function Component6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[720px]" data-name="6">
      <SpacingVertical3 />
      <Container3 />
      <SpacingVertical4 />
    </div>
  );
}

function Calculation() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[24px] px-[24px] relative shrink-0" data-name="Calculation">
      <Component1ThSlotHeader />
      <Component2 />
      <Component3 />
      <Component5 />
      <Component6 />
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Label">
      <p className="font-['SF_Pro_Text:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(3,3,6,0.88)]">Тариф Стартовый</p>
    </div>
  );
}

function Component7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative" data-name="2-1">
      <Label />
    </div>
  );
}

function DetailsStatusLightMaster2() {
  return (
    <div className="bg-[rgba(0,122,255,0.1)] content-stretch flex items-center overflow-clip px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name=".Details / Status / Light / Master">
      <div className="flex flex-col font-['SF_Pro_Text:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#007aff] text-[11px] whitespace-nowrap">
        <p className="leading-[16px]">ДЛЯ НОВЫХ</p>
      </div>
    </div>
  );
}

function Status4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Status">
      <DetailsStatusLightMaster2 />
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center overflow-clip relative shrink-0 w-[308px]" data-name="═ Row 2">
      <Component7 />
      <Status4 />
    </div>
  );
}

function Value1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Value">
      <p className="flex-[1_0_0] font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[14px] text-[rgba(4,4,19,0.55)] whitespace-pre-wrap">Процентная ставка</p>
    </div>
  );
}

function Component8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-h-px min-w-px relative" data-name="2-2">
      <Value1 />
    </div>
  );
}

function Value2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0" data-name="Value">
      <p className="font-['SF_Pro_Text:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(3,3,6,0.88)] text-right">1% до 500 тыс ₽</p>
    </div>
  );
}

function Component9() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end justify-center relative shrink-0" data-name="2-2">
      <Value2 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[308px]">
      <Component8 />
      <Component9 />
    </div>
  );
}

function Value3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Value">
      <p className="flex-[1_0_0] font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[14px] text-[rgba(4,4,19,0.55)] whitespace-pre-wrap">Срок тарифа</p>
    </div>
  );
}

function Component10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-h-px min-w-px relative" data-name="2-2">
      <Value3 />
    </div>
  );
}

function Value4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0" data-name="Value">
      <p className="font-['SF_Pro_Text:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(3,3,6,0.88)] text-right">на 3 мес</p>
    </div>
  );
}

function Component11() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end justify-center relative shrink-0" data-name="2-2">
      <Value4 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[308px]">
      <Component10 />
      <Component11 />
    </div>
  );
}

function SlotPseudoLink() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Slot /  Pseudo Link">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(4,4,19,0.55)] whitespace-nowrap">
        <p className="leading-[20px]">Свыше суммы / срока</p>
      </div>
      <div className="h-0 relative shrink-0 w-full" data-name="Underline">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 151 1">
            <path d="M0 0.5H151" id="Underline" stroke="var(--stroke-0, #464649)" strokeDasharray="3 3" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function LinkLight() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Link Light">
      <SlotPseudoLink />
    </div>
  );
}

function Value5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0" data-name="Value">
      <p className="font-['SF_Pro_Text:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(3,3,6,0.88)] text-right">2,2%</p>
    </div>
  );
}

function Component12() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end justify-center relative shrink-0" data-name="2-2">
      <Value5 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[308px]">
      <LinkLight />
      <Component12 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <Frame6 />
      <Frame4 />
      <Frame5 />
    </div>
  );
}

function Tariff() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-[308px]" data-name=".tariff">
      <Row />
      <Frame7 />
    </div>
  );
}

function Fixer5() {
  return <div className="h-[16px] shrink-0 w-[64px]" data-name="Fixer" />;
}

function SpacingVertical5() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name=".↕ SpacingVertical">
      <Fixer5 />
    </div>
  );
}

function Fixer6() {
  return <div className="h-[16px] shrink-0 w-[64px]" data-name="Fixer" />;
}

function SpacingVertical6() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name=".↕ SpacingVertical">
      <Fixer6 />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Label">
      <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(4,4,19,0.55)]">Комиссия + НДС 22%</p>
    </div>
  );
}

function Value6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Value">
      <p className="flex-[1_0_0] font-['SF_Pro_Text:Regular',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[16px] text-[rgba(3,3,6,0.88)] whitespace-pre-wrap">111 100 ₽ + 24 442 ₽</p>
    </div>
  );
}

function Component13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-[48px] items-start justify-center min-h-px min-w-px relative" data-name="2-2">
      <Label1 />
      <Value6 />
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Label">
      <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(4,4,19,0.55)]">Итого</p>
    </div>
  );
}

function Value7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Value">
      <p className="font-['SF_Pro_Text:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(3,3,6,0.88)] text-right">135 542 ₽</p>
    </div>
  );
}

function Component14() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end justify-center relative shrink-0" data-name="2-2">
      <Label2 />
      <Value7 />
    </div>
  );
}

function Comission() {
  return (
    <div className="content-stretch flex gap-[8px] items-start opacity-80 relative shrink-0 w-[308px]" data-name=".comission">
      <Component13 />
      <Component14 />
    </div>
  );
}

function Fixer7() {
  return <div className="h-[16px] shrink-0 w-[64px]" data-name="Fixer" />;
}

function SpacingVertical7() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name=".↕ SpacingVertical">
      <Fixer7 />
    </div>
  );
}

function Fixer8() {
  return <div className="h-[16px] shrink-0 w-[64px]" data-name="Fixer" />;
}

function SpacingVertical8() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name=".↕ SpacingVertical">
      <Fixer8 />
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Label">
      <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(4,4,19,0.55)]">Плата за терминалы</p>
    </div>
  );
}

function Component15() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="2-2">
      <Label3 />
    </div>
  );
}

function SlotPseudoLink1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Slot /  Pseudo Link">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0f0f0f] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">0 ₽</p>
      </div>
    </div>
  );
}

function LinkLight1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link Light">
      <SlotPseudoLink1 />
    </div>
  );
}

function Terminal() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name=".terminal">
      <Component15 />
      <LinkLight1 />
    </div>
  );
}

function Fixer9() {
  return <div className="h-[24px] shrink-0 w-[64px]" data-name="Fixer" />;
}

function SpacingVertical9() {
  return (
    <div className="content-stretch flex h-[24px] items-start relative shrink-0 w-full" data-name=".↕ SpacingVertical">
      <Fixer9 />
    </div>
  );
}

function ResultsTop() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[8px] shrink-0 w-full" data-name="results_top">
      <Tariff />
      <SpacingVertical5 />
      <div className="bg-[#d5d6dc] h-px rounded-[10px] shrink-0 w-full" data-name="divider" />
      <SpacingVertical6 />
      <Comission />
      <SpacingVertical7 />
      <div className="bg-[#d5d6dc] h-px rounded-[10px] shrink-0 w-full" data-name="divider" />
      <SpacingVertical8 />
      <Terminal />
      <SpacingVertical9 />
    </div>
  );
}

function Component2Swipe1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="[2] swipe_1">
      <ResultsTop />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <Component2Swipe1 />
    </div>
  );
}

function Fixer10() {
  return <div className="h-[24px] shrink-0 w-[64px]" data-name="Fixer" />;
}

function SpacingVertical10() {
  return (
    <div className="content-stretch flex h-[24px] items-start relative shrink-0 w-full" data-name=".↕ SpacingVertical">
      <Fixer10 />
    </div>
  );
}

function Component4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="2">
      <Container4 />
      <SpacingVertical10 />
    </div>
  );
}

function Issue() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px] w-full" data-name="Issue">
      <div className="content-stretch flex flex-col items-start pt-[24px] px-[24px] relative size-full">
        <Component4 />
      </div>
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Label">
      <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(4,4,19,0.55)]">Итого в месяц</p>
    </div>
  );
}

function Value8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Value">
      <p className="font-['SF_Pro_Display:Bold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[22px] text-[rgba(3,3,6,0.88)] text-right">6100 ₽</p>
    </div>
  );
}

function DHintBlockH() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative" data-name=".D_Hint_Block [H]">
      <Label4 />
      <Value8 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <DHintBlockH />
    </div>
  );
}

function CalculatorBlock() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Calculator_Block">
      <Container5 />
    </div>
  );
}

function Slot() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Slot 2">
      <CalculatorBlock />
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-col items-center px-[4px] relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.94)] whitespace-nowrap">
        <p className="leading-[24px]">Подключить</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#ef3124] content-stretch flex gap-[4px] items-center justify-center min-h-[48px] min-w-[104px] overflow-clip px-[20px] py-[4px] relative rounded-[8px] shrink-0" data-name="Button 2">
      <Text2 />
    </div>
  );
}

function ButtonSlot() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="ButtonSlot">
      <Button />
    </div>
  );
}

function Slot1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Slot 3">
      <ButtonSlot />
    </div>
  );
}

function Component2ThIssue() {
  return (
    <div className="bg-white content-stretch flex gap-[24px] items-center p-[24px] relative rounded-[24px] shrink-0 w-[356px]" data-name="2th issue">
      <Slot />
      <Slot1 />
    </div>
  );
}

function Offer() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative self-stretch shrink-0 w-[356px]" data-name="Offer">
      <Issue />
      <Component2ThIssue />
    </div>
  );
}

function Content() {
  return (
    <div className="bg-[#f2f3f5] content-stretch flex items-start p-[8px] relative rounded-[32px] shrink-0" data-name="Content">
      <Calculation />
      <Offer />
    </div>
  );
}

function Disclaimer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Disclaimer">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center pt-[24px] px-[24px] relative w-full">
          <p className="flex-[1_0_0] font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] max-w-[751px] min-h-px min-w-px not-italic relative text-[14px] text-[rgba(238,238,251,0.55)] text-center whitespace-pre-wrap">За минимальный оборот принимается среднее значение оборота на один терминал. Расчёт происходит по тарифам, действующим на текущий день Расчёт является предварительным. Предложение не является публичной офертой</p>
        </div>
      </div>
    </div>
  );
}

function DCalculator() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[32px] shrink-0 w-[1140px]" data-name="[D] Calculator">
      <Content />
      <Disclaimer />
    </div>
  );
}

export default function SmeAlfaEcq() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="SmeAlfaEcq">
      <DCalculator />
    </div>
  );
}