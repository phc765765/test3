import { useState, useEffect } from "react";
import { useParams, useLocation, Link } from "wouter";
import { ArrowLeft, CheckCircle, Clock, FileText, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import Formula from "@/components/math/Formula";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

const ExerciseDetails = () => {
  const [location, setLocation] = useLocation();
  const params = useParams<{ category: string; subcategory: string; id: string }>();
  const { category, subcategory, id } = params;
  const [selectedTab, setSelectedTab] = useState("overview");
  
  const getCategoryName = (categoryId: string) => {
    switch(categoryId) {
      case "algebra": return "Đại số";
      case "geometry": return "Hình học";
      case "statistics": return "Thống kê";
      default: return categoryId;
    }
  };

  const getSubcategoryName = (subcategoryId: string, categoryId: string) => {
    if (categoryId === "algebra") {
      switch(subcategoryId) {
        case "expressions": return "Biểu thức đại số";
        case "equations": return "Phương trình";
        case "inequalities": return "Bất phương trình";
        case "functions": return "Hàm số";
        default: return subcategoryId;
      }
    }
    if (categoryId === "geometry") {
      switch(subcategoryId) {
        case "pyramids": return "Hình chóp";
        case "similar": return "Hình đồng dạng";
        case "measurement": return "Đo lường";
        default: return subcategoryId;
      }
    }
    if (categoryId === "statistics") {
      switch(subcategoryId) {
        case "data-collection": return "Thu thập dữ liệu";
        case "data-analysis": return "Phân tích dữ liệu";
        case "probability": return "Xác suất";
        default: return subcategoryId;
      }
    }
    return subcategoryId;
  };

  // Thông tin chi tiết của bài tập (giả lập)
  const exerciseData = {
    id: parseInt(id),
    title: "Rút gọn biểu thức đại số phức tạp",
    description: "Thực hành rút gọn biểu thức đại số với các kỹ thuật khác nhau",
    category: category,
    subcategory: subcategory,
    difficulty: "medium",
    timeEstimate: "25 phút",
    questionsCount: 10,
    completedCount: 0,
    content: [
      {
        type: "text",
        content: "Trong phần này, bạn sẽ thực hành rút gọn các biểu thức đại số phức tạp bằng cách sử dụng các kỹ thuật như phân tích thừa số, áp dụng hằng đẳng thức và kết hợp các phép tính."
      },
      {
        type: "formula",
        formula: "\\frac{x^2 - 9}{x - 3} = \\frac{(x+3)(x-3)}{x-3} = x + 3 \\text{ khi } x \\neq 3",
        description: "Ví dụ về rút gọn phân thức đại số"
      },
      {
        type: "text",
        content: "Hãy nhớ rằng khi rút gọn phân thức, bạn cần chú ý đến các giá trị làm cho mẫu số bằng 0, vì tại những giá trị đó phân thức không xác định."
      }
    ],
    questions: [
      {
        id: 1,
        text: "Rút gọn biểu thức: $\\frac{x^2 - 16}{x - 4}$",
        options: [
          { id: "a", text: "$x + 4$" },
          { id: "b", text: "$x - 4$" },
          { id: "c", text: "$x^2 + 4x + 16$" },
          { id: "d", text: "$x + 4$ khi $x \\neq 4$" }
        ],
        correctAnswer: "d",
        explanation: "Phân tích tử số: $x^2 - 16 = (x+4)(x-4)$. Sau đó chia cả tử và mẫu cho $(x-4)$ được $x+4$ khi $x \\neq 4$"
      },
      {
        id: 2,
        text: "Rút gọn biểu thức: $\\frac{x^2 + 5x + 6}{x^2 - 4}$",
        options: [
          { id: "a", text: "$\\frac{(x+3)(x+2)}{(x+2)(x-2)}$" },
          { id: "b", text: "$\\frac{x+3}{x-2}$ khi $x \\neq -2$ và $x \\neq 2$" },
          { id: "c", text: "$\\frac{x+2}{x-2}$ khi $x \\neq 2$" },
          { id: "d", text: "$\\frac{x+3}{x+2}$ khi $x \\neq -2$" }
        ],
        correctAnswer: "b",
        explanation: "Phân tích tử số: $x^2 + 5x + 6 = (x+3)(x+2)$. Phân tích mẫu số: $x^2 - 4 = (x+2)(x-2)$. Sau đó rút gọn: $\\frac{(x+3)(x+2)}{(x+2)(x-2)} = \\frac{x+3}{x-2}$ khi $x \\neq -2$ và $x \\neq 2$"
      }
    ],
    relatedExercises: [
      {
        id: 103,
        title: "Phân tích đa thức thành nhân tử",
        category: "algebra",
        subcategory: "expressions",
        difficulty: "easy"
      },
      {
        id: 104,
        title: "Các phép toán với phân thức đại số",
        category: "algebra",
        subcategory: "expressions",
        difficulty: "medium"
      }
    ]
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

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col space-y-2 mb-6">
        <Button variant="ghost" onClick={() => window.history.back()} className="self-start">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Quay lại
        </Button>
        
        <div className="flex flex-wrap items-center space-x-2 text-sm text-gray-500">
          <Link href="/exercises" className="hover:text-primary">
            Bài tập
          </Link>
          <span>/</span>
          <Link href={`/exercises/${category}`} className="hover:text-primary">
            {getCategoryName(category)}
          </Link>
          <span>/</span>
          <Link href={`/exercises/${category}/${subcategory}`} className="hover:text-primary">
            {getSubcategoryName(subcategory, category)}
          </Link>
          <span>/</span>
          <span className="text-gray-700">{exerciseData.title}</span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-2/3">
          <Card className="mb-6">
            <CardHeader>
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <span className={`inline-block px-2 py-1 ${getCategoryColor(exerciseData.category)} text-xs font-semibold rounded-full mb-2`}>
                    {getSubcategoryName(exerciseData.subcategory, exerciseData.category)}
                  </span>
                  <CardTitle className="text-2xl">{exerciseData.title}</CardTitle>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1 text-gray-500" />
                    <span className="text-sm text-gray-500">{exerciseData.timeEstimate}</span>
                  </div>
                  <div className={`text-sm font-medium ${getDifficultyColor(exerciseData.difficulty)}`}>
                    {getDifficultyLabel(exerciseData.difficulty)}
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>

          <Tabs value={selectedTab} onValueChange={setSelectedTab} className="mb-6">
            <TabsList>
              <TabsTrigger value="overview">Tổng quan</TabsTrigger>
              <TabsTrigger value="questions">Câu hỏi ({exerciseData.questions.length})</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="mt-6 space-y-6">
              <div className="prose prose-blue max-w-none">
                <h3>Mô tả</h3>
                <p>{exerciseData.description}</p>
                
                {exerciseData.content.map((item, index) => {
                  if (item.type === "text") {
                    return <p key={index}>{item.content}</p>;
                  } else if (item.type === "formula") {
                    return (
                      <div key={index} className="my-4">
                        <Formula
                          formula={item.formula}
                          displayMode={true}
                          description={item.description}
                        />
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </TabsContent>
            
            <TabsContent value="questions" className="mt-6 space-y-8">
              {exerciseData.questions.map((question) => (
                <div key={question.id} className="p-6 border rounded-lg bg-white shadow-sm">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-medium">Câu hỏi {question.id}</h3>
                  </div>
                  <div className="prose prose-blue max-w-none mb-4">
                    <p dangerouslySetInnerHTML={{ __html: question.text ? question.text.replace(/\$(.*?)\$/g, '\\($1\\)') : '' }}></p>
                  </div>
                  <div className="space-y-3 mb-6">
                    {question.options.map((option) => (
                      <div key={option.id} className="flex items-start p-3 border rounded-md hover:bg-gray-50 cursor-pointer">
                        <div className="w-6 flex-shrink-0 text-gray-500">{option.id.toUpperCase()}.</div>
                        <div dangerouslySetInnerHTML={{ __html: option.text ? option.text.replace(/\$(.*?)\$/g, '\\($1\\)') : '' }}></div>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mb-4">Trả lời</Button>
                  <div className="mt-4 p-4 bg-blue-50 rounded-md hidden">
                    <h4 className="font-medium text-primary mb-2">Lời giải</h4>
                    <p>{question.explanation}</p>
                  </div>
                </div>
              ))}
            </TabsContent>
          </Tabs>
        </div>

        <div className="md:w-1/3 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Tiến độ</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between text-sm mb-1">
                <span>Hoàn thành</span>
                <span className="font-medium">{exerciseData.completedCount}/{exerciseData.questionsCount} câu hỏi</span>
              </div>
              <Progress value={(exerciseData.completedCount / exerciseData.questionsCount) * 100} className="h-2 mb-4" />
              
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-sm">
                  <span>Thời gian làm bài</span>
                  <span>{exerciseData.timeEstimate}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Số câu hỏi</span>
                  <span>{exerciseData.questionsCount}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Độ khó</span>
                  <span className={getDifficultyColor(exerciseData.difficulty)}>
                    {getDifficultyLabel(exerciseData.difficulty)}
                  </span>
                </div>
              </div>
              
              <Button className="w-full bg-primary">Tiếp tục làm bài</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Bài tập liên quan</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {exerciseData.relatedExercises.map((exercise) => (
                <Link key={exercise.id} href={`/exercises/${exercise.category}/${exercise.subcategory}/${exercise.id}`}>
                  <div className="flex items-start p-3 border rounded-md hover:bg-gray-50 cursor-pointer">
                    <FileText className="h-4 w-4 mr-2 mt-0.5 text-gray-400" />
                    <div>
                      <div className="font-medium">{exercise.title}</div>
                      <div className="flex items-center mt-1">
                        <span className={`text-xs ${getCategoryColor(exercise.category)} px-2 py-0.5 rounded-full`}>
                          {getSubcategoryName(exercise.subcategory, exercise.category)}
                        </span>
                        <span className={`ml-2 text-xs ${getDifficultyColor(exercise.difficulty)}`}>
                          {getDifficultyLabel(exercise.difficulty)}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default ExerciseDetails;