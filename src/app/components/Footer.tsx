import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGooglePlay, FaApple, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { HiDesktopComputer } from 'react-icons/hi';

// A reusable component for footer links
const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <Link href={href} className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-[15px]">
      {children}
    </Link>
  </li>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white">
      <div className="container mx-auto px-6 lg:px-16 xl:px-20 py-12">
        {/* Top section with links and logo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 pb-12 border-b border-gray-200">
          {/* Column 1: Logo & App Store Buttons */}
          <div className="space-y-6 -mt-2">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/Ficon.png" alt="Finosell Logo" width={32} height={32} />
              <span className="text-[22px] font-bold text-[#273B4A]">finosell.</span>
            </Link>
            <div className="flex flex-col items-start gap-3">
              <a href="#" className="bg-[#273B4A] hover:bg-[#1f2f3a] text-white px-4 py-2.5 rounded-lg flex items-center gap-3 transition-colors w-[140px]">
                <FaGooglePlay size={20} />
                <div className="flex flex-col items-start leading-tight">
                  <span className="text-[9px] font-light">Get it on</span>
                  <span className="text-[13px] font-semibold">Google Play</span>
                </div>
              </a>
              <a href="#" className="bg-[#273B4A] hover:bg-[#1f2f3a] text-white px-4 py-2.5 rounded-lg flex items-center gap-3 transition-colors w-[140px]">
                <FaApple size={24} />
                <div className="flex flex-col items-start leading-tight">
                  <span className="text-[9px] font-light">Download on the</span>
                  <span className="text-[13px] font-semibold">App Store</span>
                </div>
              </a>
              <a href="#" className="bg-[#273B4A] hover:bg-[#1f2f3a] text-white px-4 py-2.5 rounded-lg flex items-center gap-3 transition-colors w-[140px]">
                <HiDesktopComputer size={22} />
                <div className="flex flex-col items-start leading-tight">
                  <span className="text-[9px] font-light">Open on</span>
                  <span className="text-[13px] font-semibold">Web app</span>
                </div>
              </a>
            </div>
          </div>

          {/* Column 2: Company */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-5 text-[15px]">Company</h3>
            <ul className="space-y-3.5">
              <FooterLink href="#">About</FooterLink>
              <FooterLink href="#">Blog</FooterLink>
              <FooterLink href="#">FAQ</FooterLink>
              <FooterLink href="#">Help</FooterLink>
            </ul>
          </div>

          {/* Column 3: Products */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-5 text-[15px]">Products</h3>
            <ul className="space-y-3.5">
              <FooterLink href="#">Business Management</FooterLink>
              <FooterLink href="#">Payments</FooterLink>
              {/* <FooterLink href="#">Escrow</FooterLink> */}
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-5 text-[15px]">Legal</h3>
            <ul className="space-y-3.5">
              <FooterLink href="#">Terms and Conditions</FooterLink>
              <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
            </ul>
          </div>
        </div>

        {/* Bottom section with copyright, contact and social links */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Left Side: Copyright */}
          <p className="text-[13px] text-gray-500 order-2 md:order-1">
            ©{currentYear} Finosell Limited. All rights reserved.
          </p>

          {/* Right Side: Contact Info & Socials */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 order-1 md:order-2">
            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-[13px] text-gray-600">
              <a href="mailto:support@finosell.com" className="hover:text-gray-900 transition-colors">
                support@finosell.com
              </a>
              <span className="hidden sm:inline text-gray-400">|</span>
              <span>+234 - XXXX - XXXX</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a 
                href="https://www.facebook.com/profile.php?id=100063642578492&mibextid=rS40aB7S9Ucbxw6v" 
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-gray-200 hover:text-[#273B4A] transition-colors"
              >
                <FaFacebookF size={14} />
              </a>
              <a 
                href="https://www.instagram.com/finosellapp?igsh=MWV1aHI1Nzk3bDRzMQ==" 
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-gray-200 hover:text-[#273B4A] transition-colors"
              >
                <FaInstagram size={14} />
              </a>
              <a 
                href="https://www.linkedin.com/company/finosell-global-ltd/posts/?feedView=all" 
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"  
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-gray-200 hover:text-[#273B4A] transition-colors"
              >
                <FaLinkedinIn size={14} />
              </a>
              <a 
                href="https://x.com/finosell?s=11" 
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"  
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-gray-200 hover:text-[#273B4A] transition-colors"
              >
                <FaXTwitter size={14} />
              </a>
               <a 
                href="https://youtube.com/@finosell?si=MH66mUp1Lb8-A4VC" 
                aria-label="Youtube"
                target="_blank"
                rel="noopener noreferrer"  
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-gray-200 hover:text-[#273B4A] transition-colors"
              >
                <FaYoutube size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;