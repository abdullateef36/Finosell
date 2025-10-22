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
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#273B4A] max-w-4xl leading-tight">
            Manage and track your transactions on the go!
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-lg text-[#8C8C8C] max-w-2xl">
            We provide sales management solutions that help you manage sales,
            expenses, debts, and invoices seamlessly.
          </p>
        </section>

        {/* Account Feature Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFFBF0] from-50% to-white to-50%"></div>
          <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-28 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left Side - App Screenshot (Yellow Background, extending to edge) */}
              <div className="relative lg:mr-auto lg:-ml-8 xl:-ml-16 order-2 lg:order-1">
                <div className="relative z-10">
                  <div className="rounded-r-2xl shadow-2xl overflow-hidden">
                    <Image 
                      src="/account.png" 
                      alt="Account Management Dashboard" 
                      width={700} 
                      height={500}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>

              {/* Right Side - Text Content (White Background) */}
              <div className="space-y-6 lg:pl-12 order-1 lg:order-2">
                <h2 className="text-3xl lg:text-4xl font-bold text-[#273B4A] leading-tight">
                  Account
                </h2>
                <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                  Manage your financial accounts with comprehensive oversight and control. 
                  View total balance across all sub-accounts, create and manage multiple bank accounts, 
                  transfer money securely to any bank with automatic account verification. 
                  Track categories and spending patterns, access financial insights with income and expense charts, 
                  and process pending payment approvals with role-based access control for enhanced security.
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
              {/* Left Side - Text Content (White Background) */}
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

              {/* Right Side - App Screenshot (Yellow Background, extending to edge) */}
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

        {/* Expense Feature Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFFBF0] from-50% to-white to-50%"></div>
          <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-28 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left Side - App Screenshot (Yellow Background, extending to edge) */}
              <div className="relative lg:mr-auto lg:-ml-8 xl:-ml-16 order-2 lg:order-1">
                <div className="relative z-10">
                  <div className="rounded-r-2xl shadow-2xl overflow-hidden">
                    <Image 
                      src="/expense.png" 
                      alt="Expense Tracking Dashboard" 
                      width={700} 
                      height={500}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>

              {/* Right Side - Text Content (White Background) */}
              <div className="space-y-6 lg:pl-12 order-1 lg:order-2">
                <h2 className="text-3xl lg:text-4xl font-bold text-[#273B4A] leading-tight">
                  Expense
                </h2>
                <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                  Track and manage all your business payments and transactions in one place. 
                  Record income and expenses, categorize transactions, and filter by date, amount, 
                  payment method, or transaction type. Sync with your bank account to automatically 
                  import transactions and maintain accurate financial records with advanced search and filtering capabilities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Payroll Feature Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-white from-50% to-[#FFFBF0] to-50%"></div>
          <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-28 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left Side - Text Content (White Background) */}
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

              {/* Right Side - App Screenshot (Yellow Background, extending to edge) */}
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

        {/* Team Feature Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFFBF0] from-50% to-white to-50%"></div>
          <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-28 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left Side - App Screenshot (Yellow Background, extending to edge) */}
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

              {/* Right Side - Text Content (White Background) */}
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


        {/* Other sections of your page will go here */}
      </main>

      <Footer />
    </div>
  );
}