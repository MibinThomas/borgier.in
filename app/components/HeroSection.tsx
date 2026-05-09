'use client';

// Hero Section - Responsive implementation
const imgBackbone = "/assets/hero-backbone.png";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen lg:h-[1117px] bg-[#e6e7e8] overflow-hidden pt-[100px] lg:pt-0">
      <div className="relative max-w-[1920px] mx-auto h-full w-full flex flex-col lg:block px-6 lg:px-0">

        {/* Product Image - Responsive scaling */}
        <div className="relative lg:absolute lg:left-[158px] lg:top-[143px] w-full lg:w-[1000px] aspect-[4/5] lg:aspect-auto lg:h-[1272px] overflow-hidden order-1 lg:order-none">
          <img
            src={imgBackbone}
            alt="BackBone"
            className="absolute w-full h-full object-contain lg:object-cover"
            style={{ top: '0', left: '0', width: '100%', height: '100%' }}
          />
        </div>

        {/* Text Content - Responsive stacking */}
        <div className="relative z-10 flex flex-col items-start mt-8 lg:mt-0 order-2 lg:order-none">
          
          {/* Category Label */}
          <p className="lg:absolute lg:left-[1061px] lg:top-[325px] text-[#606060] text-[18px] lg:text-[28.067px] font-light leading-[1.02] tracking-tight">
            Streat Wear Set
          </p>

          {/* Giant Heading */}
          <div className="lg:absolute lg:left-[1054px] lg:top-[398px]">
            <h1 className="text-black font-black text-[80px] sm:text-[120px] lg:text-[191.8px] leading-[0.79] tracking-[-0.03em]">
              Back<br />
              Bone<span className="text-[#00e300]">.</span>
            </h1>
          </div>

          {/* Description Text */}
          <p className="lg:absolute lg:left-[1061px] lg:top-[763px] w-full lg:w-[609px] text-[#606060] text-[16px] lg:text-[18.1px] font-light leading-[1.4] lg:leading-[1.2] mt-6 lg:mt-0">
            Engineered for performance, built for movement. This ultra-tight compression top and shorts combo delivers a second-skin fit with maximum flexibility, sweat control, and all-day comfort.
          </p>

          {/* CTA Button */}
          <button className="lg:absolute lg:left-[1061px] lg:top-[876px] w-full sm:w-[212px] h-[56px] bg-[#00e300] rounded-[5.4px] flex items-center justify-center hover:brightness-95 transition-all mt-8 lg:mt-0">
            <span className="text-black text-[20px] lg:text-[23.3px] font-medium tracking-tight">Shop Now.</span>
          </button>
        </div>

      </div>
    </section>
  );
}
