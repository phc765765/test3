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
      icon: <Parentheses className="h-4 w-4" />,
      link: "/curriculum?semester=1"
    },
    {
      id: 2,
      title: "Hình khối trong thực tiễn",
      description: "Hình chóp tam giác đều và tứ giác đều",
      progress: 25,
      category: "Hình học",
      categoryColor: "purple",
      icon: <Grid2x2 className="h-4 w-4" />,
      link: "/curriculum?semester=1&subject=geometry"
    },
    {
      id: 3,
      title: "Yếu tố thống kê",
      description: "Thu thập và phân loại dữ liệu thống kê",
      progress: 10,
      category: "Thống kê",
      categoryColor: "green",
      icon: <BarChartBig className="h-4 w-4" />,
      link: "/curriculum?semester=1&subject=statistics"
    }
  ];

  const getCategoryStyles = (category: string) => {
    switch(category) {
      case "Đại số":
        return {
          bg: "bg-blue-100",
          text: "text-blue-600",
          button: "bg-blue-600 hover:bg-blue-700",
          progressBar: "bg-blue-600"
        };
      case "Hình học":
        return {
          bg: "bg-purple-100",
          text: "text-purple-600",
          button: "bg-purple-600 hover:bg-purple-700",
          progressBar: "bg-purple-600"
        };
      case "Thống kê":
        return {
          bg: "bg-green-100",
          text: "text-green-600",
          button: "bg-green-600 hover:bg-green-700",
          progressBar: "bg-green-600"
        };
      default:
        return {
          bg: "bg-blue-100",
          text: "text-blue-600",
          button: "bg-blue-600 hover:bg-blue-700",
          progressBar: "bg-blue-600"
        };
    }
  };

  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold font-heading text-gray-900">Tiếp tục học tập</h2>
        <Link href="/curriculum">
          <button className="text-indigo-600 font-medium flex items-center hover:underline">
            Xem tất cả
            <ChevronRight className="h-4 w-4 ml-1" />
          </button>
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
                  <span className={`inline-flex items-center justify-center w-9 h-9 rounded-full ${styles.button} text-white`}>
                    {item.icon}
                  </span>
                </div>
                
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Tiến độ</span>
                    <span className={`${styles.text} font-medium`}>{item.progress}%</span>
                  </div>
                  <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${styles.progressBar} rounded-full`} 
                      style={{ width: `${item.progress}%` }}
                    ></div>
                  </div>
                </div>
                
                <Link href={item.link}>
                  <button className={`block w-full text-center ${styles.button} text-white font-medium py-2.5 px-4 rounded-lg transition-colors`}>
                    Tiếp tục
                  </button>
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
