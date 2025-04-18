import { Link } from "wouter";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 rounded-2xl shadow-lg overflow-hidden mb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-white mb-8 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Chào mừng đến với MathSphere</h2>
          <p className="text-lg md:text-xl mb-6 opacity-90">Nơi khám phá và làm chủ toán học lớp 8 theo cách thú vị và hiệu quả nhất</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/curriculum">
              <button className="bg-white text-indigo-600 hover:bg-gray-100 font-medium py-3 px-6 rounded-lg shadow-md transition-all">
                Bắt đầu học
              </button>
            </Link>
            <Link href="/study-materials">
              <button className="bg-transparent text-white hover:bg-white/10 border border-white font-medium py-3 px-6 rounded-lg transition-all">
                Khám phá tài liệu
              </button>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img 
            src="https://img.freepik.com/free-vector/gradient-mathematics-educational-background_23-2148156108.jpg" 
            alt="Hình ảnh minh họa Toán học" 
            className="rounded-lg shadow-lg object-cover" 
            width="600" 
            height="400"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
