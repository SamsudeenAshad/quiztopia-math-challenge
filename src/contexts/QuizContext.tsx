
import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import { Question, mathQuestions } from '@/data/quizQuestions';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

interface QuizContextProps {
  questions: Question[];
  currentQuestionIndex: number;
  score: number;
  selectedAnswer: string | null;
  showResult: boolean;
  timeLeft: number;
  isQuizActive: boolean;
  quizCompleted: boolean;
  startQuiz: () => void;
  nextQuestion: () => void;
  selectAnswer: (answer: string) => void;
  restartQuiz: () => void;
  setTimeLeft: React.Dispatch<React.SetStateAction<number>>;
}

const QuizContext = createContext<QuizContextProps | undefined>(undefined);

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};

interface QuizProviderProps {
  children: ReactNode;
}

export const QuizProvider: React.FC<QuizProviderProps> = ({ children }) => {
  const [questions, setQuestions] = useState<Question[]>(mathQuestions);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isQuizActive, setIsQuizActive] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  
  const navigate = useNavigate();

  const startQuiz = useCallback(() => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setIsQuizActive(true);
    setQuizCompleted(false);
    setTimeLeft(questions[0].timeLimit);
    toast("Quiz started! Good luck!");
  }, [questions]);

  const selectAnswer = useCallback((answer: string) => {
    setSelectedAnswer(answer);
    setShowResult(true);
    
    const currentQuestion = questions[currentQuestionIndex];
    
    if (answer === currentQuestion.correctAnswer) {
      setScore(prev => prev + currentQuestion.points);
      toast.success("Correct answer! +"+currentQuestion.points+" points");
    } else {
      toast.error("Wrong answer! The correct answer is " + currentQuestion.correctAnswer);
    }
  }, [currentQuestionIndex, questions]);

  const nextQuestion = useCallback(() => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
      setTimeLeft(questions[currentQuestionIndex + 1].timeLimit);
    } else {
      setQuizCompleted(true);
      setIsQuizActive(false);
      navigate('/results', { state: { score, totalQuestions: questions.length } });
    }
  }, [currentQuestionIndex, navigate, questions, score]);

  const restartQuiz = useCallback(() => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setIsQuizActive(false);
    setQuizCompleted(false);
  }, []);

  const value = {
    questions,
    currentQuestionIndex,
    score,
    selectedAnswer,
    showResult,
    timeLeft,
    isQuizActive,
    quizCompleted,
    startQuiz,
    nextQuestion,
    selectAnswer,
    restartQuiz,
    setTimeLeft,
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
