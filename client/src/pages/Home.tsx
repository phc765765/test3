import { Link } from "wouter";
import Hero from "@/components/home/Hero";
import FeaturedContent from "@/components/home/FeaturedContent";
import CurriculumSection from "@/components/home/CurriculumSection";
import ToolsSection from "@/components/home/ToolsSection";
import ExerciseSection from "@/components/home/ExerciseSection";
import FormulaExamples from "@/components/home/FormulaExamples";
import CTASection from "@/components/home/CTASection";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

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
      
      {/* Tạo liên kết trực tiếp đến trang chi tiết bài tập để kiểm tra */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-12">
        <h2 className="text-xl font-bold text-blue-700 mb-3 flex items-center">
          <FileText className="h-5 w-5 mr-2" />
          Kiểm tra các tính năng mới
        </h2>
        <p className="mb-4 text-gray-700">
          Bạn có thể kiểm tra các tính năng mới về bài tập, lý thuyết, hướng dẫn giải và trắc nghiệm thông qua các liên kết sau:
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="/exercises/algebra/expressions/101">
            <Button className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Bài tập đại số: Rút gọn biểu thức
            </Button>
          </a>
          <Link href="/exercises/geometry/pyramids/301">
            <Button className="bg-purple-600 hover:bg-purple-700 flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Bài tập hình học: Tính diện tích hình chóp
            </Button>
          </Link>
          <Link href="/exercises/statistics/data-collection/401">
            <Button className="bg-green-600 hover:bg-green-700 flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Bài tập thống kê: Vẽ biểu đồ
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Home;
