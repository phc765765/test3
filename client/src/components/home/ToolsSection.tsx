import { Link } from "wouter";
import { Parentheses, SquareEqual, ChartBar } from "lucide-react";

const ToolsSection = () => {
  const tools = [
    {
      id: 1,
      title: "Giải bài toán online",
      description: "Công cụ giải phương trình, đồ thị hàm số và các bài toán đại số.",
      icon: <Parentheses className="text-white text-5xl" />,
      color: "from-blue-500 to-blue-600",
      buttonClass: "border-primary text-primary hover:bg-primary hover:text-white",
      link: "/tools/equation-solver"
    },
    {
      id: 2,
      title: "GeoGebra",
      description: "Công cụ vẽ đồ thị, hình học và các bài tập thực hành trực quan.",
      icon: <SquareEqual className="text-white text-5xl" />,
      color: "from-green-500 to-green-600",
      buttonClass: "border-[#10B981] text-[#10B981] hover:bg-[#10B981] hover:text-white",
      link: "/tools/geogebra"
    },
    {
      id: 3,
      title: "Thống kê và Xác suất",
      description: "Công cụ hỗ trợ phân tích dữ liệu và tính toán xác suất.",
      icon: <ChartBar className="text-white text-5xl" />,
      color: "from-purple-500 to-purple-600",
      buttonClass: "border-[#8B5CF6] text-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white",
      link: "/tools/statistics"
    }
  ];

  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold font-heading text-gray-900">Công cụ hỗ trợ học tập</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <div key={tool.id} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
            <div className={`h-36 bg-gradient-to-r ${tool.color} flex items-center justify-center`}>
              {tool.icon}
            </div>
            <div className="p-5">
              <h3 className="font-heading font-bold text-lg text-gray-900 mb-2">{tool.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{tool.description}</p>
              <Link href={tool.link}>
                <a className={`block w-full text-center border ${tool.buttonClass} font-medium py-2 px-4 rounded-lg transition-colors`}>
                  Sử dụng công cụ
                </a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ToolsSection;
