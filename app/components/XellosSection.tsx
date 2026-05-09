'use client';

// Xellos Section - Responsive implementation
const imgXellos = "/assets/xellos-product.png";

export default function XellosSection() {
  return (
    <section className="w-full bg-[#eaeaea] relative min-h-[600px] lg:h-[1023px] overflow-hidden py-12 lg:py-0">
      <div className="relative max-w-[1920px] mx-auto h-full w-full px-6 lg:px-0 flex flex-col lg:block">
        
        {/* Description Text - Responsive position */}
        <div className="relative lg:absolute lg:left-[230px] lg:top-[297px] w-full lg:w-[500px] z-20 order-2 lg:order-none mt-8 lg:mt-0">
          <p className="text-[#606060] text-[18px] lg:text-[20.9px] font-light leading-[1.4] lg:leading-[1.02] tracking-tight">
            Engineered for performance, built for movement.<br className="hidden lg:block" />
            This ultra-tight compression top and shorts combo<br className="hidden lg:block" />
            delivers a second-skin fit with maximum flexibility,<br className="hidden lg:block" />
            sweat control, and all-day comfort.
          </p>
        </div>

        {/* Giant Heading - Responsive scaling */}
        <div className="relative lg:absolute lg:left-[204px] lg:bottom-[110px] z-10 order-3 lg:order-none mt-8 lg:mt-0">
          <h2 className="text-black font-black text-[100px] sm:text-[200px] lg:text-[363.2px] leading-[0.79] tracking-[-0.03em] whitespace-nowrap">
            Xellos<span className="text-[#00e300]">.</span>
          </h2>
        </div>

        {/* Product Image - Responsive scaling */}
        <div className="relative lg:absolute lg:left-[1125px] lg:top-[97px] w-full lg:w-[637px] aspect-[3/4] lg:h-[871px] z-20 overflow-hidden order-1 lg:order-none">
          <img
            src={imgXellos}
            alt="Xellos"
            className="absolute w-full h-full object-contain"
            style={{ left: '0', top: '0', width: '100%', height: '100%' }}
          />
        </div>

      </div>
    </section>
  );
}
