
import React from 'react';
import Header from '@/components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trophy, Award, Medal } from 'lucide-react';

// Mock leaderboard data
const leaderboardData = [
  { id: 1, name: "Alex Johnson", score: 185, date: "2023-06-15" },
  { id: 2, name: "Sam Wilson", score: 170, date: "2023-06-16" },
  { id: 3, name: "Jamie Smith", score: 165, date: "2023-06-14" },
  { id: 4, name: "Casey Brown", score: 155, date: "2023-06-15" },
  { id: 5, name: "Jordan Lee", score: 150, date: "2023-06-17" },
  { id: 6, name: "Taylor Kim", score: 145, date: "2023-06-16" },
  { id: 7, name: "Morgan Chen", score: 140, date: "2023-06-15" },
  { id: 8, name: "Riley Garcia", score: 135, date: "2023-06-14" },
  { id: 9, name: "Quinn Williams", score: 130, date: "2023-06-17" },
  { id: 10, name: "Avery Martinez", score: 125, date: "2023-06-15" },
];

const Leaderboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Math Challenge Leaderboard</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our top performing math wizards. Can you make it to the top of the leaderboard?
          </p>
        </div>
        
        <Card className="border-2 border-primary/20 shadow-lg overflow-hidden">
          <CardHeader className="bg-primary/10">
            <CardTitle className="text-2xl text-center">Top Performers</CardTitle>
          </CardHeader>
          
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="px-6 py-4 text-left font-medium text-gray-600">Rank</th>
                    <th className="px-6 py-4 text-left font-medium text-gray-600">Name</th>
                    <th className="px-6 py-4 text-right font-medium text-gray-600">Score</th>
                    <th className="px-6 py-4 text-right font-medium text-gray-600">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {leaderboardData.map((entry, index) => (
                    <tr 
                      key={entry.id}
                      className={`
                        border-b last:border-0 hover:bg-muted/30 transition-colors
                        ${index < 3 ? 'font-medium' : ''}
                      `}
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          {index === 0 && <Trophy className="h-5 w-5 text-yellow-500" />}
                          {index === 1 && <Award className="h-5 w-5 text-gray-400" />}
                          {index === 2 && <Medal className="h-5 w-5 text-amber-700" />}
                          <span className={index < 3 ? 'font-bold' : ''}>{index + 1}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">{entry.name}</td>
                      <td className="px-6 py-4 text-right">{entry.score}</td>
                      <td className="px-6 py-4 text-right text-gray-500">{entry.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Leaderboard;
