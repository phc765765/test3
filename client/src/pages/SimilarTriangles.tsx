import { useState } from "react";
import { ArrowLeft, BookOpen, Lightbulb, CheckSquare, HelpCircle } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Formula from "@/components/math/Formula";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const SimilarTriangles = () => {
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
      1: "c",
      2: "a",
      3: "b"
    };
    return selectedQuiz[questionId] === answerId && selectedQuiz[questionId] === correctAnswers[questionId];
  };

  const isAnswerWrong = (questionId: number, answerId: string) => {
    const correctAnswers: {[id: number]: string} = {
      1: "c",
      2: "a",
      3: "b"
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
            <div className="hover:text-yellow-600 cursor-pointer">Chương trình học</div>
          </Link>
          <span>/</span>
          <Link href="/curriculum/geometry">
            <div className="hover:text-yellow-600 cursor-pointer">Hình học</div>
          </Link>
          <span>/</span>
          <span className="text-gray-700">Tam giác đồng dạng</span>
        </div>
      </div>

      <Card className="mb-6 border-2 border-yellow-500/20 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-yellow-50 to-white">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div>
              <span className="inline-block px-2 py-1 bg-yellow-100 text-yellow-700 text-xs font-semibold rounded-full mb-2">
                Chương 9
              </span>
              <CardTitle className="text-2xl text-gray-800">Tam giác đồng dạng</CardTitle>
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
          <div className="prose prose-yellow max-w-none">
            <h3 className="text-xl font-bold flex items-center gap-2 mb-4 text-yellow-700">
              <BookOpen className="h-5 w-5" />
              Hai tam giác đồng dạng
            </h3>

            <div className="mb-6 bg-white p-5 rounded-xl border shadow-sm">
              <h4 className="text-lg font-medium text-yellow-700 mb-3">Định nghĩa</h4>
              <p className="text-gray-700 mb-4">
                Hai tam giác được gọi là đồng dạng khi chúng có các góc tương ứng bằng nhau và tỉ số các cạnh tương ứng bằng nhau.
              </p>
              <p className="text-gray-700 mb-4">
                Cho hai tam giác ABC và A'B'C'. Tam giác ABC đồng dạng với tam giác A'B'C', ký hiệu △ABC ∽ △A'B'C', nếu:
              </p>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <Formula
                  formula="\\begin{cases} 
                    \\widehat{A} = \\widehat{A'} \\\\ 
                    \\widehat{B} = \\widehat{B'} \\\\ 
                    \\widehat{C} = \\widehat{C'} 
                  \\end{cases} \\quad \\text{và} \\quad 
                  \\begin{cases} 
                    \\frac{AB}{A'B'} = \\frac{BC}{B'C'} = \\frac{AC}{A'C'} = k 
                  \\end{cases}"
                  displayMode={true}
                  description="Trong đó k là tỉ số đồng dạng của hai tam giác"
                />
              </div>
            </div>

            <div className="mb-6 bg-white p-5 rounded-xl border shadow-sm">
              <h4 className="text-lg font-medium text-yellow-700 mb-3">Các trường hợp đồng dạng của hai tam giác</h4>
              <p className="text-gray-700 mb-4">
                1. Trường hợp G-G-G (góc-góc-góc): Hai tam giác có ba góc tương ứng bằng nhau thì đồng dạng.
              </p>
              <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                <Formula
                  formula="\\text{Nếu } \\widehat{A} = \\widehat{A'}, \\widehat{B} = \\widehat{B'}, \\widehat{C} = \\widehat{C'} \\text{ thì } \\triangle ABC \\sim \\triangle A'B'C'"
                  displayMode={true}
                />
              </div>
              
              <p className="text-gray-700 mb-4">
                2. Trường hợp C-G-C (cạnh-góc-cạnh): Hai tam giác có một góc bằng nhau và hai cạnh kề với góc đó tỉ lệ với nhau thì đồng dạng.
              </p>
              <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                <Formula
                  formula="\\text{Nếu } \\widehat{A} = \\widehat{A'} \\text{ và } \\frac{AB}{A'B'} = \\frac{AC}{A'C'} \\text{ thì } \\triangle ABC \\sim \\triangle A'B'C'"
                  displayMode={true}
                />
              </div>
              
              <p className="text-gray-700 mb-4">
                3. Trường hợp C-C-C (cạnh-cạnh-cạnh): Hai tam giác có các cạnh tương ứng tỉ lệ với nhau thì đồng dạng.
              </p>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <Formula
                  formula="\\text{Nếu } \\frac{AB}{A'B'} = \\frac{BC}{B'C'} = \\frac{AC}{A'C'} \\text{ thì } \\triangle ABC \\sim \\triangle A'B'C'"
                  displayMode={true}
                />
              </div>
            </div>

            <Alert className="bg-yellow-50 border-yellow-200 mb-4">
              <HelpCircle className="h-4 w-4 text-yellow-600" />
              <AlertTitle className="text-yellow-800">Lưu ý quan trọng</AlertTitle>
              <AlertDescription className="text-yellow-700">
                Hai tam giác đồng dạng sẽ có các góc tương ứng bằng nhau, nhưng kích thước của chúng có thể khác nhau theo tỉ lệ đồng dạng k.
              </AlertDescription>
            </Alert>
          </div>
        </TabsContent>

        {/* Tab: Ví dụ */}
        <TabsContent value="examples" className="mt-6 space-y-6">
          <div className="prose prose-yellow max-w-none">
            <h3 className="text-xl font-bold flex items-center gap-2 mb-4 text-yellow-700">
              <Lightbulb className="h-5 w-5" />
              Ví dụ về tam giác đồng dạng
            </h3>

            <div className="mb-6 bg-white p-5 rounded-xl border shadow-sm">
              <h4 className="text-lg font-medium text-yellow-700 mb-3">Ví dụ 1</h4>
              <p className="font-medium mb-2">Cho △ABC và △A′B′C′ là hai tam giác đều có AB = 4 cm, A′B′ = 3 cm. Chứng minh rằng △A′B′C′ ∽ △ABC và tìm tỉ số đồng dạng.</p>
              
              <div className="bg-gray-50 p-4 rounded-lg mt-4">
                <p className="font-medium text-gray-700">Lời giải:</p>
                <ul className="list-disc ml-5 space-y-2 mt-2">
                  <li>Vì △ABC và △A′B′C′ là hai tam giác đều nên mỗi tam giác có ba góc bằng 60°</li>
                  <li>Do đó: ∠A = ∠A′ = ∠B = ∠B′ = ∠C = ∠C′ = 60°</li>
                  <li>Từ đó, hai tam giác có ba góc tương ứng bằng nhau nên △A′B′C′ ∽ △ABC (theo trường hợp G-G-G)</li>
                  <li>Tỉ số đồng dạng k = AB/A′B′ = 4/3</li>
                </ul>
              </div>
            </div>

            <div className="mb-6 bg-white p-5 rounded-xl border shadow-sm">
              <h4 className="text-lg font-medium text-yellow-700 mb-3">Ví dụ 2</h4>
              <p className="font-medium mb-2">Quan sát hình dưới, cho biết DE ∥ BC, EF ∥ AB. Chứng minh rằng △ADE ∽ △EFC.</p>
              
              <div className="bg-gray-50 p-4 rounded-lg mt-4">
                <p className="font-medium text-gray-700">Lời giải:</p>
                <ul className="list-disc ml-5 space-y-2 mt-2">
                  <li>Ta có DE ∥ BC nên ∠ADE = ∠ABC (góc đồng vị)</li>
                  <li>Và EF ∥ AB nên ∠EFC = ∠BAC (góc đồng vị)</li>
                  <li>Lại có ∠DEA = ∠CFE (góc đối đỉnh)</li>
                  <li>Vậy hai tam giác ADE và EFC có ba góc tương ứng bằng nhau nên △ADE ∽ △EFC (theo trường hợp G-G-G)</li>
                </ul>
              </div>
            </div>

            <div className="mb-6 bg-white p-5 rounded-xl border shadow-sm">
              <h4 className="text-lg font-medium text-yellow-700 mb-3">Ví dụ 3</h4>
              <p className="font-medium mb-2">Cho tam giác ABC. Hai đường trung tuyến BM và CN cắt nhau tại G. Chứng minh △GMN ∽ △GBC.</p>
              
              <div className="bg-gray-50 p-4 rounded-lg mt-4">
                <p className="font-medium text-gray-700">Lời giải:</p>
                <ul className="list-disc ml-5 space-y-2 mt-2">
                  <li>M là trung điểm của AC nên AM = MC</li>
                  <li>N là trung điểm của AB nên AN = NB</li>
                  <li>Vì BM là đường trung tuyến nên M là trung điểm của AC</li>
                  <li>Tương tự, CN là đường trung tuyến nên N là trung điểm của AB</li>
                  <li>Theo định lý trung điểm, MN ∥ BC và MN = BC/2</li>
                  <li>Do MN ∥ BC nên ∠GMN = ∠GBC và ∠GNM = ∠GCB</li>
                  <li>Góc ∠MGN = ∠BGC (góc đối đỉnh)</li>
                  <li>Vậy hai tam giác GMN và GBC có ba góc tương ứng bằng nhau nên △GMN ∽ △GBC (theo trường hợp G-G-G)</li>
                </ul>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Tab: Bài tập */}
        <TabsContent value="exercises" className="mt-6 space-y-6">
          <div className="prose prose-yellow max-w-none">
            <h3 className="text-xl font-bold flex items-center gap-2 mb-4 text-yellow-700">
              <CheckSquare className="h-5 w-5" />
              Bài tập trắc nghiệm
            </h3>

            <div className="space-y-6">
              <div className="bg-white p-5 rounded-xl border shadow-sm">
                <p className="font-medium mb-4">1. Hai tam giác đồng dạng thì</p>
                <div className="space-y-2">
                  <div 
                    className={`p-3 rounded-lg cursor-pointer flex items-start gap-2 ${
                      isAnswerCorrect(1, "a") ? "bg-green-100" : 
                      isAnswerWrong(1, "a") ? "bg-red-100" : "bg-gray-50 hover:bg-gray-100"
                    }`}
                    onClick={() => answerQuiz(1, "a")}
                  >
                    <div className="mt-0.5">a)</div>
                    <div>Có ba cạnh tương ứng bằng nhau</div>
                  </div>
                  <div 
                    className={`p-3 rounded-lg cursor-pointer flex items-start gap-2 ${
                      isAnswerCorrect(1, "b") ? "bg-green-100" : 
                      isAnswerWrong(1, "b") ? "bg-red-100" : "bg-gray-50 hover:bg-gray-100"
                    }`}
                    onClick={() => answerQuiz(1, "b")}
                  >
                    <div className="mt-0.5">b)</div>
                    <div>Luôn có hình dạng và kích thước giống nhau</div>
                  </div>
                  <div 
                    className={`p-3 rounded-lg cursor-pointer flex items-start gap-2 ${
                      isAnswerCorrect(1, "c") ? "bg-green-100" : 
                      isAnswerWrong(1, "c") ? "bg-red-100" : "bg-gray-50 hover:bg-gray-100"
                    }`}
                    onClick={() => answerQuiz(1, "c")}
                  >
                    <div className="mt-0.5">c)</div>
                    <div>Có các góc tương ứng bằng nhau và các cạnh tương ứng tỉ lệ với nhau</div>
                  </div>
                  <div 
                    className={`p-3 rounded-lg cursor-pointer flex items-start gap-2 ${
                      isAnswerCorrect(1, "d") ? "bg-green-100" : 
                      isAnswerWrong(1, "d") ? "bg-red-100" : "bg-gray-50 hover:bg-gray-100"
                    }`}
                    onClick={() => answerQuiz(1, "d")}
                  >
                    <div className="mt-0.5">d)</div>
                    <div>Có cả ba cặp cạnh tương ứng song song với nhau</div>
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
                  <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                    <p className="font-medium">Lời giải:</p>
                    <p>Hai tam giác đồng dạng khi chúng có các góc tương ứng bằng nhau và các cạnh tương ứng tỉ lệ với nhau.</p>
                    <p>Đáp án đúng là: c)</p>
                  </div>
                )}
              </div>

              <div className="bg-white p-5 rounded-xl border shadow-sm">
                <p className="font-medium mb-4">2. Nếu hai tam giác có ba góc tương ứng bằng nhau thì chúng</p>
                <div className="space-y-2">
                  <div 
                    className={`p-3 rounded-lg cursor-pointer flex items-start gap-2 ${
                      isAnswerCorrect(2, "a") ? "bg-green-100" : 
                      isAnswerWrong(2, "a") ? "bg-red-100" : "bg-gray-50 hover:bg-gray-100"
                    }`}
                    onClick={() => answerQuiz(2, "a")}
                  >
                    <div className="mt-0.5">a)</div>
                    <div>Đồng dạng với nhau</div>
                  </div>
                  <div 
                    className={`p-3 rounded-lg cursor-pointer flex items-start gap-2 ${
                      isAnswerCorrect(2, "b") ? "bg-green-100" : 
                      isAnswerWrong(2, "b") ? "bg-red-100" : "bg-gray-50 hover:bg-gray-100"
                    }`}
                    onClick={() => answerQuiz(2, "b")}
                  >
                    <div className="mt-0.5">b)</div>
                    <div>Bằng nhau</div>
                  </div>
                  <div 
                    className={`p-3 rounded-lg cursor-pointer flex items-start gap-2 ${
                      isAnswerCorrect(2, "c") ? "bg-green-100" : 
                      isAnswerWrong(2, "c") ? "bg-red-100" : "bg-gray-50 hover:bg-gray-100"
                    }`}
                    onClick={() => answerQuiz(2, "c")}
                  >
                    <div className="mt-0.5">c)</div>
                    <div>Có thể đồng dạng hoặc không đồng dạng</div>
                  </div>
                  <div 
                    className={`p-3 rounded-lg cursor-pointer flex items-start gap-2 ${
                      isAnswerCorrect(2, "d") ? "bg-green-100" : 
                      isAnswerWrong(2, "d") ? "bg-red-100" : "bg-gray-50 hover:bg-gray-100"
                    }`}
                    onClick={() => answerQuiz(2, "d")}
                  >
                    <div className="mt-0.5">d)</div>
                    <div>Chắc chắn không đồng dạng</div>
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
                  <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                    <p className="font-medium">Lời giải:</p>
                    <p>Theo trường hợp G-G-G, hai tam giác có ba góc tương ứng bằng nhau thì đồng dạng.</p>
                    <p>Đáp án đúng là: a)</p>
                  </div>
                )}
              </div>

              <div className="bg-white p-5 rounded-xl border shadow-sm">
                <p className="font-medium mb-4">3. Cho hai tam giác ABC và A'B'C' với AB = 4cm, BC = 5cm, AC = 6cm, A'B' = 6cm, B'C' = 7.5cm, A'C' = 9cm. Hai tam giác này có đồng dạng không?</p>
                <div className="space-y-2">
                  <div 
                    className={`p-3 rounded-lg cursor-pointer flex items-start gap-2 ${
                      isAnswerCorrect(3, "a") ? "bg-green-100" : 
                      isAnswerWrong(3, "a") ? "bg-red-100" : "bg-gray-50 hover:bg-gray-100"
                    }`}
                    onClick={() => answerQuiz(3, "a")}
                  >
                    <div className="mt-0.5">a)</div>
                    <div>Không đồng dạng vì các tỉ lệ khác nhau</div>
                  </div>
                  <div 
                    className={`p-3 rounded-lg cursor-pointer flex items-start gap-2 ${
                      isAnswerCorrect(3, "b") ? "bg-green-100" : 
                      isAnswerWrong(3, "b") ? "bg-red-100" : "bg-gray-50 hover:bg-gray-100"
                    }`}
                    onClick={() => answerQuiz(3, "b")}
                  >
                    <div className="mt-0.5">b)</div>
                    <div>Đồng dạng vì các cạnh tương ứng tỉ lệ bằng nhau</div>
                  </div>
                  <div 
                    className={`p-3 rounded-lg cursor-pointer flex items-start gap-2 ${
                      isAnswerCorrect(3, "c") ? "bg-green-100" : 
                      isAnswerWrong(3, "c") ? "bg-red-100" : "bg-gray-50 hover:bg-gray-100"
                    }`}
                    onClick={() => answerQuiz(3, "c")}
                  >
                    <div className="mt-0.5">c)</div>
                    <div>Không đồng dạng vì không biết các góc</div>
                  </div>
                  <div 
                    className={`p-3 rounded-lg cursor-pointer flex items-start gap-2 ${
                      isAnswerCorrect(3, "d") ? "bg-green-100" : 
                      isAnswerWrong(3, "d") ? "bg-red-100" : "bg-gray-50 hover:bg-gray-100"
                    }`}
                    onClick={() => answerQuiz(3, "d")}
                  >
                    <div className="mt-0.5">d)</div>
                    <div>Đồng dạng vì các góc bằng nhau</div>
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
                  <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                    <p className="font-medium">Lời giải:</p>
                    <p>Tính tỉ lệ của các cạnh tương ứng:</p>
                    <Formula formula="\\frac{A'B'}{AB} = \\frac{6}{4} = 1.5" />
                    <Formula formula="\\frac{B'C'}{BC} = \\frac{7.5}{5} = 1.5" />
                    <Formula formula="\\frac{A'C'}{AC} = \\frac{9}{6} = 1.5" />
                    <p>Vì các tỉ lệ bằng nhau và bằng 1.5, nên theo trường hợp C-C-C, hai tam giác đồng dạng.</p>
                    <p>Đáp án đúng là: b)</p>
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

export default SimilarTriangles;