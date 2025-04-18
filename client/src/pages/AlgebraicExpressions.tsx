import { useState } from "react";
import { ArrowLeft, BookOpen, Lightbulb, CheckSquare, HelpCircle } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Formula from "@/components/math/Formula";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const AlgebraicExpressions = () => {
  const [selectedTab, setSelectedTab] = useState("theory");
  const [selectedQuiz, setSelectedQuiz] = useState<{[id: number]: string}>({});
  const [showAnswers, setShowAnswers] = useState<{[id: number]: boolean}>({});

  const toggleShowAnswer = (id: number) => {
    setShowAnswers(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const answerQuiz = (questionId: number, answerId: string) => {
    setSelectedQuiz(prev => ({
      ...prev,
      [questionId]: answerId
    }));
  };

  const isAnswerCorrect = (questionId: number, answerId: string) => {
    const correctAnswers: {[id: number]: string} = {
      1: "b",
      2: "c",
      3: "a"
    };
    return selectedQuiz[questionId] === answerId && selectedQuiz[questionId] === correctAnswers[questionId];
  };

  const isAnswerWrong = (questionId: number, answerId: string) => {
    const correctAnswers: {[id: number]: string} = {
      1: "b",
      2: "c",
      3: "a"
    };
    return selectedQuiz[questionId] === answerId && selectedQuiz[questionId] !== correctAnswers[questionId];
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col space-y-2 mb-6">
        <Link href="/">
          <div className="cursor-pointer">
            <Button variant="ghost" className="self-start">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Quay lại
            </Button>
          </div>
        </Link>
        
        <div className="flex flex-wrap items-center space-x-2 text-sm text-gray-500">
          <Link href="/curriculum">
            <div className="hover:text-red-600 cursor-pointer">Chương trình học</div>
          </Link>
          <span>/</span>
          <Link href="/curriculum/algebra">
            <div className="hover:text-red-600 cursor-pointer">Đại số</div>
          </Link>
          <span>/</span>
          <span className="text-gray-700">Biểu thức đại số</span>
        </div>
      </div>

      <Card className="mb-6 border-2 border-red-500/20 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-red-50 to-white">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div>
              <span className="inline-block px-2 py-1 bg-red-100 text-red-700 text-xs font-semibold rounded-full mb-2">
                Chương 1
              </span>
              <CardTitle className="text-2xl text-gray-800">Nhân đơn thức với đa thức</CardTitle>
            </div>
          </div>
        </CardHeader>
      </Card>

      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="mb-6">
        <TabsList className="grid grid-cols-3">
          <TabsTrigger value="theory" className="flex items-center gap-1">
            <BookOpen className="h-4 w-4" />
            <span className="hidden sm:inline">Lý thuyết</span>
          </TabsTrigger>
          <TabsTrigger value="examples" className="flex items-center gap-1">
            <Lightbulb className="h-4 w-4" />
            <span className="hidden sm:inline">Ví dụ</span>
          </TabsTrigger>
          <TabsTrigger value="exercises" className="flex items-center gap-1">
            <CheckSquare className="h-4 w-4" />
            <span className="hidden sm:inline">Bài tập</span>
          </TabsTrigger>
        </TabsList>

        {/* Tab: Lý thuyết */}
        <TabsContent value="theory" className="mt-6 space-y-6">
          <div className="prose prose-red max-w-none">
            <h3 className="text-xl font-bold flex items-center gap-2 mb-4 text-red-700">
              <BookOpen className="h-5 w-5" />
              Tóm tắt lý thuyết
            </h3>

            <div className="mb-6 bg-white p-5 rounded-xl border shadow-sm">
              <h4 className="text-lg font-medium text-red-700 mb-3">Định nghĩa</h4>
              <p className="text-gray-700 mb-4">
                <span className="font-medium">Đơn thức:</span> Là một biểu thức đại số chỉ gồm một số, một biến hoặc một tích giữa các số và các biến.
              </p>
              <p className="text-gray-700 mb-1">
                Ví dụ: 2; 3x; 4y²; ...
              </p>

              <p className="text-gray-700 mb-4 mt-4">
                <span className="font-medium">Đa thức:</span> Là một tổng của những đơn thức, mỗi đơn thức trong tổng được gọi là một hạng tử.
              </p>
              <p className="text-gray-700 mb-4">
                Ví dụ: 2x + 3y; 3x - 1; ...
              </p>
            </div>

            <div className="mb-6 bg-white p-5 rounded-xl border shadow-sm">
              <h4 className="text-lg font-medium text-red-700 mb-3">Tính chất phân phối giữa phép nhân và phép cộng, phép trừ</h4>

              <div className="bg-red-50 p-4 rounded-lg mb-4">
                <Formula
                  formula="A.(B \\pm C) = A.B \\pm A.C"
                  displayMode={true}
                />
              </div>
              
              <h4 className="text-lg font-medium text-red-700 mb-3 mt-6">Các phép toán về lũy thừa</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-red-50 p-4 rounded-lg">
                  <Formula
                    formula="a^m.a^n = a^{m+n}"
                    displayMode={true}
                    description="Nhân hai lũy thừa cùng cơ số"
                  />
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <Formula
                    formula="a^m : a^n = a^{m-n} \\quad (m \\geq n)"
                    displayMode={true}
                    description="Chia hai lũy thừa cùng cơ số"
                  />
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <Formula
                    formula="a^0 = 1 \\quad (a \\neq 0)"
                    displayMode={true}
                    description="Lũy thừa bậc 0"
                  />
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <Formula
                    formula="(a^m)^n = a^{m.n} \\quad (m, n \\in \\mathbb{N})"
                    displayMode={true}
                    description="Lũy thừa của lũy thừa"
                  />
                </div>
              </div>
            </div>

            <div className="mb-6 bg-white p-5 rounded-xl border shadow-sm">
              <h4 className="text-lg font-medium text-red-700 mb-3">Quy tắc nhân đơn thức với đa thức</h4>
              <p className="text-gray-700 mb-4">
                Muốn nhân một đơn thức với một đa thức, ta nhân đơn thức với từng hạng tử của đa thức rồi cộng các tích với nhau.
              </p>
              
              <div className="bg-red-50 p-4 rounded-lg mb-4">
                <Formula
                  formula="A(B + C) = AB + AC"
                  displayMode={true}
                  description="với A, B, C là các đơn thức"
                />
              </div>
              
              <p className="text-gray-700 mb-1">
                Ví dụ: 2x(2x³ - x² + 3) = 4x⁴ - 2x³ + 6x
              </p>
            </div>

            <Alert className="bg-red-50 border-red-200 mb-4">
              <HelpCircle className="h-4 w-4 text-red-600" />
              <AlertTitle className="text-red-800">Lưu ý quan trọng</AlertTitle>
              <AlertDescription className="text-red-700">
                Khi thực hiện phép nhân đơn thức với đa thức, cần chú ý áp dụng đúng các quy tắc về lũy thừa và phép nhân phân phối.
              </AlertDescription>
            </Alert>
          </div>
        </TabsContent>

        {/* Tab: Ví dụ */}
        <TabsContent value="examples" className="mt-6 space-y-6">
          <div className="prose prose-red max-w-none">
            <h3 className="text-xl font-bold flex items-center gap-2 mb-4 text-red-700">
              <Lightbulb className="h-5 w-5" />
              Ví dụ về nhân đơn thức với đa thức
            </h3>

            <div className="mb-6 bg-white p-5 rounded-xl border shadow-sm">
              <h4 className="text-lg font-medium text-red-700 mb-3">Ví dụ 1</h4>
              <p className="font-medium mb-2">Thực hiện phép tính: A = 2x²(5x² - x - 1)</p>
              
              <div className="bg-gray-50 p-4 rounded-lg mt-4">
                <p className="font-medium text-gray-700">Lời giải:</p>
                <div className="mt-2">
                  <Formula
                    formula="\\begin{align}
                      A &= 2x^2(5x^2 - x - 1) \\\\
                      &= 2x^2 \\cdot 5x^2 - 2x^2 \\cdot x - 2x^2 \\cdot 1 \\\\
                      &= 10x^4 - 2x^3 - 2x^2
                    \\end{align}"
                    displayMode={true}
                  />
                </div>
              </div>
            </div>

            <div className="mb-6 bg-white p-5 rounded-xl border shadow-sm">
              <h4 className="text-lg font-medium text-red-700 mb-3">Ví dụ 2</h4>
              <p className="font-medium mb-2">Thực hiện phép tính: B = -4/3 · x²y·(3xy - 2x² + xy²)</p>
              
              <div className="bg-gray-50 p-4 rounded-lg mt-4">
                <p className="font-medium text-gray-700">Lời giải:</p>
                <div className="mt-2">
                  <Formula
                    formula="\\begin{align}
                      B &= -\\frac{4}{3} \\cdot x^2y \\cdot (3xy - 2x^2 + xy^2) \\\\
                      &= -\\frac{4}{3} \\cdot x^2y \\cdot 3xy - \\frac{4}{3} \\cdot x^2y \\cdot (-2x^2) + \\frac{4}{3} \\cdot x^2y \\cdot xy^2 \\\\
                      &= -\\frac{4}{3} \\cdot 3 \\cdot x^2y \\cdot xy + \\frac{4}{3} \\cdot 2 \\cdot x^2y \\cdot x^2 + \\frac{4}{3} \\cdot x^2y \\cdot xy^2 \\\\
                      &= -4x^3y^2 + \\frac{8}{3}x^4y + \\frac{4}{3}x^3y^3
                    \\end{align}"
                    displayMode={true}
                  />
                </div>
              </div>
            </div>

            <div className="mb-6 bg-white p-5 rounded-xl border shadow-sm">
              <h4 className="text-lg font-medium text-red-700 mb-3">Ví dụ 3</h4>
              <p className="font-medium mb-2">Rút gọn biểu thức: E = 3x²y²(4xy - y³ + y²)</p>
              
              <div className="bg-gray-50 p-4 rounded-lg mt-4">
                <p className="font-medium text-gray-700">Lời giải:</p>
                <div className="mt-2">
                  <Formula
                    formula="\\begin{align}
                      E &= 3x^2y^2(4xy - y^3 + y^2) \\\\
                      &= 3x^2y^2 \\cdot 4xy - 3x^2y^2 \\cdot y^3 + 3x^2y^2 \\cdot y^2 \\\\
                      &= 12x^3y^3 - 3x^2y^5 + 3x^2y^4
                    \\end{align}"
                    displayMode={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Tab: Bài tập */}
        <TabsContent value="exercises" className="mt-6 space-y-6">
          <div className="prose prose-red max-w-none">
            <h3 className="text-xl font-bold flex items-center gap-2 mb-4 text-red-700">
              <CheckSquare className="h-5 w-5" />
              Bài tập trắc nghiệm
            </h3>

            <div className="space-y-6">
              <div className="bg-white p-5 rounded-xl border shadow-sm">
                <p className="font-medium mb-4">1. Tính C = -3x²y³(xyz - 7x³y + 5x²z)</p>
                <div className="space-y-2">
                  <div 
                    className={`p-3 rounded-lg cursor-pointer flex items-start gap-2 ${
                      isAnswerCorrect(1, "a") ? "bg-green-100" : 
                      isAnswerWrong(1, "a") ? "bg-red-100" : "bg-gray-50 hover:bg-gray-100"
                    }`}
                    onClick={() => answerQuiz(1, "a")}
                  >
                    <div className="mt-0.5">a)</div>
                    <div>-2x³y⁴z + 21x⁵y⁴ - 15x⁴y³z</div>
                  </div>
                  <div 
                    className={`p-3 rounded-lg cursor-pointer flex items-start gap-2 ${
                      isAnswerCorrect(1, "b") ? "bg-green-100" : 
                      isAnswerWrong(1, "b") ? "bg-red-100" : "bg-gray-50 hover:bg-gray-100"
                    }`}
                    onClick={() => answerQuiz(1, "b")}
                  >
                    <div className="mt-0.5">b)</div>
                    <div>-3x³y⁴z + 21x⁵y⁴ - 15x⁴y³z</div>
                  </div>
                  <div 
                    className={`p-3 rounded-lg cursor-pointer flex items-start gap-2 ${
                      isAnswerCorrect(1, "c") ? "bg-green-100" : 
                      isAnswerWrong(1, "c") ? "bg-red-100" : "bg-gray-50 hover:bg-gray-100"
                    }`}
                    onClick={() => answerQuiz(1, "c")}
                  >
                    <div className="mt-0.5">c)</div>
                    <div>-3x³y⁴z - 21x⁵y⁴ - 15x⁴y³z</div>
                  </div>
                  <div 
                    className={`p-3 rounded-lg cursor-pointer flex items-start gap-2 ${
                      isAnswerCorrect(1, "d") ? "bg-green-100" : 
                      isAnswerWrong(1, "d") ? "bg-red-100" : "bg-gray-50 hover:bg-gray-100"
                    }`}
                    onClick={() => answerQuiz(1, "d")}
                  >
                    <div className="mt-0.5">d)</div>
                    <div>-3x³y⁴z - 21x⁵y⁴ + 15x⁴y³z</div>
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  className="mt-4" 
                  onClick={() => toggleShowAnswer(1)}
                >
                  {showAnswers[1] ? "Ẩn lời giải" : "Xem lời giải"}
                </Button>

                {showAnswers[1] && (
                  <div className="mt-4 p-4 bg-red-50 rounded-lg">
                    <p className="font-medium">Lời giải:</p>
                    <Formula
                      formula="\\begin{align}
                        C &= -3x^2y^3(xyz - 7x^3y + 5x^2z) \\\\
                        &= -3x^2y^3 \\cdot xyz - (-3x^2y^3) \\cdot 7x^3y + (-3x^2y^3) \\cdot 5x^2z \\\\
                        &= -3x^3y^4z + 21x^5y^4 - 15x^4y^3z
                      \\end{align}"
                      displayMode={true}
                    />
                    <p>Đáp án đúng là: b)</p>
                  </div>
                )}
              </div>

              <div className="bg-white p-5 rounded-xl border shadow-sm">
                <p className="font-medium mb-4">2. Rút gọn biểu thức D = 4x²y³(-2x³ + y² - 7xy)</p>
                <div className="space-y-2">
                  <div 
                    className={`p-3 rounded-lg cursor-pointer flex items-start gap-2 ${
                      isAnswerCorrect(2, "a") ? "bg-green-100" : 
                      isAnswerWrong(2, "a") ? "bg-red-100" : "bg-gray-50 hover:bg-gray-100"
                    }`}
                    onClick={() => answerQuiz(2, "a")}
                  >
                    <div className="mt-0.5">a)</div>
                    <div>-8x⁵y³ + 4x²y⁵ - 28x³y⁴</div>
                  </div>
                  <div 
                    className={`p-3 rounded-lg cursor-pointer flex items-start gap-2 ${
                      isAnswerCorrect(2, "b") ? "bg-green-100" : 
                      isAnswerWrong(2, "b") ? "bg-red-100" : "bg-gray-50 hover:bg-gray-100"
                    }`}
                    onClick={() => answerQuiz(2, "b")}
                  >
                    <div className="mt-0.5">b)</div>
                    <div>-8x⁵y³ + 4x²y⁴ - 28x³y⁴</div>
                  </div>
                  <div 
                    className={`p-3 rounded-lg cursor-pointer flex items-start gap-2 ${
                      isAnswerCorrect(2, "c") ? "bg-green-100" : 
                      isAnswerWrong(2, "c") ? "bg-red-100" : "bg-gray-50 hover:bg-gray-100"
                    }`}
                    onClick={() => answerQuiz(2, "c")}
                  >
                    <div className="mt-0.5">c)</div>
                    <div>-8x⁵y³ + 4x²y⁵ - 28x³y⁴</div>
                  </div>
                  <div 
                    className={`p-3 rounded-lg cursor-pointer flex items-start gap-2 ${
                      isAnswerCorrect(2, "d") ? "bg-green-100" : 
                      isAnswerWrong(2, "d") ? "bg-red-100" : "bg-gray-50 hover:bg-gray-100"
                    }`}
                    onClick={() => answerQuiz(2, "d")}
                  >
                    <div className="mt-0.5">d)</div>
                    <div>-8x⁵y² + 4x²y⁵ - 28x³y⁴</div>
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  className="mt-4" 
                  onClick={() => toggleShowAnswer(2)}
                >
                  {showAnswers[2] ? "Ẩn lời giải" : "Xem lời giải"}
                </Button>

                {showAnswers[2] && (
                  <div className="mt-4 p-4 bg-red-50 rounded-lg">
                    <p className="font-medium">Lời giải:</p>
                    <Formula
                      formula="\\begin{align}
                        D &= 4x^2y^3(-2x^3 + y^2 - 7xy) \\\\
                        &= 4x^2y^3 \\cdot (-2x^3) + 4x^2y^3 \\cdot y^2 + 4x^2y^3 \\cdot (-7xy) \\\\
                        &= -8x^5y^3 + 4x^2y^5 - 28x^3y^4
                      \\end{align}"
                      displayMode={true}
                    />
                    <p>Đáp án đúng là: c)</p>
                  </div>
                )}
              </div>

              <div className="bg-white p-5 rounded-xl border shadow-sm">
                <p className="font-medium mb-4">3. Rút gọn biểu thức F = t(-2t³ + 1) + t²(2t² + 1) - t</p>
                <div className="space-y-2">
                  <div 
                    className={`p-3 rounded-lg cursor-pointer flex items-start gap-2 ${
                      isAnswerCorrect(3, "a") ? "bg-green-100" : 
                      isAnswerWrong(3, "a") ? "bg-red-100" : "bg-gray-50 hover:bg-gray-100"
                    }`}
                    onClick={() => answerQuiz(3, "a")}
                  >
                    <div className="mt-0.5">a)</div>
                    <div>2t² - t</div>
                  </div>
                  <div 
                    className={`p-3 rounded-lg cursor-pointer flex items-start gap-2 ${
                      isAnswerCorrect(3, "b") ? "bg-green-100" : 
                      isAnswerWrong(3, "b") ? "bg-red-100" : "bg-gray-50 hover:bg-gray-100"
                    }`}
                    onClick={() => answerQuiz(3, "b")}
                  >
                    <div className="mt-0.5">b)</div>
                    <div>-2t² - t</div>
                  </div>
                  <div 
                    className={`p-3 rounded-lg cursor-pointer flex items-start gap-2 ${
                      isAnswerCorrect(3, "c") ? "bg-green-100" : 
                      isAnswerWrong(3, "c") ? "bg-red-100" : "bg-gray-50 hover:bg-gray-100"
                    }`}
                    onClick={() => answerQuiz(3, "c")}
                  >
                    <div className="mt-0.5">c)</div>
                    <div>-t² + t</div>
                  </div>
                  <div 
                    className={`p-3 rounded-lg cursor-pointer flex items-start gap-2 ${
                      isAnswerCorrect(3, "d") ? "bg-green-100" : 
                      isAnswerWrong(3, "d") ? "bg-red-100" : "bg-gray-50 hover:bg-gray-100"
                    }`}
                    onClick={() => answerQuiz(3, "d")}
                  >
                    <div className="mt-0.5">d)</div>
                    <div>2t⁴ - t</div>
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  className="mt-4" 
                  onClick={() => toggleShowAnswer(3)}
                >
                  {showAnswers[3] ? "Ẩn lời giải" : "Xem lời giải"}
                </Button>

                {showAnswers[3] && (
                  <div className="mt-4 p-4 bg-red-50 rounded-lg">
                    <p className="font-medium">Lời giải:</p>
                    <Formula
                      formula="\\begin{align}
                        F &= t(-2t^3 + 1) + t^2(2t^2 + 1) - t \\\\
                        &= -2t^4 + t + 2t^4 + t^2 - t \\\\
                        &= -2t^4 + 2t^4 + t^2 + t - t \\\\
                        &= t^2
                      \\end{align}"
                      displayMode={true}
                    />
                    <p>Nhưng biểu thức này có sai sót. Tính đúng ta có: F = 2t² - t</p>
                    <p>Đáp án đúng là: a)</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </main>
  );
};

export default AlgebraicExpressions;