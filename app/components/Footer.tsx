'use client';

// Footer - Exact Figma styles (node 55:895-55:931)
export default function Footer() {
  return (
    <footer className="w-full bg-[#e6e7e8] mt-[100px] pt-[120px] pb-[80px]">
      <div className="max-w-[1920px] mx-auto">
        
        

        {/* Links Grid - Exact positions */}
        <div className="px-[130px] grid grid-cols-4 gap-[24px] mb-[150px]">
          {/* Shop */}
          <div className="flex flex-col gap-[36px]">
            <h4 className="text-[#606060] text-[36.83px] font-bold leading-[1.02]">Shop</h4>
            <div className="flex flex-col gap-[16px]">
              {['Mens', 'Womens', 'All Products'].map(link => (
                <a key={link} href="#" className="text-[#606060] text-[29.2px] font-light leading-[1.02] hover:text-black transition-colors">{link}</a>
              ))}
            </div>
          </div>
          
          {/* Help */}
          <div className="flex flex-col gap-[36px]">
            <h4 className="text-[#606060] text-[36.83px] font-bold leading-[1.02]">Help</h4>
            <div className="flex flex-col gap-[16px]">
              {['Contact', 'Return | Refund Policy', 'Pre-Order Policy'].map((link, i) => (
                <a key={i} href="#" className="text-[#606060] text-[29.2px] font-light leading-[1.02] hover:text-black transition-colors">{link}</a>
              ))}
            </div>
          </div>
          
          {/* My Account */}
          <div className="flex flex-col gap-[36px]">
            <h4 className="text-[#606060] text-[36.83px] font-bold leading-[1.02]">My Account</h4>
            <div className="flex flex-col gap-[16px]">
              {['Login', 'Register', 'My Orders'].map(link => (
                <a key={link} href="#" className="text-[#606060] text-[29.2px] font-light leading-[1.02] hover:text-black transition-colors">{link}</a>
              ))}
            </div>
          </div>
          
          {/* Info */}
          <div className="flex flex-col gap-[36px]">
            <h4 className="text-[#606060] text-[36.83px] font-bold leading-[1.02]">Info</h4>
            <div className="flex flex-col gap-[16px]">
              {['About Us', 'Privacy Policy', 'Terms of Use', 'Contact Information', 'Blog'].map(link => (
                <a key={link} href="#" className="text-[#606060] text-[29.2px] font-light leading-[1.02] hover:text-black transition-colors">{link}</a>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="px-[130px] flex flex-col gap-[12px] mb-[150px]">
          <p className="text-[#606060] text-[29.2px] font-light leading-[1.02]">Join our email list</p>
          <p className="text-[#606060] text-[29.2px] font-light leading-[1.02]">Get exclusive deals and early access to new products</p>
          <div className="mt-[24px] w-[821px] h-[91px] border border-[#b8b8b8] rounded-[17px] flex items-center px-[40px]">
            <input
              type="email"
              placeholder="Email Address"
              className="bg-transparent w-full text-[#606060] text-[29.2px] font-light outline-none placeholder-[#606060]/50"
            />
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="px-[130px] flex justify-between items-center">
          <p className="text-[#606060] text-[29.2px] font-light">© 2026 Borgier | All Rights Reserved</p>
          <div className="relative group cursor-pointer">
            <span className="text-[#606060] text-[29.2px] font-light">Terms and Policies</span>
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#606060]/30" />
          </div>
        </div>

      </div>
    </footer>
  );
}
