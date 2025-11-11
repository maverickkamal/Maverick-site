import React from 'react';

interface ShapesProps {
  variant?: 'desktop' | 'mobile';
  svgPaths?: any;
  className?: string;
}

export default function Shapes({ variant = 'desktop', svgPaths, className = '' }: ShapesProps) {
  if (variant === 'mobile') {
    return (
      <div className={`md:hidden ${className}`}>
        {/* Mobile-specific shape arrangement */}
        <Ellipses className="scale-75" />
        <Triangle className="scale-75" svgPaths={svgPaths} />
        <Squares className="scale-75" />
        <Rectangle className="scale-75" />
      </div>
    );
  }

  // Desktop arrangement
  return (
    <div className={`hidden md:block ${className}`}>
      <Ellipses />
      <Triangle svgPaths={svgPaths} />
      <Squares />
      <Rectangle />
    </div>
  );
}

function Ellipses({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute h-[693px] left-[396px] top-[233px] w-[932px] ${className}`} data-name="ellipses">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 932 693">
        <g id="ellipses" opacity="0.3">
          <ellipse cx="549" cy="477" fill="var(--fill-0, #C91F1F)" id="Ellipse 1" opacity="0.5" rx="74" ry="75" />
          <ellipse cx="35" cy="657.5" fill="var(--fill-0, #C91F1F)" id="Ellipse 3" opacity="0.5" rx="35" ry="35.5" />
          <ellipse cx="324" cy="35.5" fill="var(--fill-0, #C91F1F)" id="Ellipse 4" opacity="0.5" rx="35" ry="35.5" />
          <ellipse cx="882" cy="276.5" fill="var(--fill-0, #C91F1F)" id="Ellipse 2" opacity="0.5" rx="50" ry="50.5" />
        </g>
      </svg>
    </div>
  );
}

function Triangle({ svgPaths, className = '' }: { svgPaths?: any; className?: string }) {
  if (!svgPaths) return null;
  
  return (
    <div className={`absolute h-[230px] left-[360px] top-[789px] w-[646px] ${className}`} data-name="triangle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 646 230">
        <g id="triangle" opacity="0.3">
          <path d={svgPaths.p11165480} fill="var(--fill-0, #1A1A1A)" id="Polygon 1" opacity="0.5" />
          <path d={svgPaths.p3613e200} fill="var(--fill-0, #1A1A1A)" id="Polygon 2" opacity="0.5" />
        </g>
      </svg>
    </div>
  );
}

function Squares({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute contents left-[554px] top-[302px] ${className}`} data-name="squares">
      <div className="absolute bg-[#8a5500] left-[773px] opacity-[0.15] size-[150px] top-[901px]" />
      <div className="absolute bg-[#8a5500] left-[734px] opacity-[0.15] size-[150px] top-[302px]" />
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.6869152188301086)+(var(--transform-inner-height)*0.7267375588417053)))] items-center justify-center left-[554px] top-[584px] w-[calc(1px*((var(--transform-inner-height)*0.6869152188301086)+(var(--transform-inner-width)*0.7267375588417053)))]" style={{ "--transform-inner-width": "80", "--transform-inner-height": "80" } as React.CSSProperties}>
        <div className="flex-none rotate-[316.614deg]">
          <div className="bg-[#8a5500] opacity-[0.15] size-[80px]" />
        </div>
      </div>
    </div>
  );
}

function Rectangle({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute contents left-[-67.14px] top-[451px] ${className}`} data-name="rectangle">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.24939970672130585)+(var(--transform-inner-height)*0.9684006571769714)))] items-center justify-center left-[811px] top-[451px] w-[calc(1px*((var(--transform-inner-height)*0.24939970672130585)+(var(--transform-inner-width)*0.9684006571769714)))]" style={{ "--transform-inner-width": "450", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.442deg]">
          <div className="bg-[#006b3d] h-[150px] opacity-[0.15] w-[450px]" />
        </div>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.43240979313850403)+(var(--transform-inner-height)*0.9016771912574768)))] items-center justify-center left-[-67.14px] top-[786.68px] w-[calc(1px*((var(--transform-inner-height)*0.43240979313850403)+(var(--transform-inner-width)*0.9016771912574768)))]" style={{ "--transform-inner-width": "450", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[334.379deg]">
          <div className="bg-[#006b3d] h-[150px] opacity-[0.15] w-[450px]" />
        </div>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.4875309467315674)+(var(--transform-inner-height)*0.8731057047843933)))] items-center justify-center left-[445px] top-[797px] w-[calc(1px*((var(--transform-inner-height)*0.4875309467315674)+(var(--transform-inner-width)*0.8731057047843933)))]" style={{ "--transform-inner-width": "339.5625", "--transform-inner-height": "64.921875" } as React.CSSProperties}>
        <div className="flex-none rotate-[29.178deg]">
          <div className="bg-[#006b3d] h-[64.937px] opacity-[0.15] w-[339.58px]" />
        </div>
      </div>
    </div>
  );
}

