"use client";

import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Image from 'next/image';

// React Icons
import { 
  FiDollarSign, 
  FiFileText, 
  FiPieChart, 
  FiUsers, 
  FiCreditCard, 
  FiEye,
  FiCheckCircle
} from 'react-icons/fi';

export default function HomePage() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            const id = target.id || target.dataset.id;
            if (id) {
              setVisibleSections((prev) => new Set(prev).add(id));
            }
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white font-sans text-gray-800 overflow-x-hidden">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="container mx-auto flex flex-col items-center text-center px-4 py-24 lg:py-32 -mb-20" data-animate id="hero">
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-[#273B4A] max-w-4xl leading-tight transition-all duration-1000 delay-100 ${
              visibleSections.has('hero') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Modern Finance for a Borderless Business World
          </h1>
          <p
            className={`mt-6 text-lg text-[#8C8C8C] max-w-2xl transition-all duration-1000 delay-300 ${
              visibleSections.has('hero') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Simplify how you manage payroll, payments, and financial operations seamlessly anywhere.
          </p>
        </section>

        {/* Illustration Section */}
        <section className="bg-gradient-to-b from-white to-[#FFFBF0] pt-0 pb-10 lg:pb-18" data-animate id="illustration">
          <div className="container mx-auto px-4 lg:px-12">
            <div className="flex flex-col items-center text-center">
              <div
                className={`transition-all duration-1200 delay-200 ${
                  visibleSections.has('illustration') ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
              >
                <Image
                  src="/illustration-dashboard.png"
                  alt="Finosell Dashboard Illustration"
                  width={500}
                  height={300}
                  className="w-full h-auto rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
                  priority
                />
              </div>
              <p
                className={`mt-8 text-lg text-gray-600 max-w-2xl transition-all duration-1000 delay-500 ${
                  visibleSections.has('illustration') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                A clean, intuitive interface lets you handle payroll, invoicing, budgets, and team
                collaboration — all from a single, powerful dashboard.
              </p>
            </div>
          </div>
        </section>

        {/* Why You Need Finosell Section */}
        <section className="bg-gradient-to-br from-[#273B4A] via-[#1e3240] to-[#273B4A] py-20 lg:py-32" data-animate id="why-finosell">
          <div className="container mx-auto px-4 lg:px-12">
            <div className="max-w-5xl mx-auto">
              <div
                className={`text-center mb-16 transition-all duration-1000 ${
                  visibleSections.has('why-finosell') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                  Why you need FINOSELL
                </h2>
                <div className="w-24 h-1 bg-[#DAB22F] mx-auto mb-8"></div>
              </div>

              <div
                className={`bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/20 shadow-2xl transition-all duration-1000 delay-200 ${
                  visibleSections.has('why-finosell') ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
              >
                <p className="text-lg lg:text-xl text-white/95 leading-relaxed text-center mb-12">
                  Save more time to focus on growing your business and scaling beyond borders.
                  From gaining real-time insights into company spending to creating accurate invoices, managing payroll, building budgets, and tracking expenses — Finosell keeps your team organized and your numbers accurate.
                </p>

                {/* Feature Grid with Staggered Animation */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                  {[
                    { title: 'Payroll Processing', desc: 'Automate salary calculations and payments', Icon: FiDollarSign },
                    { title: 'Invoice Management', desc: 'Create and track invoices effortlessly', Icon: FiFileText },
                    { title: 'Budget Planning', desc: 'Set limits and monitor spending in real-time', Icon: FiPieChart },
                    { title: 'Team Collaboration', desc: 'Add members and assign role-based access', Icon: FiUsers },
                    { title: 'Expense Tracking', desc: 'Keep accurate records of all transactions', Icon: FiCreditCard },
                    { title: 'Real-Time Visibility', desc: 'Monitor cash flow and financial health instantly', Icon: FiEye },
                  ].map((feature, i) => {
                    const Icon = feature.Icon;
                    return (
                      <div
                        key={i}
                        data-animate
                        data-id={`feature-${i}`}
                        className={`bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-500 group hover:-translate-y-1 hover:shadow-xl ${
                          visibleSections.has(`feature-${i}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                        style={{ transitionDelay: `${i * 100}ms` }}
                      >
                        <div className="w-12 h-12 bg-[#DAB22F] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-white font-semibold text-lg mb-2">{feature.title}</h3>
                        <p className="text-white/80 text-sm">{feature.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Sections: Payroll, Invoicing, Budget, Team */}
        {[
          {
            title: 'Payroll',
            desc: 'Manage employee payroll effortlessly with our comprehensive beneficiary system. Add and verify beneficiaries with automatic bank account validation, calculate salaries with adjustable parameters including worked days, allowances, deductions, and taxes. Process bulk payments or send for approval, track payment history by period, and maintain detailed records of all payroll transactions with flexible status management.',
            img: '/payroll.png',
            imgAlt: 'Payroll Management Dashboard',
            bgFrom: 'white',
            bgTo: '#FFFBF0',
            imgSide: 'right',
            icon: FiDollarSign,
          },
          {
            title: 'Invoicing',
            desc: 'Create, send, and manage professional invoices in minutes. Track payments, and stay organized with real-time updates. Customize your invoices, apply taxes or discounts, and download payment records effortlessly — all in one place.',
            img: '/invoice.png',
            imgAlt: 'Invoicing Dashboard',
            bgFrom: '#FFFBF0',
            bgTo: 'white',
            imgSide: 'left',
            icon: FiFileText,
          },
          {
            title: 'Budget',
            desc: "Create and manage budgets across different categories to track your spending effectively. Set spending limits, monitor expenses in real-time, and get insights on how much you've spent versus your budget. Stay on top of your finances with expiry dates and status tracking for each budget category.",
            img: '/budget.png',
            imgAlt: 'Budget Dashboard',
            bgFrom: 'white',
            bgTo: '#FFFBF0',
            imgSide: 'right',
            icon: FiPieChart,
          },
          {
            title: 'Bring your team members on board',
            desc: 'Team members can receive payment notifications and manage the business account and perform all sales operations.',
            img: '/team.png',
            imgAlt: 'Team Management Dashboard',
            bgFrom: '#FFFBF0',
            bgTo: 'white',
            imgSide: 'left',
            icon: FiUsers,
            list: [
              'Add team members with role-based access control including Admin, Manager, Accountant, and Sales roles',
              'Manage customers and suppliers with detailed contact information and tracking',
              'Reset passwords and update roles with advanced filtering by name, role, and date',
            ],
          },
        ].map((section, i) => {
          const Icon = section.icon;
          return (
            <section
              key={i}
              className="relative overflow-hidden"
              data-animate
              id={`feature-section-${i}`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r from-${section.bgFrom} to-${section.bgTo} transition-opacity duration-1000 ${
                  visibleSections.has(`feature-section-${i}`) ? 'opacity-100' : 'opacity-0'
                }`}
              ></div>
              <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-28 relative z-10">
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center transition-all duration-1000 delay-200 ${
                    visibleSections.has(`feature-section-${i}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                >
                  {/* Text */}
                  <div className={`space-y-6 ${section.imgSide === 'left' ? 'lg:order-2 lg:pl-12' : 'lg:order-1 lg:pr-12'}`}>
                    <div className="flex items-center gap-3">
                      {Icon && <Icon className="w-8 h-8 text-[#DAB22F]" />}
                      <h2 className="text-3xl lg:text-4xl font-bold text-[#273B4A] leading-tight">
                        {section.title}
                      </h2>
                    </div>
                    <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                      {section.desc}
                    </p>
                    {section.list && (
                      <ul className="space-y-3 text-base lg:text-lg text-gray-600">
                        {section.list.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <FiCheckCircle className="w-6 h-6 text-[#DAB22F] flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Image */}
                  <div
                    className={`relative ${section.imgSide === 'left' ? 'lg:order-1 lg:-ml-8 xl:-ml-16' : 'lg:order-2 lg:-mr-8 xl:-mr-16'}`}
                  >
                    <div
                      className={`relative z-10 transition-all duration-1200 ${
                        visibleSections.has(`feature-section-${i}`) ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                      }`}
                      style={{ transitionDelay: '400ms' }}
                    >
                      <div className={`rounded-${section.imgSide === 'left' ? 'r' : 'l'}-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-shadow duration-500`}>
                        <Image
                          src={section.img}
                          alt={section.imgAlt}
                          width={700}
                          height={500}
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}

        {/* Trusted Brands Section */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-16 lg:py-24 mt-10" data-animate id="trusted">
          <div className="container mx-auto px-6 lg:px-12">
            <div
              className={`text-center mb-16 transition-all duration-1000 ${
                visibleSections.has('trusted') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-[#273B4A] mb-4">
                Brands that Trust & Work with Us
              </h2>
              <div className="w-20 h-1 bg-[#DAB22F] mx-auto"></div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-16 max-w-4xl mx-auto">
              {[
                { src: '/ishop247-logo.jpg', name: 'Ishop247' },
                { src: '/emeranda-logo.jpg', name: 'Emeranda Global<br />Investment' },
              ].map((brand, i) => (
                <div
                  key={i}
                  className={`flex flex-col items-center gap-4 transition-all duration-700 hover:scale-105 ${
                    visibleSections.has('trusted') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${i * 200}ms` }}
                >
                  <div className="w-32 h-32 rounded-full bg-white shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow duration-300 p-6">
                    <Image
                      src={brand.src}
                      alt={brand.name.replace('<br />', ' ')}
                      width={120}
                      height={120}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p
                    className="text-sm font-medium text-[#273B4A] text-center"
                    dangerouslySetInnerHTML={{ __html: brand.name }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}