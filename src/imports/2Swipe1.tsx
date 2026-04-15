import svgPaths from "./svg-190y4npgvv";

function LabelInner() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[240px]" data-name=".LabelInner">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[14px] text-[rgba(4,4,19,0.55)] text-ellipsis whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">Label</p>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(5,8,29,0.38)] whitespace-nowrap">
        <p className="leading-[20px]">Placeholder</p>
      </div>
    </div>
  );
}

function Placeholder() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[240px]" data-name="Placeholder">
      <Content1 />
    </div>
  );
}

function Content() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Content">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[12px] relative size-full">
          <LabelInner />
          <Placeholder />
        </div>
      </div>
    </div>
  );
}

function ChevronUp() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="chevron-up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="chevron-up">
          <path d={svgPaths.p177c7600} fill="var(--fill-0, #040415)" fillOpacity="0.47" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function RightAddon() {
  return (
    <div className="content-stretch flex items-start relative rounded-[4px] shrink-0" data-name="RightAddon1">
      <ChevronUp />
    </div>
  );
}

function RightAddons() {
  return (
    <div className="content-stretch flex gap-[4px] h-full items-start justify-end pr-[12px] py-[16px] relative shrink-0" data-name="RightAddons">
      <RightAddon />
    </div>
  );
}

function Field() {
  return (
    <div className="bg-[rgba(5,11,44,0.18)] content-stretch flex h-[56px] items-start min-h-[56px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Field">
      <div aria-hidden="true" className="absolute border-[#212124] border-b-2 border-solid inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px]" />
      <Content />
      <RightAddons />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px py-[2px] relative" data-name="Text">
      <div className="flex flex-[1_0_0] flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[16px] text-[rgba(3,3,6,0.88)] text-ellipsis whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">Aurum</p>
      </div>
    </div>
  );
}

function Stroke() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative" data-name="Stroke">
      <Text />
    </div>
  );
}

function Cell() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[12px] relative w-full">
          <Stroke />
        </div>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px py-[2px] relative" data-name="Text">
      <div className="flex flex-[1_0_0] flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[16px] text-[rgba(3,3,6,0.88)] text-ellipsis whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">Berkelium</p>
      </div>
    </div>
  );
}

function Stroke1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative" data-name="Stroke">
      <Text1 />
    </div>
  );
}

function Control() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Control">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Control">
          <path clipRule="evenodd" d={svgPaths.pd0c4640} fill="var(--fill-0, #212124)" fillRule="evenodd" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function Cell1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[12px] relative w-full">
          <Stroke1 />
          <Control />
        </div>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px py-[2px] relative" data-name="Text">
      <div className="flex flex-[1_0_0] flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[16px] text-[rgba(3,3,6,0.88)] text-ellipsis whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">Curium</p>
      </div>
    </div>
  );
}

function Stroke2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative" data-name="Stroke">
      <Text2 />
    </div>
  );
}

function Cell2() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[12px] relative w-full">
          <Stroke2 />
        </div>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px py-[2px] relative" data-name="Text">
      <div className="flex flex-[1_0_0] flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[16px] text-[rgba(3,3,6,0.88)] text-ellipsis whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">Neptunium</p>
      </div>
    </div>
  );
}

function Stroke3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative" data-name="Stroke">
      <Text3 />
    </div>
  );
}

function Cell3() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[12px] relative w-full">
          <Stroke3 />
        </div>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px py-[2px] relative" data-name="Text">
      <div className="flex flex-[1_0_0] flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[16px] text-[rgba(3,3,6,0.88)] text-ellipsis whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">Plutonium</p>
      </div>
    </div>
  );
}

function Stroke4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative" data-name="Stroke">
      <Text4 />
    </div>
  );
}

function Cell4() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[12px] relative w-full">
          <Stroke4 />
        </div>
      </div>
    </div>
  );
}

function ScrollContent() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="ScrollContent">
      <Cell />
      <Cell1 />
      <Cell2 />
      <Cell3 />
      <Cell4 />
    </div>
  );
}

function DOptionList() {
  return (
    <div className="max-h-[393px] relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full" data-name="[D] OptionList">
      <div className="content-stretch flex flex-col items-start max-h-[inherit] overflow-clip relative rounded-[inherit] w-full">
        <ScrollContent />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d2d3d9] border-solid inset-0 pointer-events-none rounded-bl-[8px] rounded-br-[8px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08),0px_8px_16px_0px_rgba(0,0,0,0.08)]" />
    </div>
  );
}

function Select() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Select">
      <Field />
      <DOptionList />
    </div>
  );
}

export default function Component2Swipe() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="[2] swipe_1">
      <Select />
    </div>
  );
}