import React, { useState } from 'react';
import { User, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import supportgroup from '../assets/bannersupportgroup.png';

const quickLinks = [
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/1041/1041913.png',
    label: 'Be a Volunteer',
    bg: 'bg-[#fbbf24]'
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/1041/1041916.png',
    label: 'Donate Now',
    bg: 'bg-[#38bdf8]'
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
    label: 'Raise Research Application',
    bg: 'bg-[#fde047]'
  },
];

const PersonalLoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showWhatsAppButton, setShowWhatsAppButton] = useState(false);
  const navigate = useNavigate();

  const handleSingpassLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowWhatsAppButton(true);
    }, 2000);
  };

  const handleWhatsApp = () => {
    window.open('https://web.whatsapp.com/', '_blank');
    navigate('/personal-dashboard');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 font-sans">
      {/* Header */}
      <header className="z-20 flex justify-between items-center px-8 py-4 border-b border-gray-200 bg-white bg-opacity-95">
        <img src="https://www.singaporecancersociety.org.sg/images/logo.png" alt="Singapore Cancer Society" className="h-12" />
        <h1 className="text-2xl md:text-3xl font-bold text-[#2d3446] tracking-wide text-center flex-1 -ml-12">WELCOME TO SINGAPORE CANCER SOCIETY PORTAL</h1>
        <a href="#" className="text-[#2d3446] font-bold text-base whitespace-nowrap ml-8">CONTACT US</a>
      </header>
      {/* Main content area with background image */}
      <div className="relative flex-1 flex flex-col items-center w-full" style={{ minHeight: 580 }}>
        {/* Background image and overlay only for this section */}
        <div className="absolute inset-0 w-full h-[580px] z-0">
          <img
            src={supportgroup}
            alt="SCS Volunteers"
            className="w-full h-[580px] object-cover object-center opacity-80"
          />
          <div className="absolute inset-0" />
        </div>
        {/* Login Box and Quick Links */}
        <div className="relative z-10 flex flex-col items-center w-full" style={{ minHeight: 580 }}>
          {(!loading && !showWhatsAppButton) && (
            <>
              <form className="bg-white bg-opacity-95 rounded-xl shadow px-12 py-12 w-full max-w-xl mx-auto flex flex-col items-center border border-gray-200 mt-8">
                <h2 className="text-3xl font-bold text-[#2d3446] mb-8 tracking-wide">LOGIN</h2>
                {/* Username field with icon */}
                <div className="w-full mb-6 relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"><User className="w-6 h-6" /></span>
                  <input
                    type="text"
                    placeholder="User Name"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    className="w-full pl-12 pr-3 py-3 rounded border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6c3fc5] text-lg bg-white"
                  />
                </div>
                {/* Password field with icon */}
                <div className="w-full mb-6 relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"><Lock className="w-6 h-6" /></span>
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className="w-full pl-12 pr-3 py-3 rounded border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6c3fc5] text-lg bg-white"
                  />
                </div>
                {/* Data usage checkbox */}
                <div className="w-full flex items-center mb-4">
                  <input
                    type="checkbox"
                    id="agree"
                    checked={agree}
                    onChange={e => setAgree(e.target.checked)}
                    className="mr-2"
                  />
                  <label htmlFor="agree" className="text-gray-700 text-sm">I agree to the use of my personal data for login and service provision.</label>
                </div>
                {/* Singpass Login button */}
                <button
                  className="w-full bg-red-600 text-white font-bold py-3 rounded mb-1 hover:bg-red-700 transition text-lg tracking-wide disabled:opacity-50"
                  type="button"
                  disabled={!agree || loading}
                  onClick={handleSingpassLogin}
                >
                  Singpass Login
                </button>
                {/* Forgot password link right-aligned */}
                <div className="w-full flex justify-end mb-1">
                  <a href="#" className="text-[#6c3fc5] text-sm hover:underline">Forgot your password?</a>
                </div>
              </form>
              {/* Username hint below the box */}
              <div className="text-gray-600 text-sm mt-2 mb-16">username.</div>
            </>
          )}
          {showWhatsAppButton && !loading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <div className="pointer-events-auto bg-white bg-opacity-95 rounded-2xl shadow-xl px-10 py-8 max-w-md w-full flex flex-col items-center mx-auto">
                <button
                  className="bg-green-500 hover:bg-green-600 text-white font-bold px-10 py-6 rounded-xl text-2xl shadow-lg transition mb-4 flex items-center gap-3"
                  onClick={handleWhatsApp}
                >
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' fill='currentColor' className='w-8 h-8'><path d='M16 3C9.373 3 4 8.373 4 15c0 2.385.832 4.584 2.236 6.393L4 29l7.828-2.205C13.416 27.37 14.692 27.6 16 27.6c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22.6c-1.18 0-2.34-.16-3.447-.474l-.246-.07-4.65 1.308 1.242-4.37-.16-.23C6.8 19.02 6 17.06 6 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.29-7.6c-.29-.145-1.71-.844-1.974-.94-.264-.098-.456-.145-.648.146-.19.29-.744.94-.912 1.133-.168.193-.336.217-.626.072-.29-.145-1.224-.45-2.33-1.435-.861-.767-1.443-1.713-1.613-2.003-.168-.29-.018-.447.127-.592.13-.13.29-.336.435-.504.145-.168.193-.29.29-.483.096-.193.048-.362-.024-.506-.072-.145-.648-1.566-.888-2.15-.234-.563-.472-.486-.648-.495l-.553-.01c-.193 0-.506.072-.772.362-.264.29-1.01.984-1.01 2.397 0 1.413 1.034 2.775 1.178 2.967.145.193 2.037 3.11 4.938 4.24.69.297 1.228.474 1.647.606.692.22 1.322.19 1.82.115.555-.082 1.71-.698 1.953-1.372.24-.674.24-1.252.168-1.372-.072-.12-.264-.193-.553-.338z'/></svg>
                  Open WhatsApp
                </button>
              </div>
            </div>
          )}
          {/* Quick links absolutely at the bottom of the image area */}
          <div className="absolute left-0 right-0 bottom-0 flex justify-center gap-32 pb-16 -mb-[250px]">
            {quickLinks.map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className={`w-24 h-24 rounded-full flex items-center justify-center mb-3 ${item.bg}`}>
                  <img src={item.icon} alt={item.label} className="w-14 h-14 object-contain" />
                </div>
                <span className="text-[#6c3fc5] text-xl text-center whitespace-nowrap mt-2">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Loading overlay */}
        {loading && (
          <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-60">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-red-500 mb-8"></div>
            <div className="text-white text-2xl font-bold mb-2">Connecting to CARE chat bot...</div>
            <div className="text-white text-lg">Training on personal data and more...</div>
          </div>
        )}
      </div>
      {/* Footer */}
      <footer className="z-20 text-center bg-[#333] text-white text-xs py-3">
        Copyright &copy; 2025 Singapore Cancer Society. All Rights Reserved. Privacy Policy
      </footer>
    </div>
  );
};

export default PersonalLoginPage; 