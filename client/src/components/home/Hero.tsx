import { Link } from "wouter";
import { Calculator, BookOpen, Bookmark, ChevronRight, Triangle, FunctionSquare, Braces, Divide } from "lucide-react";

const Feature = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="flex items-start gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-xl">
    <div className="mt-1">{icon}</div>
    <div>
      <h3 className="font-bold text-lg text-white mb-1">{title}</h3>
      <p className="text-green-100 text-sm">{description}</p>
    </div>
  </div>
);

const Hero = () => {
  return (
    <section className="relative mb-20 overflow-hidden rounded-3xl">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-700 via-green-600 to-green-800 -z-10"></div>
      <div className="absolute inset-0 opacity-20 bg-[url('https://img.freepik.com/free-vector/realistic-math-chalkboard-background_23-2148163817.jpg')] bg-cover bg-center mix-blend-overlay -z-10"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-red-500 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute top-1/3 left-1/2 w-60 h-60 bg-yellow-500 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-green-600 rounded-full filter blur-3xl opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="text-white">
            <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm text-green-100 font-medium mb-5">
              Kết nối tri thức với cuộc sống ✓
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 leading-tight">
              Học tốt toán học <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-100">Đại số & Hình học Lớp 8</span> <br/>
              cùng MathSphere
            </h1>
            <p className="text-xl mb-8 text-green-100">
              Tam giác đồng dạng, biểu thức đại số, phép biến hình... chương trình SGK lớp 8 dễ dàng hơn với hệ thống bài giảng và bài tập từ cơ bản đến nâng cao
            </p>
            
            <div className="flex flex-wrap gap-4 mb-10">
              <Link href="/curriculum">
                <div className="cursor-pointer">
                  <button className="bg-yellow-500 text-gray-900 hover:bg-yellow-400 font-bold py-4 px-8 rounded-xl shadow-lg transition-all flex items-center">
                    Bắt đầu học
                    <ChevronRight className="ml-1 h-5 w-5" />
                  </button>
                </div>
              </Link>
              <Link href="/exercises">
                <div className="cursor-pointer">
                  <button className="bg-transparent text-white hover:bg-white/10 border-2 border-white font-bold py-4 px-8 rounded-xl transition-all">
                    Luyện bài tập
                  </button>
                </div>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Feature 
                icon={<Triangle className="h-5 w-5 text-yellow-200" />}
                title="Tam giác đồng dạng" 
                description="Học và làm bài tập về các trường hợp đồng dạng tam giác"
              />
              <Feature 
                icon={<Braces className="h-5 w-5 text-yellow-200" />}
                title="Biểu thức đại số" 
                description="Nhân đơn thức với đa thức, rút gọn biểu thức đại số"
              />
              <Feature 
                icon={<FunctionSquare className="h-5 w-5 text-yellow-200" />}
                title="Phép biến hình" 
                description="Phép tịnh tiến, phép đối xứng, phép vị tự trong mặt phẳng"
              />
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl text-center">
                <p className="text-green-100"><span className="text-2xl font-bold text-white">100+</span> bài tập có lời giải chi tiết</p>
              </div>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="w-[520px] h-[400px] relative z-10">
              <img 
                src="https://img.freepik.com/free-vector/hand-drawn-math-formulas-chalkboard_23-2148163417.jpg" 
                alt="Bảng toán với các công thức" 
                className="rounded-2xl shadow-2xl object-cover h-full w-full"
              />
              
              {/* Decorative floating elements */}
              <div className="absolute -top-5 -right-5 bg-white p-4 rounded-xl shadow-lg rotate-3">
                <div className="text-green-700 font-bold">Biểu thức đại số</div>
                <div className="text-gray-700 text-sm">A² - B² = (A+B)(A-B)</div>
              </div>
              
              <div className="absolute -bottom-10 -left-10 bg-white p-4 rounded-xl shadow-lg -rotate-6">
                <div className="text-red-700 font-bold">Tam giác đồng dạng</div>
                <div className="text-gray-700 text-sm">Góc-Góc-Góc (G-G-G)</div>
              </div>
            </div>
            
            {/* Background decorations */}
            <div className="absolute top-10 right-10 w-32 h-32 bg-red-500/30 rounded-full filter blur-xl"></div>
            <div className="absolute bottom-10 left-20 w-40 h-40 bg-yellow-500/30 rounded-full filter blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
