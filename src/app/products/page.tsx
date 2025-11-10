import Header from '../components/Header';
import Footer from '../components/Footer';
import { FiCheckCircle } from 'react-icons/fi';

// Data for the detailed feature sections
const features = [
  {
    id: 'budgeting',
    title: 'Budgeting & Approvals',
    headline: 'Plan smarter. Approve faster. Spend wisely.',
    description: [
      'Finosell helps businesses take control of their company spending with a simple, transparent budgeting and approval system. From department budgets to project-based allocations, you can define limits, track expenses, and manage approvals seamlessly, all in one place.',
      'No more chasing signatures or digging through spreadsheets. Finosell automates multi-level approvals and keeps your entire organization accountable. Every transaction, budget request, and approval is stored securely, giving finance teams a complete view of how money flows through the business.',
      'With real-time dashboards, you can instantly see what’s been spent, what’s pending, and where budgets stand across teams. Approvers get instant notifications to approve or decline requests, while finance leaders gain the insight needed to forecast accurately and control overspending.',
      'Finosell brings clarity, speed, and structure to how modern businesses manage their budgets, helping you save time, reduce waste, and make data-driven financial decisions.'
    ],
  },
  {
    id: 'payroll',
    title: 'Payroll Automation',
    headline: 'Pay your team instantly, anywhere.',
    description: [
      'Finosell transforms payroll management for modern teams working across countries. Whether your staff is in Lagos, Nairobi, or Accra, you can automate salary payments, deductions, and compliance in minutes, not days.',
      'Our payroll engine connects directly to your company wallets and stablecoin balances, allowing you to pay employees in their preferred local currency or in stablecoins. Every transaction is secure, traceable, and recorded for auditing.',
      'With built-in tax and benefits management, Finosell ensures accurate, on-time disbursements and eliminates manual calculations. You can manage multiple pay cycles, set automated approvals, and generate detailed payroll reports from a single dashboard.',
      'Finance teams get peace of mind knowing that salaries, allowances, and reimbursements are processed automatically and transparently. Whether you’re paying five people or five hundred, Finosell keeps it simple, fast, and compliant.',
      'Power your workforce with automated payroll that’s built for a borderless business world.'
    ],
  },
  {
    id: 'transfers',
    title: 'Instant Global Transfers',
    headline: 'Move money without borders.',
    description: [
      'Finosell enables global businesses, importers, and exporters to move money seamlessly across Africa and beyond. Using local currency networks and stablecoin infrastructure, you can send and receive payments in seconds, without the friction of traditional banking.',
      'Our global transfer system eliminates long waiting times, hidden charges, and currency restrictions. Businesses can pay suppliers, contractors, or partners directly from the Finosell dashboard and receive funds instantly.',
      'Whether you’re sending naira to Nigeria, cedis to Ghana, or shillings to Kenya, Finosell handles the conversion transparently at competitive rates. With built-in compliance checks and blockchain-backed security, every transfer is safe, fast, and verifiable.',
      'Finosell’s instant global transfers empower businesses to trade, scale, and collaborate across borders confidently — all while keeping control of costs and liquidity.',
      'Expand your business reach with payments that work as fast as you do.'
    ],
  },
  {
    id: 'invoicing',
    title: 'Invoicing & Accounting',
    headline: 'Simplify billing. Stay financially organized.',
    description: [
      'Finosell combines professional invoicing and smart accounting tools to help businesses get paid faster and stay organized. You can create and send branded invoices to clients anywhere in the world and receive payments in local currencies or stablecoins.',
      'Each invoice is automatically tracked, and payments are reconciled in real time. Finosell connects invoicing with your expense and budgeting modules, giving you a full financial picture, from income to cash flow.',
      'With smart automation, you can avoid late payments, reduce human error, and generate reports instantly. Finance teams can easily review performance, identify trends, and make better decisions using data-driven insights.',
      'Whether you’re a growing startup or a multinational enterprise, Finosell ensures your books stay accurate and your cash flow predictable.',
      'From invoices to insights — Finosell makes business accounting effortless.'
    ],
  },
  {
    id: 'stablecoin',
    title: 'Stablecoin-Powered Payments',
    headline: 'Global payments, powered by stability.',
    description: [
      'Finosell bridges traditional finance and blockchain technology, enabling businesses to transact globally using stablecoins such as USDT and USDC. These digital assets mirror the value of the U.S. dollar, allowing companies to move money securely and predictably — without volatility or FX delays.',
      'With Finosell, businesses can pay suppliers, partners, or employees anywhere in the world instantly, while maintaining local currency flexibility. You can hold balances in stablecoins, convert to regional currencies when needed, and enjoy the transparency of blockchain-backed payments.',
      'Stablecoin-powered payments make cross-border transactions faster, cheaper, and more reliable than ever. Importers and exporters can now trade confidently, knowing every payment is traceable, stable, and compliant.',
      'Finosell brings the stability of the dollar and the speed of crypto into one seamless experience, powering the next era of global trade.'
    ],
  }
];

// List of features for the dark section
const featureList = [
  'Budgeting and Approvals',
  'Payroll Automation',
  'Instant Global Transfers',
  'Invoicing & Accounting',
  'Stablecoin powered Payments'
];

export default function ProductPage() {
  return (
    <div className="bg-white font-sans text-gray-800">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="container mx-auto flex flex-col items-center text-center px-4 py-24 lg:py-32">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#273B4A] max-w-4xl leading-tight">
            One Platform, All Your Finances
          </h1>
          <p className="mt-6 text-lg text-[#8C8C8C] max-w-2xl">
            Explore the powerful features that make Finosell the last financial tool your business will ever need.
          </p>
        </section>

        {/* Features Overview Section */}
        <section className="bg-gradient-to-br from-[#273B4A] via-[#1e3240] to-[#273B4A] py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-12">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                  Everything You Need to Scale
                </h2>
                <div className="w-24 h-1 bg-[#DAB22F] mx-auto mb-8"></div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/20 shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                  {featureList.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <FiCheckCircle className="w-6 h-6 text-[#DAB22F] flex-shrink-0 mt-1" />
                      <span className="text-lg text-white/95">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Features Section */}
        {features.map((feature, index) => (
          <section
            key={feature.id}
            id={feature.id}
            className={`py-14 lg:py-18 ${index % 2 === 0 ? 'bg-white' : 'bg-[#FFFBF0]'}`}
          >
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <div className="text-center lg:text-left">
                  <h2 className="text-3xl lg:text-4xl font-bold text-[#273B4A] leading-tight">
                    {feature.title}
                  </h2>
                  <p className="mt-4 text-xl lg:text-2xl text-gray-500 font-medium">
                    {feature.headline}
                  </p>
                  <div className="w-20 h-1 bg-[#DAB22F] my-8 mx-auto lg:mx-0"></div>
                </div>

                <div className="mt-8 space-y-5 text-base lg:text-lg text-gray-600 leading-relaxed text-center lg:text-left">
                  {feature.description.map((paragraph, pIndex) => (
                    <p key={pIndex}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}
      </main>

      <Footer />
    </div>
  );
}