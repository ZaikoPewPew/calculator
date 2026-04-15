import svgPaths from "./svg-660bjt632v";

function ChevronLeftMedium() {
  return (
    <div className="absolute left-[10px] size-[20px] top-[10px]" data-name="chevron-left-medium">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="chevron-left-medium">
          <path clipRule="evenodd" d={svgPaths.p3a419e80} fill="var(--fill-0, #C1C1C3)" fillRule="evenodd" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function IconScroll() {
  return (
    <div className="content-stretch flex gap-[6.667px] items-start relative shrink-0" data-name=".IconScroll">
      <div className="bg-white rounded-[1250px] shrink-0 size-[40px]" />
      <ChevronLeftMedium />
    </div>
  );
}

function ChevronRightMedium() {
  return (
    <div className="absolute left-[10px] size-[20px] top-[10px]" data-name="chevron-right-medium">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="chevron-right-medium">
          <path clipRule="evenodd" d={svgPaths.paf77530} fill="var(--fill-0, #0F0F0F)" fillRule="evenodd" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function IconScroll1() {
  return (
    <div className="content-stretch flex gap-[6.667px] items-start relative shrink-0" data-name=".IconScroll">
      <div className="bg-white rounded-[1250px] shrink-0 size-[40px]" />
      <ChevronRightMedium />
    </div>
  );
}

function ScrollSelector() {
  return (
    <div className="content-stretch flex gap-[13.333px] items-start relative shrink-0" data-name=".ScrollSelector">
      <IconScroll />
      <IconScroll1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['SF_Pro_Display:Bold',sans-serif] leading-[36px] not-italic relative shrink-0 text-[30px] text-[rgba(3,3,6,0.88)]">Тарифы</p>
      <ScrollSelector />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
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
        <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0e0e0e] text-[13px] w-[115px] whitespace-pre-wrap">Тариф 2</p>
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
        <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0e0e0e] text-[13px] w-[115px] whitespace-pre-wrap">Тариф 3</p>
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

export default function Tariffs() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative size-full" data-name=".tariffs">
      <Frame3 />
      <Frame1 />
    </div>
  );
}