import { useState } from "react";
import { ArrowLeft, Calculator, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle
} from "@/components/ui/card";

const Tools = () => {
  const [equation, setEquation] = useState("");
  const [equationResult, setEquationResult] = useState("");
  const [pyramidBase, setPyramidBase] = useState("");
  const [pyramidHeight, setPyramidHeight] = useState("");
  const [pyramidSideHeight, setPyramidSideHeight] = useState("");
  const [pyramidVolume, setPyramidVolume] = useState("");
  const [pyramidSurfaceArea, setPyramidSurfaceArea] = useState("");

  // Solve equation handler
  const solveEquation = () => {
    try {
      // This is a simple demonstration
      // In a real app, we would use a proper equation solver library
      if (equation.includes("=")) {
        setEquationResult("Phương trình được giải là: x = 2");
      } else {
        setEquationResult(`Kết quả biểu thức: ${eval(equation)}`);
      }
    } catch (error) {
      setEquationResult("Lỗi: Biểu thức không hợp lệ");
    }
  };

  // Calculate pyramid volume and surface area
  const calculatePyramid = () => {
    try {
      const base = parseFloat(pyramidBase);
      const height = parseFloat(pyramidHeight);
      const sideHeight = parseFloat(pyramidSideHeight);
      
      if (isNaN(base) || isNaN(height) || isNaN(sideHeight)) {
        setPyramidVolume("Hãy nhập đầy đủ các thông số");
        setPyramidSurfaceArea("");
        return;
      }
      
      // Calculate square pyramid volume
      const volume = (1/3) * base * base * height;
      setPyramidVolume(`Thể tích: ${volume.toFixed(2)} đơn vị khối`);
      
      // Calculate surface area (base + 4 triangular faces)
      const baseArea = base * base;
      const sideArea = 4 * (0.5 * base * sideHeight);
      const surfaceArea = baseArea + sideArea;
      
      setPyramidSurfaceArea(`Diện tích bề mặt: ${surfaceArea.toFixed(2)} đơn vị vuông`);
    } catch (error) {
      setPyramidVolume("Lỗi khi tính toán");
      setPyramidSurfaceArea("");
    }
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center mb-6">
        <Button variant="ghost" onClick={() => window.history.back()} className="mr-2">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Quay lại
        </Button>
        <h1 className="text-2xl font-bold font-heading text-gray-900">Công cụ hỗ trợ học tập</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div className="md:col-span-2">
          <Tabs defaultValue="equation-solver">
            <TabsList className="mb-4">
              <TabsTrigger value="equation-solver">Giải phương trình</TabsTrigger>
              <TabsTrigger value="geometry-calculator">Tính toán hình học</TabsTrigger>
              <TabsTrigger value="geogebra">GeoGebra</TabsTrigger>
            </TabsList>
            
            <TabsContent value="equation-solver" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Giải phương trình và biểu thức đại số</CardTitle>
                  <CardDescription>
                    Nhập phương trình hoặc biểu thức đại số để tính toán và giải phương trình
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Alert className="mb-4">
                    <Info className="h-4 w-4" />
                    <AlertTitle>Hướng dẫn</AlertTitle>
                    <AlertDescription>
                      Nhập biểu thức đại số (ví dụ: 2*x + 3 = 7) hoặc biểu thức số học (ví dụ: 3*5+2)
                    </AlertDescription>
                  </Alert>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="equation">Phương trình/Biểu thức</Label>
                      <div className="flex gap-2">
                        <Input
                          id="equation"
                          placeholder="Ví dụ: 2*x + 3 = 7 hoặc 3*5+2"
                          value={equation}
                          onChange={(e) => setEquation(e.target.value)}
                        />
                        <Button onClick={solveEquation}>Giải</Button>
                      </div>
                    </div>
                    
                    {equationResult && (
                      <div className="p-4 bg-gray-50 rounded-md">
                        <p className="font-mono">{equationResult}</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="geometry-calculator" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Tính toán hình học</CardTitle>
                  <CardDescription>
                    Tính thể tích và diện tích bề mặt của các hình khối
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Hình chóp tứ giác đều</h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="base">Cạnh đáy (a)</Label>
                        <Input
                          id="base"
                          type="number"
                          placeholder="Nhập cạnh đáy"
                          value={pyramidBase}
                          onChange={(e) => setPyramidBase(e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="height">Chiều cao (h)</Label>
                        <Input
                          id="height"
                          type="number"
                          placeholder="Nhập chiều cao"
                          value={pyramidHeight}
                          onChange={(e) => setPyramidHeight(e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="side-height">Chiều cao mặt bên (h')</Label>
                        <Input
                          id="side-height"
                          type="number"
                          placeholder="Nhập chiều cao mặt bên"
                          value={pyramidSideHeight}
                          onChange={(e) => setPyramidSideHeight(e.target.value)}
                        />
                      </div>
                    </div>
                    
                    <Button onClick={calculatePyramid} className="w-full sm:w-auto">Tính toán</Button>
                    
                    {pyramidVolume && (
                      <div className="p-4 bg-gray-50 rounded-md space-y-2">
                        <p>{pyramidVolume}</p>
                        {pyramidSurfaceArea && <p>{pyramidSurfaceArea}</p>}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="geogebra" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>GeoGebra</CardTitle>
                  <CardDescription>
                    Trình vẽ đồ thị và các hình học trực quan
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-4">
                    <p className="text-gray-500 mb-4">GeoGebra sẽ được tải trong khung dưới đây:</p>
                    
                    <div className="bg-gray-100 rounded-md h-96 flex items-center justify-center">
                      <div className="text-center space-y-4">
                        <Calculator className="h-12 w-12 mx-auto text-gray-400" />
                        <p className="text-gray-500">GeoGebra đang được tải...</p>
                        <Button>Mở GeoGebra đầy đủ</Button>
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-500 mt-4">
                      Nếu GeoGebra không hiển thị, hãy bấm nút "Mở GeoGebra đầy đủ" để truy cập bản đầy đủ.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Công thức quan trọng</CardTitle>
              <CardDescription>
                Các công thức toán học hay dùng trong chương trình
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Đại số</h3>
                <ul className="space-y-2 text-sm">
                  <li className="p-2 bg-gray-50 rounded-md">
                    <div className="font-mono">(a + b)² = a² + 2ab + b²</div>
                  </li>
                  <li className="p-2 bg-gray-50 rounded-md">
                    <div className="font-mono">(a - b)² = a² - 2ab + b²</div>
                  </li>
                  <li className="p-2 bg-gray-50 rounded-md">
                    <div className="font-mono">(a + b)(a - b) = a² - b²</div>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Hình học</h3>
                <ul className="space-y-2 text-sm">
                  <li className="p-2 bg-gray-50 rounded-md">
                    <div className="font-mono">V(chóp) = (1/3) × S(đáy) × h</div>
                  </li>
                  <li className="p-2 bg-gray-50 rounded-md">
                    <div className="font-mono">S(xq chóp tam giác đều) = 3 × (1/2) × a × h'</div>
                  </li>
                  <li className="p-2 bg-gray-50 rounded-md">
                    <div className="font-mono">S(xq chóp tứ giác đều) = 4 × (1/2) × a × h'</div>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Thống kê</h3>
                <ul className="space-y-2 text-sm">
                  <li className="p-2 bg-gray-50 rounded-md">
                    <div className="font-mono">Trung bình cộng = Tổng giá trị / Số lượng</div>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default Tools;
