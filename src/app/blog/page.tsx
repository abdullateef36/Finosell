import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: 'How to Streamline Your Business Payroll in 2025',
    excerpt: 'Discover the latest strategies and tools for automating payroll management and ensuring compliance across multiple regions.',
    author: 'Sarah Johnson',
    date: 'January 15, 2025',
    readTime: '5 min read',
    category: 'Payroll',
    image: '/blog-payroll.jpg',
    slug: 'streamline-business-payroll-2025'
  },
  {
    id: 2,
    title: 'Understanding Budget Management for Growing Businesses',
    excerpt: 'Learn how effective budget planning can help your business scale while maintaining financial control and transparency.',
    author: 'Michael Chen',
    date: 'January 12, 2025',
    readTime: '7 min read',
    category: 'Budget',
    image: '/blog-budget.jpg',
    slug: 'budget-management-growing-businesses'
  },
  {
    id: 3,
    title: 'The Future of Cross-Border Payments in Africa',
    excerpt: 'Exploring how technology is revolutionizing international transactions and what it means for African businesses.',
    author: 'Amara Okonkwo',
    date: 'January 10, 2025',
    readTime: '6 min read',
    category: 'Finance',
    image: '/blog-payments.jpg',
    slug: 'future-cross-border-payments-africa'
  },
  {
    id: 4,
    title: '5 Common Invoicing Mistakes and How to Avoid Them',
    excerpt: 'Improve your cash flow by eliminating these frequent invoicing errors that cost businesses time and money.',
    author: 'David Oladele',
    date: 'January 8, 2025',
    readTime: '4 min read',
    category: 'Invoicing',
    image: '/blog-invoice.jpg',
    slug: 'common-invoicing-mistakes'
  },
  {
    id: 5,
    title: 'Building a Remote Team: Financial Management Tips',
    excerpt: 'Essential strategies for managing finances when your team is distributed across different countries and time zones.',
    author: 'Grace Adeyemi',
    date: 'January 5, 2025',
    readTime: '8 min read',
    category: 'Team Management',
    image: '/blog-remote.jpg',
    slug: 'remote-team-financial-management'
  },
  {
    id: 6,
    title: 'Expense Tracking Best Practices for SMEs',
    excerpt: 'A comprehensive guide to implementing effective expense tracking systems that save time and reduce errors.',
    author: 'John Mensah',
    date: 'January 3, 2025',
    readTime: '5 min read',
    category: 'Expense',
    image: '/blog-expense.jpg',
    slug: 'expense-tracking-best-practices'
  }
];

const categories = ['All', 'Payroll', 'Budget', 'Finance', 'Invoicing', 'Team Management', 'Expense'];

export default function BlogPage() {
  return (
    <div className="bg-white font-sans text-gray-800">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="container mx-auto flex flex-col items-center text-center px-4 py-24 lg:py-32">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#273B4A] max-w-4xl leading-tight">
            Insights & Resources
          </h1>
          <p className="mt-6 text-lg text-[#8C8C8C] max-w-2xl">
            Stay updated with the latest trends, tips, and best practices in financial management for growing businesses.
          </p>
        </section>

        {/* Featured Post Section */}
        <section className="bg-gradient-to-br from-[#273B4A] via-[#1e3240] to-[#273B4A] py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-12">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  Featured Article
                </h2>
                <div className="w-20 h-1 bg-[#DAB22F] mx-auto"></div>
              </div>

              <Link href={`/blog/${blogPosts[0].slug}`}>
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-300 cursor-pointer group">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    <div className="relative h-64 lg:h-auto">
                      <Image 
                        src={blogPosts[0].image}
                        alt={blogPosts[0].title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-[#DAB22F] text-white text-xs font-semibold rounded-full">
                          {blogPosts[0].category}
                        </span>
                        <span className="text-white/70 text-sm">{blogPosts[0].readTime}</span>
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-[#DAB22F] transition-colors">
                        {blogPosts[0].title}
                      </h3>
                      <p className="text-white/80 text-base mb-6 leading-relaxed">
                        {blogPosts[0].excerpt}
                      </p>
                      <div className="flex items-center gap-3 text-sm text-white/70">
                        <span>{blogPosts[0].author}</span>
                        <span>•</span>
                        <span>{blogPosts[0].date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="bg-gray-50 py-8 sticky top-0 z-10 shadow-sm">
          <div className="container mx-auto px-4 lg:px-12">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-6 py-2 rounded-full border-2 border-gray-300 text-gray-700 hover:border-[#DAB22F] hover:bg-[#DAB22F] hover:text-white transition-all duration-300 font-medium text-sm"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="container mx-auto px-4 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#273B4A] mb-12 text-center">
                Latest Articles
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.slice(1).map((post) => (
                  <Link key={post.id} href={`/blog/${post.slug}`}>
                    <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer border border-gray-100">
                      <div className="relative h-48 overflow-hidden">
                        <Image 
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-[#DAB22F] text-white text-xs font-semibold rounded-full">
                            {post.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                          <span>{post.date}</span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>

                        <h3 className="text-xl font-bold text-[#273B4A] mb-3 group-hover:text-[#DAB22F] transition-colors line-clamp-2">
                          {post.title}
                        </h3>

                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <span className="text-sm text-gray-700 font-medium">
                            {post.author}
                          </span>
                          <svg className="w-5 h-5 text-[#DAB22F] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>

              {/* Load More Button */}
              <div className="text-center mt-12">
                <button className="px-8 py-3 bg-[#273B4A] text-white font-semibold rounded-lg hover:bg-[#1e3240] transition-colors duration-300">
                  Load More Articles
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-[#FFFBF0] from-50% to-white to-50% py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-12 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#273B4A] mb-6">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Get the latest insights, tips, and updates delivered directly to your inbox.
              </p>

              <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-lg border-2 border-gray-300 focus:border-[#DAB22F] focus:outline-none text-gray-800"
                  required
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-[#DAB22F] hover:bg-[#c9a429] text-white font-semibold rounded-lg transition-colors duration-300 whitespace-nowrap"
                >
                  Subscribe Now
                </button>
              </form>

              <p className="text-sm text-gray-500 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}