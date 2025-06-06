import { useState, useEffect } from "react";
import { useParams, useLocation, Link } from "wouter";
import { ArrowLeft, CheckCircle, Clock, FileText, Award, ThumbsUp, ThumbsDown, BookOpen, BarChart, Lightbulb, CheckSquare, XSquare, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import Formula from "@/components/math/Formula";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";

interface QuestionAnswers {
  [questionId: number]: string | null;
}

const ExerciseDetails = () => {
  const [location, setLocation] = useLocation();
  const params = useParams<{ category: string; subcategory: string; id: string }>();
  const { category, subcategory, id } = params;
  const [selectedTab, setSelectedTab] = useState("theory");
  const [selectedAnswers, setSelectedAnswers] = useState<QuestionAnswers>({});
  const [showAnswers, setShowAnswers] = useState<{[questionId: number]: boolean}>({});
  
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

  const handleSelectAnswer = (questionId: number, answerId: string) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: answerId
    }));
  };

  const toggleShowAnswer = (questionId: number) => {
    setShowAnswers(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
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
    theory: {
      summary: [
        {
          title: "Biểu thức đại số và phân thức đại số",
          content: "Biểu thức đại số là biểu thức chứa các số, biến số và các phép toán đại số. Phân thức đại số là tỉ số của hai biểu thức đại số, trong đó biểu thức ở mẫu số khác 0."
        },
        {
          title: "Rút gọn phân thức đại số",
          content: "Để rút gọn phân thức đại số, ta phân tích tử số và mẫu số thành các nhân tử, sau đó rút gọn bằng cách chia cả tử số và mẫu số cho các nhân tử chung. Lưu ý điều kiện xác định của phân thức."
        },
        {
          title: "Hằng đẳng thức đáng nhớ",
          formulas: [
            { formula: "(a + b)^2 = a^2 + 2ab + b^2", description: "Bình phương của tổng" },
            { formula: "(a - b)^2 = a^2 - 2ab + b^2", description: "Bình phương của hiệu" },
            { formula: "(a + b)(a - b) = a^2 - b^2", description: "Nhân tổng với hiệu" }
          ]
        }
      ],
      examples: [
        {
          title: "Ví dụ 1: Rút gọn phân thức",
          problem: "Rút gọn phân thức $\\frac{x^2 - 9}{x - 3}$",
          steps: [
            "Phân tích tử số: $x^2 - 9 = (x+3)(x-3)$",
            "Viết lại phân thức: $\\frac{(x+3)(x-3)}{x-3}$",
            "Rút gọn: $\\frac{(x+3)(x-3)}{x-3} = x + 3$ khi $x \\neq 3$"
          ],
          solution: "\\frac{x^2 - 9}{x - 3} = x + 3 \\text{ khi } x \\neq 3",
          explanation: "Khi rút gọn, cần lưu ý giá trị $x = 3$ làm cho mẫu số bằng 0, nên phân thức không xác định tại điểm này."
        },
        {
          title: "Ví dụ 2: Rút gọn phân thức phức tạp",
          problem: "Rút gọn phân thức $\\frac{x^2 + 5x + 6}{x^2 - 4}$",
          steps: [
            "Phân tích tử số: $x^2 + 5x + 6 = (x+3)(x+2)$",
            "Phân tích mẫu số: $x^2 - 4 = (x+2)(x-2)$",
            "Viết lại phân thức: $\\frac{(x+3)(x+2)}{(x+2)(x-2)}$",
            "Rút gọn: $\\frac{(x+3)(x+2)}{(x+2)(x-2)} = \\frac{x+3}{x-2}$ khi $x \\neq -2$ và $x \\neq 2$"
          ],
          solution: "\\frac{x^2 + 5x + 6}{x^2 - 4} = \\frac{x+3}{x-2} \\text{ khi } x \\neq -2 \\text{ và } x \\neq 2",
          explanation: "Sau khi phân tích, ta thấy $(x+2)$ là nhân tử chung của tử số và mẫu số, nên ta rút gọn bằng cách chia cả tử và mẫu cho $(x+2)$. Lưu ý phân thức không xác định tại $x = -2$ và $x = 2$."
        }
      ]
    },
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
      },
      {
        id: 3,
        text: "Rút gọn biểu thức: $\\frac{x^3 - 8}{x^2 - 4}$",
        options: [
          { id: "a", text: "$\\frac{x+2}{x-2}$ khi $x \\neq -2$ và $x \\neq 2$" },
          { id: "b", text: "$\\frac{x^2 + 2x + 4}{x+2}$ khi $x \\neq -2$ và $x \\neq 2$" },
          { id: "c", text: "$x + 2$ khi $x \\neq 2$" },
          { id: "d", text: "$\\frac{x^2 + 2x + 4}{x+2}$ khi $x \\neq 2$" }
        ],
        correctAnswer: "b",
        explanation: "Phân tích tử số: $x^3 - 8 = x^3 - 2^3 = (x-2)(x^2+2x+4)$. Phân tích mẫu số: $x^2 - 4 = (x+2)(x-2)$. Sau đó rút gọn: $\\frac{(x-2)(x^2+2x+4)}{(x+2)(x-2)} = \\frac{x^2+2x+4}{x+2}$ khi $x \\neq -2$ và $x \\neq 2$"
      },
      {
        id: 4,
        text: "Rút gọn biểu thức: $\\frac{x^2 + 2x - 3}{x^2 - x - 6}$",
        options: [
          { id: "a", text: "$\\frac{x+3}{x-3}$ khi $x \\neq -2$ và $x \\neq 3$" },
          { id: "b", text: "$\\frac{x-1}{x+2}$ khi $x \\neq -2$ và $x \\neq 3$" },
          { id: "c", text: "$\\frac{x+3}{x+2}$ khi $x \\neq -2$ và $x \\neq 3$" },
          { id: "d", text: "$1$ khi $x \\neq -2$ và $x \\neq 3$" }
        ],
        correctAnswer: "a",
        explanation: "Phân tích tử số: $x^2 + 2x - 3 = (x+3)(x-1)$. Phân tích mẫu số: $x^2 - x - 6 = (x-3)(x+2)$. Sau đó rút gọn: $\\frac{(x+3)(x-1)}{(x-3)(x+2)} = \\frac{x+3}{x-3} \\cdot \\frac{x-1}{x+2}$. Giá trị không xác định: $x = -2$ và $x = 3$."
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
      case "algebra": return "bg-blue-100 text-blue-600";
      case "geometry": return "bg-purple-100 text-purple-600";
      case "statistics": return "bg-green-100 text-green-600";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getCategoryBgColor = (category: string) => {
    switch(category) {
      case "algebra": return "bg-blue-600";
      case "geometry": return "bg-purple-600";
      case "statistics": return "bg-green-600";
      default: return "bg-gray-600";
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
      case "medium": return "text-amber-600";
      case "hard": return "text-red-600";
      default: return "text-gray-600";
    }
  };

  const isAnswerCorrect = (questionId: number) => {
    const question = exerciseData.questions.find(q => q.id === questionId);
    return question && selectedAnswers[questionId] === question.correctAnswer;
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col space-y-2 mb-6">
        <Button variant="ghost" onClick={() => window.history.back()} className="self-start">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Quay lại
        </Button>
        
        <div className="flex flex-wrap items-center space-x-2 text-sm text-gray-500">
          <Link href="/exercises" className="hover:text-blue-600">
            <button>Bài tập</button>
          </Link>
          <span>/</span>
          <Link href={`/exercises/${category}`} className="hover:text-blue-600">
            <button>{getCategoryName(category)}</button>
          </Link>
          <span>/</span>
          <Link href={`/exercises/${category}/${subcategory}`} className="hover:text-blue-600">
            <button>{getSubcategoryName(subcategory, category)}</button>
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
            <TabsList className="grid grid-cols-4">
              <TabsTrigger value="theory" className="flex items-center gap-1">
                <BookOpen className="h-4 w-4" />
                <span className="hidden sm:inline">Lý thuyết</span>
              </TabsTrigger>
              <TabsTrigger value="example" className="flex items-center gap-1">
                <Lightbulb className="h-4 w-4" />
                <span className="hidden sm:inline">Ví dụ</span>
              </TabsTrigger>
              <TabsTrigger value="exercises" className="flex items-center gap-1">
                <CheckSquare className="h-4 w-4" />
                <span className="hidden sm:inline">Bài tập</span>
              </TabsTrigger>
              <TabsTrigger value="quiz" className="flex items-center gap-1">
                <BarChart className="h-4 w-4" />
                <span className="hidden sm:inline">Trắc nghiệm</span>
              </TabsTrigger>
            </TabsList>

            {/* Tab: Lý thuyết */}
            <TabsContent value="theory" className="mt-6 space-y-6">
              <div className="prose prose-blue max-w-none">
                <h3 className="text-xl font-bold flex items-center gap-2 mb-4">
                  <BookOpen className="h-5 w-5 text-blue-600" />
                  Tóm tắt lý thuyết
                </h3>

                {exerciseData.theory.summary.map((section, index) => (
                  <div key={index} className="mb-6 bg-white p-5 rounded-xl border shadow-sm">
                    <h4 className="text-lg font-medium text-blue-700 mb-3">{section.title}</h4>
                    
                    {section.content && (
                      <p className="text-gray-700 mb-4">{section.content}</p>
                    )}
                    
                    {section.formulas && (
                      <div className="space-y-3 mt-4">
                        {section.formulas.map((formula, idx) => (
                          <div key={idx} className="bg-blue-50 p-4 rounded-lg">
                            <Formula
                              formula={formula.formula}
                              displayMode={true}
                              description={formula.description}
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                <Alert className="bg-yellow-50 border-yellow-200 mb-4">
                  <HelpCircle className="h-4 w-4 text-yellow-600" />
                  <AlertTitle className="text-yellow-800">Lưu ý quan trọng</AlertTitle>
                  <AlertDescription className="text-yellow-700">
                    Khi rút gọn phân thức đại số, luôn phải xét điều kiện xác định của phân thức, tức là 
                    các giá trị làm cho mẫu số phân thức bằng 0.
                  </AlertDescription>
                </Alert>
              </div>
            </TabsContent>

            {/* Tab: Ví dụ */}
            <TabsContent value="example" className="mt-6 space-y-6">
              <div className="prose prose-blue max-w-none">
                <h3 className="text-xl font-bold flex items-center gap-2 mb-4">
                  <Lightbulb className="h-5 w-5 text-amber-500" />
                  Hướng dẫn giải
                </h3>

                {exerciseData.theory.examples.map((example, index) => (
                  <div key={index} className="mb-8 bg-white p-5 rounded-xl border shadow-sm">
                    <h4 className="text-lg font-medium text-blue-700 mb-3">{example.title}</h4>
                    
                    <div className="mb-4 bg-blue-50 p-4 rounded-lg">
                      <div className="font-medium text-blue-800 mb-2">Bài toán:</div>
                      <div dangerouslySetInnerHTML={{ __html: example.problem ? example.problem.replace(/\$(.*?)\$/g, '\\($1\\)') : '' }}></div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="font-medium text-gray-700 mb-2">Các bước giải:</div>
                      <ol className="list-decimal list-inside space-y-2 text-gray-700 pl-2">
                        {example.steps.map((step, idx) => (
                          <li key={idx} dangerouslySetInnerHTML={{ __html: step ? step.replace(/\$(.*?)\$/g, '\\($1\\)') : '' }}></li>
                        ))}
                      </ol>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-lg mb-4">
                      <div className="font-medium text-green-800 mb-2">Kết quả:</div>
                      <Formula
                        formula={example.solution}
                        displayMode={true}
                      />
                    </div>
                    
                    {example.explanation && (
                      <div className="bg-amber-50 p-4 rounded-lg">
                        <div className="font-medium text-amber-800 mb-2">Chú ý:</div>
                        <p className="text-amber-700" dangerouslySetInnerHTML={{ __html: example.explanation ? example.explanation.replace(/\$(.*?)\$/g, '\\($1\\)') : '' }}></p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Tab: Bài tập tự luyện */}
            <TabsContent value="exercises" className="mt-6 space-y-6">
              <div className="prose prose-blue max-w-none">
                <h3 className="text-xl font-bold flex items-center gap-2 mb-4">
                  <CheckSquare className="h-5 w-5 text-indigo-600" />
                  Bài tập tự luyện
                </h3>

                <div className="bg-white p-5 rounded-xl border shadow-sm mb-6">
                  <h4 className="text-lg font-medium text-indigo-700 mb-4">Rút gọn các biểu thức sau</h4>
                  
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="font-medium mb-2">Bài 1:</div>
                      <Formula formula="\\frac{x^2 - 25}{x + 5}" displayMode={true} />
                      <div className="mt-4">
                        <Button onClick={() => toggleShowAnswer(101)} variant="outline" className="text-sm">
                          {showAnswers[101] ? "Ẩn lời giải" : "Xem lời giải"}
                        </Button>
                        
                        {showAnswers[101] && (
                          <div className="mt-3 bg-blue-50 p-3 rounded-lg">
                            <div className="font-medium text-blue-800 mb-2">Lời giải:</div>
                            <p className="text-gray-700">Phân tích tử số:</p>
                            <Formula formula="x^2 - 25 = (x+5)(x-5)" displayMode={true} />
                            <p className="text-gray-700 mt-2">Rút gọn:</p>
                            <Formula formula="\\frac{x^2 - 25}{x + 5} = \\frac{(x+5)(x-5)}{x+5} = x-5 \\text{ khi } x \\neq -5" displayMode={true} />
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="font-medium mb-2">Bài 2:</div>
                      <Formula formula="\\frac{x^2 + 3x + 2}{x^2 + 5x + 6}" displayMode={true} />
                      <div className="mt-4">
                        <Button onClick={() => toggleShowAnswer(102)} variant="outline" className="text-sm">
                          {showAnswers[102] ? "Ẩn lời giải" : "Xem lời giải"}
                        </Button>
                        
                        {showAnswers[102] && (
                          <div className="mt-3 bg-blue-50 p-3 rounded-lg">
                            <div className="font-medium text-blue-800 mb-2">Lời giải:</div>
                            <p className="text-gray-700">Phân tích tử số và mẫu số:</p>
                            <Formula formula="\\frac{x^2 + 3x + 2}{x^2 + 5x + 6} = \\frac{(x+1)(x+2)}{(x+2)(x+3)}" displayMode={true} />
                            <p className="text-gray-700 mt-2">Rút gọn:</p>
                            <Formula formula="\\frac{(x+1)(x+2)}{(x+2)(x+3)} = \\frac{x+1}{x+3} \\text{ khi } x \\neq -2" displayMode={true} />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Tab: Trắc nghiệm */}
            <TabsContent value="quiz" className="mt-6">
              <div className="prose prose-blue max-w-none mb-6">
                <h3 className="text-xl font-bold flex items-center gap-2 mb-4">
                  <BarChart className="h-5 w-5 text-green-600" />
                  Trắc nghiệm
                </h3>
                
                <p className="text-gray-600">
                  Hãy chọn đáp án đúng cho mỗi câu hỏi bên dưới. Sau khi chọn xong, bạn có thể kiểm tra kết quả.
                </p>
              </div>
              
              <div className="space-y-8">
                {exerciseData.questions.map((question) => {
                  const userAnswered = selectedAnswers[question.id] !== undefined;
                  const isCorrect = userAnswered && isAnswerCorrect(question.id);
                  
                  return (
                    <div key={question.id} className="bg-white p-6 rounded-xl border shadow-sm">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center">
                          <Badge variant="outline" className={`mr-3 ${getCategoryColor(category)}`}>
                            Câu {question.id}
                          </Badge>
                          <h3 className="text-lg font-medium">
                            {userAnswered && (
                              isCorrect ? 
                                <CheckCircle className="inline-block h-5 w-5 text-green-600 mr-2" /> : 
                                <XSquare className="inline-block h-5 w-5 text-red-600 mr-2" />
                            )}
                            Trắc nghiệm
                          </h3>
                        </div>
                      </div>
                      
                      <div className="prose prose-blue max-w-none mb-5">
                        <p className="font-medium" dangerouslySetInnerHTML={{ __html: question.text ? question.text.replace(/\$(.*?)\$/g, '\\($1\\)') : '' }}></p>
                      </div>
                      
                      <div className="space-y-3 mb-6">
                        {question.options.map((option) => {
                          const isSelected = selectedAnswers[question.id] === option.id;
                          const isOptionCorrect = option.id === question.correctAnswer;
                          
                          let optionClass = "flex items-start p-3 border rounded-md cursor-pointer";
                          
                          if (userAnswered) {
                            if (isSelected && isOptionCorrect) {
                              optionClass += " bg-green-50 border-green-200";
                            } else if (isSelected && !isOptionCorrect) {
                              optionClass += " bg-red-50 border-red-200";
                            } else if (!isSelected && isOptionCorrect) {
                              optionClass += " bg-green-50 border-green-200";
                            } else {
                              optionClass += " bg-gray-50";
                            }
                          } else {
                            optionClass += " hover:bg-blue-50 hover:border-blue-200";
                          }
                          
                          return (
                            <div 
                              key={option.id} 
                              className={optionClass}
                              onClick={() => !userAnswered && handleSelectAnswer(question.id, option.id)}
                            >
                              <div className="w-6 flex-shrink-0 text-gray-500 font-medium">{option.id.toUpperCase()}.</div>
                              <div className="flex-grow" dangerouslySetInnerHTML={{ __html: option.text ? option.text.replace(/\$(.*?)\$/g, '\\($1\\)') : '' }}></div>
                              {userAnswered && (
                                <div className="ml-2">
                                  {isOptionCorrect ? (
                                    <CheckCircle className="h-5 w-5 text-green-600" />
                                  ) : (
                                    isSelected && <XSquare className="h-5 w-5 text-red-600" />
                                  )}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                      
                      {!userAnswered ? (
                        <Button 
                          onClick={() => handleSelectAnswer(question.id, '')} 
                          className="w-full mb-4"
                          disabled={true}
                        >
                          Chọn một đáp án
                        </Button>
                      ) : (
                        <div className="mt-4 p-4 bg-blue-50 rounded-md">
                          <h4 className="font-medium text-blue-800 mb-2 flex items-center">
                            <Lightbulb className="h-4 w-4 mr-2" />
                            Lời giải và giải thích
                          </h4>
                          <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: question.explanation ? question.explanation.replace(/\$(.*?)\$/g, '\\($1\\)') : '' }}></p>
                          <div className="mt-3 flex items-center space-x-3">
                            {isCorrect ? (
                              <>
                                <ThumbsUp className="h-5 w-5 text-green-600" />
                                <span className="text-green-600 font-medium">Chính xác! Bạn đã trả lời đúng.</span>
                              </>
                            ) : (
                              <>
                                <ThumbsDown className="h-5 w-5 text-red-600" />
                                <span className="text-red-600 font-medium">Sai rồi! Đáp án đúng là {question.correctAnswer.toUpperCase()}.</span>
                              </>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="md:w-1/3 space-y-6">
          <Card>
            <CardHeader className={`bg-gradient-to-br ${getCategoryBgColor(category)} text-white`}>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                Tiến độ học tập
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex justify-between text-sm mb-1">
                <span>Hoàn thành</span>
                <span className="font-medium">{exerciseData.completedCount}/{exerciseData.questionsCount} câu hỏi</span>
              </div>
              <Progress value={(exerciseData.completedCount / exerciseData.questionsCount) * 100} className="h-2 mb-6" />
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm items-center">
                  <span className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-gray-500" />
                    Thời gian làm bài
                  </span>
                  <span>{exerciseData.timeEstimate}</span>
                </div>
                <div className="flex justify-between text-sm items-center">
                  <span className="flex items-center gap-2">
                    <CheckSquare className="h-4 w-4 text-gray-500" />
                    Số câu hỏi
                  </span>
                  <span>{exerciseData.questionsCount}</span>
                </div>
                <div className="flex justify-between text-sm items-center">
                  <span className="flex items-center gap-2">
                    <BarChart className="h-4 w-4 text-gray-500" />
                    Độ khó
                  </span>
                  <span className={getDifficultyColor(exerciseData.difficulty)}>
                    {getDifficultyLabel(exerciseData.difficulty)}
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="w-full" onClick={() => window.print()}>
                  Tải xuống PDF
                </Button>
                <Button className={`w-full ${getCategoryBgColor(category)}`}>
                  Tiếp tục học
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-gray-500" />
                Bài tập liên quan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {exerciseData.relatedExercises.map((exercise) => (
                <Link key={exercise.id} href={`/exercises/${exercise.category}/${exercise.subcategory}/${exercise.id}`}>
                  <div className="flex items-start p-3 border rounded-md hover:bg-gray-50 cursor-pointer transition-colors">
                    <FileText className="h-4 w-4 mr-2 mt-0.5 text-gray-400" />
                    <div>
                      <div className="font-medium">{exercise.title}</div>
                      <div className="flex items-center mt-1 flex-wrap gap-2">
                        <span className={`text-xs ${getCategoryColor(exercise.category)} px-2 py-0.5 rounded-full`}>
                          {getSubcategoryName(exercise.subcategory, exercise.category)}
                        </span>
                        <span className={`text-xs ${getDifficultyColor(exercise.difficulty)}`}>
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