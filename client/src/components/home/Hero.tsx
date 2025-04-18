import { Link } from "wouter";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-primary to-[#8B5CF6] rounded-2xl shadow-lg overflow-hidden mb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-white mb-8 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Chào mừng đến với MathSphere</h2>
          <p className="text-lg md:text-xl mb-6 opacity-90">Nơi khám phá và làm chủ toán học lớp 8 theo cách thú vị và hiệu quả nhất</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/curriculum">
              <a className="bg-white text-primary hover:bg-gray-100 font-medium py-2 px-6 rounded-lg shadow-md transition-all">
                Bắt đầu học
              </a>
            </Link>
            <Link href="/study-materials">
              <a className="bg-transparent text-white hover:bg-white/10 border border-white font-medium py-2 px-6 rounded-lg transition-all">
                Khám phá tài liệu
              </a>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img 
            src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80" 
            alt="Học sinh đang học toán" 
            className="rounded-lg shadow-lg" 
            width="600" 
            height="400"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
