import { useState } from "react";
import { Link, useLocation } from "wouter";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Trang chủ", path: "/" },
    { name: "Chương trình học", path: "/curriculum" },
    { name: "Tài liệu học tập", path: "/study-materials" },
    { name: "Bài tập", path: "/exercises" },
    { name: "Kiểm tra", path: "/quizzes" },
    { name: "Công cụ", path: "/tools" },
  ];

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              {/* Logo container */}
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-white font-bold font-heading text-lg">M</span>
              </div>
            </div>
            <div className="ml-3">
              <Link href="/">
                <a className="block">
                  <h1 className="text-2xl font-bold text-gray-900 font-heading">MathSphere</h1>
                  <p className="text-sm text-gray-500">Khám phá Toán học lớp 8</p>
                </a>
              </Link>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <a className={`font-medium font-heading ${location === item.path ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}>
                  {item.name}
                </a>
              </Link>
            ))}
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              type="button" 
              className="p-2 rounded-md text-gray-500 hover:text-primary focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16m-7 6h7" 
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <MobileMenu isOpen={isMobileMenuOpen} navItems={navItems} currentPath={location} onClose={() => setIsMobileMenuOpen(false)} />
    </header>
  );
};

export default Header;
