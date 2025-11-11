"use client";

import { useState, useEffect } from 'react';
import { FiCheckCircle, FiTrendingUp, FiZap, FiGlobe, FiFileText, FiDollarSign, FiArrowRight, FiStar } from 'react-icons/fi';
import Header from '../components/Header';
import Footer from '../components/Footer';

const features = [
  {
    id: 'budgeting',
    icon: FiTrendingUp,
    title: 'Budgeting & Approvals',
    headline: 'Plan smarter. Approve faster. Spend wisely.',
    description: [
      `Finosell helps businesses take control of their company spending with a simple, transparent budgeting and approval system. From department budgets to project-based allocations, you can define limits, track expenses, and manage approvals seamlessly, all in one place.`,
      `No more chasing signatures or digging through spreadsheets. Finosell automates multi-level approvals and keeps your entire organization accountable. Every transaction, budget request, and approval is stored securely, giving finance teams a complete view of how money flows through the business.`,
      `With real-time dashboards, you can instantly see what's been spent, what's pending, and where budgets stand across teams. Approvers get instant notifications to approve or decline requests, while finance leaders gain the insight needed to forecast accurately and control overspending.`,
      `Finosell brings clarity, speed, and structure to how modern businesses manage their budgets, helping you save time, reduce waste, and make data-driven financial decisions.`
    ],
  },
  {
    id: 'payroll',
    icon: FiZap,
    title: 'Payroll Automation',
    headline: 'Pay your team instantly, anywhere.',
    description: [
      `Finosell transforms payroll management for modern teams working across countries. Whether your staff is in Lagos, Nairobi, or Accra, you can automate salary payments, deductions, and compliance in minutes, not days.`,
      `Our payroll engine connects directly to your company wallets and stablecoin balances, allowing you to pay employees in their preferred local currency or in stablecoins. Every transaction is secure, traceable, and recorded for auditing.`,
      `With built-in tax and benefits management, Finosell ensures accurate, on-time disbursements and eliminates manual calculations. You can manage multiple pay cycles, set automated approvals, and generate detailed payroll reports from a single dashboard.`,
      `Finance teams get peace of mind knowing that salaries, allowances, and reimbursements are processed automatically and transparently. Whether you're paying five people or five hundred, Finosell keeps it simple, fast, and compliant.`,
      `Power your workforce with automated payroll that's built for a borderless business world.`
    ],
  },
  {
    id: 'transfers',
    icon: FiGlobe,
    title: 'Instant Global Transfers',
    headline: 'Move money without borders.',
    description: [
      `Finosell enables global businesses, importers, and exporters to move money seamlessly across Africa and beyond. Using local currency networks and stablecoin infrastructure, you can send and receive payments in seconds, without the friction of traditional banking.`,
      `Our global transfer system eliminates long waiting times, hidden charges, and currency restrictions. Businesses can pay suppliers, contractors, or partners directly from the Finosell dashboard and receive funds instantly.`,
      `Whether you are sending naira to Nigeria, cedis to Ghana, or shillings to Kenya, Finosell handles the conversion transparently at competitive rates. With built-in compliance checks and blockchain-backed security, every transfer is safe, fast, and verifiable.`,
      `Finosell instant global transfers empower businesses to trade, scale, and collaborate across borders confidently — all while keeping control of costs and liquidity.`,
      `Expand your business reach with payments that work as fast as you do.`
    ],
  },
  {
    id: 'invoicing',
    icon: FiFileText,
    title: 'Invoicing & Accounting',
    headline: 'Simplify billing. Stay financially organized.',
    description: [
      `Finosell combines professional invoicing and smart accounting tools to help businesses get paid faster and stay organized. You can create and send branded invoices to clients anywhere in the world and receive payments in local currencies or stablecoins.`,
      `Each invoice is automatically tracked, and payments are reconciled in real time. Finosell connects invoicing with your expense and budgeting modules, giving you a full financial picture, from income to cash flow.`,
      `With smart automation, you can avoid late payments, reduce human error, and generate reports instantly. Finance teams can easily review performance, identify trends, and make better decisions using data-driven insights.`,
      `Whether you are a growing startup or a multinational enterprise, Finosell ensures your books stay accurate and your cash flow predictable.`,
      `From invoices to insights — Finosell makes business accounting effortless.`
    ],
  },
  {
    id: 'stablecoin',
    icon: FiDollarSign,
    title: 'Stablecoin-Powered Payments',
    headline: 'Global payments, powered by stability.',
    description: [
      `Finosell bridges traditional finance and blockchain technology, enabling businesses to transact globally using stablecoins such as USDT and USDC. These digital assets mirror the value of the U.S. dollar, allowing companies to move money securely and predictably — without volatility or FX delays.`,
      `With Finosell, businesses can pay suppliers, partners, or employees anywhere in the world instantly, while maintaining local currency flexibility. You can hold balances in stablecoins, convert to regional currencies when needed, and enjoy the transparency of blockchain-backed payments.`,
      `Stablecoin-powered payments make cross-border transactions faster, cheaper, and more reliable than ever. Importers and exporters can now trade confidently, knowing every payment is traceable, stable, and compliant.`,
      `Finosell brings the stability of the dollar and the speed of crypto into one seamless experience, powering the next era of global trade.`
    ],
  }
];

