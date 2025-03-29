
import React from 'react';
import { Calculator } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="border-b bg-white/90 backdrop-blur-sm sticky top-0 z-10">
      <div className="container mx-auto py-4 px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <Calculator className="h-6 w-6 text-primary" />
          <h1 className="text-xl font-bold bg-clip-text text-transparent mathquiz-gradient">
            QuizTopia: Math Challenge
          </h1>
        </Link>
        <nav>
          <ul className="flex gap-6">
            <li>
              <Link to="/" className="text-gray-600 hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/leaderboard" className="text-gray-600 hover:text-primary transition-colors">
                Leaderboard
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
