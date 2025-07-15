'use client';
import React, { useState } from 'react';
import Image from 'next/image';

// --- TYPE DEFINITIONS ---
// Defines the types for props to avoid 'any' type errors.
interface PageProps {
  setPage: (page: string) => void;
}

interface HeaderProps extends PageProps {
  page: string;
}

interface NavLinkProps {
  children: React.ReactNode;
  pageName: string;
  setPage: (page: string) => void;
  page: string;
}

interface IconProps {
    className?: string;
}


// --- ICONS (Heroicons - MIT License) ---
// Using inline SVGs for simplicity and to avoid external dependencies.
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
  </svg>
);

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const CheckCircleIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const GlobeIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h10a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.737 16.95l.001-.001M16.263 16.95l.001-.001M12 21a9 9 0 100-18 9 9 0 000 18z" />
    </svg>
);

const CodeBracketIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
);

// --- COMPONENTS ---

// Header Component
const Header: React.FC<HeaderProps> = ({ setPage, page }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = ["Home", "Solutions", "Developers", "Contact"];

  const NavLink: React.FC<NavLinkProps> = ({ children, pageName, setPage, page }) => (
    <button 
      onClick={() => { setPage(pageName); setIsMenuOpen(false); }}
      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
        page === pageName 
        ? 'text-white bg-[#D6AA1B]' 
        : 'text-[#273B4A] hover:bg-gray-100'
      }`}
    >
      {children}
    </button>
  );

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <button onClick={() => setPage('Home')} className="flex items-center space-x-2">
               <Image src="/Ficon.png" alt="Finosell Logo" width={32} height={32} />
               <span className="text-2xl font-bold text-[#273B4A]">Finosell</span>
            </button>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map(name => <NavLink key={name} pageName={name} setPage={setPage} page={page}>{name}</NavLink>)}
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#D6AA1B]"
            >
              {isMenuOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map(name => <NavLink key={name} pageName={name} setPage={setPage} page={page}>{name}</NavLink>)}
          </div>
        </div>
      )}
    </header>
  );
};

// Footer Component
const Footer: React.FC<PageProps> = ({ setPage }) => (
  <footer className="bg-[#273B4A] text-white">
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-2xl font-bold text-[#D6AA1B]">Finosell</h3>
          <p className="mt-2 text-gray-400 text-sm">Simplifying how businesses manage money.</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold tracking-wider uppercase text-gray-400">Solutions</h4>
          <ul className="mt-4 space-y-2">
            <li><button onClick={() => setPage('Solutions')} className="text-base text-gray-300 hover:text-white">Smart Accounting</button></li>
            <li><button onClick={() => setPage('Solutions')} className="text-base text-gray-300 hover:text-white">Card Issuing</button></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold tracking-wider uppercase text-gray-400">Company</h4>
          <ul className="mt-4 space-y-2">
            <li><button onClick={() => setPage('Home')} className="text-base text-gray-300 hover:text-white">About Us</button></li>
            <li><button onClick={() => setPage('Developers')} className="text-base text-gray-300 hover:text-white">Developers</button></li>
            <li><button onClick={() => setPage('Contact')} className="text-base text-gray-300 hover:text-white">Contact</button></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold tracking-wider uppercase text-gray-400">Contact</h4>
          <ul className="mt-4 space-y-2">
            <li className="text-base text-gray-300">Email: info@finosell.com</li>
            <li className="text-base text-gray-300">Website: www.finosell.com</li>
            <li className="text-base text-gray-300">Support: Telegram Channel</li>
          </ul>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-8 text-center text-base text-gray-400">
        <p>&copy; {new Date().getFullYear()} Finosell. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

// --- PAGES ---

// Home Page Component
const HomePage: React.FC<PageProps> = ({ setPage }) => (
  <div>
    {/* Hero Section */}
    <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-[#273B4A] sm:text-5xl md:text-6xl">
                <span className="block">Modern Finance Solutions</span>
                <span className="block text-[#D6AA1B]">for Ambitious Businesses</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-600">
                Finosell empowers startups and SMEs with smart, embedded banking and accounting. We simplify complex financial processes, helping you operate efficiently and grow with confidence.
            </p>
            <div className="mt-8 flex justify-center space-x-4">
                <button onClick={() => setPage('Solutions')} className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#D6AA1B] hover:bg-[#b58f16]">
                    Explore Solutions
                </button>
                <button onClick={() => setPage('Developers')} className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-[#D6AA1B] bg-white hover:bg-gray-100">
                    View API Docs
                </button>
            </div>
        </div>
    </div>

    {/* Features Section */}
    <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-base text-[#D6AA1B] font-semibold tracking-wide uppercase">Our Platform</h2>
                <p className="mt-2 text-3xl font-extrabold text-[#273B4A] tracking-tight sm:text-4xl">
                    Everything you need to manage your finances
                </p>
            </div>
            <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                <div className="pt-6">
                    <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                        <div className="-mt-6">
                            <div>
                                <span className="inline-flex items-center justify-center p-3 bg-[#D6AA1B] rounded-md shadow-lg">
                                    <CheckCircleIcon className="h-6 w-6 text-white" />
                                </span>
                            </div>
                            <h3 className="mt-8 text-lg font-medium text-[#273B4A] tracking-tight">Automated Accounting</h3>
                            <p className="mt-5 text-base text-gray-500">
                                Eliminate manual data entry with automated income, expense tracking, and real-time profit analysis.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="pt-6">
                    <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                        <div className="-mt-6">
                            <div>
                                <span className="inline-flex items-center justify-center p-3 bg-[#D6AA1B] rounded-md shadow-lg">
                                    <GlobeIcon className="h-6 w-6 text-white" />
                                </span>
                            </div>
                            <h3 className="mt-8 text-lg font-medium text-[#273B4A] tracking-tight">Global Card Issuing</h3>
                            <p className="mt-5 text-base text-gray-500">
                                Issue virtual USD &amp; Naira cards on Visa and Mastercard networks, accepted at over 37 million merchants worldwide.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="pt-6">
                    <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                        <div className="-mt-6">
                            <div>
                                <span className="inline-flex items-center justify-center p-3 bg-[#D6AA1B] rounded-md shadow-lg">
                                    <CodeBracketIcon className="h-6 w-6 text-white" />
                                </span>
                            </div>
                            <h3 className="mt-8 text-lg font-medium text-[#273B4A] tracking-tight">Developer-Friendly API</h3>
                            <p className="mt-5 text-base text-gray-500">
                                Integrate our financial services into your own platform with a single, powerful API. Go live in under 5 days.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
);

// Solutions Page Component
const SolutionsPage = () => {
    const accountingFeatures = [
        "Automated Income and Expense Tracking",
        "Real-Time Profit Analysis",
        "Receipt Management System",
        "Intelligent Transaction Categorization",
        "Downloadable Financial Reporting",
        "Multi-Account Reconciliation"
    ];

    const cardFeatures = [
        "Globally Accepted (37M+ merchants)",
        "Advanced 3D Secure Protection",
        "Full PCI DSS & NDPR Compliance",
        "Instant Freeze/Unfreeze and Limit Controls",
        "Enriched, Categorized Transaction Data",
        "Integrated Revenue Streams"
    ];
    
    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base text-[#D6AA1B] font-semibold tracking-wide uppercase">Our Solutions</h2>
                    <p className="mt-2 text-3xl font-extrabold text-[#273B4A] tracking-tight sm:text-4xl">
                        Powerful Tools to Drive Your Business Forward
                    </p>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
                        From automated bookkeeping to global payments, Finosell provides the infrastructure you need to succeed.
                    </p>
                </div>

                {/* Smart Accounting Section */}
                <div className="mt-20">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                        <div>
                            <h3 className="text-2xl font-extrabold text-[#273B4A] sm:text-3xl">Smart Accounting</h3>
                            <p className="mt-3 text-lg text-gray-600">
                                An automated financial management system designed to simplify bookkeeping and provide real-time insights. Eliminate manual data entry and maintain accurate financial records with minimal effort.
                            </p>
                            <dl className="mt-10 space-y-5">
                                {accountingFeatures.map(feature => (
                                    <div key={feature} className="relative">
                                        <dt>
                                            <CheckCircleIcon className="absolute h-6 w-6 text-green-500" />
                                            <p className="ml-9 text-lg leading-6 font-medium text-[#273B4A]">{feature}</p>
                                        </dt>
                                    </div>
                                ))}
                            </dl>
                        </div>
                        <div className="mt-10 lg:mt-0" aria-hidden="true">
                            <Image className="relative mx-auto rounded-lg shadow-xl" width={490} height={400} src="https://placehold.co/600x400/fefce8/D6AA1B?text=Accounting+Dashboard" alt="Accounting Dashboard" />
                        </div>
                    </div>
                </div>

                {/* Card Issuing Section */}
                <div className="mt-24">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                        <div className="lg:order-2">
                            <h3 className="text-2xl font-extrabold text-[#273B4A] sm:text-3xl">Virtual Card Issuing</h3>
                            <p className="mt-3 text-lg text-gray-600">
                                Issue multi-currency (USD &amp; Naira) virtual cards on the Visa and Mastercard networks. Perfect for paying for tools, subscriptions, or making cross-border purchases.
                            </p>
                            <dl className="mt-10 space-y-5">
                                {cardFeatures.map(feature => (
                                    <div key={feature} className="relative">
                                        <dt>
                                            <CheckCircleIcon className="absolute h-6 w-6 text-green-500" />
                                            <p className="ml-9 text-lg leading-6 font-medium text-[#273B4A]">{feature}</p>
                                        </dt>
                                    </div>
                                ))}
                            </dl>
                        </div>
                        <div className="mt-10 lg:mt-0 lg:order-1" aria-hidden="true">
                            <Image className="relative mx-auto rounded-lg shadow-xl" width={490} height={400} src="https://placehold.co/600x400/e2e8f0/273B4A?text=Virtual+Cards" alt="Virtual Cards" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Developers Page Component
const DevelopersPage = () => {
    const apiFeatures = [
        { name: 'High Throughput', description: 'Process over 500 transactions per second (TPS).', icon: CodeBracketIcon },
        { name: 'Rapid Integration', description: 'Go live in under 5 days with a single, well-documented API.', icon: CodeBracketIcon },
        { name: 'Real-Time Authorization', description: 'Set and enforce approval rules instantly as transactions happen.', icon: CodeBracketIcon },
        { name: 'Full Lifecycle Management', description: 'Activate, freeze, replace, or terminate cards via API.', icon: CodeBracketIcon },
        { name: 'Sandbox Environment', description: 'Access a complete sandbox for seamless testing and development.', icon: CodeBracketIcon },
        { name: 'Global Network', description: 'Full integration with Visa and Mastercard networks for global reach.', icon: CodeBracketIcon },
    ];
    return (
        <div className="bg-[#273B4A] py-16 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base font-semibold text-[#D6AA1B] tracking-wide uppercase">For Developers</h2>
                    <p className="mt-2 text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                        Build on a Foundation of Financial Power
                    </p>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300">
                        Our robust infrastructure is built to support high-volume, real-time financial operations. Integrate with ease and scale with confidence.
                    </p>
                </div>
                <div className="mt-16">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12 lg:grid-cols-3">
                        {apiFeatures.map((feature) => (
                            <div key={feature.name} className="relative">
                                <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-[#D6AA1B] text-white">
                                        <feature.icon className="h-6 w-6" aria-hidden="true" />
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-white">{feature.name}</p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-400">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
                 <div className="mt-12 text-center">
                    <a href="#" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#D6AA1B] hover:bg-[#b58f16]">
                        Read API Documentation
                    </a>
                </div>
            </div>
        </div>
    );
};

// Contact Page Component
const ContactPage = () => (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#273B4A] sm:text-4xl text-center">Contact Us</h2>
            <p className="mt-4 text-lg text-gray-600 text-center">
                We&apos;re here to help. Reach out to us for support or inquiries.
            </p>
            <div className="mt-12 bg-gray-50 p-8 rounded-lg shadow-md">
                <h3 className="text-lg font-medium text-[#273B4A]">Contact Information</h3>
                <dl className="mt-2 text-base text-gray-600">
                    <div className="mt-4">
                        <dt className="font-medium text-[#273B4A]">Email</dt>
                        <dd>info@finosell.com</dd>
                    </div>
                    <div className="mt-4">
                        <dt className="font-medium text-[#273B4A]">Website</dt>
                        <dd><a href="http://www.finosell.com" target="_blank" rel="noopener noreferrer" className="text-[#D6AA1B] hover:underline">www.finosell.com</a></dd>
                    </div>
                    <div className="mt-4">
                        <dt className="font-medium text-[#273B4A]">Support</dt>
                        <dd>We provide a dedicated Telegram channel for quick support to each company during business hours.</dd>
                    </div>
                </dl>
            </div>
        </div>
    </div>
);


// Main App Component
export default function App() {
  const [page, setPage] = useState('Home');

  const renderPage = () => {
    switch (page) {
      case 'Home':
        return <HomePage setPage={setPage} />;
      case 'Solutions':
        return <SolutionsPage />;
      case 'Developers':
        return <DevelopersPage />;
      case 'Contact':
        return <ContactPage />;
      default:
        return <HomePage setPage={setPage} />;
    }
  };

  return (
    <div className="bg-white font-sans">
      <Header setPage={setPage} page={page} />
      <main>
        {renderPage()}
      </main>
      <Footer setPage={setPage} />
    </div>
  );
}
