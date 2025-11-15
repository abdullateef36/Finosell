"use client";

import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FiMail, FiGlobe, FiBriefcase } from 'react-icons/fi';

export default function PrivacyPolicyPage() {
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

      <main className="container mx-auto px-4 lg:px-8 py-16 lg:py-24 max-w-5xl">
        {/* Hero Header */}
        <section
          className="text-center mb-16 lg:mb-20"
          data-animate
          id="policy-hero"
        >
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-[#273B4A] leading-tight transition-all duration-1000 delay-100 ${
              visibleSections.has('policy-hero')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            Privacy Policy
          </h1>
          <p
            className={`mt-6 text-lg lg:text-xl text-[#8C8C8C] max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
              visibleSections.has('policy-hero')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
          </p>
          <div className="w-24 h-1 bg-[#DAB22F] mx-auto mt-8"></div>
        </section>

        {/* Introduction */}
        <section
          className="mb-16"
          data-animate
          id="intro"
        >
          <div
            className={`bg-gradient-to-r from-white to-[#FFFBF0] rounded-2xl p-8 lg:p-10 shadow-lg border border-gray-100 transition-all duration-1000 delay-200 ${
              visibleSections.has('intro')
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 translate-y-10 scale-95'
            }`}
          >
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
              Welcome to <span className="font-semibold text-[#273B4A]">Finosell Technologies Ltd.</span> 
              (&ldquo;Finosell,&ldquo; &ldquo;we,&ldquo; &ldquo;our,&ldquo; or &ldquo;us&ldquo;). 
              Your privacy is critically important to us. This Privacy Policy explains how we collect, 
              use, disclose, and safeguard your information when you use our web or mobile applications 
              and related services (collectively, the &ldquo;Services&ldquo;).
            </p>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              By using Finosell, you agree to the collection and use of information in accordance with this policy.
            </p>
          </div>
        </section>

        {/* Numbered Sections */}
        {[
          {
            id: 'info-collect',
            title: 'Information We Collect',
            content: (
              <>
                <p className="text-gray-700 leading-relaxed mb-6">
                  We collect only the information necessary to deliver and improve our services.
                </p>

                <div className="space-y-8">
                  {[
                    {
                      subtitle: 'a. Information You Provide',
                      items: [
                        'Your name and business name',
                        'Email address and phone number',
                        'Login credentials (username and password)',
                        'Business data: staff names, payroll amounts, budgets, invoices',
                      ],
                      note: 'We do not request or store your personal bank account or card details.',
                    },
                    {
                      subtitle: 'b. Automatically Collected Information',
                      items: [
                        'Device and browser info (IP address, OS)',
                        'Usage data: pages visited, actions, login times',
                        'Crash logs and diagnostics for performance',
                      ],
                    },
                    {
                      subtitle: 'c. Cookies and Similar Technologies',
                      items: [
                        'Keep you signed in',
                        'Remember preferences',
                        'Improve experience and analytics',
                      ],
                      note: 'You can manage cookies in your browser settings.',
                    },
                  ].map((section, i) => (
                    <div
                      key={i}
                      data-animate
                      data-id={`collect-${i}`}
                      className={`transition-all duration-700 ${
                        visibleSections.has(`collect-${i}`)
                          ? 'opacity-100 translate-y-0'
                          : 'opacity-0 translate-y-6'
                      }`}
                      style={{ transitionDelay: `${i * 150}ms` }}
                    >
                      <h3 className="text-xl font-semibold text-[#273B4A] mb-3">
                        {section.subtitle}
                      </h3>
                      <ul className="list-disc ml-6 space-y-2 text-gray-700 mb-3">
                        {section.items.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                      {section.note && (
                        <p className="text-sm italic text-gray-600 mt-3 pl-1">
                          {section.note}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </>
            ),
          },
          {
            id: 'info-use',
            title: 'How We Use Your Information',
            content: (
              <ul className="list-disc ml-6 space-y-3 text-gray-700 text-lg">
                {[
                  'Provide and maintain Finosell services',
                  'Generate invoices, payroll, and budget reports',
                  'Improve reliability, analytics, and UX',
                  'Send updates, features, or support',
                  'Comply with laws and prevent misuse',
                ].map((item, i) => (
                  <li
                    key={i}
                    data-animate
                    data-id={`use-${i}`}
                    className={`transition-all duration-500 ${
                      visibleSections.has(`use-${i}`)
                        ? 'opacity-100 translate-x-0'
                        : 'opacity-0 -translate-x-4'
                    }`}
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            ),
          },
          {
            id: 'info-sharing',
            title: 'Sharing Your Information',
            content: (
              <>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We do not sell, rent, or trade your personal data. We share only when necessary:
                </p>
                <ul className="list-disc ml-6 space-y-3 text-gray-700 mb-4">
                  {[
                    'With trusted service providers (hosting, analytics)',
                    'When required by law or authorities',
                    'With your consent for third-party integrations',
                  ].map((item, i) => (
                    <li
                      key={i}
                      data-animate
                      data-id={`share-${i}`}
                      className={`transition-all duration-500 ${
                        visibleSections.has(`share-${i}`)
                          ? 'opacity-100 translate-x-0'
                          : 'opacity-0 -translate-x-4'
                      }`}
                      style={{ transitionDelay: `${i * 100}ms` }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-gray-700 italic">
                  All partners are bound by strict confidentiality and data protection agreements.
                </p>
              </>
            ),
          },
          {
            id: 'data-retention',
            title: 'Data Retention',
            content: (
              <p className="text-gray-700 leading-relaxed">
                We retain your data only as long as your account is active or as required by law. 
                Upon account deletion, your data is securely erased from our servers within a reasonable timeframe.
              </p>
            ),
          },
          {
            id: 'data-security',
            title: 'Data Security',
            content: (
              <>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We use industry-standard encryption, access controls, and secure cloud infrastructure 
                  to protect your data from unauthorized access, alteration, or disclosure.
                </p>
                <p className="text-gray-700">
                  While no system is 100% secure, we continuously monitor and upgrade our defenses. 
                  We encourage you to use strong passwords and enable 2FA.
                </p>
              </>
            ),
          },
          {
            id: 'your-rights',
            title: 'Your Rights',
            content: (
              <>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You have full control over your data. You may:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
                  {['Access your data', 'Correct inaccuracies', 'Request deletion', 'Withdraw consent', 'Export your data', 'Object to processing']
                    .map((right, i) => (
                      <li
                        key={i}
                        data-animate
                        data-id={`right-${i}`}
                        className={`flex items-center gap-2 transition-all duration-500 ${
                          visibleSections.has(`right-${i}`)
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-4'
                        }`}
                        style={{ transitionDelay: `${i * 80}ms` }}
                      >
                        <span className="w-2 h-2 bg-[#DAB22F] rounded-full"></span>
                        {right}
                      </li>
                    ))}
                </ul>
                <p className="mt-6 text-gray-700">
                  To exercise your rights, email us at{' '}
                  <a
                    href="mailto:privacy@finosell.com"
                    className="text-[#DAB22F] font-semibold hover:underline"
                  >
                    privacy@finosell.com
                  </a>.
                </p>
              </>
            ),
          },
          {
            id: 'third-party',
            title: 'Third-Party Services',
            content: (
              <p className="text-gray-700 leading-relaxed">
                Finosell may integrate with trusted tools (e.g., Google Workspace, analytics). 
                Their privacy policies apply to data they process. We only integrate with GDPR-compliant partners.
              </p>
            ),
          },
          {
            id: 'child-privacy',
            title: 'Children\'s Privacy',
            content: (
              <p className="text-gray-700 leading-relaxed">
                Finosell is designed for businesses and professionals. We do not knowingly collect information from individuals under the age of 18.
              </p>
            ),
          },
          {
            id: 'policy-updates',
            title: '9. Policy Updates',
            content: (
              <p className="text-gray-700 leading-relaxed">
                We may update this policy to reflect new features or legal requirements. 
                Changes will be posted here with an updated “Last Updated” date. 
                Continued use constitutes acceptance.
              </p>
            ),
          },
          {
            id: 'contact',
            title: '10. Contact Us',
            content: (
              <div className="bg-gradient-to-br from-[#273B4A] to-[#1e3240] text-white rounded-2xl p-8 lg:p-10 shadow-xl">
                <p className="text-lg mb-6">
                  Have questions about privacy or data? We’re here to help.
                </p>
                <div className="space-y-5">
                  {[
                    {
                      icon: FiMail,
                      label: 'Email',
                      value: 'info@finosell.com',
                      href: 'mailto:info@finosell.com',
                    },
                    {
                      icon: FiBriefcase,
                      label: 'Company',
                      value: 'Finosell Technologies Ltd.',
                    },
                    {
                      icon: FiGlobe,
                      label: 'Website',
                      value: 'www.finosell.com',
                      href: 'https://www.finosell.com',
                    },
                  ].map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={i}
                        data-animate
                        data-id={`contact-${i}`}
                        className={`flex items-center gap-4 transition-all duration-700 ${
                          visibleSections.has(`contact-${i}`)
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-6'
                        }`}
                        style={{ transitionDelay: `${i * 150}ms` }}
                      >
                        <div className="w-12 h-12 bg-[#DAB22F] rounded-xl flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-white/80">{item.label}</p>
                          {item.href ? (
                            <a
                              href={item.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-lg font-semibold hover:underline"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-lg font-semibold">{item.value}</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ),
          },
        ].map((section, index) => (
          <section
            key={index}
            className="mb-16"
            data-animate
            id={section.id}
          >
            <div
              className={`transition-all duration-1000 ${
                visibleSections.has(section.id)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <h2 className="text-2xl lg:text-3xl font-bold text-[#273B4A] mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-[#DAB22F] text-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                  {index + 1}
                </span>
                {section.title}
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                {section.content}
              </div>
            </div>
          </section>
        ))}
      </main>

      <Footer />
    </div>
  );
}