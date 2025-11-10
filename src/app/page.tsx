import Header from './components/Header';
import Footer from './components/Footer';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="bg-white font-sans text-gray-800">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="container mx-auto flex flex-col items-center text-center px-4 py-24 lg:py-32">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#273B4A] max-w-4xl leading-tight">
            Modern Finance for a Borderless Business World
          </h1>
          <p className="mt-6 text-lg text-[#8C8C8C] max-w-2xl">
            Simplify how you manage payroll, payments, and financial operations seamlessly anywhere.
          </p>
        </section>

        {/* NEW: How It Works Illustration Section */}
        <section className="bg-gradient-to-b from-white to-[#FFFBF0] py-10 lg:py-18">
          <div className="container mx-auto px-4 lg:px-12">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#273B4A]">
                Manage Your Finances with Ease
              </h2>
              <div className="">
                <Image
                  src="/illustration-dashboard.png"
                  alt="Finosell Dashboard Illustration"
                  width={500}
                  height={300}
                  className="w-full h-auto rounded-2xl shadow-xl"
                  priority
                />
              </div>
              <p className="mt-8 text-lg text-gray-600 max-w-2xl">
                A clean, intuitive interface lets you handle payroll, invoicing, budgets, and team
                collaboration — all from a single, powerful dashboard.
              </p>
            </div>
          </div>
        </section>

        {/* Why You Need Finosell Section */}
        <section className="bg-gradient-to-br from-[#273B4A] via-[#1e3240] to-[#273B4A] py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-12">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                  Why you need FINOSELL
                </h2>
                <div className="w-24 h-1 bg-[#DAB22F] mx-auto mb-8"></div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/20 shadow-2xl">
                <p className="text-lg lg:text-xl text-white/95 leading-relaxed text-center mb-12">
                  Save more time to focus on growing your business and scaling beyond borders.
                  From gaining real-time insights into company spending to creating accurate invoices, managing payroll, building budgets, and tracking expenses — Finosell keeps your team organized and your numbers accurate.
                </p>
                {/* Feature Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                  {/* Feature 1: Payroll */}
                  <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                    <div className="w-12 h-12 bg-[#DAB22F] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h3 className="text-white font-semibold text-lg mb-2">Payroll Processing</h3>
                    <p className="text-white/80 text-sm">Automate salary calculations and payments</p>
                  </div>

                  {/* Feature 2: Invoicing */}
                  <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                    <div className="w-12 h-12 bg-[#DAB22F] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h3 className="text-white font-semibold text-lg mb-2">Invoice Management</h3>
                    <p className="text-white/80 text-sm">Create and track invoices effortlessly</p>
                  </div>

                  {/* Feature 3: Budget */}
                  <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                    <div className="w-12 h-12 bg-[#DAB22F] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-white font-semibold text-lg mb-2">Budget Planning</h3>
                    <p className="text-white/80 text-sm">Set limits and monitor spending in real-time</p>
                  </div>

                  {/* Feature 4: Team */}
                  <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                    <div className="w-12 h-12 bg-[#DAB22F] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <h3 className="text-white font-semibold text-lg mb-2">Team Collaboration</h3>
                    <p className="text-white/80 text-sm">Add members and assign role-based access</p>
                  </div>

                  {/* Feature 5: Expense */}
                  <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                    <div className="w-12 h-12 bg-[#DAB22F] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h3 className="text-white font-semibold text-lg mb-2">Expense Tracking</h3>
                    <p className="text-white/80 text-sm">Keep accurate records of all transactions</p>
                  </div>

                  {/* Feature 6: Visibility */}
                  <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                    <div className="w-12 h-12 bg-[#DAB22F] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <h3 className="text-white font-semibold text-lg mb-2">Real-Time Visibility</h3>
                    <p className="text-white/80 text-sm">Monitor cash flow and financial health instantly</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Payroll Feature Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-white from-50% to-[#FFFBF0] to-50%"></div>
          <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-28 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="space-y-6 lg:pr-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-[#273B4A] leading-tight">
                  Payroll
                </h2>
                <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                  Manage employee payroll effortlessly with our comprehensive beneficiary system.
                  Add and verify beneficiaries with automatic bank account validation, calculate salaries
                  with adjustable parameters including worked days, allowances, deductions, and taxes.
                  Process bulk payments or send for approval, track payment history by period, and maintain
                  detailed records of all payroll transactions with flexible status management.
                </p>
              </div>
              <div className="relative lg:ml-auto lg:-mr-8 xl:-mr-16">
                <div className="relative z-10">
                  <div className="rounded-l-2xl shadow-2xl overflow-hidden">
                    <Image
                      src="/payroll.png"
                      alt="Payroll Management Dashboard"
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

        {/* Invoicing Feature Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFFBF0] from-50% to-white to-50%"></div>
          <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-28 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="relative lg:mr-auto lg:-ml-8 xl:-ml-16 order-2 lg:order-1">
                <div className="relative z-10">
                  <div className="rounded-r-2xl shadow-2xl overflow-hidden">
                    <Image
                      src="/invoice.png"
                      alt="Invoicing Dashboard"
                      width={700}
                      height={500}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-6 lg:pl-12 order-1 lg:order-2">
                <h2 className="text-3xl lg:text-4xl font-bold text-[#273B4A] leading-tight">
                  Invoicing
                </h2>
                <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                  Create, send, and manage professional invoices in minutes.
                  Track payments, and stay organized with real-time updates.
                  Customize your invoices, apply taxes or discounts, and download payment records effortlessly — all in one place.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Budget Feature Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-white from-50% to-[#FFFBF0] to-50%"></div>
          <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-28 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="space-y-6 lg:pr-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-[#273B4A] leading-tight">
                  Budget
                </h2>
                <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                  Create and manage budgets across different categories to track your spending effectively.
                  Set spending limits, monitor expenses in real-time, and get insights on how much you&apos;ve spent
                  versus your budget. Stay on top of your finances with expiry dates and status tracking for
                  each budget category.
                </p>
              </div>
              <div className="relative lg:ml-auto lg:-mr-8 xl:-mr-16">
                <div className="relative z-10">
                  <div className="rounded-l-2xl shadow-2xl overflow-hidden">
                    <Image
                      src="/budget.png"
                      alt="Budget Dashboard"
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

        {/* Team Feature Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFFBF0] from-50% to-white to-50%"></div>
          <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-28 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="relative lg:mr-auto lg:-ml-8 xl:-ml-16 order-2 lg:order-1">
                <div className="relative z-10">
                  <div className="rounded-r-2xl shadow-2xl overflow-hidden">
                    <Image
                      src="/team.png"
                      alt="Team Management Dashboard"
                      width={700}
                      height={500}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-6 lg:pl-12 order-1 lg:order-2">
                <h2 className="text-3xl lg:text-4xl font-bold text-[#273B4A] leading-tight">
                  Bring your team members on board
                </h2>
                <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                  Team members can receive payment notifications and manage the business account and perform all sales operations.
                </p>
                <ul className="space-y-3 text-base lg:text-lg text-gray-600">
                  <li className="flex items-start gap-2">
                    <svg className="w-6 h-6 text-[#DAB22F] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Add team members with role-based access control including Admin, Manager, Accountant, and Sales roles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-6 h-6 text-[#DAB22F] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Manage customers and suppliers with detailed contact information and tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-6 h-6 text-[#DAB22F] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Reset passwords and update roles with advanced filtering by name, role, and date</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted Brands Section */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-16 lg:py-24 mt-10">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#273B4A] mb-4">
                Brands that Trust & Work with Us
              </h2>
              <div className="w-20 h-1 bg-[#DAB22F] mx-auto"></div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-16 max-w-4xl mx-auto">
              <div className="flex flex-col items-center gap-4">
                <div className="w-32 h-32 rounded-full bg-white shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow duration-300 p-6">
                  <Image
                    src="/ishop247-logo.jpg"
                    alt="Ishop247"
                    width={120}
                    height={120}
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-sm font-medium text-[#273B4A] text-center">Ishop247</p>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="w-32 h-32 rounded-full bg-white shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow duration-300 p-6">
                  <Image
                    src="/emeranda-logo.jpg"
                    alt="Emeranda Global Investment"
                    width={120}
                    height={120}
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-sm font-medium text-[#273B4A] text-center">Emeranda Global<br />Investment</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}