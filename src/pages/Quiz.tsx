
import React, { useEffect, useRef } from 'react';
import Header from '@/components/Header';
import QuizCard from '@/components/QuizCard';
import QuizProgress from '@/components/QuizProgress';
import { Button } from '@/components/ui/button';
import { useQuiz } from '@/contexts/QuizContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const Quiz = () => {
  const {
    questions,
    currentQuestionIndex,
    score,
    selectedAnswer,
    showResult,
    timeLeft,
    isQuizActive,
    quizCompleted,
    selectAnswer,
    nextQuestion,
    setTimeLeft,
  } = useQuiz();
  
  const navigate = useNavigate();
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  
  const currentQuestion = questions[currentQuestionIndex];
  
  useEffect(() => {
    // Redirect to home if quiz isn't active
    if (!isQuizActive && !quizCompleted) {
      navigate('/');
      return;
    }

    // Timer logic
    if (!showResult && isQuizActive) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current!);
            toast.error("Time's up!");
            selectAnswer(""); // Submit empty answer when time's up
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [showResult, isQuizActive, navigate, quizCompleted, selectAnswer, setTimeLeft]);

  if (!currentQuestion) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <p>Loading quiz...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-8">
          <QuizProgress 
            currentQuestion={currentQuestionIndex + 1}
            totalQuestions={questions.length}
            score={score}
          />
          
          <QuizCard
            question={currentQuestion.question}
            options={currentQuestion.options}
            correctAnswer={currentQuestion.correctAnswer}
            onSelectAnswer={selectAnswer}
            selectedAnswer={selectedAnswer}
            showResult={showResult}
            timeLeft={timeLeft}
          />
          
          {showResult && (
            <Button 
              size="lg"
              onClick={nextQuestion}
              className="animate-scale-in"
            >
              {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'See Results'}
            </Button>
          )}
        </div>
      </main>
    </div>
  );
};

export default Quiz;
