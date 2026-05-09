'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const imgLogo = "/assets/logo.png";
const imgCart = "/assets/cart-icon.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Mens', href: '/mens' },
    { name: 'All Products', href: '/products' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 h-[80px] lg:h-[100px] transition-all duration-300 ${scrolled || menuOpen ? 'bg-[#e6e7e8]/90 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="relative max-w-[1920px] mx-auto h-full w-full px-6 lg:px-[168px] flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="z-50">
          <img src={imgLogo} alt="Borgier" className="h-[32px] lg:h-[49px] w-auto object-contain" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-12 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-black text-[19.1px] font-light leading-[1.02] hover:opacity-70 transition-opacity whitespace-nowrap"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Search & Cart */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search"
              className="text-[#606060] text-[15.82px] font-light leading-[1.02] bg-transparent border-b border-[#606060]/20 pb-0.5 w-[140px] focus:outline-none focus:border-[#606060] transition-colors placeholder-[#606060]"
            />
          </div>
          <button className="hover:opacity-70 transition-opacity">
            <img src={imgCart} alt="Cart" className="w-[34px] h-[34px] object-contain" />
          </button>
        </div>

        {/* Mobile Toggle & Cart */}
        <div className="flex lg:hidden items-center gap-4">
          <button className="hover:opacity-70 transition-opacity">
            <img src={imgCart} alt="Cart" className="w-[28px] h-[28px] object-contain" />
          </button>
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1.5 z-50"
          >
            <span className={`h-0.5 w-6 bg-black transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`h-0.5 w-6 bg-black transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-6 bg-black transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-[#e6e7e8] z-40 transition-transform duration-500 flex flex-col items-center justify-center gap-8 lg:hidden ${menuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              onClick={() => setMenuOpen(false)}
              className="text-black text-3xl font-light"
            >
              {link.name}
            </Link>
          ))}
          <div className="mt-8 px-6 w-full max-w-sm">
             <input
              type="text"
              placeholder="Search products..."
              className="w-full text-center text-[#606060] text-xl font-light bg-transparent border-b border-[#606060]/20 pb-2 focus:outline-none focus:border-[#606060] transition-colors placeholder-[#606060]"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
