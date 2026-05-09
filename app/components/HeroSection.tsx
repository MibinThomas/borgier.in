'use client';

// Hero Section - Exact Figma styles and alignments (node 17:3)
const imgBackbone = "/assets/hero-backbone.png";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[1117px] bg-[#e6e7e8] overflow-hidden">
      <div className="relative max-w-[1920px] mx-auto h-full w-full">

        {/* Product Image - Exact position 158px from left, 143px from top */}
        <div className="absolute left-[158px] top-[143px] w-[1000px] h-[1272px] overflow-hidden">
          <img
            src={imgBackbone}
            alt="BackBone"
            className="absolute w-full h-full object-cover"
            style={{ top: '-4.91%', left: '-0.02%', width: '100.03%', height: '104.91%' }}
          />
        </div>

        {/* Category Label - Exact position 1061px, 325px */}
        <p className="absolute left-[1061px] top-[325px] text-[#606060] text-[28.067px] font-light leading-[1.02] tracking-tight">
          Streat Wear Set
        </p>

        {/* Giant Heading - Exact position 1054px, 398px */}
        <div className="absolute left-[1054px] top-[398px] z-10">
          <h1 className="text-black font-black text-[191.8px] leading-[0.79] tracking-[-0.03em]">
            Back<br />
            Bone<span className="text-[#00e300]">.</span>
          </h1>
        </div>

        {/* Description Text - Exact position 1061px, 763px */}
        <p className="absolute left-[1061px] top-[763px] w-[609px] text-[#606060] text-[18.1px] font-light leading-[1.2]">
          Engineered for performance, built for movement. This ultra-tight compression top and shorts combo delivers a second-skin fit with maximum flexibility, sweat control, and all-day comfort.
        </p>

        {/* CTA Button - Exact position 1061px, 876px */}
        <button className="absolute left-[1061px] top-[876px] w-[212px] h-[56px] bg-[#00e300] rounded-[5.4px] flex items-center justify-center hover:brightness-95 transition-all group">
          <span className="text-black text-[23.3px] font-medium tracking-tight">Shop Now.</span>
        </button>

      </div>
    </section>
  );
}
