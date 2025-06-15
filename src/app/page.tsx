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
  FiCopy
} from 'react-icons/fi';
import {
  HiOutlineShoppingBag,
  HiOutlineUsers,
  HiOutlinePaperAirplane
} from 'react-icons/hi';

export default function Dashboard() {
  return (
    <div className="flex min-h-screen font-sans text-gray-300 bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r p-6 relative">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-8 h-8 bg-yellow-500 rounded flex items-center justify-center">
            <HiOutlineShoppingBag className="text-white text-sm" />
          </div>
          <div className="font-semibold text-gray-700">Hello Oreofe</div>
        </div>
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
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="flex gap-6">
          {/* Left Column - Balance and Account Info */}
          <div className="w-1/2">
            {/* Top Balance Section */}
            <div className="mb-8">
              <div className="flex gap-6 mb-6">
                <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg font-medium">
                  Total Balance
                </button>
                <button className="px-4 py-2 text-gray-900 font-medium">
                  Wallet Balance
                </button>
              </div>

              <div className="mb-8">
              <div className="text-5xl font-bold text-gray-800 mb-2">
             ₦361,074<span className="text-gray-400 text-3xl">.76</span>
            </div>
            </div>

              {/* Account Cards */}
              <div className="space-y-6 mb-8">
                <AccountCard type="Main Account" />
                <AccountCard type="Sub Account" />
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <ActionButton
                  icon={<FiPlus />}
                  title="Add Money"
                  subtitle="Space for subtitle text"
                  bgColor="bg-yellow-50"
                  iconColor="bg-yellow-500"
                />
                <ActionButton
                  icon={<FiArrowUpRight />}
                  title="Send Money"
                  subtitle="Space for subtitle text"
                  bgColor="bg-yellow-50"
                  iconColor="bg-yellow-500"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Store Metrics */}
          <div className="w-1/2">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-sm font-semibold text-gray-900">Store Metrics</h3>
                <div className="flex gap-6 text-sm">
                  <button className="flex items-center gap-2 text-yellow-600 font-medium">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    Today
                  </button>
                  <button className="flex items-center gap-2 text-gray-500">
                    <div className="w-2 h-2 border border-gray-300 rounded-full"></div>
                    This Month
                  </button>
                  <button className="flex items-center gap-2 text-gray-500">
                    <div className="w-2 h-2 border border-gray-300 rounded-full"></div>
                    This Year
                  </button>
                  <button className="flex items-center gap-2 text-gray-500">
                    <div className="w-2 h-2 border border-gray-300 rounded-full"></div>
                    All
                  </button>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-8 mb-10">
                <Metric label="Total Spending" value="₦213,660.90" />
                <Metric label="Total Sales" value="₦198,231.01" />
                <Metric label="Number of Sales" value="4,923" />
                <Metric label="Product Impressions" value="1,340,239" />
              </div>

              {/* Cash Inflow Chart */}
              <div className="mb-10">
                <h4 className="font-semibold mb-4 text-gray-900 text-lg">Cash Inflow</h4>

                <div className="relative">
                  {/* Y-axis labels */}
                  <div className="absolute left-0 top-2 h-40 flex flex-col justify-between text-xs text-gray-400 py-2">
                    <span>3000</span>
                    <span>2500</span>
                    <span>2000</span>
                    <span>1500</span>
                    <span>1000</span>
                    <span>500</span>
                    <span>0</span>
                  </div>

                  {/* Chart info - positioned above the chart on the right */}
                  <div className="absolute -top-13 right-30">
                    <div className="text-xs text-gray-700 mb-1">April 2021</div>
                    <div className="flex items-center gap-2 text-xs mb-1">
                      <span className="w-1.5 h-1.5 bg-gray-900 rounded-full"></span>
                      <span className="text-gray-900 font-bold">Cash Inflow</span>
                    </div>
                    <div className="font-semibold text-gray-900 text-xs font-bold">$230,171.90</div>
                  </div>

                  {/* Chart container */}
                  <div className="ml-8 relative">
                    {/* Chart bars */}
                    <div className="flex items-end gap-1 h-40">
                      {[800, 900, 850, 950, 1100, 1050, 1200, 1300, 1450, 1400, 1600, 1750, 1900, 1850, 2000, 2100, 2200, 2300, 2200, 2400].map((val, i) => (
                        <div
                          key={i}
                          className="bg-yellow-500 rounded-t-sm flex-1 min-w-0"
                          style={{ height: `${(val / 2500) * 100}%` }}
                        />
                      ))}
                    </div>

                    {/* Trend line */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none">
                      <polyline
                        fill="none"
                        stroke="#374151"
                        strokeWidth="2"
                        points="10,120 30,110 50,115 70,105 90,90 110,95 130,80 150,70 170,55 190,60 210,45 230,35 250,25 270,30 290,20 310,15 330,10 350,15 370,5 390,0"
                      />
                      <circle cx="390" cy="0" r="3" fill="#374151" />
                    </svg>
                  </div>

                  {/* X-axis labels */}
                  <div className="flex justify-between text-xs text-gray-500 mt-4 ml-8">
                    <span>Jan</span>
                    <span>Dec</span>
                    <span>Jul</span>
                  </div>
                </div>
              </div>

              {/* Best Selling Products */}
              <div>
                <h4 className="font-semibold mb-6 text-gray-900 text-lg">Best Selling Products</h4>
                <div className="flex items-end justify-center gap-4 h-52">
                  {[
                    { value: 97, label: '97' },
                    { value: 113, label: '113' },
                    { value: 215, label: '215' },
                    { value: 173, label: '173' },
                    { value: 140, label: '140' }
                  ].map((item, i) => (
                    <div key={i} className="text-center relative">
                      <div
                        className="w-16 bg-yellow-500 mx-auto rounded-tr-2xl relative flex items-start justify-center pt-3"
                        style={{ height: `${(item.value / 215) * 160}px` }}
                      >
                        <span className="text-sm font-semibold text-white">
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
    <div className={`${bgColor} rounded-lg p-4 cursor-pointer hover:shadow-sm transition-shadow`}>
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
      <div className="text-xl font-bold text-gray-800">{value}</div>
    </div>
  );
}
