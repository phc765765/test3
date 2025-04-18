import { 
  users, type User, type InsertUser,
  chapters, type Chapter, type InsertChapter,
  lessons, type Lesson, type InsertLesson,
  userProgress, type UserProgress, type InsertUserProgress,
  exercises, type Exercise, type InsertExercise,
  materials, type Material, type InsertMaterial,
  quizzes, type Quiz, type InsertQuiz,
  quizResults, type QuizResult, type InsertQuizResult
} from "@shared/schema";

// Interface for storage operations
export interface IStorage {
  // User operations
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Chapter operations
  getChapters(): Promise<Chapter[]>;
  getChaptersBySemester(semesterId: number): Promise<Chapter[]>;
  getChaptersByType(type: string): Promise<Chapter[]>;
  getChapter(id: number): Promise<Chapter | undefined>;
  createChapter(chapter: InsertChapter): Promise<Chapter>;
  
  // Lesson operations
  getLessons(): Promise<Lesson[]>;
  getLessonsByChapter(chapterId: number): Promise<Lesson[]>;
  getLesson(id: number): Promise<Lesson | undefined>;
  createLesson(lesson: InsertLesson): Promise<Lesson>;
  
  // UserProgress operations
  getUserProgress(userId: number): Promise<UserProgress[]>;
  getUserLessonProgress(userId: number, lessonId: number): Promise<UserProgress | undefined>;
  createOrUpdateUserProgress(progress: InsertUserProgress): Promise<UserProgress>;
  
  // Exercise operations
  getExercises(): Promise<Exercise[]>;
  getExercisesByCategory(category: string): Promise<Exercise[]>;
  getExercisesByDifficulty(difficulty: string): Promise<Exercise[]>;
  getExercise(id: number): Promise<Exercise | undefined>;
  createExercise(exercise: InsertExercise): Promise<Exercise>;
  
  // Material operations
  getMaterials(): Promise<Material[]>;
  getMaterialsByCategory(category: string): Promise<Material[]>;
  getMaterialsByType(type: string): Promise<Material[]>;
  getMaterial(id: number): Promise<Material | undefined>;
  createMaterial(material: InsertMaterial): Promise<Material>;
  incrementDownloadCount(id: number): Promise<void>;
  
  // Quiz operations
  getQuizzes(): Promise<Quiz[]>;
  getQuizzesByCategory(category: string): Promise<Quiz[]>;
  getQuizzesByType(type: string): Promise<Quiz[]>;
  getAvailableQuizzes(): Promise<Quiz[]>;
  getQuiz(id: number): Promise<Quiz | undefined>;
  createQuiz(quiz: InsertQuiz): Promise<Quiz>;
  
  // QuizResult operations
  getQuizResults(userId: number): Promise<QuizResult[]>;
  getUserQuizResult(userId: number, quizId: number): Promise<QuizResult | undefined>;
  createQuizResult(result: InsertQuizResult): Promise<QuizResult>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private chapters: Map<number, Chapter>;
  private lessons: Map<number, Lesson>;
  private userProgress: Map<number, UserProgress>;
  private exercises: Map<number, Exercise>;
  private materials: Map<number, Material>;
  private quizzes: Map<number, Quiz>;
  private quizResults: Map<number, QuizResult>;
  
  private userId: number;
  private chapterId: number;
  private lessonId: number;
  private progressId: number;
  private exerciseId: number;
  private materialId: number;
  private quizId: number;
  private quizResultId: number;

  constructor() {
    this.users = new Map();
    this.chapters = new Map();
    this.lessons = new Map();
    this.userProgress = new Map();
    this.exercises = new Map();
    this.materials = new Map();
    this.quizzes = new Map();
    this.quizResults = new Map();
    
    this.userId = 1;
    this.chapterId = 1;
    this.lessonId = 1;
    this.progressId = 1;
    this.exerciseId = 1;
    this.materialId = 1;
    this.quizId = 1;
    this.quizResultId = 1;
    
    // Initialize with sample data
    this.initializeData();
  }

