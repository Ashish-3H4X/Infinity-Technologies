import React from 'react'
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

export default function About() {
  return (
    <>
      <Navbar /> 
      <main className="min-h-screen bg-gradient-to-br from-gray-100 via-pink-100 to-purple-100">
        <div className="pt-20 overflow-hidden">
          {/* Hero Section */}
          <section className="relative py-32 px-6">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl"></div>
              <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"></div>
              <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-orange-500/25 rounded-full blur-3xl"></div>
            </div>
            <div className="container mx-auto relative z-10 text-center">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                About{" "}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Infinity Technologies
                </span>
              </h1>

              <p className="max-w-4xl mx-auto text-xl text-gray-600">
                We are a dynamic team of technology enthusiasts committed to transforming
                businesses through cutting-edge digital solutions. Our expertise spans web
                development, cloud computing, and innovative IT services that empower
                organizations to achieve their full potential in the digital era.
              </p>

              <div className="relative max-w-5xl mx-auto mt-16 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="src\images\service.png"
                  alt="Team collaboration"
                  className="w-full h-auto object-cover"/>
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-purple-600/20"></div>
              </div>
            </div>
          </section>

          {/* Mission and Vision */}
          <section className="py-32 px-6 relative">
            <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-8">
              <div className="p-10 rounded-xl border-2 bg-gradient-to-br from-blue-50 to-cyan-50 shadow-lg">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center mb-6 text-white">
                  🎯
                </div>
                <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To empower businesses worldwide with innovative technology solutions that
                  drive growth, efficiency, and competitive advantage.
                </p>
              </div>

              <div className="p-10 rounded-xl border-2 bg-gradient-to-br from-purple-50 to-pink-50 shadow-lg">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center mb-6 text-white">
                  👁️
                </div>
                <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To be the world's most trusted technology partner, recognized for
                  innovation and excellence.
                </p>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="py-12 px-6">
            <div className="container mx-auto max-w-6xl text-center mb-16">
              <h2 className="text-5xl font-bold mb-4">Our Values</h2>
              <p className="text-gray-600">The principles that guide everything we do</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: "Mission-Driven",
                  text: "We deliver solutions that create real business value.",
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  title: "Client-Focused",
                  text: "We build long-term partnerships based on trust.",
                  color: "from-purple-500 to-pink-500",
                },
                {
                  title: "Excellence",
                  text: "We maintain the highest standards in everything.",
                  color: "from-orange-500 to-red-500",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-10 rounded-xl border-2 shadow-lg bg-white text-center">
                  <div
                    className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-white text-2xl`}>
                    ⭐
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-24 px-6">
            <div className="container mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
              {[
                { count: "25+", label: "Countries Served", color: "from-purple-500 to-pink-500" },
                { count: "103+", label: "Successful Projects", color: "from-orange-500 to-red-500" },
                { count: "97+", label: "Happy Clients", color: "from-green-500 to-emerald-500" },
              ].map((stat, i) => (
                <div key={i}>
                  <div
                    className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center text-white`}
                  >
                    🌍
                  </div>
                  <div className="text-5xl font-bold bg-black bg-clip-text text-transparent">
                    {stat.count}
                  </div>
                  <div className="text-gray-600 text-sm mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </>

  )
}
