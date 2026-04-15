function TailUp() {
  return (
    <div className="content-stretch flex h-0 items-end justify-center relative shrink-0 w-full" data-name=".Tail Up">
      <div className="h-[8px] relative shrink-0 w-[16px]" data-name="Tail">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 8">
          <path d="M16 8L0 8L8.0159 0L16 8Z" fill="var(--fill-0, white)" id="Tail" />
        </svg>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex items-start max-w-[368px] min-w-[141px] relative shrink-0" data-name="Text">
      <p className="flex-[1_0_0] font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#0e0e0e] text-[14px] whitespace-pre-wrap">При обороте более 100 000 ₽ на один терминал в месяц дополнительная плата за использование терминалов не взымается</p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative shrink-0" data-name=".Content">
      <Text />
    </div>
  );
}

function Body() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative rounded-[12px] shrink-0" data-name="Body">
      <Content />
    </div>
  );
}

export default function Tooltip() {
  return (
    <div className="content-stretch flex flex-col items-start relative shadow-[0px_20px_24px_0px_rgba(0,0,0,0.08),0px_12px_16px_0px_rgba(0,0,0,0.04),0px_4px_8px_0px_rgba(0,0,0,0.04),0px_0px_1px_0px_rgba(0,0,0,0.04)] size-full" data-name="Tooltip">
      <TailUp />
      <Body />
    </div>
  );
}