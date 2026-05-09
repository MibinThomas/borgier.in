'use client';

// Xellos Section - Exact Figma styles (node 51:693 area)
const imgXellos = "/assets/xellos-product.png";

export default function XellosSection() {
  return (
    <section className="w-full bg-[#eaeaea] relative h-[1023px] overflow-hidden">
      <div className="relative max-w-[1920px] mx-auto h-full w-full">
        
        {/* Description Text - Exact position and styling */}
        <div className="absolute left-[230px] top-[297px] w-[500px] z-20">
          <p className="text-[#606060] text-[20.9px] font-light leading-[1.02] tracking-tight">
            Engineered for performance, built for movement.<br />
            This ultra-tight compression top and shorts combo<br />
            delivers a second-skin fit with maximum flexibility,<br />
            sweat control, and all-day comfort.
          </p>
        </div>

        {/* Giant Heading - Exact position and typography */}
        <div className="absolute left-[204px] bottom-[110px] z-10">
          <h2 className="text-black font-black text-[363.2px] leading-[0.79] tracking-[-0.03em] whitespace-nowrap">
            Xellos<span className="text-[#00e300]">.</span>
          </h2>
        </div>

        {/* Product Image - Exact position 1125px from left */}
        <div className="absolute left-[1125px] top-[97px] w-[637px] h-[871px] z-20 overflow-hidden">
          <img
            src={imgXellos}
            alt="Xellos"
            className="absolute w-full h-full object-contain"
            style={{ left: '-8.32%', top: '-10.61%', width: '110.52%', height: '116.97%' }}
          />
        </div>

      </div>
    </section>
  );
}
