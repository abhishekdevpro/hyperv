// import { Lightbulb, Laptop } from "lucide-react"

// export default function FeaturesSection() {
//   return (
//     <section className="w-full py-20 px-6 md:px-12 lg:px-24 bg-white text-[#161339]">
//       <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-16">
//         <FeatureCard
//           icon={<Lightbulb className="w-12 h-12 text-[#2563eb]" />}
//           title="In-house Only"
//           description="At Pimjo, we focus solely on developing our own products, not custom solutions for clients, this ensures exceptional quality and rigorous standards in every aspect of the development process."
//         />

//         <FeatureCard
//           icon={<Laptop className="w-12 h-12 text-[#2563eb]" />}
//           title="Products and SaaS"
//           description="We build digital products and SaaS that have a real impact on your business. Our team of experts is dedicated to delivering innovative, high-quality solutions that help you achieve your goals and stay ahead of the competition."
//         />
//         <FeatureCard
//           icon={<Laptop className="w-12 h-12 text-[#2563eb]" />}
//           title="Products and SaaS"
//           description="We build digital products and SaaS that have a real impact on your business. Our team of experts is dedicated to delivering innovative, high-quality solutions that help you achieve your goals and stay ahead of the competition."
//         />
//       </div>
//     </section>
//   )
// }

// function FeatureCard({ icon, title, description }) {
//   return (
//     <div className="flex flex-col items-center text-center md:items-start md:text-left">
//       <div className="mb-6">{icon}</div>
//       <h3 className="text-2xl font-bold mb-4">{title}</h3>
//       <p className="text-gray-600">{description}</p>
//     </div>
//   )
// }
import { Lightbulb, Laptop } from "lucide-react"

export default function FeaturesSection() {
  return (
    <section className="w-full py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-white via-blue-50 to-white text-[#161339]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
        <FeatureCard
          icon={<Lightbulb className="w-12 h-12 text-pink-500" />}
          title="In-house Only"
          description="At Pimjo, we focus solely on developing our own products. No client projects — just 100% dedication to our vision and standards."
        />

        <FeatureCard
          icon={<Laptop className="w-12 h-12 text-blue-500" />}
          title="Products and SaaS"
          description="We build digital products and SaaS that actually matter. Scalable, sleek, and high-impact tools to grow your business."
        />

        <FeatureCard
          icon={<Laptop className="w-12 h-12 text-fuchsia-500" />}
          title="Innovation First"
          description="We're driven by curiosity and innovation. Every product we build is backed by research, strategy, and thoughtful design."
        />
      </div>
    </section>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="group relative p-6 rounded-3xl bg-white/80 backdrop-blur-lg shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-tr from-pink-500 to-blue-500 text-white mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-extrabold text-[#161339] group-hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-pink-500 to-fuchsia-500 transition-all duration-300">
        {title}
      </h3>
      <p className="text-gray-600 mt-3 leading-relaxed">
        {description}
      </p>
    </div>
  )
}
