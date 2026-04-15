function Label() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Label">
      <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(4,4,19,0.55)]">Итоговый платёж</p>
    </div>
  );
}

function Value() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Value">
      <p className="font-['SF_Pro_Display:Bold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[22px] text-[rgba(3,3,6,0.88)] text-right">745 ₽</p>
    </div>
  );
}

function DHintBlockH() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name=".D_Hint_Block [H]">
      <Label />
      <Value />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <DHintBlockH />
    </div>
  );
}

function CalculatorBlock() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Calculator_Block">
      <Container />
    </div>
  );
}

function Slot() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Slot 2">
      <CalculatorBlock />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col items-center px-[4px] relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.94)] whitespace-nowrap">
        <p className="leading-[24px]">Подключить эквайринг</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#ef3124] flex-[1_0_0] min-h-[48px] min-w-[104px] relative rounded-[8px]" data-name="Button 2">
      <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center min-h-[inherit] min-w-[inherit] px-[20px] py-[4px] relative w-full">
          <Text />
        </div>
      </div>
    </div>
  );
}

function ButtonSlot() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="ButtonSlot">
      <Button />
    </div>
  );
}

function Slot1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Slot 3">
      <ButtonSlot />
    </div>
  );
}

export default function Component2ThIssue() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start p-[24px] relative rounded-[24px] size-full" data-name="2th issue">
      <Slot />
      <Slot1 />
    </div>
  );
}