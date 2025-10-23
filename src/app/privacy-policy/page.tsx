import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white font-sans text-gray-800">
      <Header />
      
      <main className="container mx-auto px-4 lg:px-8 py-12 lg:py-20 max-w-4xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#273B4A] mb-4">
            Privacy Policy
          </h1>
        </div>

        {/* Introduction */}
        <div className="mb-10">
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Welcome to Finosell Technologies Ltd. (&ldquo;Finosell,&ldquo; &ldquo;we,&ldquo; &ldquo;our,&ldquo; or &ldquo;us&ldquo;). 
            Your privacy is important to us. This Privacy Policy describes how we collect, 
            use, and protect your information when you use Finosell, our web or mobile 
            applications, and related services (collectively, the &ldquo;Services&ldquo;).
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            By using Finosell, you agree to the terms described in this policy.
          </p>
        </div>

        {/* Section 1 */}
        <section className="mb-10">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#273B4A] mb-4">
            1. Information We Collect
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We collect only the information necessary to operate and improve our services.
          </p>

          <div className="ml-4">
            <h3 className="text-xl font-semibold text-[#273B4A] mb-3">
              a. Information You Provide
            </h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              When you create an account or use Finosell, we may collect:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-gray-700 mb-6">
              <li>Your name and business name</li>
              <li>Email address and phone number</li>
              <li>Login credentials (username and password)</li>
              <li>Business-related information such as staff names, payroll amounts, budgets, and invoices you create or upload</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">
              We do not request or store your personal bank account information or card details.
            </p>

            <h3 className="text-xl font-semibold text-[#273B4A] mb-3">
              b. Automatically Collected Information
            </h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              When you use Finosell, we automatically collect:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-gray-700 mb-6">
              <li>Device and browser information (e.g., IP address, operating system)</li>
              <li>Usage data such as pages visited, actions taken, and login times</li>
              <li>Crash logs and diagnostic data to improve performance</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#273B4A] mb-3">
              c. Cookies and Similar Technologies
            </h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              We use cookies to:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-gray-700 mb-3">
              <li>Keep you signed in</li>
              <li>Remember your preferences</li>
              <li>Improve overall user experience and analytics</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              You can manage cookie preferences from your browser settings.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="mb-10">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#273B4A] mb-4">
            2. How We Use Your Information
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            We use the collected information to:
          </p>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>Provide and maintain Finosell services</li>
            <li>Generate invoices, payroll summaries, and budget reports</li>
            <li>Improve system reliability, analytics, and user experience</li>
            <li>Communicate updates, new features, or support information</li>
            <li>Ensure compliance with applicable laws and prevent misuse</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="mb-10">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#273B4A] mb-4">
            3. Sharing Your Information
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We do not sell, rent, or trade your personal data. We may share limited 
            information only in the following cases:
          </p>
          <ul className="list-disc ml-6 space-y-2 text-gray-700 mb-4">
            <li>With trusted service providers who help us operate our systems (e.g., cloud hosting, analytics)</li>
            <li>When required by law or regulatory authorities</li>
            <li>With your consent, if we ever need to integrate a third-party feature (e.g., payment API or accounting tools)</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            All partners are bound by confidentiality and data protection agreements.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-10">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#273B4A] mb-4">
            4. Data Retention
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We retain your data for as long as you maintain an active account or as 
            required by law. When you delete your account, your data is securely removed 
            from our servers within a reasonable timeframe.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mb-10">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#273B4A] mb-4">
            5. Data Security
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We take data security seriously. Finosell uses modern encryption, access 
            controls, and secure storage to protect your information from unauthorized 
            access, alteration, or disclosure.
          </p>
          <p className="text-gray-700 leading-relaxed">
            However, no digital system is completely immune from risk, and we encourage 
            users to protect their login credentials.
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-10">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#273B4A] mb-4">
            6. Your Rights
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            You have the right to:
          </p>
          <ul className="list-disc ml-6 space-y-2 text-gray-700 mb-4">
            <li>Access and review your personal data</li>
            <li>Request correction or deletion of your information</li>
            <li>Withdraw consent for specific data uses</li>
            <li>Request a copy of your data (data portability)</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            To exercise these rights, please contact us via{' '}
            <a href="mailto:support@finosell.com" className="text-[#DAB22F] hover:underline font-semibold">
              privacy@finosell.com
            </a>.
          </p>
        </section>

        {/* Section 7 */}
        <section className="mb-10">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#273B4A] mb-4">
            7. Third-Party Services
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Finosell may integrate with trusted third-party tools (e.g., Google Workspace, 
            analytics platforms, or accounting tools). Please review their individual 
            privacy policies for how they handle data.
          </p>
        </section>

        {/* Section 8 */}
        <section className="mb-10">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#273B4A] mb-4">
            8. Children&apos;s Privacy
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Finosell is designed for businesses and professionals. We do not knowingly 
            collect information from individuals under the age of 18.
          </p>
        </section>

        {/* Section 9 */}
        <section className="mb-10">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#273B4A] mb-4">
            9. Policy Updates
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We may update this Privacy Policy periodically to reflect changes in our 
            practices or legal obligations. Updates will be posted on this page with a 
            new &ldquo;Last Updated&ldquo; date. Continued use of Finosell after updates means you 
            accept the revised policy.
          </p>
        </section>

        {/* Section 10 */}
        <section className="mb-10">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#273B4A] mb-4">
            10. Contact Us
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            If you have any questions about this Privacy Policy or your personal data, 
            please contact us at:
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 space-y-3">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-[#DAB22F]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span className="text-gray-700">
                Email:{' '}
                <a href="mailto:info@finosell.com" className="text-[#DAB22F] hover:underline font-semibold">
                  info@finosell.com
                </a>
              </span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-[#DAB22F]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700">
                Company: <span className="font-semibold">Finosell Technologies Ltd.</span>
              </span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-[#DAB22F]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700">
                Website:{' '}
                <a href="https://www.finosell.com" target="_blank" rel="noopener noreferrer" className="text-[#DAB22F] hover:underline font-semibold">
                  www.finosell.com
                </a>
              </span>
            </div>
          </div>
        </section>

        {/* CTA Section
        <div className="mt-16 p-8 bg-gradient-to-r from-[#FFFBF0] to-[#FFF8E5] rounded-2xl text-center">
          <h3 className="text-2xl font-bold text-[#273B4A] mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Join thousands of businesses managing their finances with Finosell
          </p>
          <a 
            href="/signup" 
            className="inline-block bg-[#DAB22F] hover:bg-[#c9a429] text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-all duration-300"
          >
            Create Your Account
          </a>
        </div> */}
      </main>

      <Footer />
    </div>
  );
}