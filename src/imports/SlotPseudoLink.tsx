export default function SlotPseudoLink() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Slot /  Pseudo Link">
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