import { useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { toast } from "react-toastify";

export default function Contact() {
  const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  message: "",
});

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = async (e) => {
  e.preventDefault();

  const res = await fetch("http://localhost:5000/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const data = await res.json();

  if (data.success) {
    toast("Thanks for choosing us. Our tech team will contact you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  } else {
    alert("Something went wrong");
  }
};

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-19">
        <section className="relative py-24 px-6 bg-gradient-to-b from-gray-100 to-white overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-blue-500/30 to-cyan-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-purple-500/30 to-pink-500/20 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-br from-orange-500/25 to-red-500/20 rounded-full blur-3xl" />
          </div>
          {[
            "left-[19%] top-[65%]",
            "left-[1%] top-[10%]",
            "left-[57%] top-[82%]",
            "left-[75%] top-[40%]",
            "left-[57%] top-[12%]",
            "left-[98%] top-[4%]",
            "left-[83%] top-[20%]",
            "left-[75%] top-[52%]",
            "left-[5%] top-[59%]",
            "left-[2%] top-[96%]",
          ].map((pos, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-purple-500/50 rounded-full ${pos}`}
            />
          ))}
          <div className="container mx-auto relative z-10 text-center max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Contact{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Us
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Have a project in mind? We’d love to hear from you. Send us a
              message and we’ll respond as soon as possible.
            </p>
          </div>
        </section>
        <section className="py-32 px-6 relative overflow-hidden">
          <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-gradient-to-br from-cyan-500/25 to-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gradient-to-br from-pink-500/25 to-purple-500/20 rounded-full blur-3xl" />
          <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12 relative z-10">
            <div className="flex flex-col">
              <h2 className="text-4xl font-bold mb-8">Contact Information</h2>
              <p className="text-gray-600 mb-10 text-lg leading-relaxed">
                Reach out to us through any of these channels or fill out the
                form and we’ll get back to you within 24 hours.
              </p>
              <div className="space-y-6">
                <InfoCard
                  gradient="from-blue-50 to-cyan-50"
                  icon="📧"
                  title="Email"
                  line1="infinitytechnology50@gmail.com"
                />

                <InfoCard
                  gradient="from-purple-50 to-pink-50"
                  icon="📞"
                  title="Phone"
                  line1="+91 7376731077"
                  line2="Available all time"
                />

                <InfoCard
                  gradient="from-orange-50 to-red-50"
                  icon="📍"
                  title="Office"
                  line1="Jaunpur, Uttar Pradesh"
                  line2="India"
                />
              </div>
            </div>
            <div className="rounded-xl p-10 backdrop-blur-sm bg-gradient-to-br from-blue-50/50 to-purple-50/50 border-2 shadow-xl">
              <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <Input
                  label="Name *"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                />
                <Input
                  label="Email *"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="your.gmail@.com"
                  required
                />
                <Input
                  label="Phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 **********"
                />
                  <div className="space-y-2">
                  <label className="font-medium text-base">Message *</label>
                  <textarea
                    rows="5"
                    required
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    className="w-full border rounded-md p-3 resize-none focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-full text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl hover:shadow-2xl transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
        <section className="py-32 px-6 bg-gray-100 relative overflow-hidden">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/25 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/25 rounded-full blur-3xl" />
          <div className="container mx-auto relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Visit Our Office
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Jaunpur, Uttar Pradesh, India
            </p>
            <div className="rounded-3xl overflow-hidden h-[500px] shadow-2xl border-4 border-blue-500/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28750.264542194356!2d82.65988140247265!3d25.744686545122704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39903a2c93994715%3A0xf9a9f10dc97322!2sJaunpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1768895346015!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                title="Office Location"
                className="border-0"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
function InfoCard({ gradient, icon, title, line1, line2 }) {
  return (
    <div
      className={`p-8 rounded-xl shadow-sm hover:shadow-xl transition-all border-2 bg-gradient-to-br ${gradient}`}
    >
      <div className="flex items-start gap-4">
        <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white text-2xl shadow-lg">
          {icon}
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2">{title}</h3>
          <p className="text-gray-600">{line1}</p>
          {line2 && <p className="text-gray-600">{line2}</p>}
        </div>
      </div>
    </div>
  );
}

function Input({ label, ...props }) {
  return (
    <div className="space-y-2">
      <label className="font-medium text-base">{label}</label>
      <input
        {...props}
        className="w-full border rounded-md px-3 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
      />
    </div>
  );
}
