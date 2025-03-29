
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, XCircle } from 'lucide-react';

interface QuizCardProps {
  question: string;
  options: string[];
  correctAnswer: string;
  onSelectAnswer: (answer: string) => void;
  selectedAnswer: string | null;
  showResult: boolean;
  timeLeft: number;
}

const QuizCard: React.FC<QuizCardProps> = ({
  question,
  options,
  correctAnswer,
  onSelectAnswer,
  selectedAnswer,
  showResult,
  timeLeft,
}) => {
  const getAnswerCardClass = (option: string) => {
    if (!showResult || selectedAnswer !== option) return "answer-card";
    
    if (option === correctAnswer) {
      return "answer-card correct-answer";
    }
    
    if (selectedAnswer === option && option !== correctAnswer) {
      return "answer-card wrong-answer";
    }
    
    return "answer-card";
  };

  return (
    <Card className="w-full max-w-3xl shadow-lg border-2 border-primary/20 overflow-hidden">
      <div className="bg-primary/10 p-4 flex justify-between items-center">
        <h3 className="text-lg font-medium">Question</h3>
        <div className="text-sm font-medium px-3 py-1 rounded-full bg-primary/20">
          Time left: {timeLeft}s
        </div>
      </div>
      <CardContent className="p-6">
        <div className="text-2xl font-bold mb-8 text-center">{question}</div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {options.map((option, index) => (
            <Button
              key={index}
              variant="outline"
              className={`p-4 h-auto text-lg flex items-center justify-between ${getAnswerCardClass(option)}`}
              onClick={() => !showResult && onSelectAnswer(option)}
              disabled={showResult}
            >
              <span>{option}</span>
              {showResult && option === correctAnswer && (
                <CheckCircle className="h-5 w-5 text-green-500" />
              )}
              {showResult && selectedAnswer === option && option !== correctAnswer && (
                <XCircle className="h-5 w-5 text-red-500" />
              )}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuizCard;
