import { useState } from "react";
import { ArrowLeft, Clock, CheckCircle, Award, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
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
import { Progress } from "@/components/ui/progress";

const Quizzes = () => {
  const [activeTab, setActiveTab] = useState("all");

  const quizzes = [
    {
      id: 1,
      title: "Kiểm tra giữa kỳ I: Biểu thức đại số",
      description: "Kiểm tra kiến thức về đa thức, phân thức và phân tích thành nhân tử",
      category: "algebra",
      type: "midterm",
      duration: 45,
      questionsCount: 20,
      status: "upcoming",
      deadline: "2023-10-30"
    },
    {
      id: 2,
      title: "Kiểm tra 15 phút: Phân thức đại số",
      description: "Bài kiểm tra ngắn về rút gọn phân thức đại số",
      category: "algebra",
      type: "short",
      duration: 15,
      questionsCount: 5,
      status: "available",
      availableUntil: "2023-10-25"
    },
    {
      id: 3,
      title: "Kiểm tra 1 tiết: Hình chóp",
      description: "Kiểm tra kiến thức về hình chóp tam giác đều và tứ giác đều",
      category: "geometry",
      type: "test",
      duration: 45,
      questionsCount: 15,
      status: "available",
      availableUntil: "2023-10-20"
    },
    {
      id: 4,
      title: "Kiểm tra ngắn: Thu thập dữ liệu",
      description: "Bài kiểm tra về phương pháp thu thập và phân loại dữ liệu",
      category: "statistics",
      type: "short",
      duration: 20,
      questionsCount: 8,
      status: "available",
      availableUntil: "2023-10-15"
    },
    {
      id: 5,
      title: "Kiểm tra thử: Ôn tập Học kỳ I",
      description: "Bài kiểm tra thử để ôn tập toàn bộ kiến thức Học kỳ I",
      category: "all",
      type: "practice",
      duration: 60,
      questionsCount: 30,
      status: "completed",
      result: {
        score: 25,
        total: 30,
        percentage: 83
      }
    },
    {
      id: 6,
      title: "Kiểm tra 15 phút: Phép toán với đa thức",
      description: "Bài kiểm tra ngắn về các phép toán cơ bản với đa thức",
      category: "algebra",
      type: "short",
      duration: 15,
      questionsCount: 5,
      status: "completed",
      result: {
        score: 4,
        total: 5,
        percentage: 80
      }
    }
  ];

  // Filter quizzes based on active tab
  const filteredQuizzes = quizzes.filter(quiz => {
    if (activeTab === "all") return true;
    if (activeTab === "upcoming") return quiz.status === "upcoming";
    if (activeTab === "available") return quiz.status === "available";
    if (activeTab === "completed") return quiz.status === "completed";
    if (activeTab === "algebra" || activeTab === "geometry" || activeTab === "statistics") {
      return quiz.category === activeTab;
    }
    return true;
  });

  const getCategoryLabel = (category: string) => {
    switch(category) {
      case "algebra": return "Đại số";
      case "geometry": return "Hình học";
      case "statistics": return "Thống kê";
      case "all": return "Tổng hợp";
      default: return category;
    }
  };

  const getCategoryColor = (category: string) => {
    switch(category) {
      case "algebra": return "bg-blue-100 text-primary";
      case "geometry": return "bg-purple-100 text-[#8B5CF6]";
      case "statistics": return "bg-green-100 text-[#10B981]";
      case "all": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getTypeLabel = (type: string) => {
    switch(type) {
      case "midterm": return "Kiểm tra giữa kỳ";
      case "final": return "Kiểm tra cuối kỳ";
      case "short": return "Kiểm tra ngắn";
      case "test": return "Kiểm tra 1 tiết";
      case "practice": return "Bài tập thử";
      default: return type;
    }
  };

  const getStatusIcon = (status: string) => {
    switch(status) {
      case "upcoming": return <Clock className="h-5 w-5 text-yellow-500" />;
      case "available": return <CheckCircle className="h-5 w-5 text-green-500" />;
      case "completed": return <Award className="h-5 w-5 text-blue-500" />;
      default: return <AlertTriangle className="h-5 w-5 text-gray-500" />;
    }
  };

  const getStatusLabel = (status: string) => {
    switch(status) {
      case "upcoming": return "Sắp diễn ra";
      case "available": return "Đang mở";
      case "completed": return "Đã hoàn thành";
      default: return status;
    }
  };

  const getButtonLabel = (status: string) => {
    switch(status) {
      case "upcoming": return "Nhắc nhở";
      case "available": return "Làm bài";
      case "completed": return "Xem kết quả";
      default: return "Chi tiết";
    }
  };

  const getButtonColor = (status: string) => {
    switch(status) {
      case "upcoming": return "bg-yellow-500 hover:bg-yellow-600";
      case "available": return "bg-green-500 hover:bg-green-600";
      case "completed": return "bg-blue-500 hover:bg-blue-600";
      default: return "bg-gray-500 hover:bg-gray-600";
    }
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center mb-6">
        <Button variant="ghost" onClick={() => window.history.back()} className="mr-2">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Quay lại
        </Button>
        <h1 className="text-2xl font-bold font-heading text-gray-900">Bài kiểm tra</h1>
      </div>

      <Tabs defaultValue="all" onValueChange={setActiveTab} className="mb-6">
        <TabsList>
          <TabsTrigger value="all">Tất cả</TabsTrigger>
          <TabsTrigger value="upcoming">Sắp diễn ra</TabsTrigger>
          <TabsTrigger value="available">Đang mở</TabsTrigger>
          <TabsTrigger value="completed">Đã hoàn thành</TabsTrigger>
          <TabsTrigger value="algebra">Đại số</TabsTrigger>
          <TabsTrigger value="geometry">Hình học</TabsTrigger>
          <TabsTrigger value="statistics">Thống kê</TabsTrigger>
        </TabsList>
      </Tabs>

      {filteredQuizzes.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-500">Không tìm thấy bài kiểm tra nào phù hợp.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredQuizzes.map((quiz) => (
            <Card key={quiz.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <span className={`inline-block px-2 py-1 ${getCategoryColor(quiz.category)} text-xs font-semibold rounded-full`}>
                    {getCategoryLabel(quiz.category)}
                  </span>
                  <span className="text-sm text-gray-500">
                    {getTypeLabel(quiz.type)}
                  </span>
                </div>
                <CardTitle className="mt-2">{quiz.title}</CardTitle>
                <CardDescription>{quiz.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    {getStatusIcon(quiz.status)}
                    <span className="text-sm ml-2">{getStatusLabel(quiz.status)}</span>
                  </div>
                  <span className="text-sm text-gray-500">
                    {quiz.duration} phút • {quiz.questionsCount} câu hỏi
                  </span>
                </div>
                
                {quiz.status === "upcoming" && (
                  <div className="text-sm text-gray-500">
                    Hạn chót: {new Date(quiz.deadline).toLocaleDateString('vi-VN')}
                  </div>
                )}
                
                {quiz.status === "available" && (
                  <div className="text-sm text-gray-500">
                    Có thể làm đến: {new Date(quiz.availableUntil).toLocaleDateString('vi-VN')}
                  </div>
                )}
                
                {quiz.status === "completed" && quiz.result && (
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Kết quả</span>
                      <span className="font-medium">{quiz.result.score}/{quiz.result.total} ({quiz.result.percentage}%)</span>
                    </div>
                    <Progress value={quiz.result.percentage} className="h-2" />
                  </div>
                )}
              </CardContent>
              <CardFooter>
                <Button className={`w-full ${getButtonColor(quiz.status)}`}>
                  {getButtonLabel(quiz.status)}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </main>
  );
};

export default Quizzes;
