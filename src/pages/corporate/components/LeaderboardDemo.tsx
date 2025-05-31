import React from 'react';

const LeaderboardDemo: React.FC = () => {
  // Sample leaderboard data
  const leaderboardData = [
    { rank: 1, name: 'Team Alpha', score: 95 },
    { rank: 2, name: 'Team Beta', score: 88 },
    { rank: 3, name: 'Team Gamma', score: 76 },
    { rank: 4, name: 'Team Delta', score: 72 },
    { rank: 5, name: 'Team Epsilon', score: 65 },
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-4">Leaderboard</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b">
              <th className="py-2 px-4 text-left">Rank</th>
              <th className="py-2 px-4 text-left">Team</th>
              <th className="py-2 px-4 text-right">Score</th>
            </tr>
          </thead>
          <tbody>
            {leaderboardData.map((item) => (
              <tr key={item.rank} className="border-b hover:bg-gray-50">
                <td className="py-2 px-4">{item.rank}</td>
                <td className="py-2 px-4">{item.name}</td>
                <td className="py-2 px-4 text-right">{item.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaderboardDemo;