import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

export default function Blog() {
  const blogs = [
    {
      id: 1,
      title: "Future of Web Development",
      category: "Technology",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
      description:
        "Modern web technologies are reshaping how businesses operate online.",
      date: "Jan 12, 2026",
    },
    {
      id: 2,
      title: "E-commerce Trends 2026",
      category: "Business",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      description:
        "Online shopping continues to evolve with AI and automation.",
      date: "Jan 10, 2026",
    },
    {
      id: 3,
      title: "Why React is Popular",
      category: "Development",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
      description: "React simplifies UI development with reusable components.",
      date: "Jan 8, 2026",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-blue-500/20 via-pink-500/200 to-purple-500/20">
        {/* Hero Section */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        <section className="relative py-28 px-6 overflow-hidden">
          <div className="container mx-auto relative z-10 text-center max-w-4xl">
            <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 mb-6 text-sm font-medium">
              Latest Insights
            </span>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Blog
              </span>
            </h1>
            <p className="text-xl text-gray-600">
              Explore technology, innovation, and digital transformation.
            </p>
          </div>
        </section>
        {/* Blog Grid */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="grid md:grid-cols-3 gap-8">
              {blogs.map((blog) => (
                <div
                  key={blog.id}
                  className="rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-200 hover:shadow-2xl transition-all"
                >
                  <div className="relative aspect-[4/3]">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20"></div>
                  </div>
                  <div className="p-6">
                    <span className="text-sm font-semibold text-blue-600">
                      {blog.category}
                    </span>
                    <h3 className="text-2xl font-bold mt-2 mb-3">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {blog.description}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{blog.date}</span>
                      <button className="text-blue-600 font-semibold hover:underline">
                        Read More →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-18 px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="rounded-3xl bg-purple-400/10 p-16 text-center text-black shadow-2xl">
              <h2 className="text-4xl font-bold mb-6">
                Want more tech insights?
              </h2>
              <p className="text-lg mb-8">
                Stay updated with our latest articles and trends.
              </p>
              <button className="bg-blue-600/20 font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all">
                Subscribe Now
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
