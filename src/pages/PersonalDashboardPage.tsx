import React from 'react';
import { Bot, Calendar, Award, User, Stethoscope, FileText, PlusCircle, Star } from 'lucide-react';

const user = {
  name: 'Alex',
  points: 320,
  risk: 'Low',
  screenings: 3,
  nextScreening: '2024-07-15',
  appointments: [
    { date: '2024-07-15', type: 'Colorectal Screening', location: 'HealthHub Clinic' },
    { date: '2024-08-02', type: 'Follow-up', location: 'Sense Center' },
  ],
};

const iconBg = [
  'bg-orange-200',
  'bg-cyan-200',
  'bg-purple-200',
];

const PersonalDashboardPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      {/* Hero Banner */}
      <section className="w-full bg-gradient-to-r from-purple-200 via-purple-100 to-purple-200 py-12 mb-8 relative flex flex-col items-center justify-center shadow-sm">
        <div className="flex flex-col md:flex-row items-center gap-8 w-full max-w-5xl px-8">
          {/* User Avatar */}
          <div className="flex flex-col items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-white shadow-lg flex items-center justify-center border-4 border-purple-300 mb-2">
              <span className="text-4xl font-extrabold text-purple-700">A</span>
            </div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-200 text-yellow-900 font-semibold text-xs mt-2"><Star className="w-4 h-4 text-yellow-500" /> Health Champion</span>
          </div>
          {/* Welcome Message */}
          <div className="flex-1 flex flex-col items-center md:items-start">
            <h1 className="text-4xl md:text-5xl font-extrabold text-purple-900 mb-2 drop-shadow">Welcome, {user.name}!</h1>
            <p className="text-lg text-purple-800 font-medium mb-2">Your personal cancer prevention & wellness dashboard</p>
            <div className="flex gap-4 mt-4">
              <button className="bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold shadow hover:bg-purple-800 transition flex items-center gap-2 text-lg hover:scale-105"><PlusCircle className="w-6 h-6" /> Book Screening</button>
              <button className="bg-white text-purple-700 border-2 border-purple-700 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition flex items-center gap-2 text-lg hover:scale-105"><FileText className="w-6 h-6" /> View Reports</button>
            </div>
          </div>
        </div>
      </section>
      {/* Section Title */}
      <div className="container mx-auto px-8 mb-6 flex items-center gap-3">
        <Stethoscope className="w-7 h-7 text-purple-700" />
        <h2 className="text-2xl font-bold text-purple-900 tracking-tight">Your Health at a Glance</h2>
        <div className="flex-1 border-b-2 border-purple-100 ml-4" />
      </div>
      {/* Main Content */}
      <main className="container mx-auto px-8 flex-1">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Health Summary */}
          <div className="flex flex-col items-center text-center bg-gradient-to-br from-white via-purple-50 to-white rounded-2xl shadow-lg border border-purple-100 p-8 transition-transform hover:scale-105 hover:shadow-2xl">
            <div className={`mb-4 w-20 h-20 flex items-center justify-center rounded-full shadow-lg ${iconBg[0]}`}>
              <Stethoscope className="w-10 h-10 text-purple-700" />
            </div>
            <h3 className="text-2xl font-extrabold text-purple-900 mb-2">Health Summary</h3>
            <div className="text-lg text-gray-800 mb-2">Screenings completed: <span className="font-bold">{user.screenings}</span></div>
            <div className="text-lg text-gray-800 mb-2">Risk Level: <span className="font-bold">{user.risk}</span></div>
            <div className="text-lg text-gray-800">Next Screening: <span className="font-bold">{user.nextScreening}</span></div>
          </div>
          {/* Appointments */}
          <div className="flex flex-col items-center text-center bg-gradient-to-br from-white via-purple-50 to-white rounded-2xl shadow-lg border border-purple-100 p-8 transition-transform hover:scale-105 hover:shadow-2xl">
            <div className={`mb-4 w-20 h-20 flex items-center justify-center rounded-full shadow-lg ${iconBg[1]}`}>
              <Calendar className="w-10 h-10 text-purple-700" />
            </div>
            <h3 className="text-2xl font-extrabold text-purple-900 mb-2">Upcoming Appointments</h3>
            <ul className="text-gray-800 text-lg w-full">
              {user.appointments.map((appt, i) => (
                <li key={i} className="mb-2 flex flex-col border-b border-purple-100 pb-2 last:border-b-0">
                  <span className="font-semibold">{appt.type}</span>
                  <span className="text-sm">{appt.date} @ {appt.location}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Rewards/Points */}
          <div className="flex flex-col items-center text-center bg-gradient-to-br from-white via-purple-50 to-white rounded-2xl shadow-lg border border-purple-100 p-8 transition-transform hover:scale-105 hover:shadow-2xl">
            <div className={`mb-4 w-20 h-20 flex items-center justify-center rounded-full shadow-lg ${iconBg[2]}`}>
              <Award className="w-10 h-10 text-yellow-500" />
            </div>
            <h3 className="text-2xl font-extrabold text-purple-900 mb-2">Points & Rewards</h3>
            <div className="inline-block px-6 py-2 rounded-full bg-purple-700 text-white font-bold text-xl mb-3 animate-pulse">{user.points} Points</div>
            <div className="text-gray-800 text-lg mb-4">Redeem for health products, vouchers, and more!</div>
            <button className="bg-yellow-400 text-purple-900 px-6 py-2 rounded-lg font-bold shadow hover:bg-yellow-500 transition hover:scale-105">Redeem Rewards</button>
          </div>
        </div>
        {/* Section Divider */}
        <div className="flex items-center gap-3 mt-16 mb-6">
          <Calendar className="w-7 h-7 text-purple-700" />
          <h2 className="text-2xl font-bold text-purple-900 tracking-tight">Quick Actions</h2>
          <div className="flex-1 border-b-2 border-purple-100 ml-4" />
        </div>
        {/* Quick Actions */}
        <div className="flex flex-wrap justify-center gap-6 mt-2">
          <button className="bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold shadow hover:bg-purple-800 transition flex items-center gap-2 text-lg hover:scale-105"><PlusCircle className="w-6 h-6" /> Book Screening</button>
          <button className="bg-white text-purple-700 border-2 border-purple-700 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition flex items-center gap-2 text-lg hover:scale-105"><FileText className="w-6 h-6" /> View Reports</button>
        </div>
      </main>
      {/* CARE Chat Bot Floating Widget */}
      <div className="fixed bottom-8 right-8 z-50">
        <div className="bg-purple-700 rounded-full shadow-lg flex items-center gap-3 px-8 py-4 border-2 border-purple-200 hover:shadow-xl transition cursor-pointer animate-pulse hover:animate-none hover:scale-105">
          <Bot className="w-8 h-8 text-white" />
          <span className="font-bold text-white text-lg">CARE Chat Bot</span>
        </div>
      </div>
    </div>
  );
};

export default PersonalDashboardPage; 