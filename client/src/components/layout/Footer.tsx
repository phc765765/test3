import { Link } from "wouter";
import { Facebook, Youtube, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mr-3">
                <span className="text-primary font-bold font-heading text-lg">M</span>
              </div>
              <h3 className="text-xl font-bold font-heading">MathSphere</h3>
            </div>
            <p className="text-gray-400 mb-4">Khám phá và làm chủ toán học lớp 8 theo cách thú vị và hiệu quả nhất.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold font-heading mb-4">Chương trình học</h4>
            <ul className="space-y-2">
              <li><Link href="/curriculum?semester=1"><a className="text-gray-400 hover:text-white transition-colors">Học kỳ I</a></Link></li>
              <li><Link href="/curriculum?semester=2"><a className="text-gray-400 hover:text-white transition-colors">Học kỳ II</a></Link></li>
              <li><Link href="/curriculum?subject=algebra"><a className="text-gray-400 hover:text-white transition-colors">Đại số</a></Link></li>
              <li><Link href="/curriculum?subject=geometry"><a className="text-gray-400 hover:text-white transition-colors">Hình học</a></Link></li>
              <li><Link href="/curriculum?subject=statistics"><a className="text-gray-400 hover:text-white transition-colors">Thống kê</a></Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold font-heading mb-4">Tài nguyên</h4>
            <ul className="space-y-2">
              <li><Link href="/study-materials"><a className="text-gray-400 hover:text-white transition-colors">Tài liệu học tập</a></Link></li>
              <li><Link href="/exercises"><a className="text-gray-400 hover:text-white transition-colors">Bài tập</a></Link></li>
              <li><Link href="/quizzes"><a className="text-gray-400 hover:text-white transition-colors">Kiểm tra</a></Link></li>
              <li><Link href="/tools"><a className="text-gray-400 hover:text-white transition-colors">Công cụ hỗ trợ</a></Link></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Video bài giảng</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold font-heading mb-4">Hỗ trợ</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Liên hệ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Câu hỏi thường gặp</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Điều khoản sử dụng</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Chính sách bảo mật</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-500">© {new Date().getFullYear()} MathSphere. Tất cả các quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
