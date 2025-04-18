import { useState } from "react";
import { Link } from "wouter";
import { ChevronDown, ChevronUp, FileText, CheckCircle, Lock } from "lucide-react";

const CurriculumSection = () => {
  const [activeSemester, setActiveSemester] = useState("semester1");
  const [expandedChapter, setExpandedChapter] = useState(1);

  const chapters = [
    {
      id: 1,
      title: "Biểu thức đại số (29 tiết)",
      color: "blue",
      lessons: [
        { id: 1, title: "Đơn thức và đa thức nhiều biến", status: "available" },
        { id: 2, title: "Các phép toán với đa thức nhiều biến", status: "available" },
        { id: 3, title: "Hằng đẳng thức đáng nhớ", status: "available" },
        { id: 4, title: "Phân tích đa thức thành nhân tử", status: "available" },
        { id: 5, title: "Phân thức đại số", status: "current" },
        { id: 6, title: "Cộng, trừ phân thức", status: "locked" },
        { id: 7, title: "Nhân, chia phân thức", status: "locked" },
        { id: 8, title: "Kiểm tra giữa kỳ", status: "locked" }
      ]
    },
    {
      id: 2,
      title: "Các hình khối trong thực tiễn (8 tiết)",
      color: "purple",
      lessons: [
        { id: 1, title: "Hình chóp tam giác đều", status: "available" },
        { id: 2, title: "Hình chóp tứ giác đều", status: "available" },
        { id: 3, title: "Diện tích xung quanh và thể tích của các hình chóp", status: "locked" }
      ]
    },
    {
      id: 3,
      title: "Một số yếu tố thống kê (12 tiết)",
      color: "green",
      lessons: [
        { id: 1, title: "Thu thập và phân loại dữ liệu", status: "available" },
        { id: 2, title: "Lựa chọn dạng biểu đồ", status: "locked" },
        { id: 3, title: "Phân tích dữ liệu", status: "locked" }
      ]
    }
  ];

  const handleChapterToggle = (chapterId: number) => {
    setExpandedChapter(expandedChapter === chapterId ? 0 : chapterId);
  };

  const getColorClass = (color: string) => {
    switch(color) {
      case "blue": return "bg-blue-100 text-primary";
      case "purple": return "bg-purple-100 text-[#8B5CF6]";
      case "green": return "bg-green-100 text-[#10B981]";
      default: return "bg-blue-100 text-primary";
    }
  };

  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold font-heading text-gray-900">Chương trình học</h2>
        <div className="flex space-x-2">
          <button 
            className={`px-4 py-2 ${activeSemester === 'semester1' ? 'bg-primary text-white' : 'bg-white text-gray-700'} rounded-lg font-medium`}
            onClick={() => setActiveSemester('semester1')}
          >
            Học kỳ I
          </button>
          <button 
            className={`px-4 py-2 ${activeSemester === 'semester2' ? 'bg-primary text-white' : 'bg-white text-gray-700'} rounded-lg font-medium`}
            onClick={() => setActiveSemester('semester2')}
          >
            Học kỳ II
          </button>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
        {chapters.map((chapter) => (
          <div key={chapter.id} className="border-b border-gray-100 last:border-b-0">
            <div className="p-5">
              <div 
                className="flex items-center justify-between cursor-pointer"
                onClick={() => handleChapterToggle(chapter.id)}
              >
                <div className="flex items-center">
                  <span className={`inline-flex items-center justify-center w-10 h-10 rounded-full ${getColorClass(chapter.color)} mr-4`}>
                    <span className="font-bold">{chapter.id}</span>
                  </span>
                  <h3 className="font-heading font-bold text-lg text-gray-900">{chapter.title}</h3>
                </div>
                <button className="p-2 text-gray-500 hover:text-primary focus:outline-none">
                  {expandedChapter === chapter.id ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                </button>
              </div>
              
              {expandedChapter === chapter.id && (
                <div className="mt-4 ml-14">
                  <ul className="space-y-3">
                    {chapter.lessons.map((lesson) => {
                      if (lesson.status === "current") {
                        return (
                          <li key={lesson.id} className="flex items-center text-primary font-medium">
                            <CheckCircle className="h-4 w-4 mr-2" />
                            <Link href={`/curriculum/chapter/${chapter.id}/lesson/${lesson.id}`}>
                              <a className="text-inherit hover:underline">{lesson.title}</a>
                            </Link>
                            <span className="ml-2 px-2 py-0.5 bg-blue-100 text-primary text-xs rounded-full">Đang học</span>
                          </li>
                        );
                      } else if (lesson.status === "available") {
                        return (
                          <li key={lesson.id} className="flex items-center text-gray-700 hover:text-primary">
                            <FileText className="h-4 w-4 mr-2 text-gray-400" />
                            <Link href={`/curriculum/chapter/${chapter.id}/lesson/${lesson.id}`}>
                              <a className="text-inherit hover:underline">{lesson.title}</a>
                            </Link>
                          </li>
                        );
                      } else {
                        return (
                          <li key={lesson.id} className="flex items-center text-gray-400">
                            <Lock className="h-4 w-4 mr-2" />
                            <span>{lesson.title}</span>
                          </li>
                        );
                      }
                    })}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CurriculumSection;
