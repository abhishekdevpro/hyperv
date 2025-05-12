import { AuroraBackground } from "@/components/ui/aurora-background";
import Image from "next/image";
import Link from "next/link";

// Sample blog posts data - in a real application, this would come from a CMS or API
const blogPosts = [
  {
    id: 1,
    title: "The Future of HR: How Automation is Reshaping Talent Acquisition",
    excerpt: "Exploring how AI and automation are revolutionizing HR processes, from recruitment to onboarding, and why U.S. businesses are rapidly adopting these technologies.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    date: "March 20, 2024",
    author: "HR Tech Insights",
    category: "Human Resources",
    content: `In today's highly competitive job market, HR professionals are under more pressure than ever to recruit faster, smarter, and more fairly. The U.S. labor market is shifting rapidly, with over 10.3 million job openings reported in early 2024 (Bureau of Labor Statistics). Meanwhile, the average time-to-hire remains over a month, and turnover costs continue to rise—averaging 33% of an employee's salary for each replacement, according to Gallup.

On top of this, the talent pool has become more digitally savvy, remote-ready, and values-driven. Job seekers now expect a smooth, transparent, and personalized hiring experience. Companies that fail to deliver this fall behind in the war for talent—especially as top candidates are off the market within 10 days, according to LinkedIn data.

Enter automation—a game-changing force in HR. Powered by artificial intelligence (AI), machine learning, and natural language processing, automation tools are revolutionizing how U.S. businesses handle talent acquisition. No longer confined to big tech firms, these tools are now being used by small and medium-sized businesses across industries including finance, healthcare, retail, and logistics.

From automated resume screening and interview scheduling to bias mitigation, employee onboarding, and real-time analytics, automation reduces manual effort while increasing consistency and fairness. It allows hiring teams to focus more on strategic decisions, candidate relationships, and employer branding—rather than tedious paperwork and email follow-ups.

And this shift is only accelerating. According to a 2024 SHRM survey, more than 72% of U.S. companies plan to increase investment in AI-driven recruitment technologies within the next 12 months.`
  },
  {
    id: 2,
    title: "Building Scalable Applications",
    excerpt: "Best practices for creating applications that can handle millions of users.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    date: "March 10, 2024",
    author: "Jane Smith",
    category: "Development",
    content: `Building scalable applications requires careful consideration of architecture, performance, and user experience. This article explores the best practices and modern approaches to creating applications that can handle millions of users efficiently.`
  },
  {
    id: 3,
    title: "AI in Software Development",
    excerpt: "How artificial intelligence is revolutionizing the way we build software.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    date: "March 5, 2024",
    author: "Mike Johnson",
    category: "AI",
    content: `Artificial Intelligence is transforming the software development landscape, from automated code generation to intelligent testing and deployment. Discover how AI is changing the way we build and maintain software applications.`
  }
];

export default function BlogPost({ params }) {
  const post = blogPosts.find(post => post.id === parseInt(params.id));

  if (!post) {
    return (
      <main className=" bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-blue-600 hover:text-blue-800">
            ← Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className=" bg-gray-50">
      {/* Hero Section */}
  
        <div className=" mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <Link
                href="/blog"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                ← Back to Blog
              </Link>
              <span className="text-gray-500">|</span>
              <span className="text-sm font-medium text-blue-600">
                {post.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {post.title}
            </h1>
            <div className="flex items-center gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <span className="font-medium">{post.author}</span>
              </div>
              <span>•</span>
              <span>{post.date}</span>
            </div>
          </div>
        </div>
    

      {/* Blog Content */}
      <div className=" mx-auto px-4 ">
        <div className="max-w-4xl mx-auto">
          <div className="relative h-[400px] mb-12 rounded-xl overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          <article className="prose prose-lg max-w-none">
            {post.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-6">
                {paragraph}
              </p>
            ))}
          </article>
        </div>
      </div>
    </main>
  );
} 