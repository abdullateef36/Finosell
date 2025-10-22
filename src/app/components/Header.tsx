'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiMenu, HiX } from 'react-icons/hi'; // Icons for the hamburger menu

const Header = () => {
  // State to manage the mobile menu's visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'FAQ', href: '/faq' },
  ];

  return (
    <header className="bg-white sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between p-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          {/* You can replace this with your actual logo file */}
          <Image src="/Ficon.png" alt="Finosell Logo" width={32} height={32} />
          <span className="text-2xl font-bold text-[#273B4A]">finosell.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-600 hover:text-[#273B4A] transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button (Hamburger Icon) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {isMenuOpen ? (
              <HiX className="h-6 w-6" /> // Close icon
            ) : (
              <HiMenu className="h-6 w-6" /> // Menu icon
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu (Dropdown) */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col space-y-4 p-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:bg-gray-100 p-2 rounded-md"
                onClick={() => setIsMenuOpen(false)} // Close menu on click
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;