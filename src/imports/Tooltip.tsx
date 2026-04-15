function TailLeft() {
  return (
    <div className="content-stretch flex items-center justify-end relative self-stretch shrink-0 w-0" data-name=".Tail Left">
      <div className="h-[16px] relative shrink-0 w-[8px]" data-name="Tail">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 16">
          <path d="M8 0V16L0 7.9841L8 0Z" fill="var(--fill-0, white)" id="Tail" />
        </svg>
      </div>
    </div>
  );
}

function Number() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-[13px]" data-name="Number">
      <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#ef3124] text-[14px] text-right">1.</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="ListItem1">
      <Number />
      <p className="flex-[1_0_0] font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[14px] text-[rgba(3,3,6,0.88)] whitespace-pre-wrap">Только для новых клиентов РКО Альфа-Банка</p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="ListItem1">
      <ListItem1 />
    </div>
  );
}

function Component8Px() {
  return <div className="h-[8px] shrink-0 w-full" data-name="8px" />;
}

function Shifter() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[108px]" data-name="Shifter">
      <Component8Px />
    </div>
  );
}

function Number1() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-[13px]" data-name="Number">
      <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#ef3124] text-[14px] text-right">2.</p>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="ListItem2">
      <Number1 />
      <p className="flex-[1_0_0] font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[14px] text-[rgba(3,3,6,0.88)] whitespace-pre-wrap">1% действует до 3 месяцев или до 500 тыс ₽</p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="ListItem2">
      <ListItem3 />
    </div>
  );
}

function Component8Px1() {
  return <div className="h-[8px] shrink-0 w-full" data-name="8px" />;
}

function Shifter1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[108px]" data-name="Shifter">
      <Component8Px1 />
    </div>
  );
}

function Number2() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-[13px]" data-name="Number">
      <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#ef3124] text-[14px] text-right">3.</p>
    </div>
  );
}

function ListItem5() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="ListItem3">
      <Number2 />
      <p className="flex-[1_0_0] font-['SF_Pro_Text:Regular',sans-serif] leading-[0] min-h-px min-w-px not-italic relative text-[0px] text-[14px] text-[rgba(3,3,6,0.88)] whitespace-pre-wrap">
        <span className="leading-[20px]">{`Далее тариф `}</span>
        <span className="font-['SF_Pro_Text:Bold',sans-serif] leading-[20px]">Оптимальный</span>
        <span className="leading-[20px]">{` с комиссий 2,2%`}</span>
      </p>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="ListItem3">
      <ListItem5 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="List">
      <ListItem />
      <Shifter />
      <ListItem2 />
      <Shifter1 />
      <ListItem4 />
    </div>
  );
}

function Content() {
  return (
    <div className="relative shrink-0 w-full" data-name=".Content">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
        <List />
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative rounded-[12px]" data-name="Body">
      <Content />
    </div>
  );
}

export default function Tooltip() {
  return (
    <div className="content-stretch flex items-start relative shadow-[0px_20px_24px_0px_rgba(0,0,0,0.08),0px_12px_16px_0px_rgba(0,0,0,0.04),0px_4px_8px_0px_rgba(0,0,0,0.04),0px_0px_1px_0px_rgba(0,0,0,0.04)] size-full" data-name="Tooltip">
      <TailLeft />
      <Body />
    </div>
  );
}