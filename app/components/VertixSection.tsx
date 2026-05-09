'use client';

// Vertix Section — full dark background image (node 55:720)
const imgVertix = "/assets/banner-image.png";

export default function VertixSection() {
  return (
    <section className="relative w-full overflow-hidden h-[500px] sm:h-[800px] lg:h-[1249px]">
      {/* Full bleed background image */}
      <img
        src={imgVertix}
        alt="Vertix sneaker"
        className="absolute inset-0 w-full h-full object-cover"
      />
    </section>
  );
}
