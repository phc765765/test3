import { useState } from "react";
import { useLocation } from "wouter";
import { ArrowLeft, ChevronDown, ChevronUp, FileText, CheckCircle, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";

const Curriculum = () => {
  const [location] = useLocation();
  const [activeSemester, setActiveSemester] = useState("semester1");
  const [expandedChapter, setExpandedChapter] = useState<number | null>(1);

  // Extract query parameters if any
  const queryParams = new URLSearchParams(location.split('?')[1]);
  const semesterParam = queryParams.get('semester');
  const subjectParam = queryParams.get('subject');

  // Use URL parameters if available
  useState(() => {
    if (semesterParam === "1" || semesterParam === "2") {
      setActiveSemester(semesterParam === "1" ? "semester1" : "semester2");
    }
  });

  const semester1Chapters = [
    {
      id: 1,
      title: "Biểu thức đại số",
      duration: "29 tiết",
      type: "algebra",
      color: "blue",
      lessons: [
        { id: 1, title: "Đơn thức và đa thức nhiều biến", status: "completed" },
        { id: 2, title: "Các phép toán với đa thức nhiều biến", status: "completed" },
        { id: 3, title: "Hằng đẳng thức đáng nhớ", status: "completed" },
        { id: 4, title: "Phân tích đa thức thành nhân tử", status: "completed" },
        { id: 5, title: "Phân thức đại số", status: "current" },
        { id: 6, title: "Cộng, trừ phân thức", status: "locked" },
        { id: 7, title: "Nhân, chia phân thức", status: "locked" },
        { id: 8, title: "Kiểm tra giữa kỳ", status: "locked" }
      ]
    },
    {
      id: 2,
      title: "Các hình khối trong thực tiễn",
      duration: "8 tiết",
      type: "geometry",
      color: "purple",
      lessons: [
        { id: 1, title: "Hình chóp tam giác đều", status: "available" },
        { id: 2, title: "Hình chóp tứ giác đều", status: "available" },
        { id: 3, title: "Diện tích xung quanh và thể tích của các hình chóp", status: "locked" }
      ]
    },
    {
      id: 3,
      title: "Một số yếu tố thống kê",
      duration: "12 tiết",
      type: "statistics",
      color: "green",
      lessons: [
        { id: 1, title: "Thu thập và phân loại dữ liệu", status: "available" },
        { id: 2, title: "Lựa chọn dạng biểu đồ", status: "locked" },
        { id: 3, title: "Phân tích dữ liệu", status: "locked" }
      ]
    }
  ];

  const semester2Chapters = [
    {
      id: 4,
      title: "Hàm số và đồ thị",
      duration: "20 tiết",
      type: "algebra",
      color: "blue",
      lessons: [
        { id: 1, title: "Khái niệm hàm số", status: "locked" },
        { id: 2, title: "Tọa độ của một điểm và đồ thị", status: "locked" },
        { id: 3, title: "Hàm số bậc nhất y=ax+b", status: "locked" },
        { id: 4, title: "Hệ số góc của đường thẳng", status: "locked" }
      ]
    },
    {
      id: 5,
      title: "Phương trình",
      duration: "14 tiết",
      type: "algebra",
      color: "blue",
      lessons: [
        { id: 1, title: "Phương trình bậc nhất một ẩn", status: "locked" },
        { id: 2, title: "Giải bài toán bằng cách lập phương trình bậc nhất", status: "locked" }
      ]
    },
    {
      id: 6,
      title: "Hình đồng dạng",
      duration: "18 tiết",
      type: "geometry",
      color: "purple",
      lessons: [
        { id: 1, title: "Hai tam giác đồng dạng", status: "locked" },
        { id: 2, title: "Các trường hợp đồng dạng của hai tam giác", status: "locked" }
      ]
    }
  ];

  const chapters = activeSemester === "semester1" ? semester1Chapters : semester2Chapters;

  // Filter by subject if provided
  const filteredChapters = subjectParam 
    ? chapters.filter(chapter => chapter.type === subjectParam)
    : chapters;

  const handleChapterToggle = (chapterId: number) => {
    setExpandedChapter(expandedChapter === chapterId ? null : chapterId);
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
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center mb-6">
        <Button variant="ghost" onClick={() => window.history.back()} className="mr-2">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Quay lại
        </Button>
        <h1 className="text-2xl font-bold font-heading text-gray-900">Chương trình học</h1>
      </div>

      <Tabs defaultValue={activeSemester} onValueChange={setActiveSemester}>
        <TabsList className="mb-6">
          <TabsTrigger value="semester1">Học kỳ I</TabsTrigger>
          <TabsTrigger value="semester2">Học kỳ II</TabsTrigger>
        </TabsList>
        
        <TabsContent value="semester1" className="space-y-6">
          {filteredChapters.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-gray-500">Không tìm thấy chương học nào phù hợp.</p>
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
              {filteredChapters.map((chapter) => (
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
                        <div>
                          <span className={`inline-block px-2 py-1 ${getColorClass(chapter.color)} text-xs font-semibold rounded-full mb-1`}>
                            {chapter.type === "algebra" ? "Đại số" : chapter.type === "geometry" ? "Hình học" : "Thống kê"}
                          </span>
                          <h3 className="font-heading font-bold text-lg text-gray-900">{chapter.title} ({chapter.duration})</h3>
                        </div>
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
                                  <a href={`/curriculum/chapter/${chapter.id}/lesson/${lesson.id}`} className="text-inherit hover:underline">
                                    {lesson.title}
                                  </a>
                                  <span className="ml-2 px-2 py-0.5 bg-blue-100 text-primary text-xs rounded-full">Đang học</span>
                                </li>
                              );
                            } else if (lesson.status === "completed") {
                              return (
                                <li key={lesson.id} className="flex items-center text-gray-700 hover:text-primary">
                                  <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                                  <a href={`/curriculum/chapter/${chapter.id}/lesson/${lesson.id}`} className="text-inherit hover:underline">
                                    {lesson.title}
                                  </a>
                                </li>
                              );
                            } else if (lesson.status === "available") {
                              return (
                                <li key={lesson.id} className="flex items-center text-gray-700 hover:text-primary">
                                  <FileText className="h-4 w-4 mr-2 text-gray-400" />
                                  <a href={`/curriculum/chapter/${chapter.id}/lesson/${lesson.id}`} className="text-inherit hover:underline">
                                    {lesson.title}
                                  </a>
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
          )}
        </TabsContent>
        
        <TabsContent value="semester2" className="space-y-6">
          {filteredChapters.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-gray-500">Không tìm thấy chương học nào phù hợp.</p>
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
              {filteredChapters.map((chapter) => (
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
                        <div>
                          <span className={`inline-block px-2 py-1 ${getColorClass(chapter.color)} text-xs font-semibold rounded-full mb-1`}>
                            {chapter.type === "algebra" ? "Đại số" : chapter.type === "geometry" ? "Hình học" : "Thống kê"}
                          </span>
                          <h3 className="font-heading font-bold text-lg text-gray-900">{chapter.title} ({chapter.duration})</h3>
                        </div>
                      </div>
                      <button className="p-2 text-gray-500 hover:text-primary focus:outline-none">
                        {expandedChapter === chapter.id ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                      </button>
                    </div>
                    
                    {expandedChapter === chapter.id && (
                      <div className="mt-4 ml-14">
                        <ul className="space-y-3">
                          {chapter.lessons.map((lesson) => (
                            <li key={lesson.id} className="flex items-center text-gray-400">
                              <Lock className="h-4 w-4 mr-2" />
                              <span>{lesson.title}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </main>
  );
};

export default Curriculum;
