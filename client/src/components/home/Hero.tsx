import { Link } from "wouter";
import { Calculator, BookOpen, Bookmark, ChevronRight } from "lucide-react";

const Feature = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="flex items-start gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-xl">
    <div className="mt-1">{icon}</div>
    <div>
      <h3 className="font-bold text-lg text-white mb-1">{title}</h3>
      <p className="text-blue-100 text-sm">{description}</p>
    </div>
  </div>
);

const Hero = () => {
  return (
    <section className="relative mb-20 overflow-hidden rounded-3xl">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-700 via-green-800 to-green-900 -z-10"></div>
      <div className="absolute inset-0 opacity-20 bg-[url('https://img.freepik.com/free-vector/realistic-math-chalkboard-background_23-2148163817.jpg')] bg-cover bg-center mix-blend-overlay -z-10"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-red-500 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute top-1/2 left-1/3 w-60 h-60 bg-yellow-500 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-green-500 rounded-full filter blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="text-white">
            <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm text-blue-100 font-medium mb-5">
              Học Toán lớp 8 hiệu quả ✓
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 leading-tight">
              Nâng cao kỹ năng <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-indigo-100">Toán học lớp 8</span> <br/>
              cùng MathSphere
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Tài nguyên học tập Toán học đa dạng, phù hợp với chương trình SGK lớp 8 mới nhất, giúp học sinh tiến bộ nhanh chóng
            </p>
            
            <div className="flex flex-wrap gap-4 mb-10">
              <Link href="/curriculum">
                <button className="bg-white text-indigo-700 hover:bg-gray-100 font-bold py-4 px-8 rounded-xl shadow-lg transition-all flex items-center">
                  Bắt đầu học
                  <ChevronRight className="ml-1 h-5 w-5" />
                </button>
              </Link>
              <Link href="/study-materials">
                <button className="bg-transparent text-white hover:bg-white/10 border-2 border-white font-bold py-4 px-8 rounded-xl transition-all">
                  Khám phá tài liệu
                </button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Feature 
                icon={<Calculator className="h-5 w-5 text-blue-200" />}
                title="Công cụ học tập" 
                description="Nhiều công cụ trực quan hỗ trợ giải toán và hiểu bài"
              />
              <Feature 
                icon={<BookOpen className="h-5 w-5 text-blue-200" />}
                title="Bài giảng chất lượng" 
                description="Nội dung bám sát chương trình, dễ hiểu, dễ áp dụng"
              />
              <Feature 
                icon={<Bookmark className="h-5 w-5 text-blue-200" />}
                title="Luyện tập đa dạng" 
                description="Bài tập từ cơ bản đến nâng cao, có lời giải chi tiết"
              />
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl text-center">
                <p className="text-blue-100"><span className="text-2xl font-bold text-white">1000+</span> học sinh đang sử dụng</p>
              </div>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="w-[520px] h-[400px] relative z-10">
              <img 
                src="https://img.freepik.com/free-vector/illustration-students-with-different-subjects_52683-46850.jpg" 
                alt="Học sinh Việt Nam đang học Toán" 
                className="rounded-2xl shadow-2xl object-cover h-full w-full"
              />
              
              {/* Decorative floating elements */}
              <div className="absolute -top-5 -right-5 bg-white p-4 rounded-xl shadow-lg rotate-3 animate-pulse">
                <div className="text-indigo-700 font-bold">Tiến độ học tập</div>
                <div className="w-40 h-2 bg-gray-200 rounded-full mt-2">
                  <div className="w-3/4 h-2 bg-indigo-500 rounded-full"></div>
                </div>
              </div>
              
              <div className="absolute -bottom-10 -left-10 bg-white p-4 rounded-xl shadow-lg -rotate-6">
                <div className="text-indigo-700 font-bold">Bài giảng mới</div>
                <div className="text-gray-500 text-sm">Chương 3: Hình học không gian</div>
              </div>
            </div>
            
            {/* Background decorations */}
            <div className="absolute top-10 right-10 w-32 h-32 bg-indigo-500/30 rounded-full filter blur-xl"></div>
            <div className="absolute bottom-10 left-20 w-40 h-40 bg-blue-500/30 rounded-full filter blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
