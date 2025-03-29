
import React from 'react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Calculator, Trophy, Clock, Award } from 'lucide-react';
import { useQuiz } from '@/contexts/QuizContext';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const { startQuiz } = useQuiz();
  const navigate = useNavigate();
  
  const handleStartQuiz = () => {
    startQuiz();
    navigate('/quiz');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <section className="py-12 sm:py-20">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 animate-fade-in">
              Welcome to <span className="bg-clip-text text-transparent mathquiz-gradient">QuizTopia</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '100ms' }}>
              Test your math skills with our challenging quizzes. Compete against others and improve your mathematical abilities.
            </p>
            <div className="mt-10 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <Button 
                onClick={handleStartQuiz}
                size="lg" 
                className="text-lg px-8 py-6"
              >
                Start Challenge
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {[
              { 
                icon: <Calculator className="h-10 w-10 text-primary" />, 
                title: "Diverse Math Topics", 
                description: "From arithmetic to algebra, geometry to statistics. Tackle a wide range of challenging math problems."
              },
              { 
                icon: <Trophy className="h-10 w-10 text-primary" />, 
                title: "Competitive Scoring", 
                description: "Earn points based on the difficulty of each question. Challenge yourself to reach the top of the leaderboard."
              },
              { 
                icon: <Clock className="h-10 w-10 text-primary" />, 
                title: "Time-based Challenges", 
                description: "Each question has a time limit. Think quickly and accurately to maximize your points."
              },
              { 
                icon: <Award className="h-10 w-10 text-primary" />, 
                title: "Skill Improvement", 
                description: "Regular practice with our quizzes will enhance your problem-solving skills and mathematical thinking."
              }
            ].map((feature, index) => (
              <Card key={index} className="border-2 border-primary/10 hover:border-primary/30 transition-all shadow-sm hover:shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      
      <footer className="bg-gray-50 border-t py-8">
        <div className="container mx-auto px-4 text-center text-gray-500">
          <p>© 2023 QuizTopia Math Challenge. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
