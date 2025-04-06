import React from 'react';
import { Trophy, SquareCheck, Zap, Leaf, Database, Rocket } from 'lucide-react';

const GameElements = () => {
  const achievements = [
    { name: 'Resource Optimizer', progress: 85, icon: <Zap className="h-4 w-4" /> },
    { name: 'Green Cloud Pioneer', progress: 70, icon: <Leaf className="h-4 w-4" /> },
    { name: 'Scale Master', progress: 60, icon: <Database className="h-4 w-4" /> },
  ];

  const leaderboard = [
    { name: 'Team Alpha', score: 9452, position: 1 },
    { name: 'CloudNinjas', score: 8721, position: 2 },
    { name: 'GreenDevs', score: 8340, position: 3 },
  ];

  const badges = [
    { name: 'Energy Saver', color: 'bg-green-500' },
    { name: 'Scale Expert', color: 'bg-blue-500' },
    { name: 'Optimization Guru', color: 'bg-purple-500' },
  ];

  return (
    <div className="glass-panel p-6">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
        <Trophy className="mr-2 text-yellow-500" />
        Gamification Layer
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Achievements */}
        <div className="glass-panel p-4">
          <h3 className="text-lg font-medium text-white mb-3 flex items-center">
            <SquareCheck className="mr-2 text-aether-blue-light h-5 w-5" /> Achievements
          </h3>
          
          <div className="space-y-4">
            {achievements.map((achievement) => (
              <div key={achievement.name} className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center">
                    <span className="text-aether-blue mr-1">{achievement.icon}</span>
                    <span className="text-white">{achievement.name}</span>
                  </div>
                  <span className="text-aether-gray">{achievement.progress}%</span>
                </div>
                <div className="h-1.5 bg-aether-gray bg-opacity-20 rounded-full">
                  <div 
                    className="h-1.5 bg-aether-blue rounded-full" 
                    style={{ width: `${achievement.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leaderboard */}
        <div className="glass-panel p-4">
          <h3 className="text-lg font-medium text-white mb-3 flex items-center">
            <Trophy className="mr-2 text-yellow-500 h-5 w-5" /> Leaderboard
          </h3>
          
          <div className="space-y-3">
            {leaderboard.map((team) => (
              <div key={team.name} className="flex items-center justify-between py-1">
                <div className="flex items-center">
                  <div className={`h-5 w-5 rounded-full flex items-center justify-center text-xs font-medium ${
                    team.position === 1 ? 'bg-yellow-500' : 
                    team.position === 2 ? 'bg-gray-400' : 
                    'bg-amber-700'
                  } text-white mr-2`}>
                    {team.position}
                  </div>
                  <span className="text-sm text-white">{team.name}</span>
                </div>
                <span className="text-sm font-medium text-aether-blue">{team.score}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Badges */}
        <div className="glass-panel p-4">
          <h3 className="text-lg font-medium text-white mb-3">Badges</h3>
          
          <div className="flex flex-wrap gap-3">
            {badges.map((badge, index) => (
              <div 
                key={badge.name} 
                className="relative group"
              >
                <div 
                  className={`h-14 w-14 rounded-full ${badge.color} bg-opacity-80 flex items-center justify-center animate-float`}
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  {index === 0 && <Leaf className="h-6 w-6 text-white" />}
                  {index === 1 && <Rocket className="h-6 w-6 text-white" />}
                  {index === 2 && <Zap className="h-6 w-6 text-white" />}
                </div>
                <div className="absolute opacity-0 group-hover:opacity-100 bottom-full left-1/2 transform -translate-x-1/2 -translate-y-1 bg-black bg-opacity-80 text-white text-xs rounded px-2 py-1 transition-opacity duration-300">
                  {badge.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameElements;
