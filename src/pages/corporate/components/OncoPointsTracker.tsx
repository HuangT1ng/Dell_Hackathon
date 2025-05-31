import React from 'react';
import { TrendingUp, Award, Target } from 'lucide-react';

export const OncoPointsTracker: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">OncoPoints Tracker</h2>
        <div className="bg-green-100 px-4 py-2 rounded-full">
          <span className="text-green-700 font-semibold">Active</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="flex items-center gap-3">
            <TrendingUp className="text-blue-600 w-6 h-6" />
            <h3 className="text-lg font-semibold text-gray-800">Total Points</h3>
          </div>
          <p className="text-3xl font-bold text-blue-600 mt-2">2,450</p>
          <p className="text-sm text-gray-600 mt-1">+125 this month</p>
        </div>

        <div className="bg-purple-50 p-4 rounded-lg">
          <div className="flex items-center gap-3">
            <Award className="text-purple-600 w-6 h-6" />
            <h3 className="text-lg font-semibold text-gray-800">Current Rank</h3>
          </div>
          <p className="text-3xl font-bold text-purple-600 mt-2">Gold</p>
          <p className="text-sm text-gray-600 mt-1">Top 10% of users</p>
        </div>

        <div className="bg-orange-50 p-4 rounded-lg">
          <div className="flex items-center gap-3">
            <Target className="text-orange-600 w-6 h-6" />
            <h3 className="text-lg font-semibold text-gray-800">Next Milestone</h3>
          </div>
          <p className="text-3xl font-bold text-orange-600 mt-2">550</p>
          <p className="text-sm text-gray-600 mt-1">points until Platinum</p>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h3>
        <div className="space-y-3">
          {[
            { action: 'Completed Health Survey', points: '+50', date: '2 days ago' },
            { action: 'Wellness Check-in', points: '+75', date: '4 days ago' },
            { action: 'Team Challenge Completed', points: '+100', date: '1 week ago' }
          ].map((activity, index) => (
            <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100">
              <div>
                <p className="text-gray-800 font-medium">{activity.action}</p>
                <p className="text-sm text-gray-500">{activity.date}</p>
              </div>
              <span className="text-green-600 font-semibold">{activity.points}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OncoPointsTracker