const featureList = [
  { name: 'Budgeting and Approvals', icon: FiTrendingUp },
  { name: 'Payroll Automation', icon: FiZap },
  { name: 'Instant Global Transfers', icon: FiGlobe },
  { name: 'Invoicing & Accounting', icon: FiFileText },
  { name: 'Stablecoin Powered Payments', icon: FiDollarSign }
];

export default function ProductPage() {
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState(new Set());

  // Smooth scroll to section
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white font-sans text-gray-800">
      <Header />
      
      {/* Reduced bottom padding on main */}
      <main className="pt-16 pb-8">
        {/* Hero Section with Parallax */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#273B4A] via-[#1e3240] to-[#273B4A] text-white">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-[#DAB22F] rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 py-32 lg:py-40 relative z-10">
            <div 
              className="text-center transform transition-all duration-700"
              style={{ transform: `translateY(${scrollY * 0.3}px)` }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
                <FiStar className="w-4 h-4 text-[#DAB22F]" />
                <span className="text-sm text-white/90">All-in-One Financial Platform</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                One Platform,
                <span className="block bg-gradient-to-r from-[#DAB22F] to-yellow-200 bg-clip-text text-transparent">
                  All Your Finances
                </span>
              </h1>
              
              <p className="mt-6 text-xl text-white/80 max-w-2xl mx-auto">
                Explore the powerful features that make Finosell the last financial tool your business will ever need.
              </p>
            </div>
          </div>
        </section>

        {/* Features Grid Section */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-4 lg:px-12">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16" data-animate id="features-header">
                <h2 className={`text-4xl lg:text-5xl font-bold text-[#273B4A] mb-4 transition-all duration-1000 ${
                  visibleSections.has('features-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                  Everything You Need to Scale
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Comprehensive tools designed for modern businesses
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featureList.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={index}
                      className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-[#DAB22F] transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-[#DAB22F]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      <div className="relative z-10">
                        <div className="w-14 h-14 bg-gradient-to-br from-[#273B4A] to-[#1e3240] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-7 h-7 text-[#DAB22F]" />
                        </div>
                        
                        <h3 className="text-xl font-bold text-[#273B4A] mb-2">
                          {feature.name}
                        </h3>
                        
                        <div className="w-12 h-1 bg-[#DAB22F] rounded-full mb-3"></div>
                        
                        {/* Clickable "Learn more" */}
                        <div
                          className="flex items-center text-[#DAB22F] font-semibold text-sm cursor-pointer group-hover:translate-x-2 transition-transform duration-300"
                          onClick={() => scrollToSection(features[index].id)}
                        >
                          Learn more <FiArrowRight className="w-4 h-4 ml-1" />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Features Section */}
        {features.map((feature, index) => {
          const Icon = feature.icon;
          const isEven = index % 2 === 0;
          const isLast = index === features.length - 1;
          
          return (
            <section
              key={feature.id}
              id={feature.id}
              data-animate
              className={`py-20 lg:py-28 ${isLast ? 'pb-12 lg:pb-16' : ''} ${
                isEven ? 'bg-gradient-to-br from-gray-50 to-white' : 'bg-gradient-to-br from-[#FFFBF0] to-white'
              }`}
            >
              <div className="container mx-auto px-4 lg:px-8">
                <div className="max-w-5xl mx-auto">
                  <div className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
                    visibleSections.has(feature.id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}>
                    <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                      <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-[#DAB22F]/20 to-[#273B4A]/20 rounded-3xl blur-2xl"></div>
                        <div className="relative bg-gradient-to-br from-[#273B4A] to-[#1e3240] rounded-3xl p-12 flex items-center justify-center">
                          <Icon className="w-32 h-32 text-[#DAB22F]" strokeWidth={1.5} />
                        </div>
                      </div>
                    </div>
                    
                    <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#DAB22F]/10 rounded-full mb-4">
                        <div className="w-2 h-2 bg-[#DAB22F] rounded-full animate-pulse"></div>
                        <span className="text-sm font-semibold text-[#273B4A]">Feature {index + 1}</span>
                      </div>
                      
                      <div className="text-3xl lg:text-5xl font-bold text-[#273B4A] leading-tight mb-4">
                        {feature.title}
                      </div>
                      
                      <p className="text-2xl text-gray-600 font-medium mb-6">
                        {feature.headline}
                      </p>
                      
                      <div className="w-20 h-1.5 bg-gradient-to-r from-[#DAB22F] to-yellow-300 rounded-full mb-8"></div>
                      
                      <div className="space-y-5 text-lg text-gray-600 leading-relaxed">
                        {feature.description.map((paragraph, pIndex) => (
                          <p key={pIndex} className="flex items-start gap-3">
                            <FiCheckCircle className="w-6 h-6 text-[#DAB22F] flex-shrink-0 mt-1" />
                            <span>{paragraph}</span>
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </main>

      <Footer />
    </div>
  );
}