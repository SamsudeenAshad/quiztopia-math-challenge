
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Trophy, Home, ArrowRight } from 'lucide-react';
import { useQuiz } from '@/contexts/QuizContext';

interface LocationState {
  score: number;
  totalQuestions: number;
}

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { restartQuiz } = useQuiz();
  
  const state = location.state as LocationState;
  
  // If no score data was passed, redirect to home
  useEffect(() => {
    if (!state || state.score === undefined) {
      navigate('/');
    }
  }, [state, navigate]);
  
  if (!state) {
    return null;
  }
  
  const { score, totalQuestions } = state;
  const maxScore = totalQuestions * 20; // Assuming 20 points per question max
  const percentage = Math.round((score / maxScore) * 100);
  
  const getFeedback = () => {
    if (percentage >= 90) return "Outstanding! You've mastered these math concepts!";
    if (percentage >= 70) return "Great job! You have a strong understanding of the material.";
    if (percentage >= 50) return "Good effort! With a bit more practice, you'll improve quickly.";
    return "Keep practicing! Math skills develop with consistent effort.";
  };
  
  const getScoreColorClass = () => {
    if (percentage >= 90) return "text-green-600";
    if (percentage >= 70) return "text-blue-600";
    if (percentage >= 50) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8 flex items-center justify-center">
        <Card className="w-full max-w-2xl border-2 border-primary/20 shadow-lg p-8 animate-scale-in">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <Trophy className="h-16 w-16 text-primary" />
            </div>
            <h1 className="text-3xl font-bold mb-2">Quiz Completed!</h1>
            <p className="text-gray-600">{getFeedback()}</p>
          </div>
          
          <div className="flex justify-center items-center mb-8">
            <div className="text-center">
              <p className="text-gray-600 mb-1">Your Score:</p>
              <p className={`text-4xl font-bold ${getScoreColorClass()}`}>
                {score} / {maxScore}
              </p>
              <p className={`text-xl font-semibold ${getScoreColorClass()}`}>
                {percentage}%
              </p>
            </div>
          </div>
          
          <div className="flex justify-center gap-4">
            <Button onClick={() => navigate('/')} variant="outline" className="gap-2">
              <Home className="h-4 w-4" />
              Home
            </Button>
            <Button onClick={() => {
              restartQuiz();
              navigate('/');
            }} className="gap-2">
              Try Again
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default Results;
