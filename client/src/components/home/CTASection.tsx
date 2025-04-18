import { Link } from "wouter";

const CTASection = () => {
  return (
    <section className="bg-gradient-to-r from-primary-light to-primary rounded-2xl shadow-lg overflow-hidden mb-12">
      <div className="px-6 py-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold font-heading text-white mb-4">Sẵn sàng nâng cao kỹ năng toán học của bạn?</h2>
        <p className="text-white text-lg opacity-90 mb-8 max-w-2xl mx-auto">Đăng ký tài khoản để theo dõi tiến độ học tập, lưu bài tập yêu thích và nhận thông báo về các bài học mới.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/register">
            <a className="bg-white text-primary hover:bg-gray-100 font-medium py-3 px-8 rounded-lg shadow-md transition-all text-lg">
              Đăng ký ngay
            </a>
          </Link>
          <Link href="/about">
            <a className="bg-transparent text-white hover:bg-white/10 border border-white font-medium py-3 px-8 rounded-lg transition-all text-lg">
              Tìm hiểu thêm
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
