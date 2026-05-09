'use client';

// Footer - Responsive implementation
export default function Footer() {
  return (
    <footer className="w-full bg-[#e6e7e8] mt-[60px] lg:mt-[100px] pt-[80px] lg:pt-[120px] pb-[60px] lg:pb-[80px]">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-0">
        
        {/* Links Grid - Responsive columns */}
        <div className="lg:px-[130px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-[24px] gap-y-12 mb-[80px] lg:mb-[150px]">
          {/* Shop */}
          <div className="flex flex-col gap-6 lg:gap-[36px]">
            <h4 className="text-[#606060] text-[24px] lg:text-[36.83px] font-bold leading-[1.02]">Shop</h4>
            <div className="flex flex-col gap-4 lg:gap-[16px]">
              {['Mens', 'Womens', 'All Products'].map(link => (
                <a key={link} href="#" className="text-[#606060] text-[20px] lg:text-[29.2px] font-light leading-[1.02] hover:text-black transition-colors">{link}</a>
              ))}
            </div>
          </div>
          
          {/* Help */}
          <div className="flex flex-col gap-6 lg:gap-[36px]">
            <h4 className="text-[#606060] text-[24px] lg:text-[36.83px] font-bold leading-[1.02]">Help</h4>
            <div className="flex flex-col gap-4 lg:gap-[16px]">
              {['Contact', 'Return | Refund Policy', 'Pre-Order Policy'].map((link, i) => (
                <a key={i} href="#" className="text-[#606060] text-[20px] lg:text-[29.2px] font-light leading-[1.02] hover:text-black transition-colors">{link}</a>
              ))}
            </div>
          </div>
          
          {/* My Account */}
          <div className="flex flex-col gap-6 lg:gap-[36px]">
            <h4 className="text-[#606060] text-[24px] lg:text-[36.83px] font-bold leading-[1.02]">My Account</h4>
            <div className="flex flex-col gap-4 lg:gap-[16px]">
              {['Login', 'Register', 'My Orders'].map(link => (
                <a key={link} href="#" className="text-[#606060] text-[20px] lg:text-[29.2px] font-light leading-[1.02] hover:text-black transition-colors">{link}</a>
              ))}
            </div>
          </div>
          
          {/* Info */}
          <div className="flex flex-col gap-6 lg:gap-[36px]">
            <h4 className="text-[#606060] text-[24px] lg:text-[36.83px] font-bold leading-[1.02]">Info</h4>
            <div className="flex flex-col gap-4 lg:gap-[16px]">
              {['About Us', 'Privacy Policy', 'Terms of Use', 'Contact Information', 'Blog'].map(link => (
                <a key={link} href="#" className="text-[#606060] text-[20px] lg:text-[29.2px] font-light leading-[1.02] hover:text-black transition-colors">{link}</a>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Section - Responsive width */}
        <div className="lg:px-[130px] flex flex-col gap-[12px] mb-[80px] lg:mb-[150px]">
          <p className="text-[#606060] text-[24px] lg:text-[29.2px] font-light leading-[1.02]">Join our email list</p>
          <p className="text-[#606060] text-[18px] lg:text-[29.2px] font-light leading-[1.4] lg:leading-[1.02]">Get exclusive deals and early access to new products</p>
          <div className="mt-8 w-full lg:w-[821px] h-[70px] lg:h-[91px] border border-[#b8b8b8] rounded-[17px] flex items-center px-6 lg:px-[40px]">
            <input
              type="email"
              placeholder="Email Address"
              className="bg-transparent w-full text-[#606060] text-[20px] lg:text-[29.2px] font-light outline-none placeholder-[#606060]/50"
            />
          </div>
        </div>

        {/* Copyright Bar - Responsive stacking */}
        <div className="lg:px-[130px] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <p className="text-[#606060] text-[16px] lg:text-[29.2px] font-light">© 2026 Borgier | All Rights Reserved</p>
          <div className="relative group cursor-pointer">
            <span className="text-[#606060] text-[16px] lg:text-[29.2px] font-light">Terms and Policies</span>
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#606060]/30" />
          </div>
        </div>

      </div>
    </footer>
  );
}
