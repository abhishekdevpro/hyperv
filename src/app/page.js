import CommunitySection from "@/sections/CommunitySection";
import FeaturesSection from "@/sections/Features";
import HeroSection from "@/sections/HeroSection";
import HyperVSolutionsHeader from "@/sections/HyperSolution";
import Logos from "@/sections/Logos";
import ProductsAndTools from "@/sections/Product";
import WebBuildSection from "@/sections/WebBuildSection";
import PdfBookletViewer from "@/sections/PdfBookletViewer";
import UpcomingProjects from "@/sections/UpcomingProjects";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
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
