import { Lightbulb, Laptop } from "lucide-react"

export default function FeaturesSection() {
  return (
    <section className="w-full py-20 px-6 md:px-12 lg:px-24 bg-white text-[#161339]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-16">
        <FeatureCard
          icon={<Lightbulb className="w-12 h-12 text-[#2563eb]" />}
          title="In-house Only"
          description="At Pimjo, we focus solely on developing our own products, not custom solutions for clients, this ensures exceptional quality and rigorous standards in every aspect of the development process."
        />

        <FeatureCard
          icon={<Laptop className="w-12 h-12 text-[#2563eb]" />}
          title="Products and SaaS"
          description="We build digital products and SaaS that have a real impact on your business. Our team of experts is dedicated to delivering innovative, high-quality solutions that help you achieve your goals and stay ahead of the competition."
        />
        <FeatureCard
          icon={<Laptop className="w-12 h-12 text-[#2563eb]" />}
          title="Products and SaaS"
          description="We build digital products and SaaS that have a real impact on your business. Our team of experts is dedicated to delivering innovative, high-quality solutions that help you achieve your goals and stay ahead of the competition."
        />
      </div>
    </section>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center text-center md:items-start md:text-left">
      <div className="mb-6">{icon}</div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
