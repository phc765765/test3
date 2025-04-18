// Define types for the curriculum
export interface Lesson {
  id: number;
  title: string;
  description?: string;
  status: 'completed' | 'current' | 'available' | 'locked';
  content?: string;
}

export interface Chapter {
  id: number;
  title: string;
  description?: string;
  duration: string;
  type: 'algebra' | 'geometry' | 'statistics';
  color: string;
  lessons: Lesson[];
}

export interface Exercise {
  id: number;
  title: string;
  description: string;
  category: 'algebra' | 'geometry' | 'statistics';
  difficulty: 'easy' | 'medium' | 'hard';
  questionsCount: number;
}

export interface QuizResult {
  score: number;
  total: number;
  percentage: number;
}

export interface Quiz {
  id: number;
  title: string;
  description: string;
  category: 'algebra' | 'geometry' | 'statistics' | 'all';
  type: 'midterm' | 'final' | 'short' | 'test' | 'practice';
  duration: number;
  questionsCount: number;
  status: 'upcoming' | 'available' | 'completed';
  deadline?: string;
  availableUntil?: string;
  result?: QuizResult;
}

export interface StudyMaterial {
  id: number;
  title: string;
  description: string;
  type: 'theory' | 'guide' | 'exercise';
  category: 'algebra' | 'geometry' | 'statistics';
  dateAdded: string;
  downloadCount: number;
  fileUrl?: string;
}

export interface FormulaItem {
  formula: string;
  description: string;
}

export interface FormulaSection {
  section: string;
  items: FormulaItem[];
}

// Define types for progress tracking
export interface ProgressItem {
  id: number;
  title: string;
  description: string;
  progress: number;
  category: string;
  categoryColor: string;
  icon: React.ReactNode;
  link: string;
}
