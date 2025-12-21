"use client";

import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { 
  FiCheck, 
  FiX, 
  FiArrowRight,
  FiLoader
} from 'react-icons/fi';

// Paystack types
interface PaystackResponse {
  reference: string;
  trans: string;
  status: string;
  message: string;
  transaction: string;
  trxref: string;
}

declare global {
  interface Window {
    PaystackPop: {
      setup: (config: {
        key: string;
        email: string;
        amount: number;
        currency: string;
        ref: string;
        metadata: Record<string, unknown>;
        onClose: () => void;
        callback: (response: PaystackResponse) => void;
      }) => {
        openIframe: () => void;
      };
    };
  }
}

interface Plan {
  name: string;
  description: string;
  price: number | string;
  users: number | string;
  planId: string;
  features: Record<string, string | boolean | undefined>;
  highlighted: boolean;
}

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [businessId, setBusinessId] = useState<string>('1234564758');
  const [email, setEmail] = useState<string>('example@gmail.com'); 
  const [processingPlanId, setProcessingPlanId] = useState<string | null>(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const businessIdParam = urlParams.get('businessId') || urlParams.get('business_id');
    const emailParam = urlParams.get('email');
    
    if (businessIdParam) setBusinessId(businessIdParam);
    if (emailParam) setEmail(emailParam);
  }, []);

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
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const plans = [
    {
      name: 'Basic',
      description: 'Perfect for small teams getting started',
      price: 10000,
      users: 2,
      planId: 'basic',
      features: {
        'Users': '2 users included',
        'Additional Users': '₦3,000 per user',
        'Pay-in Fees': '0.15% (capped at ₦500)',
        'Payout Fees': '₦50',
        'Staff Bank Accounts': '2 accounts',
        'Approvals Management': '3 levels',
        'Custom Roles': false,
        'Business Bank Account': false,
        'Payroll (5-9 employees)': '₦1,000',
        'Payroll (10-50 employees)': 'Not available',
        'Bills Automation': false,
        'Support': 'Basic support',
        'Inventory System': '₦15,000/month',
        'Additional Outlets': '₦5,000 per outlet'
      },
      highlighted: false
    },
    {
      name: 'Pro',
      description: 'Best for growing businesses',
      price: 20000,
      users: 3,
      planId: 'pro',
      features: {
        'Users': '3 users included',
        'Additional Users': '₦3,000 per user',
        'Pay-in Fees': '0.1% (capped at ₦200)',
        'Payout Fees': '₦25',
        'Staff Bank Accounts': '5 accounts',
        'Approvals Management': '5 levels',
        'Custom Roles': true,
        'Business Bank Account': true,
        'Payroll (5-9 employees)': '₦1,000',
        'Payroll (10-50 employees)': '₦2,000',
        'Bills Automation': true,
        'Support': 'Priority support',
        'Inventory System': '₦15,000/month',
        'Additional Outlets': '₦5,000 per outlet'
      },
      highlighted: true
    },
    {
      name: 'Business',
      description: 'Enterprise-grade for scaling teams',
      price: 'Custom',
      users: 'Custom',
      planId: 'business',
      features: {
        'Users': 'Custom users',
        'Additional Users': 'Custom pricing',
        'Pay-in Fees': 'Custom rates',
        'Payout Fees': 'Custom fees',
        'Staff Bank Accounts': 'Unlimited',
        'Approvals Management': 'Custom levels',
        'Custom Roles': true,
        'Business Bank Account': true,
        'Payroll': 'Custom pricing',
        'Payroll (10-50 employees)': 'Custom pricing',
        'Bills Automation': true,
        'Support': 'Dedicated support',
        'Inventory System': 'Custom pricing',
        'Additional Outlets': 'Custom pricing'
      },
      highlighted: false
    }
  ];

  const calculatePrice = (basePrice: number | string): number | string => {
    if (typeof basePrice === 'string') return basePrice;
    if (billingCycle === 'yearly') {
      const yearlyPrice = basePrice * 12 * 0.90;
      return Math.round(yearlyPrice);
    }
    return basePrice;
  };

    const handlePayment = (plan: Plan) => {
    if (!email || !businessId) {
      alert('Authentication required. Please login from the dashboard.');
      window.open('https://dashboard.finosell.com', '_blank');
      return;
    }

    if (typeof plan.price === 'string') {
      alert('Please contact us for custom enterprise pricing.');
      return;
    }

    setProcessingPlanId(plan.planId);

    const calculatedPrice = calculatePrice(plan.price);
    const amount = (typeof calculatedPrice === 'number' ? calculatedPrice : plan.price) * 100; // Paystack expects amount in kobo
    const reference = `${plan.planId}_${businessId || 'guest'}_${Date.now()}`;

    const handler = window.PaystackPop.setup({
      key: 'pk_test_d41c2bf87390ed60af6e8851ea104be0f7489e3c',
      email: email,
      amount: amount,
      currency: 'NGN',
      ref: reference,
      metadata: {
        custom_fields: [
          {
            display_name: "Plan",
            variable_name: "plan",
            value: plan.name
          },
          {
            display_name: "Billing Cycle",
            variable_name: "billing_cycle",
            value: billingCycle
          },
          {
            display_name: "Business ID",
            variable_name: "business_id",
            value: businessId || 'N/A'
          }
        ]
      },
      onClose: function() {
        setProcessingPlanId(null);
        alert('Payment window closed.');
      },
      callback: function(response: PaystackResponse) {
        setProcessingPlanId(null);
        // Payment successful
        alert('Payment successful! Reference: ' + response.reference);
        
        // Here you would typically:
        // 1. Send the reference to your backend for verification
        // 2. Activate the subscription
        // 3. Redirect user back to your webapp
        
        // Example redirect back to webapp with success info
        // const redirectUrl = `YOUR_WEBAPP_URL/payment-success?reference=${response.reference}&businessId=${businessId}&plan=${plan.planId}`;
        // window.location.href = redirectUrl;
        
        console.log('Payment Reference:', response.reference);
        console.log('Business ID:', businessId);
        console.log('Plan:', plan.planId);
        console.log('Billing Cycle:', billingCycle);
      }
    });

    handler.openIframe();
  };

  // Load Paystack script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.paystack.co/v1/inline.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#273B4A] to-[#1e3240] py-20 lg:py-28" data-animate id="hero">
        <div className="container mx-auto px-4 lg:px-12">
          <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${
            visibleSections.has('hero') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-lg lg:text-xl text-white/80 mb-12">
              Choose the perfect plan for your business. No hidden fees, no surprises.
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full p-1 border border-white/20">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  billingCycle === 'monthly'
                    ? 'bg-[#DAB22F] text-white shadow-lg'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 relative ${
                  billingCycle === 'yearly'
                    ? 'bg-[#DAB22F] text-white shadow-lg'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                Yearly
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">
                  Save 10%
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-[#FFFBF0]" data-animate id="pricing-cards">
        <div className="container mx-auto px-4 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                data-animate
                data-id={`plan-${index}`}
                className={`relative bg-white rounded-3xl shadow-xl transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 ${
                  plan.highlighted ? 'ring-4 ring-[#DAB22F] scale-105 lg:scale-110' : ''
                } ${
                  visibleSections.has(`plan-${index}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#DAB22F] text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-8 lg:p-10">
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-[#273B4A] mb-3">{plan.name}</h3>
                    <p className="text-gray-600 text-sm mb-6">{plan.description}</p>
                    
                    <div className="mb-6">
                      {typeof plan.price === 'number' ? (
                        <>
                          <div className="flex items-baseline justify-center gap-2">
                            <span className="text-5xl font-bold text-[#273B4A]">
                              ₦{calculatePrice(plan.price).toLocaleString()}
                            </span>
                            <span className="text-gray-500">
                              /{billingCycle === 'monthly' ? 'month' : 'year'}
                            </span>
                          </div>
                          {billingCycle === 'yearly' && (
                            <p className="text-sm text-green-600 mt-2">
                              Save ₦{(plan.price * 12 * 0.10).toLocaleString()} per year
                            </p>
                          )}
                        </>
                      ) : (
                        <div className="text-4xl font-bold text-[#273B4A]">Contact Us</div>
                      )}
                    </div>

                    <button
                      onClick={() => handlePayment(plan)}
                      disabled={processingPlanId !== null}
                      className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                        plan.highlighted
                          ? 'bg-[#DAB22F] text-white hover:bg-[#c4a029] shadow-lg hover:shadow-xl'
                          : 'bg-[#273B4A] text-white hover:bg-[#1e3240]'
                      } disabled:opacity-50 disabled:cursor-not-allowed`}
                    >
                      {processingPlanId === plan.planId ? (
                        <>
                          <FiLoader className="w-5 h-5 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          Get Started
                          <FiArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </div>

                  {/* Features List */}
                  <div className="space-y-4 border-t border-gray-200 pt-8">
                    {Object.entries(plan.features).map(([feature, value], i) => (
                      <div key={i} className="flex items-start gap-3">
                        {typeof value === 'boolean' ? (
                          value ? (
                            <FiCheck className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          ) : (
                            <FiX className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" />
                          )
                        ) : (
                          <FiCheck className="w-5 h-5 text-[#DAB22F] flex-shrink-0 mt-0.5" />
                        )}
                        <div className="flex-1">
                          <p className="text-sm font-medium text-[#273B4A]">{feature}</p>
                          {typeof value === 'string' && (
                            <p className="text-xs text-gray-500 mt-0.5">{value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 lg:py-28 bg-white" data-animate id="comparison">
        <div className="container mx-auto px-4 lg:px-12">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            visibleSections.has('comparison') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-3xl lg:text-5xl font-bold text-[#273B4A] mb-6">
              Compare Plans
            </h2>
            <div className="w-24 h-1 bg-[#DAB22F] mx-auto"></div>
          </div>

          <div className={`overflow-x-auto transition-all duration-1000 delay-200 ${
            visibleSections.has('comparison') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <table className="w-full max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
              <thead className="bg-[#273B4A]">
                <tr>
                  <th className="text-left p-6 text-white font-semibold">Features</th>
                  <th className="text-center p-6 text-white font-semibold">Basic</th>
                  <th className="text-center p-6 text-white font-semibold bg-[#DAB22F]">Pro</th>
                  <th className="text-center p-6 text-white font-semibold">Business</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Users Included', '2', '3', 'Custom'],
                  ['Additional User Cost', '₦3,000', '₦3,000', 'Custom'],
                  ['Pay-in Fees', '0.15% (cap ₦500)', '0.1% (cap ₦200)', 'Custom'],
                  ['Payout Fees', '₦50', '₦25', 'Custom'],
                  ['Staff Bank Accounts', '2', '5', 'Unlimited'],
                  ['Approval Levels', '3', '5', 'Custom'],
                  ['Custom Roles', false, true, true],
                  ['Business Bank Account', false, true, true],
                  ['Bills Automation', false, true, true],
                  ['Support', 'Basic', 'Priority', 'Dedicated'],
                  ['Payroll (5-9 employees)', '₦1,000', '₦1,000', 'Custom'],
                  ['Payroll (10-50 employees)', false, '₦2,000', 'Custom'],
                  ['Inventory System', '₦15,000/mo', '₦15,000/mo', 'Custom'],
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="p-4 text-[#273B4A] font-medium">{row[0]}</td>
                    {row.slice(1).map((cell, j) => (
                      <td key={j} className={`p-4 text-center ${j === 1 ? 'bg-[#FFFBF0]' : ''}`}>
                        {typeof cell === 'boolean' ? (
                          cell ? (
                            <FiCheck className="w-6 h-6 text-green-500 mx-auto" />
                          ) : (
                            <FiX className="w-6 h-6 text-gray-300 mx-auto" />
                          )
                        ) : (
                          <span className="text-gray-600">{cell}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}