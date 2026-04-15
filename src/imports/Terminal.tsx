function Label() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Label">
      <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(4,4,19,0.55)]">Плата за терминалы</p>
    </div>
  );
}

function Value() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Value">
      <p className="flex-[1_0_0] font-['SF_Pro_Text:Regular',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[16px] text-[rgba(3,3,6,0.88)] whitespace-pre-wrap">2770 ₽ х Выкуп 1 шт</p>
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-h-px min-w-px relative" data-name="2-2">
      <Label />
      <Value />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Label">
      <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(4,4,19,0.55)]">Итого</p>
    </div>
  );
}

function Value1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Value">
      <p className="font-['SF_Pro_Text:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(3,3,6,0.88)] text-right">2770 ₽</p>
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end justify-center relative shrink-0" data-name="2-2">
      <Label1 />
      <Value1 />
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end overflow-clip relative shrink-0" data-name="═ Row 2">
      <Component1 />
    </div>
  );
}

export default function Terminal() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-end relative size-full" data-name=".terminal">
      <Component />
      <Row />
    </div>
  );
}