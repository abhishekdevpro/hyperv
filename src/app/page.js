import CommunitySection from "@/sections/CommunitySection";
import FeaturesSection from "@/sections/Features";
import HeroSection from "@/sections/HeroSection";
import HyperVSolutionsHeader from "@/sections/HyperSolution";
import Logos from "@/sections/Logos";
import ProductsAndTools from "@/sections/Product";
import WebBuildSection from "@/sections/WebBuildSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <HyperVSolutionsHeader />
      <Logos />
      <WebBuildSection />
      <ProductsAndTools />
    <CommunitySection />
    </main>
  );
}
