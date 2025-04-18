import { useState } from "react";
import { ArrowLeft, FileText, Download, Search, BookOpen } from "lucide-react";
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
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const StudyMaterials = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const materials = [
    {
      id: 1,
      title: "Tài liệu biểu thức đại số",
      description: "Tổng hợp kiến thức về đơn thức, đa thức và phép toán",
      type: "theory",
      category: "algebra",
      dateAdded: "2023-08-15",
      downloadCount: 245
    },
    {
      id: 2,
      title: "Ôn tập phân tích đa thức thành nhân tử",
      description: "Hướng dẫn chi tiết các phương pháp phân tích đa thức",
      type: "guide",
      category: "algebra",
      dateAdded: "2023-08-20",
      downloadCount: 189
    },
    {
      id: 3,
      title: "Các dạng bài tập về phân thức đại số",
      description: "Tổng hợp các dạng bài tập và phương pháp giải",
      type: "exercise",
      category: "algebra",
      dateAdded: "2023-09-01",
      downloadCount: 321
    },
    {
      id: 4,
      title: "Hình chóp và tính chất",
      description: "Tài liệu tổng hợp về hình chóp tam giác đều và tứ giác đều",
      type: "theory",
      category: "geometry",
      dateAdded: "2023-09-10",
      downloadCount: 156
    },
    {
      id: 5,
      title: "Bài tập tính diện tích và thể tích hình chóp",
      description: "Bài tập từ cơ bản đến nâng cao về hình chóp",
      type: "exercise",
      category: "geometry",
      dateAdded: "2023-09-15",
      downloadCount: 203
    },
    {
      id: 6,
      title: "Tổng hợp kiến thức thống kê",
      description: "Tổng hợp kiến thức về thu thập dữ liệu và các biểu đồ thống kê",
      type: "theory",
      category: "statistics",
      dateAdded: "2023-09-25",
      downloadCount: 178
    }
  ];

  // Filter materials based on search term and active tab
  const filteredMaterials = materials.filter(material => {
    const matchesSearch = material.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           material.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTab = activeTab === "all" || 
                       (activeTab === "theory" && material.type === "theory") ||
                       (activeTab === "guide" && material.type === "guide") ||
                       (activeTab === "exercise" && material.type === "exercise") ||
                       (activeTab === "algebra" && material.category === "algebra") ||
                       (activeTab === "geometry" && material.category === "geometry") ||
                       (activeTab === "statistics" && material.category === "statistics");
    return matchesSearch && matchesTab;
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

  const getTypeIcon = (type: string) => {
    switch(type) {
      case "theory": return <BookOpen className="h-4 w-4 mr-2" />;
      case "guide": return <FileText className="h-4 w-4 mr-2" />;
      case "exercise": return <FileText className="h-4 w-4 mr-2" />;
      default: return <FileText className="h-4 w-4 mr-2" />;
    }
  };

  const getTypeLabel = (type: string) => {
    switch(type) {
      case "theory": return "Lý thuyết";
      case "guide": return "Hướng dẫn";
      case "exercise": return "Bài tập";
      default: return type;
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
          <h1 className="text-2xl font-bold font-heading text-gray-900">Tài liệu học tập</h1>
        </div>
      </div>

      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            className="pl-10"
            placeholder="Tìm kiếm tài liệu..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <Tabs defaultValue="all" onValueChange={setActiveTab} className="mb-6">
        <TabsList>
          <TabsTrigger value="all">Tất cả</TabsTrigger>
          <TabsTrigger value="theory">Lý thuyết</TabsTrigger>
          <TabsTrigger value="guide">Hướng dẫn</TabsTrigger>
          <TabsTrigger value="exercise">Bài tập</TabsTrigger>
          <TabsTrigger value="algebra">Đại số</TabsTrigger>
          <TabsTrigger value="geometry">Hình học</TabsTrigger>
          <TabsTrigger value="statistics">Thống kê</TabsTrigger>
        </TabsList>
      </Tabs>

      {filteredMaterials.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-500">Không tìm thấy tài liệu nào phù hợp.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMaterials.map((material) => (
            <Card key={material.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <span className={`inline-block px-2 py-1 ${getCategoryColor(material.category)} text-xs font-semibold rounded-full`}>
                    {getCategoryLabel(material.category)}
                  </span>
                  <span className="text-sm text-gray-500">
                    {new Date(material.dateAdded).toLocaleDateString('vi-VN')}
                  </span>
                </div>
                <CardTitle className="mt-2">{material.title}</CardTitle>
                <CardDescription>{material.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-sm text-gray-500">
                    {getTypeIcon(material.type)}
                    {getTypeLabel(material.type)}
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm text-gray-500 mr-2">
                      {material.downloadCount} lượt tải
                    </span>
                    <Button variant="outline" size="sm" className="flex items-center">
                      <Download className="h-4 w-4 mr-1" />
                      Tải xuống
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </main>
  );
};

export default StudyMaterials;
