import svgPaths from "./svg-it6v9rijnt";
import { imgControls } from "./svg-c6y70";

function ChevronLeftCompact() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[24px] top-1/2" data-name="chevron-left-compact">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="chevron-left-compact">
          <path d={svgPaths.p1bc98700} fill="var(--fill-0, #050B2C)" fillOpacity="0.18" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function ControlLight() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name=".ControlLight">
      <div className="bg-[rgba(38,55,88,0.06)] rounded-[1500px] shrink-0 size-[40px]" />
      <ChevronLeftCompact />
    </div>
  );
}

function ChevronRightCompact() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[24px] top-1/2" data-name="chevron-right-compact">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="chevron-right-compact">
          <path d={svgPaths.p11590000} fill="var(--fill-0, #030306)" fillOpacity="0.88" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function ControlLight1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name=".ControlLight">
      <div className="bg-[rgba(15,25,55,0.1)] rounded-[1500px] shrink-0 size-[40px]" />
      <ChevronRightCompact />
    </div>
  );
}

function Controls() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[0px_40px] top-0" data-name="Controls" style={{ maskImage: `url('${imgControls}')` }}>
      <ControlLight />
      <ControlLight1 />
    </div>
  );
}

export default function Arrows() {
  return (
    <div className="relative size-full" data-name="Arrows">
      <Controls />
    </div>
  );
}