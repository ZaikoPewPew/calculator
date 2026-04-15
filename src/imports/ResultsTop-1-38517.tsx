type TerminalProps = {
  className?: string;
  state?: "Calculator" | "Terms" | "Absent";
};

function Terminal({ className, state = "Calculator" }: TerminalProps) {
  const isCalculator = state === "Calculator";
  const isTermsOrAbsent = ["Terms", "Absent"].includes(state);
  return (
    <div className={className || `content-stretch flex items-start relative w-[260px] ${isTermsOrAbsent ? "flex-col gap-[4px] justify-center" : "gap-[8px] justify-end"}`}>
      <div className={`content-stretch flex flex-col gap-[4px] items-start justify-center relative ${isTermsOrAbsent ? "shrink-0 w-full" : "flex-[1_0_0] min-h-px min-w-px"}`} data-name="2-2">
        <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Label">
          <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(4,4,19,0.55)]">{isTermsOrAbsent ? "Lable" : "Плата за терминалы"}</p>
        </div>
        {isCalculator && (
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Value">
            <p className="flex-[1_0_0] font-['SF_Pro_Text:Regular',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[16px] text-[rgba(3,3,6,0.88)] whitespace-pre-wrap">1290 ₽ х 15 шт</p>
          </div>
        )}
      </div>
      {isTermsOrAbsent && (
        <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link Light">
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Slot /  Pseudo Link">
            <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0f0f0f] text-[16px] whitespace-nowrap">
              <p className="leading-[24px]">Ссылка куда-нибудь</p>
            </div>
            <div className="h-0 relative shrink-0 w-full" data-name="Underline">
              <div className="absolute inset-[-0.5px_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 163 1">
                  <path d="M0 0.5H163" id="Underline" stroke="var(--stroke-0, #464649)" strokeDasharray="3 3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      )}
      {isCalculator && (
        <div className="content-stretch flex gap-[8px] items-center justify-end overflow-clip relative shrink-0" data-name="═ Row 2">
          <div className="content-stretch flex flex-col gap-[4px] items-end justify-center relative shrink-0" data-name="2-2">
            <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Label">
              <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(4,4,19,0.55)]">Итого</p>
            </div>
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Value">
              <p className="font-['SF_Pro_Text:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(3,3,6,0.88)] text-right">19 350 ₽</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
type TariffProps = {
  className?: string;
  type?: "Starter Tariff" | "Tariff Simple" | "Other";
};

function Tariff({ className, type = "Starter Tariff" }: TariffProps) {
  const isStarterTariff = type === "Starter Tariff";
  const isStarterTariffOrTariffSimple = ["Starter Tariff", "Tariff Simple"].includes(type);
  const isTariffSimple = type === "Tariff Simple";
  const isTariffSimpleOrOther = ["Tariff Simple", "Other"].includes(type);
  return (
    <div className={className || "content-stretch flex flex-col gap-[12px] items-start justify-center relative w-[308px]"}>
      <div className="content-stretch flex gap-[8px] h-[24px] items-center overflow-clip relative shrink-0 w-[308px]" data-name="═ Row 2">
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative" data-name="2-1">
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Label">
            <p className={`not-italic relative shrink-0 ${isTariffSimpleOrOther ? "font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] text-[14px] text-[rgba(4,4,19,0.55)]" : "font-['SF_Pro_Text:Bold',sans-serif] leading-[24px] text-[16px] text-[rgba(3,3,6,0.88)]"}`}>{isTariffSimpleOrOther ? "Lable" : "Тариф Стартовый"}</p>
          </div>
        </div>
        {isStarterTariffOrTariffSimple && (
          <div className="content-stretch flex items-start relative shrink-0" data-name="Status">
            <div className={`content-stretch flex items-center overflow-clip px-[8px] py-[2px] relative rounded-[4px] shrink-0 ${isTariffSimple ? "bg-[#e7f6ef]" : "bg-[rgba(0,122,255,0.1)]"}`} data-name=".Details / Status / Light / Master">
              <div className={`flex flex-col font-["SF_Pro_Text:Bold",sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[11px] whitespace-nowrap ${isTariffSimple ? "text-[#3778fb]" : "text-[#007aff]"}`}>
                <p className="leading-[16px]">{isTariffSimple ? "LABEL" : "ДЛЯ НОВЫХ"}</p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
        <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[308px]">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-h-px min-w-px relative" data-name="2-2">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Value">
              <p className={`not-italic relative ${isTariffSimpleOrOther ? "font-['SF_Pro_Display:Bold',sans-serif] leading-[22px] shrink-0 text-[18px] text-[rgba(3,3,6,0.88)] text-right" : "flex-[1_0_0] font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] min-h-px min-w-px text-[14px] text-[rgba(4,4,19,0.55)] whitespace-pre-wrap"}`}>{isTariffSimpleOrOther ? "12 000 ₽" : "Процентная ставка"}</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-end justify-center relative shrink-0" data-name="2-2">
            <div className={`content-stretch flex gap-[8px] items-center relative shrink-0 ${isTariffSimpleOrOther ? "w-full" : "justify-end"}`} data-name="Value">
              <p className={`not-italic relative shrink-0 text-[rgba(3,3,6,0.88)] text-right ${isTariffSimpleOrOther ? "font-['SF_Pro_Display:Bold',sans-serif] leading-[22px] text-[18px]" : "font-['SF_Pro_Text:Bold',sans-serif] leading-[24px] text-[16px]"}`}>{isTariffSimpleOrOther ? "12 000 ₽" : "1% до 500 тыс ₽"}</p>
            </div>
          </div>
        </div>
        {isStarterTariffOrTariffSimple && (
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[308px]">
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-h-px min-w-px relative" data-name="2-2">
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Value">
                <p className={`not-italic relative ${isTariffSimple ? "font-['SF_Pro_Display:Bold',sans-serif] leading-[22px] shrink-0 text-[18px] text-[rgba(3,3,6,0.88)] text-right" : "flex-[1_0_0] font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] min-h-px min-w-px text-[14px] text-[rgba(4,4,19,0.55)] whitespace-pre-wrap"}`}>{isTariffSimple ? "12 000 ₽" : "Срок тарифа"}</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[4px] items-end justify-center relative shrink-0" data-name="2-2">
              <div className={`content-stretch flex gap-[8px] items-center relative shrink-0 ${isTariffSimple ? "w-full" : "justify-end"}`} data-name="Value">
                <p className={`not-italic relative shrink-0 text-[rgba(3,3,6,0.88)] text-right ${isTariffSimple ? "font-['SF_Pro_Display:Bold',sans-serif] leading-[22px] text-[18px]" : "font-['SF_Pro_Text:Bold',sans-serif] leading-[24px] text-[16px]"}`}>{isTariffSimple ? "12 000 ₽" : "на 3 мес"}</p>
              </div>
            </div>
          </div>
        )}
        {isStarterTariff && (
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[308px]">
            <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Link Light">
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
            </div>
            <div className="content-stretch flex flex-col gap-[4px] items-end justify-center relative shrink-0" data-name="2-2">
              <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0" data-name="Value">
                <p className="font-['SF_Pro_Text:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(3,3,6,0.88)] text-right">2,2%</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ResultsTop({ className }: { className?: string }) {
  return (
    <div className={className || "content-stretch flex flex-col items-start relative rounded-[8px] w-[308px]"} data-name="results_top">
      <Tariff className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-[308px]" />
      <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name=".↕ SpacingVertical">
        <div className="h-[16px] shrink-0 w-[64px]" data-name="Fixer" />
      </div>
      <div className="bg-[#d5d6dc] h-px rounded-[10px] shrink-0 w-full" data-name="divider" />
      <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name=".↕ SpacingVertical">
        <div className="h-[16px] shrink-0 w-[64px]" data-name="Fixer" />
      </div>
      <div className="content-stretch flex gap-[8px] items-start opacity-80 relative shrink-0 w-[308px]" data-name=".comission">
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-[48px] items-start justify-center min-h-px min-w-px relative" data-name="2-2">
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Label">
            <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(4,4,19,0.55)]">Комиссия + НДС 22%</p>
          </div>
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Value">
            <p className="flex-[1_0_0] font-['SF_Pro_Text:Regular',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[16px] text-[rgba(3,3,6,0.88)] whitespace-pre-wrap">111 100 ₽ + 24 442 ₽</p>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[4px] items-end justify-center relative shrink-0" data-name="2-2">
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Label">
            <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(4,4,19,0.55)]">Итого</p>
          </div>
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Value">
            <p className="font-['SF_Pro_Text:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(3,3,6,0.88)] text-right">135 542 ₽</p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name=".↕ SpacingVertical">
        <div className="h-[16px] shrink-0 w-[64px]" data-name="Fixer" />
      </div>
      <div className="bg-[#d5d6dc] h-px rounded-[10px] shrink-0 w-full" data-name="divider" />
      <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name=".↕ SpacingVertical">
        <div className="h-[16px] shrink-0 w-[64px]" data-name="Fixer" />
      </div>
      <Terminal className="content-stretch flex gap-[8px] items-start justify-end relative shrink-0 w-full" />
      <div className="content-stretch flex h-[24px] items-start relative shrink-0 w-full" data-name=".↕ SpacingVertical">
        <div className="h-[24px] shrink-0 w-[64px]" data-name="Fixer" />
      </div>
    </div>
  );
}