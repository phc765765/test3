import { Link } from "wouter";
import { ChevronRight, Clock, LucideBarChart3, Calculator } from "lucide-react";

const ExerciseSection = () => {
  const exercises = [
    {
      id: 1,
      title: "Rút gọn biểu thức đại số",
      description: "Thực hành rút gọn các biểu thức đại số phức tạp và phân thức đại số",
      category: "Đại số",
      difficulty: "Trung bình",
      time: "25 phút",
      icon: <Calculator className="h-4 w-4 mr-1" />,
      categoryColor: "bg-blue-100 text-blue-600",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
      link: "/exercises/algebra/expressions/101"
    },
    {
      id: 2,
      title: "Tính diện tích và thể tích hình chóp",
      description: "Bài tập về tính diện tích xung quanh và thể tích của hình chóp đều",
      category: "Hình học",
      difficulty: "Khó",
      time: "30 phút",
      icon: <svg className="h-4 w-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 19h20L12 2z"/></svg>,
      categoryColor: "bg-purple-100 text-purple-600",
      buttonColor: "bg-purple-600 hover:bg-purple-700",
      link: "/exercises/geometry/pyramids/301"
    },
    {
      id: 3,
      title: "Vẽ và phân tích biểu đồ thống kê",
      description: "Thực hành vẽ các loại biểu đồ từ số liệu thống kê và phân tích dữ liệu",
      category: "Thống kê",
      difficulty: "Dễ",
      time: "20 phút",
      icon: <LucideBarChart3 className="h-4 w-4 mr-1" />,
      categoryColor: "bg-green-100 text-green-600",
      buttonColor: "bg-green-600 hover:bg-green-700",
      link: "/exercises/statistics/data-collection/401"
    },
    {
      id: 4,
      title: "Giải phương trình bậc nhất",
      description: "Các dạng bài tập về giải phương trình bậc nhất và ứng dụng",
      category: "Đại số",
      difficulty: "Dễ",
      time: "15 phút",
      icon: <Calculator className="h-4 w-4 mr-1" />,
      categoryColor: "bg-blue-100 text-blue-600",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
      link: "/exercises/algebra/equations/201"
    }
  ];

  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold font-heading text-gray-900">Bài tập mới nhất</h2>
        <Link href="/exercises">
          <button className="text-indigo-600 font-medium flex items-center hover:underline">
            Tất cả bài tập
            <ChevronRight className="h-4 w-4 ml-1" />
          </button>
        </Link>
      </div>
      
      <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
        <ul className="divide-y divide-gray-100">
          {exercises.map((exercise) => (
            <li key={exercise.id} className="p-5 hover:bg-gray-50 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <div className="mb-3 sm:mb-0">
                  <span className={`inline-block px-2 py-1 ${exercise.categoryColor} text-xs font-semibold rounded-full mb-2`}>
                    {exercise.category}
                  </span>
                  <h3 className="font-heading font-semibold text-gray-900">{exercise.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{exercise.description}</p>
                  <div className="flex items-center mt-2 text-xs text-gray-500">
                    <Clock className="h-3.5 w-3.5 mr-1" />
                    <span>{exercise.time}</span>
                  </div>
                </div>
                <div className="flex space-x-3 items-center">
                  <span className="text-sm text-gray-500">Độ khó: {exercise.difficulty}</span>
                  <Link href={exercise.link}>
                    <button className={`flex items-center justify-center px-5 py-2.5 ${exercise.buttonColor} text-white font-medium rounded-lg transition-colors shadow-sm`}>
                      {exercise.icon}
                      Làm bài
                    </button>
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="bg-gray-50 px-5 py-3 text-center border-t border-gray-100">
          <Link href="/exercises">
            <button className="text-indigo-600 font-medium hover:underline">
              Xem tất cả bài tập
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExerciseSection;
