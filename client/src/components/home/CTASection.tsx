import { Link } from "wouter";
import { GraduationCap, BookOpen, Award } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative mb-16">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl shadow-xl -z-10"></div>
      <div className="absolute inset-0 bg-[url('https://img.freepik.com/free-vector/mathematics-collage-concept_23-2148161253.jpg?w=1200')] opacity-10 bg-cover bg-center rounded-3xl -z-10"></div>
      
      <div className="px-8 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-6">Nâng cao kỹ năng Toán học với MathSphere</h2>
          <p className="text-white text-lg opacity-90 mb-10 max-w-2xl mx-auto">Cùng khám phá kho tài nguyên dạy và học Toán lớp 8 đa dạng, giúp bạn tiến bộ nhanh chóng và tự tin chinh phục các kỳ thi.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
              <GraduationCap className="h-10 w-10 mx-auto mb-4 text-blue-200" />
              <h3 className="text-xl font-bold mb-2">Lộ trình học tập</h3>
              <p className="text-blue-100 text-sm">Chương trình học được thiết kế theo sách giáo khoa và chuẩn kiến thức lớp 8</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
              <BookOpen className="h-10 w-10 mx-auto mb-4 text-blue-200" />
              <h3 className="text-xl font-bold mb-2">Tài liệu đa dạng</h3>
              <p className="text-blue-100 text-sm">Bao gồm lý thuyết, bài tập, đề kiểm tra và tài liệu tham khảo</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
              <Award className="h-10 w-10 mx-auto mb-4 text-blue-200" />
              <h3 className="text-xl font-bold mb-2">Đánh giá năng lực</h3>
              <p className="text-blue-100 text-sm">Các bài kiểm tra, đánh giá giúp nắm vững kiến thức và chuẩn bị tốt cho kỳ thi</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <Link href="/curriculum">
              <button className="bg-white hover:bg-gray-50 text-blue-700 font-bold py-4 px-8 rounded-xl shadow-lg transition-all text-lg">
                Bắt đầu học ngay
              </button>
            </Link>
            <Link href="/study-materials">
              <button className="bg-blue-500/30 hover:bg-blue-500/40 text-white border-2 border-white/40 font-bold py-4 px-8 rounded-xl transition-all text-lg backdrop-blur-sm">
                Xem tài liệu học tập
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
