import { Link } from "wouter";
import { Calculator, PenSquare, ChartBar, Settings, BookOpen, BrainCircuit } from "lucide-react";

const ToolsSection = () => {
  const tools = [
    {
      id: 1,
      title: "Máy tính Toán học",
      description: "Công cụ giải phương trình, đồ thị hàm số và các bài toán đại số phức tạp.",
      icon: <Calculator className="h-10 w-10" />,
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
      iconBg: "bg-blue-600/30",
      buttonClass: "bg-blue-600 hover:bg-blue-700 text-white",
      link: "/tools"
    },
    {
      id: 2,
      title: "GeoGebra - Hình học động",
      description: "Công cụ trực quan hóa bài toán hình học với các hình vẽ động, tương tác.",
      icon: <PenSquare className="h-10 w-10" />,
      color: "bg-gradient-to-br from-emerald-500 to-teal-600",
      iconBg: "bg-emerald-600/30",
      buttonClass: "bg-emerald-600 hover:bg-emerald-700 text-white",
      link: "/tools"
    },
    {
      id: 3,
      title: "Công cụ phân tích dữ liệu",
      description: "Hỗ trợ phân tích dữ liệu, biểu đồ thống kê và tính toán xác suất.",
      icon: <ChartBar className="h-10 w-10" />,
      color: "bg-gradient-to-br from-purple-500 to-indigo-600",
      iconBg: "bg-purple-600/30",
      buttonClass: "bg-purple-600 hover:bg-purple-700 text-white",
      link: "/tools"
    },
    {
      id: 4,
      title: "Trợ lý AI học tập",
      description: "Công cụ hướng dẫn học tập và giải đáp thắc mắc sử dụng trí tuệ nhân tạo.",
      icon: <BrainCircuit className="h-10 w-10" />,
      color: "bg-gradient-to-br from-amber-500 to-red-500",
      iconBg: "bg-amber-600/30",
      buttonClass: "bg-amber-600 hover:bg-amber-700 text-white",
      link: "/tools"
    },
    {
      id: 5,
      title: "Từ điển Toán học",
      description: "Tra cứu định nghĩa, công thức và khái niệm Toán học quan trọng.",
      icon: <BookOpen className="h-10 w-10" />,
      color: "bg-gradient-to-br from-cyan-500 to-blue-500",
      iconBg: "bg-cyan-600/30",
      buttonClass: "bg-cyan-600 hover:bg-cyan-700 text-white",
      link: "/tools"
    },
    {
      id: 6,
      title: "Bộ công cụ hỗ trợ",
      description: "Các tiện ích hỗ trợ học tập và luyện tập Toán học lớp 8.",
      icon: <Settings className="h-10 w-10" />,
      color: "bg-gradient-to-br from-gray-600 to-gray-700",
      iconBg: "bg-gray-600/30",
      buttonClass: "bg-gray-600 hover:bg-gray-700 text-white",
      link: "/tools"
    }
  ];

  return (
    <section className="mb-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold font-heading text-gray-900">Công cụ hỗ trợ học tập</h2>
        <Link href="/tools">
          <button className="text-indigo-600 font-medium hover:underline text-sm">
            Xem tất cả công cụ
          </button>
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <div key={tool.id} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-all group">
            <div className={`p-6 ${tool.color} group-hover:scale-[1.02] transition-transform`}>
              <div className={`w-16 h-16 rounded-full ${tool.iconBg} backdrop-blur-xl flex items-center justify-center mb-4 text-white`}>
                {tool.icon}
              </div>
              <h3 className="font-heading font-bold text-xl text-white mb-2">{tool.title}</h3>
              <p className="text-white/80 text-sm">{tool.description}</p>
            </div>
            <div className="p-4 border-t border-gray-100">
              <Link href={tool.link}>
                <button className={`w-full py-2.5 px-4 rounded-lg transition-colors text-center ${tool.buttonClass} font-medium`}>
                  Sử dụng công cụ
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ToolsSection;
