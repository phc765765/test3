import { Link } from "wouter";
import { ChevronRight, Parentheses, Grid2x2, BarChartBig } from "lucide-react";

const FeaturedContent = () => {
  const progressItems = [
    {
      id: 1,
      title: "Biểu thức đại số",
      description: "Đa thức nhiều biến và các phép toán cơ bản",
      progress: 60,
      category: "Đại số",
      categoryColor: "blue",
      icon: <Parentheses />,
      link: "/curriculum/algebra"
    },
    {
      id: 2,
      title: "Hình khối trong thực tiễn",
      description: "Hình chóp tam giác đều và tứ giác đều",
      progress: 25,
      category: "Hình học",
      categoryColor: "purple",
      icon: <Grid2x2 />,
      link: "/curriculum/geometry"
    },
    {
      id: 3,
      title: "Yếu tố thống kê",
      description: "Thu thập và phân loại dữ liệu thống kê",
      progress: 10,
      category: "Thống kê",
      categoryColor: "green",
      icon: <BarChartBig />,
      link: "/curriculum/statistics"
    }
  ];

  const getCategoryStyles = (category: string) => {
    switch(category) {
      case "Đại số":
        return {
          bg: "bg-blue-100",
          text: "text-primary",
          button: "bg-primary hover:bg-primary-dark",
          progressBar: "bg-primary"
        };
      case "Hình học":
        return {
          bg: "bg-purple-100",
          text: "text-[#8B5CF6]",
          button: "bg-[#8B5CF6] hover:bg-[#7C3AED]",
          progressBar: "bg-[#8B5CF6]"
        };
      case "Thống kê":
        return {
          bg: "bg-green-100",
          text: "text-[#10B981]",
          button: "bg-[#10B981] hover:bg-green-700",
          progressBar: "bg-[#10B981]"
        };
      default:
        return {
          bg: "bg-blue-100",
          text: "text-primary",
          button: "bg-primary hover:bg-primary-dark",
          progressBar: "bg-primary"
        };
    }
  };

  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold font-heading text-gray-900">Tiếp tục học tập</h2>
        <Link href="/curriculum">
          <a className="text-primary font-medium flex items-center hover:underline">
            Xem tất cả
            <ChevronRight className="h-4 w-4 ml-1" />
          </a>
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {progressItems.map((item) => {
          const styles = getCategoryStyles(item.category);
          
          return (
            <div key={item.id} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
              <div className="p-5">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className={`inline-block px-2 py-1 ${styles.bg} ${styles.text} text-xs font-semibold rounded-full mb-2`}>
                      {item.category}
                    </span>
                    <h3 className="font-heading font-bold text-lg text-gray-900">{item.title}</h3>
                  </div>
                  <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${styles.button} text-white`}>
                    {item.icon}
                  </span>
                </div>
                
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                
                <div className="mb-3">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Tiến độ</span>
                    <span className={`${styles.text} font-medium`}>{item.progress}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${styles.progressBar} rounded-full`} 
                      style={{ width: `${item.progress}%` }}
                    ></div>
                  </div>
                </div>
                
                <Link href={item.link}>
                  <a className={`block w-full text-center ${styles.button} text-white font-medium py-2 px-4 rounded-lg transition-colors`}>
                    Tiếp tục
                  </a>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturedContent;
