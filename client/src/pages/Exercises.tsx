import { useState } from "react";
import { useLocation, Link } from "wouter";
import { ArrowLeft, Search, Paperclip, FolderOpen, ChevronRight } from "lucide-react";
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
  const [location] = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [difficultyFilter, setDifficultyFilter] = useState("all");

  // Phân loại bài tập theo thư mục con
  const exerciseCategories = [
    {
      id: "algebra",
      name: "Đại số",
      color: "blue",
      subcategories: [
        {
          id: "expressions",
          name: "Biểu thức đại số",
          description: "Các dạng bài tập về biểu thức đại số, đa thức, phân thức đại số",
          icon: "📝",
          exercisesCount: 15
        },
        {
          id: "equations",
          name: "Phương trình",
          description: "Bài tập về giải phương trình bậc nhất, phương trình phân thức",
          icon: "➗",
          exercisesCount: 10
        },
        {
          id: "inequalities",
          name: "Bất phương trình",
          description: "Bài tập về bất phương trình một ẩn",
          icon: "⚖️",
          exercisesCount: 8
        },
        {
          id: "functions",
          name: "Hàm số",
          description: "Bài tập về khái niệm hàm số, đồ thị hàm số và ứng dụng",
          icon: "📈",
          exercisesCount: 12
        }
      ]
    },
    {
      id: "geometry",
      name: "Hình học",
      color: "purple",
      subcategories: [
        {
          id: "pyramids",
          name: "Hình chóp",
          description: "Bài tập về hình chóp tam giác đều, hình chóp tứ giác đều",
          icon: "🔺",
          exercisesCount: 14
        },
        {
          id: "similar",
          name: "Hình đồng dạng",
          description: "Bài tập về hình đồng dạng, tam giác đồng dạng",
          icon: "📐",
          exercisesCount: 7
        },
        {
          id: "measurement",
          name: "Đo lường",
          description: "Bài tập về tính diện tích, thể tích các hình khối",
          icon: "📏",
          exercisesCount: 9
        }
      ]
    },
    {
      id: "statistics",
      name: "Thống kê",
      color: "green",
      subcategories: [
        {
          id: "data-collection",
          name: "Thu thập dữ liệu",
          description: "Bài tập về thu thập và phân loại dữ liệu",
          icon: "📊",
          exercisesCount: 5
        },
        {
          id: "data-analysis",
          name: "Phân tích dữ liệu",
          description: "Bài tập về đọc, phân tích và diễn giải dữ liệu từ biểu đồ",
          icon: "📉",
          exercisesCount: 7
        },
        {
          id: "probability",
          name: "Xác suất",
          description: "Bài tập về các bài toán xác suất cơ bản",
          icon: "🎲",
          exercisesCount: 6
        }
      ]
    }
  ];

  // Danh sách bài tập cụ thể
  const exercises = [
    // Algebra - Expressions
    {
      id: 101,
      title: "Rút gọn biểu thức đại số",
      description: "Thực hành rút gọn các biểu thức đại số phức tạp với nhiều biến",
      category: "algebra",
      subcategory: "expressions",
      difficulty: "medium",
      questionsCount: 15
    },
    {
      id: 102,
      title: "Nhân đa thức",
      description: "Bài tập về nhân các đa thức với nhau",
      category: "algebra",
      subcategory: "expressions",
      difficulty: "easy",
      questionsCount: 8
    },
    {
      id: 103,
      title: "Phân tích thành nhân tử",
      description: "Bài tập về phân tích đa thức thành nhân tử bằng các phương pháp cơ bản",
      category: "algebra",
      subcategory: "expressions",
      difficulty: "easy",
      questionsCount: 10
    },
    {
      id: 104,
      title: "Phân thức đại số và rút gọn",
      description: "Thực hành rút gọn các phân thức đại số phức tạp",
      category: "algebra",
      subcategory: "expressions",
      difficulty: "hard",
      questionsCount: 12
    },
    
    // Algebra - Equations
    {
      id: 201,
      title: "Giải phương trình bậc nhất một ẩn",
      description: "Bài tập về giải phương trình bậc nhất một ẩn",
      category: "algebra",
      subcategory: "equations",
      difficulty: "easy",
      questionsCount: 10
    },
    {
      id: 202,
      title: "Giải bài toán bằng phương trình",
      description: "Ứng dụng phương trình để giải các bài toán thực tế",
      category: "algebra",
      subcategory: "equations",
      difficulty: "medium",
      questionsCount: 8
    },
    
    // Geometry - Pyramids
    {
      id: 301,
      title: "Tính diện tích xung quanh hình chóp",
      description: "Bài tập về tính diện tích xung quanh của hình chóp đều",
      category: "geometry",
      subcategory: "pyramids",
      difficulty: "hard",
      questionsCount: 8
    },
    {
      id: 302,
      title: "Tính thể tích hình chóp",
      description: "Bài tập về tính thể tích của hình chóp với các dạng khác nhau",
      category: "geometry",
      subcategory: "pyramids",
      difficulty: "medium",
      questionsCount: 10
    },
    
    // Statistics - Data Collection
    {
      id: 401,
      title: "Vẽ biểu đồ từ bảng số liệu",
      description: "Thực hành vẽ các loại biểu đồ từ số liệu thống kê cho trước",
      category: "statistics",
      subcategory: "data-collection",
      difficulty: "easy",
      questionsCount: 5
    },
    
    // Statistics - Data Analysis
    {
      id: 501,
      title: "Phân tích dữ liệu thống kê",
      description: "Bài tập phân tích và diễn giải dữ liệu từ các biểu đồ",
      category: "statistics",
      subcategory: "data-analysis",
      difficulty: "medium",
      questionsCount: 7
    }
  ];

  // Parse the current URL to determine if we're in a subcategory
  const urlParts = location.split('/');
  const currentCategory = urlParts[2]; // Expecting /exercises/[category]
  const currentSubcategory = urlParts[3]; // Expecting /exercises/[category]/[subcategory]

  // Filter by current URL path
  const isRootView = !currentCategory;
  const isCategoryView = currentCategory && !currentSubcategory;
  const isSubcategoryView = currentCategory && currentSubcategory;

  // Filter exercises based on current path, search term, tab, and difficulty
  const filteredExercises = exercises.filter(exercise => {
    const matchesSearch = exercise.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         exercise.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTab = activeTab === "all" || exercise.category === activeTab;
    const matchesDifficulty = difficultyFilter === "all" || exercise.difficulty === difficultyFilter;
    
    // Filter by current path
    const matchesPath = isRootView || 
                       (isCategoryView && exercise.category === currentCategory) ||
                       (isSubcategoryView && exercise.category === currentCategory && exercise.subcategory === currentSubcategory);
    
    return matchesSearch && matchesTab && matchesDifficulty && matchesPath;
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

  // Get correct breadcrumb title based on current path
  const getBreadcrumbTitle = () => {
    if (isRootView) return "Bài tập";
    if (isCategoryView) {
      const category = exerciseCategories.find(c => c.id === currentCategory);
      return category ? category.name : "Bài tập";
    }
    if (isSubcategoryView) {
      const category = exerciseCategories.find(c => c.id === currentCategory);
      if (category) {
        const subcategory = category.subcategories.find(s => s.id === currentSubcategory);
        return subcategory ? subcategory.name : category.name;
      }
      return "Bài tập";
    }
    return "Bài tập";
  };

  // Determine the "go back" link based on current path
  const getBackLink = () => {
    if (isSubcategoryView) return `/exercises/${currentCategory}`;
    if (isCategoryView) return "/exercises";
    return "/";
  };

  // Render categories, subcategories, or exercises based on current path
  const renderContent = () => {
    if (isRootView) {
      return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {exerciseCategories.map((category) => (
            <Card key={category.id} className="hover:shadow-md transition-shadow">
              <Link href={`/exercises/${category.id}`}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <span className={`inline-block px-2 py-1 bg-${category.color}-100 text-${category.color}-600 text-xs font-semibold rounded-full`}>
                      {category.name}
                    </span>
                  </div>
                  <CardTitle className="mt-2 flex items-center justify-between">
                    {category.name}
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </CardTitle>
                  <CardDescription>
                    {category.subcategories.length} thư mục con
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-gray-500">
                    <FolderOpen className="h-4 w-4 mr-2" />
                    {category.subcategories.reduce((acc, sub) => acc + sub.exercisesCount, 0)} bài tập
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      );
    }

    if (isCategoryView) {
      const category = exerciseCategories.find(c => c.id === currentCategory);
      if (!category) return <div className="text-center py-10"><p className="text-gray-500">Danh mục không tồn tại.</p></div>;

      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.subcategories.map((subcategory) => (
            <Card key={subcategory.id} className="hover:shadow-md transition-shadow">
              <Link href={`/exercises/${category.id}/${subcategory.id}`}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <span className={`inline-block px-2 py-1 bg-${category.color}-100 text-${category.color}-600 text-xs font-semibold rounded-full`}>
                      {subcategory.name}
                    </span>
                    <span className="text-2xl">{subcategory.icon}</span>
                  </div>
                  <CardTitle className="mt-2 flex items-center justify-between">
                    {subcategory.name}
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </CardTitle>
                  <CardDescription>{subcategory.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-gray-500">
                    <Paperclip className="h-4 w-4 mr-2" />
                    {subcategory.exercisesCount} bài tập
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      );
    }

    // For subcategory view or any other view, show filtered exercises
    return (
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
              <Link href={`/exercises/${exercise.category}/${exercise.subcategory}/${exercise.id}`} className="w-full">
                <Button className={`w-full ${getButtonColor(exercise.category)}`}>Làm bài</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    );
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col space-y-2 mb-6">
        <div className="flex items-center">
          <Button variant="ghost" onClick={() => window.location.href = getBackLink()} className="mr-2">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Quay lại
          </Button>
          <h1 className="text-2xl font-bold font-heading text-gray-900">{getBreadcrumbTitle()}</h1>
        </div>
        
        {/* Breadcrumb navigation */}
        {(isCategoryView || isSubcategoryView) && (
          <div className="flex flex-wrap items-center space-x-2 text-sm text-gray-500">
            <Link href="/exercises" className="hover:text-primary">
              Bài tập
            </Link>
            {isCategoryView && (
              <>
                <span>/</span>
                <span className="text-gray-700">{getCategoryLabel(currentCategory)}</span>
              </>
            )}
            {isSubcategoryView && (
              <>
                <span>/</span>
                <Link href={`/exercises/${currentCategory}`} className="hover:text-primary">
                  {getCategoryLabel(currentCategory)}
                </Link>
                <span>/</span>
                <span className="text-gray-700">
                  {exerciseCategories
                    .find(c => c.id === currentCategory)
                    ?.subcategories.find(s => s.id === currentSubcategory)?.name || currentSubcategory}
                </span>
              </>
            )}
          </div>
        )}
      </div>

      {/* Search và filters hiển thị khi xem danh sách bài tập */}
      {isSubcategoryView && (
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
      )}

      {/* Tabs hiển thị ở trang gốc và trang danh mục */}
      {(isRootView || (isSubcategoryView && filteredExercises.length > 0)) && (
        <Tabs defaultValue="all" onValueChange={setActiveTab} className="mb-6">
          <TabsList>
            <TabsTrigger value="all">Tất cả</TabsTrigger>
            <TabsTrigger value="algebra">Đại số</TabsTrigger>
            <TabsTrigger value="geometry">Hình học</TabsTrigger>
            <TabsTrigger value="statistics">Thống kê</TabsTrigger>
          </TabsList>
        </Tabs>
      )}

      {/* Show empty state if no exercises match the filters */}
      {isSubcategoryView && filteredExercises.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-500">Không tìm thấy bài tập nào phù hợp.</p>
        </div>
      ) : (
        renderContent()
      )}
    </main>
  );
};

export default Exercises;
