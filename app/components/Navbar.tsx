'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const imgLogo = "/assets/logo.png";
const imgCart = "/assets/cart-icon.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 h-[100px] transition-all duration-300 ${scrolled ? 'bg-[#e6e7e8]/90 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="relative max-w-[1920px] mx-auto h-full w-full">
        {/* Logo - Exact alignment c. 168px from left, 71px from top (adjusted for nav height) */}
        <Link href="/" className="absolute left-[168px] top-[71px] -translate-y-1/2">
          <img src={imgLogo} alt="Borgier" className="h-[49px] w-[154px] object-contain" />
        </Link>

        {/* Navigation Links - Exact pixel alignments from Figma */}
        <div className="absolute top-[86px] -translate-y-1/2 flex gap-0 items-center">
          <Link href="/" className="absolute left-[565px] text-black text-[19.1px] font-light leading-[1.02] hover:opacity-70 transition-opacity whitespace-nowrap">
            Home
          </Link>
          <Link href="/mens" className="absolute left-[707px] text-black text-[19.1px] font-light leading-[1.02] hover:opacity-70 transition-opacity whitespace-nowrap">
            Mens
          </Link>
          <Link href="/products" className="absolute left-[845px] text-black text-[19.1px] font-light leading-[1.02] hover:opacity-70 transition-opacity whitespace-nowrap">
            All Products
          </Link>
        </div>

        {/* Search - Exact alignment 1121px from left */}
        <div className="absolute left-[1121px] top-[88px] -translate-y-1/2 flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="text-[#606060] text-[15.82px] font-light leading-[1.02] bg-transparent border-b border-[#606060]/20 pb-0.5 w-[140px] focus:outline-none focus:border-[#606060] transition-colors placeholder-[#606060]"
          />
        </div>

        {/* Cart - Right side alignment */}
        <button className="absolute left-[1592px] top-[82px] -translate-y-1/2 hover:opacity-70 transition-opacity">
          <img src={imgCart} alt="Cart" className="w-[34px] h-[34px] object-contain" />
        </button>
      </div>
    </nav>
  );
}
