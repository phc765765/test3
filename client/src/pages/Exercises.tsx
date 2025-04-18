import { useState } from "react";
import { ArrowLeft, Search, Paperclip } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Exercises = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [difficultyFilter, setDifficultyFilter] = useState("all");

  const exercises = [
    {
      id: 1,
      title: "Rút gọn biểu thức đại số",
      description: "Thực hành rút gọn các biểu thức đại số phức tạp với nhiều biến",
      category: "algebra",
      difficulty: "medium",
      questionsCount: 15
    },
    {
      id: 2,
      title: "Phân tích thành nhân tử",
      description: "Bài tập về phân tích đa thức thành nhân tử bằng các phương pháp cơ bản",
      category: "algebra",
      difficulty: "easy",
      questionsCount: 10
    },
    {
      id: 3,
      title: "Phân thức đại số và rút gọn",
      description: "Thực hành rút gọn các phân thức đại số phức tạp",
      category: "algebra",
      difficulty: "hard",
      questionsCount: 12
    },
    {
      id: 4,
      title: "Tính diện tích xung quanh hình chóp",
      description: "Bài tập về tính diện tích xung quanh của hình chóp đều",
      category: "geometry",
      difficulty: "hard",
      questionsCount: 8
    },
    {
      id: 5,
      title: "Tính thể tích hình chóp",
      description: "Bài tập về tính thể tích của hình chóp với các dạng khác nhau",
      category: "geometry",
      difficulty: "medium",
      questionsCount: 10
    },
    {
      id: 6,
      title: "Vẽ biểu đồ từ bảng số liệu",
      description: "Thực hành vẽ các loại biểu đồ từ số liệu thống kê cho trước",
      category: "statistics",
      difficulty: "easy",
      questionsCount: 5
    },
    {
      id: 7,
      title: "Phân tích dữ liệu thống kê",
      description: "Bài tập phân tích và diễn giải dữ liệu từ các biểu đồ",
      category: "statistics",
      difficulty: "medium",
      questionsCount: 7
    }
  ];

  // Filter exercises based on search term, active tab, and difficulty filter
  const filteredExercises = exercises.filter(exercise => {
    const matchesSearch = exercise.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          exercise.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTab = activeTab === "all" || exercise.category === activeTab;
    const matchesDifficulty = difficultyFilter === "all" || exercise.difficulty === difficultyFilter;
    return matchesSearch && matchesTab && matchesDifficulty;
  });

  const getCategoryLabel = (category: string) => {
    switch(category) {
      case "algebra": return "Đại số";
      case "geometry": return "Hình học";
      case "statistics": return "Thống kê";
      default: return category;
    }
  };

  const getCategoryColor = (category: string) => {
    switch(category) {
      case "algebra": return "bg-blue-100 text-primary";
      case "geometry": return "bg-purple-100 text-[#8B5CF6]";
      case "statistics": return "bg-green-100 text-[#10B981]";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getDifficultyLabel = (difficulty: string) => {
    switch(difficulty) {
      case "easy": return "Dễ";
      case "medium": return "Trung bình";
      case "hard": return "Khó";
      default: return difficulty;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch(difficulty) {
      case "easy": return "text-green-600";
      case "medium": return "text-yellow-600";
      case "hard": return "text-red-600";
      default: return "text-gray-600";
    }
  };

  const getButtonColor = (category: string) => {
    switch(category) {
      case "algebra": return "bg-primary hover:bg-blue-700";
      case "geometry": return "bg-[#8B5CF6] hover:bg-[#7C3AED]";
      case "statistics": return "bg-[#10B981] hover:bg-green-700";
      default: return "bg-primary hover:bg-blue-700";
    }
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Button variant="ghost" onClick={() => window.history.back()} className="mr-2">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Quay lại
          </Button>
          <h1 className="text-2xl font-bold font-heading text-gray-900">Bài tập</h1>
        </div>
      </div>

      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            className="pl-10"
            placeholder="Tìm kiếm bài tập..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="w-full sm:w-48">
          <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
            <SelectTrigger>
              <SelectValue placeholder="Độ khó" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tất cả độ khó</SelectItem>
              <SelectItem value="easy">Dễ</SelectItem>
              <SelectItem value="medium">Trung bình</SelectItem>
              <SelectItem value="hard">Khó</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs defaultValue="all" onValueChange={setActiveTab} className="mb-6">
        <TabsList>
          <TabsTrigger value="all">Tất cả</TabsTrigger>
          <TabsTrigger value="algebra">Đại số</TabsTrigger>
          <TabsTrigger value="geometry">Hình học</TabsTrigger>
          <TabsTrigger value="statistics">Thống kê</TabsTrigger>
        </TabsList>
      </Tabs>

      {filteredExercises.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-500">Không tìm thấy bài tập nào phù hợp.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredExercises.map((exercise) => (
            <Card key={exercise.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <span className={`inline-block px-2 py-1 ${getCategoryColor(exercise.category)} text-xs font-semibold rounded-full`}>
                    {getCategoryLabel(exercise.category)}
                  </span>
                  <span className={`text-sm font-medium ${getDifficultyColor(exercise.difficulty)}`}>
                    Độ khó: {getDifficultyLabel(exercise.difficulty)}
                  </span>
                </div>
                <CardTitle className="mt-2">{exercise.title}</CardTitle>
                <CardDescription>{exercise.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-gray-500">
                  <Paperclip className="h-4 w-4 mr-2" />
                  {exercise.questionsCount} câu hỏi
                </div>
              </CardContent>
              <CardFooter>
                <Button className={`w-full ${getButtonColor(exercise.category)}`}>Làm bài</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </main>
  );
};

export default Exercises;
