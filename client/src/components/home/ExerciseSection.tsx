import { Link } from "wouter";
import { ChevronRight } from "lucide-react";

const ExerciseSection = () => {
  const exercises = [
    {
      id: 1,
      title: "Rút gọn biểu thức đại số",
      description: "Thực hành rút gọn các biểu thức đại số phức tạp",
      category: "Đại số",
      difficulty: "Trung bình",
      categoryColor: "bg-blue-100 text-primary",
      buttonColor: "bg-primary hover:bg-primary-dark",
      link: "/exercises/algebra/simplify"
    },
    {
      id: 2,
      title: "Tính diện tích xung quanh hình chóp",
      description: "Bài tập về tính diện tích xung quanh của hình chóp đều",
      category: "Hình học",
      difficulty: "Khó",
      categoryColor: "bg-purple-100 text-[#8B5CF6]",
      buttonColor: "bg-[#8B5CF6] hover:bg-[#7C3AED]",
      link: "/exercises/geometry/pyramid-area"
    },
    {
      id: 3,
      title: "Vẽ biểu đồ từ bảng số liệu",
      description: "Thực hành vẽ các loại biểu đồ từ số liệu thống kê",
      category: "Thống kê",
      difficulty: "Dễ",
      categoryColor: "bg-green-100 text-[#10B981]",
      buttonColor: "bg-[#10B981] hover:bg-green-700",
      link: "/exercises/statistics/charts"
    }
  ];

  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold font-heading text-gray-900">Bài tập mới nhất</h2>
        <Link href="/exercises">
          <a className="text-primary font-medium flex items-center hover:underline">
            Tất cả bài tập
            <ChevronRight className="h-4 w-4 ml-1" />
          </a>
        </Link>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
        <ul className="divide-y divide-gray-100">
          {exercises.map((exercise) => (
            <li key={exercise.id} className="p-5 hover:bg-gray-50">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <div className="mb-3 sm:mb-0">
                  <span className={`inline-block px-2 py-1 ${exercise.categoryColor} text-xs font-semibold rounded-full mb-2`}>
                    {exercise.category}
                  </span>
                  <h3 className="font-heading font-semibold text-gray-900">{exercise.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{exercise.description}</p>
                </div>
                <div className="flex space-x-2 items-center">
                  <span className="text-sm text-gray-500">Độ khó: {exercise.difficulty}</span>
                  <Link href={exercise.link}>
                    <a className={`flex items-center justify-center px-4 py-2 ${exercise.buttonColor} text-white font-medium rounded-lg transition-colors`}>
                      Làm bài
                    </a>
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ExerciseSection;