  // User operations
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username
    );
  }
  
  async getUserByEmail(email: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.email === email
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userId++;
    const now = new Date();
    const user: User = { 
      ...insertUser, 
      id,
      createdAt: now 
    };
    this.users.set(id, user);
    return user;
  }

  // Chapter operations
  async getChapters(): Promise<Chapter[]> {
    return Array.from(this.chapters.values()).sort((a, b) => a.order - b.order);
  }

  async getChaptersBySemester(semesterId: number): Promise<Chapter[]> {
    return Array.from(this.chapters.values())
      .filter(chapter => chapter.semesterId === semesterId)
      .sort((a, b) => a.order - b.order);
  }

  async getChaptersByType(type: string): Promise<Chapter[]> {
    return Array.from(this.chapters.values())
      .filter(chapter => chapter.type === type)
      .sort((a, b) => a.order - b.order);
  }

  async getChapter(id: number): Promise<Chapter | undefined> {
    return this.chapters.get(id);
  }

  async createChapter(insertChapter: InsertChapter): Promise<Chapter> {
    const id = this.chapterId++;
    const chapter: Chapter = { ...insertChapter, id };
    this.chapters.set(id, chapter);
    return chapter;
  }

  // Lesson operations
  async getLessons(): Promise<Lesson[]> {
    return Array.from(this.lessons.values()).sort((a, b) => a.order - b.order);
  }

  async getLessonsByChapter(chapterId: number): Promise<Lesson[]> {
    return Array.from(this.lessons.values())
      .filter(lesson => lesson.chapterId === chapterId)
      .sort((a, b) => a.order - b.order);
  }

  async getLesson(id: number): Promise<Lesson | undefined> {
    return this.lessons.get(id);
  }

  async createLesson(insertLesson: InsertLesson): Promise<Lesson> {
    const id = this.lessonId++;
    const lesson: Lesson = { ...insertLesson, id };
    this.lessons.set(id, lesson);
    return lesson;
  }

  // UserProgress operations
  async getUserProgress(userId: number): Promise<UserProgress[]> {
    return Array.from(this.userProgress.values())
      .filter(progress => progress.userId === userId);
  }

  async getUserLessonProgress(userId: number, lessonId: number): Promise<UserProgress | undefined> {
    return Array.from(this.userProgress.values())
      .find(progress => progress.userId === userId && progress.lessonId === lessonId);
  }

  async createOrUpdateUserProgress(insertProgress: InsertUserProgress): Promise<UserProgress> {
    // Check if progress already exists
    const existingProgress = await this.getUserLessonProgress(
      insertProgress.userId,
      insertProgress.lessonId
    );

    if (existingProgress) {
      // Update existing progress
      const updatedProgress: UserProgress = {
        ...existingProgress,
        ...insertProgress,
        lastAccessed: new Date()
      };
      this.userProgress.set(existingProgress.id, updatedProgress);
      return updatedProgress;
    } else {
      // Create new progress
      const id = this.progressId++;
      const now = new Date();
      const progress: UserProgress = {
        ...insertProgress,
        id,
        lastAccessed: now
      };
      this.userProgress.set(id, progress);
      return progress;
    }
  }

  // Exercise operations
  async getExercises(): Promise<Exercise[]> {
    return Array.from(this.exercises.values());
  }

  async getExercisesByCategory(category: string): Promise<Exercise[]> {
    return Array.from(this.exercises.values())
      .filter(exercise => exercise.category === category);
  }

  async getExercisesByDifficulty(difficulty: string): Promise<Exercise[]> {
    return Array.from(this.exercises.values())
      .filter(exercise => exercise.difficulty === difficulty);
  }

  async getExercise(id: number): Promise<Exercise | undefined> {
    return this.exercises.get(id);
  }

  async createExercise(insertExercise: InsertExercise): Promise<Exercise> {
    const id = this.exerciseId++;
    const exercise: Exercise = { ...insertExercise, id };
    this.exercises.set(id, exercise);
    return exercise;
  }

  // Material operations
  async getMaterials(): Promise<Material[]> {
    return Array.from(this.materials.values())
      .sort((a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime());
  }

  async getMaterialsByCategory(category: string): Promise<Material[]> {
    return Array.from(this.materials.values())
      .filter(material => material.category === category)
      .sort((a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime());
  }

  async getMaterialsByType(type: string): Promise<Material[]> {
    return Array.from(this.materials.values())
      .filter(material => material.type === type)
      .sort((a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime());
  }

  async getMaterial(id: number): Promise<Material | undefined> {
    return this.materials.get(id);
  }

  async createMaterial(insertMaterial: InsertMaterial): Promise<Material> {
    const id = this.materialId++;
    const now = new Date();
    const material: Material = {
      ...insertMaterial,
      id,
      dateAdded: now,
      downloadCount: 0
    };
    this.materials.set(id, material);
    return material;
  }

  async incrementDownloadCount(id: number): Promise<void> {
    const material = this.materials.get(id);
    if (material) {
      material.downloadCount += 1;
      this.materials.set(id, material);
    }
  }

  // Quiz operations
  async getQuizzes(): Promise<Quiz[]> {
    return Array.from(this.quizzes.values());
  }

  async getQuizzesByCategory(category: string): Promise<Quiz[]> {
    return Array.from(this.quizzes.values())
      .filter(quiz => quiz.category === category);
  }

  async getQuizzesByType(type: string): Promise<Quiz[]> {
    return Array.from(this.quizzes.values())
      .filter(quiz => quiz.type === type);
  }

  async getAvailableQuizzes(): Promise<Quiz[]> {
    const now = new Date();
    return Array.from(this.quizzes.values())
      .filter(quiz => {
        const availableFrom = quiz.availableFrom ? new Date(quiz.availableFrom) : null;
        const availableUntil = quiz.availableUntil ? new Date(quiz.availableUntil) : null;
        
        return (!availableFrom || availableFrom <= now) &&
               (!availableUntil || availableUntil >= now);
      });
  }

  async getQuiz(id: number): Promise<Quiz | undefined> {
    return this.quizzes.get(id);
  }

  async createQuiz(insertQuiz: InsertQuiz): Promise<Quiz> {
    const id = this.quizId++;
    const quiz: Quiz = { ...insertQuiz, id };
    this.quizzes.set(id, quiz);
    return quiz;
  }

  // QuizResult operations
  async getQuizResults(userId: number): Promise<QuizResult[]> {
    return Array.from(this.quizResults.values())
      .filter(result => result.userId === userId)
      .sort((a, b) => new Date(b.completed).getTime() - new Date(a.completed).getTime());
  }

  async getUserQuizResult(userId: number, quizId: number): Promise<QuizResult | undefined> {
    return Array.from(this.quizResults.values())
      .find(result => result.userId === userId && result.quizId === quizId);
  }

  async createQuizResult(insertResult: InsertQuizResult): Promise<QuizResult> {
    const id = this.quizResultId++;
    const now = new Date();
    const result: QuizResult = {
      ...insertResult,
      id,
      completed: now
    };
    this.quizResults.set(id, result);
    return result;
  }

  // Initialize data
  private initializeData() {
    // Initialize chapters for semester 1
    const chapter1: Chapter = {
      id: this.chapterId++,
      title: "Biểu thức đại số",
      description: "Học về đa thức nhiều biến, các phép toán, hằng đẳng thức và phân tích thành nhân tử",
      duration: "29 tiết",
      semesterId: 1,
      type: "algebra",
      order: 1
    };
    this.chapters.set(chapter1.id, chapter1);

    const chapter2: Chapter = {
      id: this.chapterId++,
      title: "Các hình khối trong thực tiễn",
      description: "Học về hình chóp tam giác đều và tứ giác đều",
      duration: "8 tiết",
      semesterId: 1,
      type: "geometry",
      order: 2
    };
    this.chapters.set(chapter2.id, chapter2);

    const chapter3: Chapter = {
      id: this.chapterId++,
      title: "Một số yếu tố thống kê",
      description: "Học về thu thập, phân loại và phân tích dữ liệu",
      duration: "12 tiết",
      semesterId: 1,
      type: "statistics",
      order: 3
    };
    this.chapters.set(chapter3.id, chapter3);

    // Initialize chapters for semester 2
    const chapter4: Chapter = {
      id: this.chapterId++,
      title: "Hàm số và đồ thị",
      description: "Học về khái niệm hàm số, tọa độ và đồ thị",
      duration: "20 tiết",
      semesterId: 2,
      type: "algebra",
      order: 1
    };
    this.chapters.set(chapter4.id, chapter4);

    const chapter5: Chapter = {
      id: this.chapterId++,
      title: "Phương trình",
      description: "Học về phương trình bậc nhất một ẩn và ứng dụng",
      duration: "14 tiết",
      semesterId: 2,
      type: "algebra",
      order: 2
    };
    this.chapters.set(chapter5.id, chapter5);

    const chapter6: Chapter = {
      id: this.chapterId++,
      title: "Hình đồng dạng",
      description: "Học về tam giác đồng dạng và các trường hợp đồng dạng",
      duration: "18 tiết",
      semesterId: 2,
      type: "geometry",
      order: 3
    };
    this.chapters.set(chapter6.id, chapter6);

    // Initialize lessons for chapter 1
    const lessons1 = [
      { title: "Đơn thức và đa thức nhiều biến", order: 1 },
      { title: "Các phép toán với đa thức nhiều biến", order: 2 },
      { title: "Hằng đẳng thức đáng nhớ", order: 3 },
      { title: "Phân tích đa thức thành nhân tử", order: 4 },
      { title: "Phân thức đại số", order: 5 },
      { title: "Cộng, trừ phân thức", order: 6 },
      { title: "Nhân, chia phân thức", order: 7 },
      { title: "Kiểm tra giữa kỳ", order: 8 }
    ];

    lessons1.forEach(lesson => {
      const lessonObj: Lesson = {
        id: this.lessonId++,
        title: lesson.title,
        description: `Bài học về ${lesson.title.toLowerCase()}`,
        content: `Nội dung chi tiết về ${lesson.title.toLowerCase()} sẽ được cung cấp ở đây.`,
        chapterId: chapter1.id,
        order: lesson.order
      };
      this.lessons.set(lessonObj.id, lessonObj);
    });

    // Initialize lessons for chapter 2
    const lessons2 = [
      { title: "Hình chóp tam giác đều", order: 1 },
      { title: "Hình chóp tứ giác đều", order: 2 },
      { title: "Diện tích xung quanh và thể tích của các hình chóp", order: 3 }
    ];

    lessons2.forEach(lesson => {
      const lessonObj: Lesson = {
        id: this.lessonId++,
        title: lesson.title,
        description: `Bài học về ${lesson.title.toLowerCase()}`,
        content: `Nội dung chi tiết về ${lesson.title.toLowerCase()} sẽ được cung cấp ở đây.`,
        chapterId: chapter2.id,
        order: lesson.order
      };
      this.lessons.set(lessonObj.id, lessonObj);
    });

    // Initialize lessons for chapter 3
    const lessons3 = [
      { title: "Thu thập và phân loại dữ liệu", order: 1 },
      { title: "Lựa chọn dạng biểu đồ", order: 2 },
      { title: "Phân tích dữ liệu", order: 3 }
    ];

    lessons3.forEach(lesson => {
      const lessonObj: Lesson = {
        id: this.lessonId++,
        title: lesson.title,
        description: `Bài học về ${lesson.title.toLowerCase()}`,
        content: `Nội dung chi tiết về ${lesson.title.toLowerCase()} sẽ được cung cấp ở đây.`,
        chapterId: chapter3.id,
        order: lesson.order
      };
      this.lessons.set(lessonObj.id, lessonObj);
    });

    // Initialize exercises
    const exercisesData = [
      {
        title: "Rút gọn biểu thức đại số",
        description: "Thực hành rút gọn các biểu thức đại số phức tạp",
        category: "algebra",
        difficulty: "medium",
        questionsCount: 15
      },
      {
        title: "Phân tích thành nhân tử",
        description: "Bài tập về phân tích đa thức thành nhân tử bằng các phương pháp cơ bản",
        category: "algebra",
        difficulty: "easy",
        questionsCount: 10
      },
      {
        title: "Phân thức đại số và rút gọn",
        description: "Thực hành rút gọn các phân thức đại số phức tạp",
        category: "algebra",
        difficulty: "hard",
        questionsCount: 12
      },
      {
        title: "Tính diện tích xung quanh hình chóp",
        description: "Bài tập về tính diện tích xung quanh của hình chóp đều",
        category: "geometry",
        difficulty: "hard",
        questionsCount: 8
      },
      {
        title: "Tính thể tích hình chóp",
        description: "Bài tập về tính thể tích của hình chóp với các dạng khác nhau",
        category: "geometry",
        difficulty: "medium",
        questionsCount: 10
      },
      {
        title: "Vẽ biểu đồ từ bảng số liệu",
        description: "Thực hành vẽ các loại biểu đồ từ số liệu thống kê cho trước",
        category: "statistics",
        difficulty: "easy",
        questionsCount: 5
      },
      {
        title: "Phân tích dữ liệu thống kê",
        description: "Bài tập phân tích và diễn giải dữ liệu từ các biểu đồ",
        category: "statistics",
        difficulty: "medium",
        questionsCount: 7
      }
    ];

    exercisesData.forEach(exercise => {
      const exerciseObj: Exercise = {
        id: this.exerciseId++,
        ...exercise
      };
      this.exercises.set(exerciseObj.id, exerciseObj);
    });

    // Initialize materials
    const materialsData = [
      {
        title: "Tài liệu biểu thức đại số",
        description: "Tổng hợp kiến thức về đơn thức, đa thức và phép toán",
        type: "theory",
        category: "algebra",
        fileUrl: "/files/dai-so-bieu-thuc.pdf",
        dateAdded: new Date("2023-08-15"),
        downloadCount: 245
      },
      {
        title: "Ôn tập phân tích đa thức thành nhân tử",
        description: "Hướng dẫn chi tiết các phương pháp phân tích đa thức",
        type: "guide",
        category: "algebra",
        fileUrl: "/files/phan-tich-nhan-tu.pdf",
        dateAdded: new Date("2023-08-20"),
        downloadCount: 189
      },
      {
        title: "Các dạng bài tập về phân thức đại số",
        description: "Tổng hợp các dạng bài tập và phương pháp giải",
        type: "exercise",
        category: "algebra",
        fileUrl: "/files/bai-tap-phan-thuc.pdf",
        dateAdded: new Date("2023-09-01"),
        downloadCount: 321
      },
      {
        title: "Hình chóp và tính chất",
        description: "Tài liệu tổng hợp về hình chóp tam giác đều và tứ giác đều",
        type: "theory",
        category: "geometry",
        fileUrl: "/files/hinh-chop.pdf",
        dateAdded: new Date("2023-09-10"),
        downloadCount: 156
      },
      {
        title: "Bài tập tính diện tích và thể tích hình chóp",
        description: "Bài tập từ cơ bản đến nâng cao về hình chóp",
        type: "exercise",
        category: "geometry",
        fileUrl: "/files/bai-tap-hinh-chop.pdf",
        dateAdded: new Date("2023-09-15"),
        downloadCount: 203
      },
      {
        title: "Tổng hợp kiến thức thống kê",
        description: "Tổng hợp kiến thức về thu thập dữ liệu và các biểu đồ thống kê",
        type: "theory",
        category: "statistics",
        fileUrl: "/files/thong-ke.pdf",
        dateAdded: new Date("2023-09-25"),
        downloadCount: 178
      }
    ];

    materialsData.forEach(material => {
      const materialObj: Material = {
        id: this.materialId++,
        ...material
      };
      this.materials.set(materialObj.id, materialObj);
    });

    // Initialize quizzes
    const now = new Date();
    const nextMonth = new Date(now);
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    
    const lastWeek = new Date(now);
    lastWeek.setDate(lastWeek.getDate() - 7);
    
    const nextWeek = new Date(now);
    nextWeek.setDate(nextWeek.getDate() + 7);

    const quizzesData = [
      {
        title: "Kiểm tra giữa kỳ I: Biểu thức đại số",
        description: "Kiểm tra kiến thức về đa thức, phân thức và phân tích thành nhân tử",
        category: "algebra",
        type: "midterm",
        duration: 45,
        questionsCount: 20,
        availableFrom: nextWeek,
        availableUntil: nextMonth
      },
      {
        title: "Kiểm tra 15 phút: Phân thức đại số",
        description: "Bài kiểm tra ngắn về rút gọn phân thức đại số",
        category: "algebra",
        type: "short",
        duration: 15,
        questionsCount: 5,
        availableFrom: lastWeek,
        availableUntil: nextWeek
      },
      {
        title: "Kiểm tra 1 tiết: Hình chóp",
        description: "Kiểm tra kiến thức về hình chóp tam giác đều và tứ giác đều",
        category: "geometry",
        type: "test",
        duration: 45,
        questionsCount: 15,
        availableFrom: lastWeek,
        availableUntil: nextWeek
      },
      {
        title: "Kiểm tra ngắn: Thu thập dữ liệu",
        description: "Bài kiểm tra về phương pháp thu thập và phân loại dữ liệu",
        category: "statistics",
        type: "short",
        duration: 20,
        questionsCount: 8,
        availableFrom: lastWeek,
        availableUntil: nextWeek
      },
      {
        title: "Kiểm tra thử: Ôn tập Học kỳ I",
        description: "Bài kiểm tra thử để ôn tập toàn bộ kiến thức Học kỳ I",
        category: "all",
        type: "practice",
        duration: 60,
        questionsCount: 30,
        availableFrom: lastWeek,
        availableUntil: nextMonth
      }
    ];

    quizzesData.forEach(quiz => {
      const quizObj: Quiz = {
        id: this.quizId++,
        ...quiz
      };
      this.quizzes.set(quizObj.id, quizObj);
    });
  }
}

export const storage = new MemStorage();
