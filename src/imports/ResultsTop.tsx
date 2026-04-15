function Label() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Label">
      <p className="font-['SF_Pro_Text:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(3,3,6,0.88)]">Тариф Продвинутый</p>
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative" data-name="2-1">
      <Label />
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center overflow-clip relative shrink-0 w-[308px]" data-name="═ Row 2">
      <Component />
    </div>
  );
}

function Value() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Value">
      <p className="flex-[1_0_0] font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[14px] text-[rgba(4,4,19,0.55)] whitespace-pre-wrap">Процентная ставка</p>
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-h-px min-w-px relative" data-name="2-2">
      <Value />
    </div>
  );
}

function Value1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0" data-name="Value">
      <p className="font-['SF_Pro_Text:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(3,3,6,0.88)] text-right">1,99% до 2 млн ₽</p>
    </div>
  );
}

function Component2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end justify-center relative shrink-0" data-name="2-2">
      <Value1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[308px]">
      <Component1 />
      <Component2 />
    </div>
  );
}

function SlotPseudoLink() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Slot /  Pseudo Link">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(4,4,19,0.55)] whitespace-nowrap">
        <p className="leading-[20px]">Всё выше 2 млн ₽</p>
      </div>
      <div className="h-0 relative shrink-0 w-full" data-name="Underline">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 124 1">
            <path d="M0 0.5H124" id="Underline" stroke="var(--stroke-0, #464649)" strokeDasharray="3 3" />
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

function Value2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0" data-name="Value">
      <p className="font-['SF_Pro_Text:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(3,3,6,0.88)] text-right">2,3%</p>
    </div>
  );
}

function Component3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end justify-center relative shrink-0" data-name="2-2">
      <Value2 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[308px]">
      <LinkLight />
      <Component3 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <Frame />
      <Frame1 />
    </div>
  );
}

function Tariff() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-[308px]" data-name=".tariff">
      <Row />
      <Frame2 />
    </div>
  );
}

function Fixer() {
  return <div className="h-[16px] shrink-0 w-[64px]" data-name="Fixer" />;
}

function SpacingVertical() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name=".↕ SpacingVertical">
      <Fixer />
    </div>
  );
}

function Fixer1() {
  return <div className="h-[16px] shrink-0 w-[64px]" data-name="Fixer" />;
}

function SpacingVertical1() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name=".↕ SpacingVertical">
      <Fixer1 />
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

function Value3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Value">
      <p className="flex-[1_0_0] font-['SF_Pro_Text:Regular',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[16px] text-[rgba(3,3,6,0.88)] whitespace-pre-wrap">10 000 ₽ + 2200 ₽</p>
    </div>
  );
}

function Component4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-[48px] items-start justify-center min-h-px min-w-px relative" data-name="2-2">
      <Label1 />
      <Value3 />
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

function Value4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Value">
      <p className="font-['SF_Pro_Text:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(3,3,6,0.88)] text-right">12 200 ₽</p>
    </div>
  );
}

function Component5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end justify-center relative shrink-0" data-name="2-2">
      <Label2 />
      <Value4 />
    </div>
  );
}

function Comission() {
  return (
    <div className="content-stretch flex gap-[8px] items-start opacity-80 relative shrink-0 w-[308px]" data-name=".comission">
      <Component4 />
      <Component5 />
    </div>
  );
}

function Fixer2() {
  return <div className="h-[16px] shrink-0 w-[64px]" data-name="Fixer" />;
}

function SpacingVertical2() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name=".↕ SpacingVertical">
      <Fixer2 />
    </div>
  );
}

function Fixer3() {
  return <div className="h-[16px] shrink-0 w-[64px]" data-name="Fixer" />;
}

function SpacingVertical3() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name=".↕ SpacingVertical">
      <Fixer3 />
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

function Value5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Value">
      <p className="flex-[1_0_0] font-['SF_Pro_Text:Regular',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[16px] text-[rgba(3,3,6,0.88)] whitespace-pre-wrap">1490 ₽ х 16 шт</p>
    </div>
  );
}

function Component6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-h-px min-w-px relative" data-name="2-2">
      <Label3 />
      <Value5 />
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Label">
      <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(4,4,19,0.55)]">Итого</p>
    </div>
  );
}

function Value6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Value">
      <p className="font-['SF_Pro_Text:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(3,3,6,0.88)] text-right">23 840 ₽</p>
    </div>
  );
}

function Component7() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end justify-center relative shrink-0" data-name="2-2">
      <Label4 />
      <Value6 />
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end overflow-clip relative shrink-0" data-name="═ Row 2">
      <Component7 />
    </div>
  );
}

function Terminal() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-end relative shrink-0 w-full" data-name=".terminal">
      <Component6 />
      <Row1 />
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

export default function ResultsTop() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[8px] size-full" data-name="results_top">
      <Tariff />
      <SpacingVertical />
      <div className="bg-[#d5d6dc] h-px rounded-[10px] shrink-0 w-full" data-name="divider" />
      <SpacingVertical1 />
      <Comission />
      <SpacingVertical2 />
      <div className="bg-[#d5d6dc] h-px rounded-[10px] shrink-0 w-full" data-name="divider" />
      <SpacingVertical3 />
      <Terminal />
      <SpacingVertical4 />
    </div>
  );
}