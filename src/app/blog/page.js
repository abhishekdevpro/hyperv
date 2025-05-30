import { AuroraBackground } from "@/components/ui/aurora-background";
import Image from "next/image";
import Link from "next/link";

// Sample blog posts data - in a real application, this would come from a CMS or API
const blogPosts = [
  {
    id: 1,
    title: "The Future of HR: How Automation is Reshaping Talent Acquisition",
    excerpt:
      "Exploring how AI and automation are revolutionizing HR processes, from recruitment to onboarding, and why U.S. businesses are rapidly adopting these technologies.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    date: "March 20, 2024",
    author: "HR Tech Insights",
    category: "Human Resources",
    content: `In today's highly competitive job market, HR professionals are under more pressure than ever to recruit faster, smarter, and more fairly. The U.S. labor market is shifting rapidly, with over 10.3 million job openings reported in early 2024 (Bureau of Labor Statistics). Meanwhile, the average time-to-hire remains over a month, and turnover costs continue to rise—averaging 33% of an employee's salary for each replacement, according to Gallup.

On top of this, the talent pool has become more digitally savvy, remote-ready, and values-driven. Job seekers now expect a smooth, transparent, and personalized hiring experience. Companies that fail to deliver this fall behind in the war for talent—especially as top candidates are off the market within 10 days, according to LinkedIn data.

Enter automation—a game-changing force in HR. Powered by artificial intelligence (AI), machine learning, and natural language processing, automation tools are revolutionizing how U.S. businesses handle talent acquisition. No longer confined to big tech firms, these tools are now being used by small and medium-sized businesses across industries including finance, healthcare, retail, and logistics.

From automated resume screening and interview scheduling to bias mitigation, employee onboarding, and real-time analytics, automation reduces manual effort while increasing consistency and fairness. It allows hiring teams to focus more on strategic decisions, candidate relationships, and employer branding—rather than tedious paperwork and email follow-ups.

And this shift is only accelerating. According to a 2024 SHRM survey, more than 72% of U.S. companies plan to increase investment in AI-driven recruitment technologies within the next 12 months.`,
  },
  {
    id: 2,
    title: "Building Scalable Applications",
    excerpt:
      "Best practices for creating applications that can handle millions of users.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    date: "March 10, 2024",
    author: "Jane Smith",
    category: "Development",
  },
  {
    id: 3,
    title: "AI in Software Development",
    excerpt:
      "How artificial intelligence is revolutionizing the way we build software.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    date: "March 5, 2024",
    author: "Mike Johnson",
    category: "AI",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gray-300 pt-10">
      {/* Hero Section */}

      <div className="container mx-auto px-4 py-16 text-center ">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Blog</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Insights, updates, and stories from our team about technology,
          development, and innovation.
        </p>
      </div>

      {/* Blog Posts Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm font-medium text-blue-600">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                <h2 className="text-xl font-bold mb-2 hover:text-blue-600 transition-colors duration-300">
                  <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    By {post.author}
                  </span>
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
