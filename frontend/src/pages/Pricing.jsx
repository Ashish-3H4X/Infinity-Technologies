import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";

export default function Pricing() {
  const standardPlans = [
    {
      title: "Basic",
      color: "blue",
      gradient: "from-blue-500 to-cyan-500",
      bg: "from-blue-50 to-cyan-50",
      features: [
        "5-page responsive website",
        "Mobile-friendly design",
        "Basic SEO optimization",
        "Contact form integration",
        "1 month free support",
        "Social media integration",
      ],
    },
    {
      title: "Standard",
      color: "purple",
      popular: true,
      gradient: "from-purple-500 to-blue-500",
      bg: "from-purple-50 to-blue-50",
      features: [
        "10-page responsive website",
        "Advanced SEO optimization",
        "CMS integration",
        "Blog functionality",
        "3 months free support",
        "Google Analytics setup",
        "Custom graphics & icons",
        "Newsletter integration",
      ],
    },
    {
      title: "Enterprise",
      color: "orange",
      gradient: "from-orange-500 to-red-500",
      bg: "from-orange-50 to-red-50",
      features: [
        "Unlimited pages",
        "Custom functionality",
        "Advanced security features",
        "Priority support 24/7",
        "Dedicated project manager",
        "Performance optimization",
        "Multi-language support",
        "API integrations",
      ],
    },
  ];

  const ecommercePlans = [
    {
      title: "E-Commerce Basic",
      color: "blue",
      gradient: "from-blue-500 to-cyan-500",
      bg: "from-blue-50 to-cyan-50",
      features: [
        "Up to 50 products",
        "Payment gateway integration",
        "Shopping cart functionality",
        "Order management system",
        "Customer account portal",
        "Basic inventory management",
        "Email notifications",
        "3 months free support",
      ],
    },
    {
      title: "E-Commerce Standard",
      color: "purple",
      popular: true,
      gradient: "from-purple-500 to-blue-500",
      bg: "from-purple-50 to-blue-50",
      features: [
        "Unlimited products",
        "Advanced payment options",
        "Multi-vendor support",
        "Advanced inventory management",
        "Analytics & reporting",
        "Marketing tools integration",
        "Wishlist & reviews",
        "6 months free support",
        "Mobile app ready",
      ],
    },
    {
      title: "E-Commerce Enterprise",
      color: "orange",
      gradient: "from-orange-500 to-red-500",
      bg: "from-orange-50 to-red-50",
      features: [
        "Unlimited everything",
        "Custom integrations",
        "Multi-store management",
        "Advanced analytics & BI",
        "Dedicated infrastructure",
        "White-label solution",
        "Priority 24/7 support",
        "Custom development",
        "Performance optimization",
      ],
    },
  ];

  const faq = [
    {
      q: "Can I change plans later?",
      a: "Yes, you can upgrade or downgrade your plan at any time. Changes will reflect in your next billing cycle.",
      color: "blue",
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept all major credit cards, PayPal, and wire transfers for enterprise clients.",
      color: "purple",
    },
    {
      q: "Is there a long-term contract?",
      a: "No, all plans are month-to-month with no long-term commitment required.",
      color: "orange",
    },
    {
      q: "Do you offer custom enterprise solutions?",
      a: "Yes. Our Enterprise plan can be fully customized to meet your specific needs.",
      color: "emerald",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-blue-200/70 via-pink-200/70 to-purple-200/70 pt-19">
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/15 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl" />
        <section className="relative py-12 px-6 overflow-hidden">
          <div className="container mx-auto text-center relative z-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 mb-8">
              <span className="text-sm font-medium">
                Flexible Pricing Plans
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Simple,{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-[ to-pink-600 bg-clip-text text-transparent">
                Transparent
              </span>{" "}
              Pricing
            </h1>
            <p className="text-xl text-gray-600">
              Choose the perfect plan for your business. No hidden fees, no
              surprises.
            </p>
          </div>
        </section>
        <section className="py-20 px-6 relative overflow-hidden">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl" />
          <div className="container mx-auto text-center mb-16 relative z-10">
            <h2 className="text-5xl font-bold mb-4">Standard Solutions</h2>
            <p className="text-lg text-gray-600">
              Perfect for businesses looking for comprehensive IT solutions
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10">
            {standardPlans.map((p, i) => (
              <PlanCard key={i} plan={p} />
            ))}
          </div>
        </section>
        <section className="py-20 px-6 relative overflow-hidden">
          <div className="container mx-auto text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">E-Commerce Solutions</h2>
            <p className="text-lg text-gray-600">
              Specialized pricing for online businesses
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {ecommercePlans.map((p, i) => (
              <PlanCard key={i} plan={p} />
            ))}
          </div>
        </section>
        <section className="py-32 px-6">
          <div className="container mx-auto max-w-4xl text-center mb-20">
            <h2 className="text-5xl font-bold">Frequently Asked Questions</h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {faq.map((f, i) => (
              <div key={i}
                className={`p-8 rounded-xl border-2 border-blue-400/30 bg-gradient-to-br shadow-sm hover:shadow-xl transition-all`}>
                <h3 className="font-bold text-xl mb-3">{f.q}</h3>
                <p className="text-gray-600">{f.a}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="py-24 px-6 text-center">
          <h2 className="text-5xl font-bold mb-8">Still Have Any Questions?</h2>
          <p className="text-xl text-gray-600 mb-10">
            Our team is here to help you find the perfect solution.
          </p>
          <Link to="/contact">
            <button className="px-10 py-4 rounded-full text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl hover:shadow-2xl transition-all">
              Contact Sales
            </button>
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}

function PlanCard({ plan }) {
  return (
    <div
      className={`relative p-8 rounded-xl border-2 bg-gradient-to-br ${plan.bg} shadow-sm hover:shadow-xl transition-all duration-500`}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-100 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-xl">
          Most Popular
        </div>
      )}

      <h3 className="text-2xl font-bold mb-3">{plan.title}</h3>

      <ul className="space-y-3 mb-8">
        {plan.features.map((f, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
            <span className="text-green-600 mt-0.5">✔</span>
            {f}
          </li>
        ))}
      </ul>

      <Link to="/contact">
        <button
          className={`w-full py-4 rounded-full text-white font-semibold bg-gradient-to-r ${plan.gradient} hover:shadow-xl transition-all`}
        >
          Contact us
        </button>
      </Link>
    </div>
  );
}
