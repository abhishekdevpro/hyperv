import CommunitySection from "@/sections/CommunitySection";
import FeaturesSection from "@/sections/Features";
import HeroSection from "@/sections/HeroSection";
import HyperVSolutionsHeader from "@/sections/HyperSolution";
import Logos from "@/sections/Logos";
import ProductsAndTools from "@/sections/Product";
import WebBuildSection from "@/sections/WebBuildSection";
import PdfBookletViewer from "@/sections/PdfBookletViewer";
import UpcomingProjects from "@/sections/UpcomingProjects";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* <Link
        href="/book-consultation"
        className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-full shadow-lg transition-all duration-300"
      >
        Book Free Consultation
      </Link> */}

      <HeroSection />
      <FeaturesSection />
      <HyperVSolutionsHeader />
      <PdfBookletViewer />
      <WebBuildSection />
      <ProductsAndTools />

      <Logos />
      <UpcomingProjects />
      <CommunitySection />
    </main>
  );
}
