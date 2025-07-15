'use client';

import React from 'react';
import Image from 'next/image';

// Icon components (should be defined or imported)
const CheckCircleIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const SolutionsPage = () => {
    const accountingFeatures = [
        {
            title: "Automated Income and Expense Tracking",
            description: "All transactions are automatically recorded and categorized, providing clear cash flow visibility without manual bookkeeping."
        },
        {
            title: "Real-Time Profit Analysis",
            description: "Generate profit summaries in real time to monitor financial health across daily, weekly, or monthly periods."
        },
        {
            title: "Receipt Management System",
            description: "Upload or forward receipts that are matched with transactions, ensuring documents are securely stored and retrievable."
        },
        {
            title: "Intelligent Transaction Categorization",
            description: "Transactions are intelligently tagged (e.g., operations, payroll) for transparency into spending patterns."
        },
        {
            title: "Downloadable Financial Reporting",
            description: "Access profit/loss statements, transaction logs, and dashboards for internal review and compliance."
        },
        {
            title: "Multi-Account Reconciliation",
            description: "Unify multiple bank accounts or digital wallets in a single dashboard with automatic reconciliation."
        }
    ];

    const cardFeatures = [
        {
            title: "Globally Accepted",
            description: "Accepted at over 37 million merchants worldwide through Visa and Mastercard networks."
        },
        {
            title: "Advanced 3D Secure Protection",
            description: "Protected by OTP verification for every transaction with chargeback rates below 0.024%."
        },
        {
            title: "Full PCI DSS & NDPR Compliance",
            description: "Adheres to strict security and data protection standards."
        },
        {
            title: "Instant Card Controls",
            description: "Freeze/unfreeze cards and set spending limits instantly via API or dashboard."
        },
        {
            title: "Multi-Currency Support",
            description: "Issue cards in USD and NGN with real-time provisioning."
        },
        {
            title: "High Volume Capacity",
            description: "Support for up to 100,000 active virtual cards with processing over 500 TPS."
        }
    ];

    const supportedMarkets = [
        { region: "Africa", countries: "Nigeria, Ghana, Kenya, South Africa" },
        { region: "North America", countries: "United States (excluding NY, FL, AK, LA), Canada" },
        { region: "Europe", countries: "United Kingdom, Netherlands, EU territories" },
        { region: "Asia & Middle East", countries: "United Arab Emirates, India, Malaysia" }
    ];
    
    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base text-[#D6AA1B] font-semibold tracking-wide uppercase">Our Solutions</h2>
                    <h1 className="mt-2 text-3xl font-extrabold text-[#273B4A] tracking-tight sm:text-4xl">
                        Financial Infrastructure for Growth-Oriented Businesses
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
                        From automated bookkeeping to global payments, Finosell provides the tools you need to streamline financial operations.
                    </p>
                </div>

                {/* Smart Accounting Section */}
                <div className="mt-20">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                        <div>
                            <h3 className="text-2xl font-extrabold text-[#273B4A] sm:text-3xl">Smart Accounting</h3>
                            <p className="mt-3 text-lg text-gray-600">
                                An automated financial management system that eliminates manual data entry and provides real-time insights into your business financial performance.
                            </p>
                            <dl className="mt-10 space-y-6">
                                {accountingFeatures.map((feature, index) => (
                                    <div key={index} className="relative">
                                        <dt>
                                            <CheckCircleIcon className="absolute h-6 w-6 text-green-500" />
                                            <p className="ml-9 text-lg font-medium text-[#273B4A]">{feature.title}</p>
                                        </dt>
                                        <dd className="mt-2 ml-9 text-base text-gray-600">{feature.description}</dd>
                                    </div>
                                ))}
                            </dl>
                            <div className="mt-8 bg-blue-50 p-4 rounded-lg">
                                <h4 className="text-lg font-medium text-[#273B4A]">Key Benefits</h4>
                                <ul className="mt-2 space-y-2 text-gray-600 list-disc list-inside">
                                    <li>Reduces reliance on manual processes by 90%</li>
                                    <li>Ensures accuracy in financial records</li>
                                    <li>Provides timely insights for better decision-making</li>
                                    <li>Saves operational costs through automation</li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-10 lg:mt-0" aria-hidden="true">
                            <Image 
                                className="relative mx-auto rounded-lg shadow-xl" 
                                width={490} 
                                height={400} 
                                src="/accounting-dashboard.jpg" 
                                alt="Smart Accounting Dashboard" 
                            />
                        </div>
                    </div>
                </div>

                {/* Card Issuing Section */}
                <div className="mt-24">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                        <div className="lg:order-2">
                            <h3 className="text-2xl font-extrabold text-[#273B4A] sm:text-3xl">Virtual Card Issuing</h3>
                            <p className="mt-3 text-lg text-gray-600">
                                Issue multi-currency virtual cards on Visa and Mastercard networks with real-time provisioning and advanced controls.
                            </p>
                            <dl className="mt-10 space-y-6">
                                {cardFeatures.map((feature, index) => (
                                    <div key={index} className="relative">
                                        <dt>
                                            <CheckCircleIcon className="absolute h-6 w-6 text-green-500" />
                                            <p className="ml-9 text-lg font-medium text-[#273B4A]">{feature.title}</p>
                                        </dt>
                                        <dd className="mt-2 ml-9 text-base text-gray-600">{feature.description}</dd>
                                    </div>
                                ))}
                            </dl>
                            
                            <div className="mt-8">
                                <h4 className="text-lg font-medium text-[#273B4A]">Supported Markets</h4>
                                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {supportedMarkets.map((market, index) => (
                                        <div key={index} className="bg-gray-50 p-3 rounded-md">
                                            <h5 className="font-medium text-[#273B4A]">{market.region}</h5>
                                            <p className="text-sm text-gray-600">{market.countries}</p>
                                        </div>
                                    ))}
                                </div>
                                <p className="mt-2 text-sm text-gray-500">
                                    Note: KYC verification requirements vary by country.
                                </p>
                            </div>
                        </div>
                        <div className="mt-10 lg:mt-0 lg:order-1" aria-hidden="true">
                            <Image 
                                className="relative mx-auto rounded-lg shadow-xl" 
                                width={490} 
                                height={400} 
                                src="/virtual-cards.jpg" 
                                alt="Virtual Cards Interface" 
                            />
                            <div className="mt-4 bg-[#273B4A] text-white p-4 rounded-lg">
                                <h4 className="font-medium">Integration Features</h4>
                                <ul className="mt-2 space-y-2 text-sm text-gray-300 list-disc list-inside">
                                    <li>Standard API rate: 1,000 requests/minute</li>
                                    <li>Enterprise tier with custom limits available</li>
                                    <li>Complete sandbox environment for testing</li>
                                    <li>Webhooks for real-time event tracking</li>
                                    <li>Go live in under 5 days</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Support Section */}
                <div className="mt-24 bg-gray-50 rounded-xl p-8">
                    <h3 className="text-2xl font-extrabold text-[#273B4A] text-center">Customer Support</h3>
                    <div className="mt-6 grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h4 className="font-medium text-[#273B4A]">Telegram Support</h4>
                            <p className="mt-2 text-gray-600">
                                Dedicated Telegram channel for each company with quick responses during business hours.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h4 className="font-medium text-[#273B4A]">Email & Website</h4>
                            <p className="mt-2 text-gray-600">
                                <span className="block">Email: info@finosell.com</span>
                                <span className="block">Website: www.finosell.com</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SolutionsPage;