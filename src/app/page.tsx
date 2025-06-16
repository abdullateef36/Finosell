"use client";

import { useState, useEffect } from 'react';
import {
  FiHome,
  FiDollarSign,
  FiPieChart,
  FiCreditCard,
  FiUser,
  FiHelpCircle,
  FiGift,
  FiLogOut,
  FiPlus,
  FiArrowUpRight,
  FiCopy,
  FiCheck,
  FiMenu
} from 'react-icons/fi';
import {
  HiOutlineShoppingBag,
  HiOutlineUsers,
  HiOutlinePaperAirplane
} from 'react-icons/hi';
import { IoIosArrowDown } from "react-icons/io";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      // Auto-open sidebar on mobile
      if (mobile) {
        setSidebarOpen(true);
      }
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex min-h-screen font-sans text-gray-300 bg-gray-100">
      {/* Sidebar - Always visible on mobile */}
      <aside className={`${
        sidebarOpen ? 'w-64 p-6 border-r' : 'w-0 p-0 border-none'
      } bg-white relative transition-all duration-300 ease-in-out overflow-hidden ${
        isMobile ? '!w-64 !p-6' : ''
      }`}>
        <div className={`flex items-center justify-between mb-10 ${
          (!sidebarOpen && !isMobile) ? 'hidden' : ''
        }`}>
          <div className="flex items-center gap-3 mt-4">
            <div className="w-8 h-8 bg-yellow-600 rounded flex items-center justify-center ml-3">
              <HiOutlineShoppingBag className="text-white text-sm" />
            </div>
            <div className="font-semibold text-gray-700 flex items-center gap-2">
              Hello Oreofe
              {/* Hide arrow down on mobile */}
              {!isMobile && (
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <IoIosArrowDown className="text-base" />
                </button>
              )}
            </div>
          </div>
        </div>

        {(sidebarOpen || isMobile) && (
          <>
            <nav className="flex flex-col gap-1 text-gray-600">
              <SidebarItem icon={<FiHome />} label="Home" active />
              <SidebarItem icon={<FiDollarSign />} label="Finance" />
              <SidebarItem icon={<FiPieChart />} label="Budget" />
              <SidebarItem icon={<FiCreditCard />} label="Expense" />
              <SidebarItem icon={<FiUser />} label="Account" />
              <SidebarItem icon={<HiOutlinePaperAirplane />} label="Travels" />
              <SidebarItem icon={<HiOutlineUsers />} label="Payroll" />
              <SidebarItem icon={<FiHelpCircle />} label="Help" />
              <SidebarItem icon={<FiGift />} label="Refer & Reward" />
              <SidebarItem icon={<FiLogOut />} label="Logout" />
            </nav>
            <div className="absolute bottom-6 left-6 flex items-center gap-2">
              <div className="w-6 h-6 bg-gray-800 rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs">f</span>
              </div>
              <span className="text-sm text-gray-600 font-medium">finosell.</span>
            </div>
          </>
        )}
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8 relative overflow-x-auto">
        {/* Hamburger menu - hidden on mobile */}
        {!sidebarOpen && !isMobile && (
          <button
            onClick={() => setSidebarOpen(true)}
            className="absolute left-4 top-4 text-gray-500 hover:text-gray-700 transition-colors z-10"
          >
            <FiMenu className="text-2xl mt-6" />
          </button>
        )}

        <div className="flex gap-4 md:gap-12 min-w-[800px]">
          {/* Left Column - Balance and Account Info */}
          <div className="w-1/2 px-2 md:px-14">
            {/* Top Balance Section */}
            <div className="mb-8">
              <div className="flex gap-3 md:gap-6 mb-6">
                <button className="px-3 md:px-4 py-2 bg-yellow-600 text-white font-medium shadow hover:bg-yellow-700 transition-colors rounded-tr-lg rounded-br-lg rounded-bl-lg text-sm md:text-base">
                  Total Balance
                </button>
                <button className="px-3 md:px-4 py-2 text-gray-900 font-medium text-sm md:text-base">
                  Wallet Balance
                </button>
              </div>

              <div className="mb-8">
                <div className="text-3xl md:text-5xl font-bold text-gray-800 mb-2">
                  ₦361,074<span className="text-gray-400 text-2xl md:text-3xl">.76</span>
                </div>
              </div>

              {/* Account Cards */}
              <div className="space-y-4 md:space-y-6 mb-6 md:mb-10">
                <AccountCard type="Main Account" />
                <AccountCard type="Sub Account" />
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 md:space-y-4">
                <ActionButton
                  icon={<FiPlus />}
                  title="Add Money"
                  subtitle="Space for subtitle text"
                  bgColor="bg-yellow-50"
                  iconColor="bg-yellow-600"
                />
                <ActionButton
                  icon={<FiArrowUpRight />}
                  title="Send Money"
                  subtitle="Space for subtitle text"
                  bgColor="bg-yellow-50"
                  iconColor="bg-yellow-600"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Store Metrics */}
          <div className="w-1/2 pr-2 md:pr-0">
            {/* Store Metrics Header - Outside the card */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-gray-900">Store Metrics</h3>
              <div className="flex gap-2 md:gap-4 text-xs ml-auto">
                <button className="flex items-center gap-1 text-yellow-700 font-medium">
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-yellow-600 rounded-full flex items-center justify-center">
                    <FiCheck className="text-white text-[8px] md:text-xs" />
                  </div>
                  Today
                </button>
                <button className="flex items-center gap-1 text-gray-500">
                  <div className="w-2 h-2 md:w-3 md:h-3 border border-gray-300 rounded-full"></div>
                  This Month
                </button>
                <button className="flex items-center gap-1 text-gray-500">
                  <div className="w-2 h-2 md:w-3 md:h-3 border border-gray-300 rounded-full"></div>
                  This Year
                </button>
                <button className="hidden md:flex items-center gap-1 text-gray-500">
                  <div className="w-3 h-3 border border-gray-300 rounded-full"></div>
                  All
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
              {/* Metrics Grid with crossing borders */}
              <div className="mb-12 md:mb-20 relative border border-gray-100">
                {/* Vertical Center Line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-px"></div>
                {/* Horizontal Center Line */}
                <div className="absolute left-0 right-0 top-1/2 h-px bg-gray-200 -translate-y-px"></div>

                {/* Top Row */}
                <div className="grid grid-cols-2 text-center font-semibold mt-3">
                  <div className="p-3 md:p-6 border-b border-r border-gray-100">
                    <Metric label="Total Spending" value="₦213,660.90" />
                  </div>
                  <div className="p-3 md:p-6 border-b border-gray-300">
                    <Metric label="Total Sales" value="₦198,231.01" />
                  </div>
                </div>

                {/* Bottom Row */}
                <div className="grid grid-cols-2 text-center font-semibold mb-3">
                  <div className="p-3 md:p-6 border-r border-gray-100">
                    <Metric label="Number of Sales" value="4,923" />
                  </div>
                  <div className="p-3 md:p-6">
                    <Metric label="Product Impressions" value="1,340,239" />
                  </div>
                </div>
              </div>

              {/* Cash Inflow Chart */}
              <div className="mb-8 md:mb-10 px-3 md:px-6">
                <h4 className="font-semibold mb-12 md:mb-20 text-gray-900 text-base md:text-lg">Cash Inflow</h4>

                <div className="relative px-2 md:px-8">
                  {/* Y-axis labels */}
                  <div className="absolute left-2 md:left-7 -top-10 md:-top-14 h-48 md:h-64 flex flex-col justify-between text-[10px] md:text-xs text-gray-400 py-2">
                    <span>3000</span>
                    <span>2500</span>
                    <span>2000</span>
                    <span>1500</span>
                    <span>1000</span>
                    <span>500</span>
                    <span>0</span>
                  </div>

                  {/* Chart info - positioned above the chart on the right */}
                  <div className="absolute -top-16 md:-top-20 right-2 md:right-28 border border-gray-100 rounded-lg bg-white p-2 md:p-3 shadow-sm text-xs">
                    <div className="text-gray-700 mb-1">April 2021</div>
                    <div className="flex items-center gap-1 md:gap-2 mb-1">
                      <span className="w-1.5 h-1.5 bg-gray-900 rounded-full"></span>
                      <span className="text-gray-900 font-bold">Cash Inflow</span>
                    </div>
                    <div className="font-semibold text-gray-900 font-bold">$230,171.90</div>
                  </div>

                  <div className="ml-4 md:ml-8 relative">
                    {/* Chart bars with varying heights */}
                    <div className="flex items-end gap-1 md:gap-2 h-32 md:h-40">
                      {[1200, 900, 1100, 850, 1300, 950, 1400, 1050, 1500, 1200, 1600, 1350, 1700, 1550, 1800, 1650, 1900, 1750, 2000, 2100].map((val, i) => (
                        <div
                          key={i}
                          className="bg-yellow-600 rounded-t-sm flex-1 min-w-0"
                          style={{
                            height: `${((val - (i % 3 * 100)) / 2500) * 100}%`
                          }}
                        />
                      ))}
                    </div>

                    {/* Trend line - positioned above bars without touching them */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none mt-3">
                      <polyline
                        fill="none"
                        stroke="#4B5563"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        points="
                           15,60  35,50  55,55  75,45  95,30
                          115,35 135,20 155,10 175,5 195,10
                          215,5  235,0  255,5  275,10 295,0
                          315,0  335,0  350,5  375,0  395,0
                        "
                      />
                      {/* Circle positioned at the middle of trend line */}
                      <circle
                        cx="150"
                        cy="22"
                        r="3"
                        fill="#FFFFFF"
                        stroke="#000"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>

                  {/* X-axis labels */}
                  <div className="flex justify-between text-[10px] md:text-xs text-gray-500 mt-2 md:mt-4 ml-4 md:ml-8">
                    <span>Jan</span>
                    <span>Dec</span>
                    <span>Jul</span>
                  </div>
                </div>
              </div>

              {/* Best Selling Products */}
              <div>
                <h4 className="font-semibold mb-4 md:mb-6 text-gray-900 text-base md:text-lg ml-3 md:ml-10">Best Selling Products</h4>
                <div className="flex items-end justify-center gap-2 md:gap-4 h-40 md:h-52 pb-4">
                  {[
                    { value: 97, label: '97' },
                    { value: 113, label: '113' },
                    { value: 215, label: '215' },
                    { value: 173, label: '173' },
                    { value: 140, label: '140' }
                  ].map((item, i) => (
                    <div key={i} className="text-center relative">
                      <div
                        className="w-8 md:w-16 bg-yellow-600 mx-auto rounded-tr-2xl relative flex items-start justify-center pt-2 md:pt-3"
                        style={{ height: `${(item.value / 215) * 120}px` }}
                      >
                        <span className="text-xs md:text-sm font-semibold text-white">
                          {item.label}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// Keep all the component definitions (SidebarItem, AccountCard, ActionButton, Metric) the same as before

type SidebarItemProps = {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
};

function SidebarItem({ icon, label, active = false }: SidebarItemProps) {
  return (
    <div className={`flex items-center gap-3 px-3 py-2 rounded cursor-pointer transition-colors ${
      active
        ? 'text-gray-800 bg-gray-50 font-medium'
        : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
    }`}>
      <span className="text-lg">{icon}</span>
      <span>{label}</span>
    </div>
  );
}

type AccountCardProps = {
  type: string;
};

function AccountCard({ type }: AccountCardProps) {
  return (
    <div className="bg-white rounded-lg border border-yellow-200 overflow-hidden">
      <div className="px-4 py-3 bg-gray-50">
        <div className="text-sm font-medium text-gray-700">{type}</div>
      </div>
      <div className="p-4 space-y-3">
        <div className="flex justify-between items-center py-1">
          <span className="text-sm text-gray-500">Account Number</span>
          <span className="text-sm font-semibold text-gray-900">0123456789</span>
        </div>
        <div className="flex justify-between items-center py-1">
          <span className="text-sm text-gray-500">Account Name</span>
          <span className="text-sm font-semibold text-gray-900">Oreofe Ventures</span>
        </div>
        <div className="flex justify-between items-center py-1">
          <span className="text-sm text-gray-500">Bank</span>
          <span className="text-sm font-semibold text-gray-900">Polaris Bank</span>
        </div>
      </div>
      <button className="w-full flex items-center justify-center gap-2 text-sm text-white bg-gray-800 px-4 py-3 hover:bg-gray-700 transition-colors">
        <span>Copy Account Number</span>
        <FiCopy className="text-xs" />
      </button>
    </div>
  );
}

type ActionButtonProps = {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  bgColor: string;
  iconColor: string;
};

function ActionButton({ icon, title, subtitle, bgColor, iconColor }: ActionButtonProps) {
  return (
    <div className={`${bgColor} rounded-lg p-4 cursor-pointer hover:shadow-sm border border-gray-300
    transition-shadow`}>
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 ${iconColor} rounded-lg flex items-center justify-center text-white font-bold`}>
          {icon}
        </div>
        <div>
          <div className="font-medium text-gray-800">{title}</div>
          <div className="text-sm text-gray-500">{subtitle}</div>
        </div>
      </div>
    </div>
  );
}

type MetricProps = {
  label: string;
  value: string;
};

function Metric({ label, value }: MetricProps) {
  return (
    <div>
      <div className="text-sm text-gray-500 mb-1">{label}</div>
      <div className="text-2xl font-bold text-gray-800">{value}</div>
    </div>
  );
}