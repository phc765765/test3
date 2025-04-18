import Hero from "@/components/home/Hero";
import FeaturedContent from "@/components/home/FeaturedContent";
import CurriculumSection from "@/components/home/CurriculumSection";
import ToolsSection from "@/components/home/ToolsSection";
import ExerciseSection from "@/components/home/ExerciseSection";
import FormulaExamples from "@/components/home/FormulaExamples";
import CTASection from "@/components/home/CTASection";

const Home = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Hero />
      <FeaturedContent />
      <CurriculumSection />
      <ToolsSection />
      <ExerciseSection />
      <FormulaExamples />
      <CTASection />
    </main>
  );
};

export default Home;
