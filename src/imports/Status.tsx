function DetailsStatusLightMaster() {
  return (
    <div className="bg-[rgba(103,58,183,0.1)] content-stretch flex items-center overflow-clip px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name=".Details / Status / Light / Master">
      <div className="flex flex-col font-['SF_Pro_Text:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#673ab7] text-[11px] whitespace-nowrap">
        <p className="leading-[16px]">ОТРАСЛЕВОЙ</p>
      </div>
    </div>
  );
}

export default function Status() {
  return (
    <div className="content-stretch flex items-start relative size-full" data-name="Status">
      <DetailsStatusLightMaster />
    </div>
  );
}