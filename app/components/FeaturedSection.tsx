'use client';

const imgZynex = '/assets/product-zynex.png';
const imgBackbone = '/assets/hero-backbone.png';
const imgBorgex = '/assets/product-new.png';
const imgPirler = '/assets/product-pirler.png';

type Product = {
  id: number;
  name: string;
  category: string;
  price: string;
  mrp: string;
  img: string;
};

const products: Product[] = [
  { id: 1, name: 'Zynex', category: 'Compression Set', price: '₹1,050', mrp: '₹2,695', img: imgZynex },
  { id: 2, name: 'Back Bone', category: 'Compression Set', price: '₹1,050', mrp: '₹2,695', img: imgBackbone },
  { id: 3, name: 'Borgex', category: 'Compression Set', price: '₹1,050', mrp: '₹2,695', img: imgBorgex },
  { id: 4, name: 'Pirler', category: 'Compression Set', price: '₹1,050', mrp: '₹2,695', img: imgPirler },
];

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group w-full cursor-pointer">
      <div className="relative w-full aspect-[4/5.65] overflow-hidden rounded-[18px] bg-[#dedede]">
        <img
          src={product.img}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      </div>

      <div className="mt-6 flex items-start justify-between gap-5">
        <div className="min-w-0">
          <h3 className="font-brand text-[28px] font-medium leading-[1] tracking-[-0.03em] text-black">
            {product.name}
          </h3>
          <p className="mt-3 text-[15px] font-light leading-[1.2] text-[#606060]">
            {product.category}
          </p>
        </div>

        <div className="shrink-0 text-right">
          <p className="font-brand text-[24px] font-medium leading-[1] tracking-[-0.03em] text-black">
            {product.price}
          </p>
          <p className="mt-2 text-[18px] font-normal leading-[1] tracking-[-0.03em] text-[#606060] line-through">
            {product.mrp}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function FeaturedSection() {
  const featuredProducts = [...products, ...products];

  return (
    <section className="w-full bg-[#ebebeb] py-[60px] lg:py-[110px]">
      <div className="mx-auto w-full max-w-[1920px] px-6 lg:px-[88px]">
        <div className="mb-[40px] lg:mb-[72px] flex items-center justify-between">
          <h2 className="font-brand text-[32px] sm:text-[40px] lg:text-[56px] font-light leading-none tracking-[-0.03em] text-black">
            Featured<span className="text-[#00e300]">.</span>
          </h2>

          <button
            type="button"
            aria-label="Filter products"
            className="flex h-10 w-10 lg:h-12 lg:w-12 flex-col items-end justify-center gap-[4px] lg:gap-[6px]"
          >
            <span className="h-[2.5px] lg:h-[3.2px] w-[18px] lg:w-[21.5px] bg-black" />
            <span className="h-[2.5px] lg:h-[3.2px] w-[12px] lg:w-[14px] bg-black" />
            <span className="h-[2.5px] lg:h-[3.2px] w-[7px] lg:w-[8.6px] bg-black" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-[24px] lg:gap-x-[32px] gap-y-[40px] lg:gap-y-[86px]">
          {featuredProducts.map((product, index) => (
            <ProductCard
              key={`${product.id}-${index}`}
              product={product}
            />
          ))}
        </div>
      </div>
    </section>
  );
}