import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { Link, useNavigate } from "react-router-dom";
import {
  FaCloud,
  FaCode,
  FaShieldAlt,
  FaChartBar,
  FaLightbulb,
  FaMobileAlt,
} from "react-icons/fa";

export default function Services() {
  const navigate = useNavigate();
  const services = [
    {
      icon: FaCloud,
      title: "Cloud Solutions",
      color: "from-blue-500 to-cyan-500",
      bg: "from-blue-50 to-cyan-50",
      points: [
        "AWS, Azure, and Google Cloud Platform",
        "Cloud migration and optimization",
        "Serverless architecture design",
        "24/7 monitoring and support",
      ],
    },
    {
      icon: FaCode,
      title: "Custom Software Development",
      color: "from-purple-500 to-pink-500",
      bg: "from-purple-50 to-pink-50",
      points: [
        "Full-stack web applications",
        "Mobile app development (iOS & Android)",
        "API development and integration",
        "Legacy system modernization",
      ],
    },
    {
      icon: FaShieldAlt,
      title: "Cybersecurity",
      color: "from-orange-500 to-red-500",
      bg: "from-orange-50 to-red-50",
      points: [
        "Security audits and assessments",
        "Penetration testing",
        "Data encryption and protection",
        "Compliance and risk management",
      ],
    },
    {
      icon: FaChartBar,
      title: "Data Analytics",
      color: "from-green-500 to-emerald-500",
      bg: "from-green-50 to-emerald-50",
      points: [
        "Business intelligence dashboards",
        "Predictive analytics and ML",
        "Data warehouse solutions",
        "Real-time reporting systems",
      ],
    },
    {
      icon: FaLightbulb,
      title: "IT Consulting",
      color: "from-indigo-500 to-blue-500",
      bg: "from-indigo-50 to-blue-50",
      points: [
        "Digital transformation strategy",
        "Technology roadmap planning",
        "Process optimization",
        "Vendor selection and management",
      ],
    },
    {
      icon: FaMobileAlt,
      title: "Mobile Solutions",
      color: "from-pink-500 to-rose-500",
      bg: "from-pink-50 to-rose-50",
      points: [
        "iOS and Android development",
        "Cross-platform solutions",
        "Mobile UI/UX design",
        "App maintenance and updates",
      ],
    },
  ];
  const benefits = [
    "Clear communication at every stage",
    "Fast delivery with clean code",
    "Mobile-first and responsive design",
    "Post-launch support and updates",
  ];
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-blue-100 via-pink-100 to-purple-100 pt-19 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-green-500/20 rounded-full blur-3xl" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/25 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/25 rounded-full blur-3xl" />
        <section className="relative py-12 px-6">
          <div className="container mx-auto relative z-10 text-center max-w-4xl">
            <div className="inline-block mb-6 px-6 py-2 bg-white/40 rounded-full">
              <span className="text-sm font-medium bg-gradient-to-r from-blue-900 to-purple-600 bg-clip-text text-transparent">
                we have Infinity solutions
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12">
              Comprehensive IT solutions tailored to your business needs.
            </p>
          </div>
        </section>

        <section className="py-24 px-6 relative">
          <div className="container mx-auto max-w-7xl grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => {
              const Icon = s.icon;

              return (
                <div
                  key={i}
                  className={`p-8 rounded-xl border-2 shadow-sm hover:shadow-2xl transition-all duration-500 bg-gradient-to-br ${s.bg}`}
                >
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${s.color} flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <Icon className="text-white text-2xl" />
                  </div>

                  <h3 className="text-2xl font-bold mb-4">{s.title}</h3>

                  <ul className="space-y-3">
                    {s.points.map((p, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-sm text-gray-600"
                      >
                        <span className="text-blue-600 mt-0.5">✔</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              Build smarter products with modern design
            </h1>
            <p className="mt-4 text-gray-600">
              Simple, clean and scalable UI built with React and Tailwind CSS.
            </p>
            <div className="mt-6 flex gap-4">
              <button
                onClick={() => navigate("/contact")}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg"
              >
                Get Started
              </button>
              <button
                onClick={() => navigate("/pricing")}
                className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg"
              >
                See plans
              </button>
            </div>
          </div>
          <img
            src="src\images\servicetrns.png"
            alt="process"
            className="w-full h-[400px]  object-cover rounded-xl"
          />
        </section>
        <section className="py-32 px-6">
          <div className="container mx-auto max-w-6xl text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">How We Work</h2>
            <p className="text-xl text-gray-600">
              We follow a structured and transparent process so you always know
              what’s happening with your project.
            </p>
          </div>
          <div className="container mx-auto max-w-6xl grid md:grid-cols-4 gap-8 text-center">
            {[
              [
                "01",
                "Understand Requirements",
                "We discuss your goals, audience, and technical needs in detail.",
                "from-blue-500 to-cyan-500",
              ],
              [
                "02",
                "Plan & Design",
                "We create wireframes, structure, and visual design before coding.",
                "from-purple-500 to-pink-500",
              ],
              [
                "03",
                "Build & Test",
                "Development happens with testing, fixes, and performance checks.",
                "from-orange-500 to-red-500",
              ],
              [
                "04",
                "Deploy & Support",
                "Your site goes live, and we provide maintenance and updates.",
                "from-green-500 to-emerald-500",
              ],
            ].map(([num, title, text, color]) => (
              <div key={num}>
                <div
                  className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r ${color} text-white font-bold text-2xl flex items-center justify-center shadow-lg`}
                >
                  {num}
                </div>
                <h3 className="text-2xl font-bold mb-3">{title}</h3>
                <p className="text-gray-600">{text}</p>
              </div>
            ))}
          </div>
        </section>
        <div className=" py-16 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Why Work With Us
              </h2>
              <p className="text-gray-800 mt-3">
                We don’t just build websites. We build reliable digital products
                that actually solve problems and scale with your business.
              </p>
              <ul className="mt-8 space-y-4">
                {benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">✔</span>
                    <span className="text-gray-700">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <img
              src="/src/images/servicetrns1.png"
              alt="Why choose us"
              className="w-full h-[400px] object-cover rounded-xl shadow"
            />
          </div>
        </div>
        <section className="py-12 px-6">
          <div className="container hover:scale-110 transition mx-auto max-w-4xl text-center bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-blue-400/10 rounded-3xl p-16 text-black shadow-2xl relative overflow-hidden">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-10 opacity-95">
              Let’s discuss your project and bring your vision to life.
            </p>
            <Link to="/contact">
              <button className="bg-blue-600/50 text-black px-10 py-4 rounded-full text-lg font-medium hover:bg-blue-700/50 shadow-xl hover:shadow-2xl transition-all">
                Contact Us Today
              </button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
