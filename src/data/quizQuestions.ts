
export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  difficulty: 'easy' | 'medium' | 'hard';
  category: 'arithmetic' | 'algebra' | 'geometry' | 'statistics';
  timeLimit: number;
  points: number;
}

export const mathQuestions: Question[] = [
  {
    id: 1,
    question: "What is the result of 28 × 13?",
    options: ["364", "284", "301", "341"],
    correctAnswer: "364",
    difficulty: "easy",
    category: "arithmetic",
    timeLimit: 20,
    points: 10,
  },
  {
    id: 2,
    question: "Solve for x: 3x + 7 = 22",
    options: ["5", "6", "5.5", "4"],
    correctAnswer: "5",
    difficulty: "easy",
    category: "algebra",
    timeLimit: 25,
    points: 10,
  },
  {
    id: 3,
    question: "What is the area of a circle with radius 7cm? (Use π = 3.14)",
    options: ["153.86 cm²", "43.96 cm²", "21.98 cm²", "307.72 cm²"],
    correctAnswer: "153.86 cm²",
    difficulty: "medium",
    category: "geometry",
    timeLimit: 30,
    points: 15,
  },
  {
    id: 4,
    question: "What is the median of the numbers 4, 7, 1, 9, 2?",
    options: ["4", "7", "4.6", "5"],
    correctAnswer: "4",
    difficulty: "easy",
    category: "statistics",
    timeLimit: 25,
    points: 10,
  },
  {
    id: 5,
    question: "Simplify: (2x³y²)⁴ ÷ (4x⁶y⁵)",
    options: ["x⁶y³", "4x⁶y³", "2x⁶y³", "8x⁶y³"],
    correctAnswer: "4x⁶y³",
    difficulty: "hard",
    category: "algebra",
    timeLimit: 40,
    points: 20,
  },
  {
    id: 6,
    question: "What is the sum of the interior angles of a hexagon?",
    options: ["540°", "720°", "900°", "1080°"],
    correctAnswer: "720°",
    difficulty: "medium",
    category: "geometry",
    timeLimit: 30,
    points: 15,
  },
  {
    id: 7,
    question: "If a car travels at 60 mph, how many miles will it travel in 3.5 hours?",
    options: ["180", "210", "200", "240"],
    correctAnswer: "210",
    difficulty: "easy",
    category: "arithmetic",
    timeLimit: 20,
    points: 10,
  },
  {
    id: 8,
    question: "What is the standard deviation of the numbers 2, 4, 6, 8, 10?",
    options: ["2", "3.16", "4", "10"],
    correctAnswer: "3.16",
    difficulty: "hard",
    category: "statistics",
    timeLimit: 40,
    points: 20,
  },
  {
    id: 9,
    question: "Solve for x: log₄(x) = 3",
    options: ["12", "64", "16", "81"],
    correctAnswer: "64",
    difficulty: "hard",
    category: "algebra",
    timeLimit: 40,
    points: 20,
  },
  {
    id: 10,
    question: "What is the value of √128?",
    options: ["8√2", "4√2", "8√4", "2√32"],
    correctAnswer: "8√2",
    difficulty: "medium",
    category: "arithmetic",
    timeLimit: 35,
    points: 15,
  }
];
