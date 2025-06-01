import React, { useState } from 'react';
import { Mail, Share2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const iconBgColors = [
  'bg-orange-200', // Donate Now
  'bg-cyan-200',  // Ambulance
  'bg-blue-900',  // Diaper
  'bg-red-200',   // Shield
  'bg-yellow-200',// Milk
  'bg-purple-200',// Bed
  'bg-green-200', // Doctor
  'bg-blue-100',  // Credit Card
];

const iconImages = [
  // Use public domain or placeholder icons for demo
  'https://cdn-icons-png.flaticon.com/512/1041/1041916.png', // Coin hand
  'https://cdn-icons-png.flaticon.com/512/2965/2965567.png', // Ambulance
  'https://cdn-icons-png.flaticon.com/512/1041/1041911.png', // Diaper
  'https://cdn-icons-png.flaticon.com/512/1041/1041912.png', // Shield
  'https://cdn-icons-png.flaticon.com/512/1041/1041914.png', // Milk
  'https://cdn-icons-png.flaticon.com/512/1041/1041915.png', // Bed
  'https://cdn-icons-png.flaticon.com/512/1041/1041913.png', // Doctor
  'https://cdn-icons-png.flaticon.com/512/633/633611.png', // Credit Card (working)
];

const donationOptions = [
  {
    icon: '🪙',
    label: 'DONATE NOW!',
    price: '',
    desc: 'For GIRO and Cheque Donation, download the forms below',
  },
  {
    icon: '🚑',
    label: '$60.00',
    desc: 'To-and-fro trip from home to hospital for cancer appointments made possible with your donation.*',
  },
  {
    icon: '🩲',
    label: '$120.00',
    desc: 'Your donation will empower our patients with adult diapers to live independently*',
  },
  {
    icon: '🛡️',
    label: '$228.00',
    desc: 'Your generosity will contribute to the quality end-of-life care for hospice patients in their homes*',
  },
  {
    icon: '🥛',
    label: '$360.00',
    desc: 'Your gift will aid our patients with the cost of medical supplies such as stoma bags, milk feed and wound dressings.',
  },
  {
    icon: '🛏️',
    label: '$720.00',
    desc: 'Your kind donation greatly helps beneficiaries with multiple rehabilitation sessions to regain strength, mobility and stamina, post treatment.',
  },
  {
    icon: '👨‍⚕️',
    label: 'THE IMPACT OF YOUR GIVING',
    desc: '',
  },
  {
    icon: '💳',
    label: 'CHANGE OF DONATION DETAILS',
    desc: '',
  },
];

const tabOptions = [
  'PayNow',
  'Credit/Debit Card',
  'GIRO',
  'Cheque',
  'Cash',
  'SCS Advocates',
  'SCS Appointed Fundraiser',
  'Fundraising',
  'In-Kind Donation',
  'Donation in Memory',
  'Cancellation',
];

const HomePage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="w-full bg-white shadow-sm flex flex-col">
        <div className="flex items-center justify-between px-8 py-4">
          <div className="flex items-center gap-4">
            <img src="https://www.singaporecancersociety.org.sg/images/logo.png" alt="Singapore Cancer Society" className="h-12" />
            <span className="font-bold text-2xl text-gray-700">SINGAPORE CANCER SOCIETY</span>
          </div>
          <div className="flex items-center gap-6">
            {/* Login buttons in header */}
            <div className="flex gap-2">
              <button className="bg-purple-700 text-white px-5 py-2 rounded font-bold shadow hover:bg-purple-800 transition text-base">Corporate Login</button>
              <button
                className="bg-white text-purple-700 border-2 border-purple-700 px-5 py-2 rounded font-bold shadow hover:bg-purple-50 transition text-base"
                onClick={() => navigate('/personal-login')}
              >
                Personal Login
              </button>
            </div>
            <a href="#" className="text-base text-purple-800 font-semibold">CONTACT US<br /><span className="text-sm font-normal">1800-727-3333</span></a>
            <button className="bg-purple-700 text-white px-6 py-3 rounded-md font-bold shadow hover:bg-purple-800 transition text-lg">DONATE</button>
          </div>
        </div>
        <nav className="flex items-center gap-8 px-8 py-3 bg-white border-t border-b border-gray-100 text-gray-700 text-lg font-semibold">
          <a href="#" className="hover:text-purple-700">ABOUT US</a>
          <a href="#" className="hover:text-purple-700">LEARN ABOUT CANCER</a>
          <a href="#" className="hover:text-purple-700">GET SCREENED</a>
          <a href="#" className="hover:text-purple-700">GET HELP</a>
          <a href="#" className="hover:text-purple-700">STORIES</a>
          <a href="#" className="hover:text-purple-700">BE INVOLVED</a>
          <a href="#" className="hover:text-purple-700">EVENTS</a>
          <div className="ml-auto flex items-center">
            <input type="text" placeholder="SEARCH" className="px-4 py-2 rounded-l bg-gray-100 border border-gray-300 text-gray-700 text-base" />
            <button className="px-5 py-2 rounded-r bg-gray-300 text-gray-700 font-bold text-lg">🔍</button>
          </div>
        </nav>
      </header>

      {/* Hero Banner */}
      <section className="w-full bg-gradient-to-r from-purple-200 via-purple-100 to-purple-200 py-16 mb-4">
        <div className="container mx-auto px-8 flex flex-col items-center">
          <h1 className="text-5xl font-extrabold text-white mb-8">Donate</h1>
        </div>
      </section>

      {/* Sidebar */}
      <div className="fixed top-1/3 left-0 z-20 flex flex-col gap-2">
        <button className="bg-purple-500 text-white p-3 rounded-r shadow hover:bg-purple-600"><Share2 /></button>
        <button className="bg-purple-500 text-white p-3 rounded-r shadow hover:bg-purple-600"><Mail /></button>
      </div>

      {/* Donation Options Grid */}
      <main className="container mx-auto px-8 flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 py-8">
          {donationOptions.map((opt, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className={`mb-4 w-32 h-32 flex items-center justify-center rounded-full shadow-lg ${iconBgColors[i % iconBgColors.length]}`}>
                <img src={iconImages[i]} alt={opt.label} className="w-20 h-20 object-contain" />
              </div>
              <div className="inline-block px-6 py-2 rounded-full bg-purple-700 text-white font-bold text-lg mb-3">{opt.label}</div>
              <p className="text-gray-800 text-base max-w-xs mx-auto">{opt.desc}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Info Section */}
      <section className="container mx-auto px-8 pb-8">
        <div className="bg-white rounded-xl shadow p-8 mb-8">
          <p className="text-sm text-gray-700 mb-3">*All donations flow into SCS General Funds. Illustrated above are examples where we deploy the funds to cancer awareness and prevention, free cancer screening services, financial assistance, rehabilitation services, psychological services, cancer support services and home hospice care.</p>
          <p className="text-sm text-gray-700 mb-3">All donations made to Singapore Cancer Society (SCS) are tax deductible. Once your NRIC / FIN / UEN No. details are sent to SCS, your donation details will be provided directly to Inland Revenue Authority of Singapore (IRAS) and the donation deductions will be included automatically in your individual tax assessment. There is no need to declare the donation amount in your income tax return. IRAS will no longer accept claims for tax deduction based on tax-deductible receipts.</p>
          <p className="text-sm text-gray-700 mb-3">As part of SCS Go Green initiative, issuance of physical tax-deductible receipts has ceased and is replaced by e-receipts. Kindly provide us your email address to receive your e-receipts.</p>
          <p className="font-bold text-base text-gray-800 mt-6">Giving is powerful, but we should also make sure that our donations are going to benefit the people or causes we want to support.<br />We encourage all donors and the public to practise the following steps of "Ask. Check. Give." <a href="#" className="text-purple-700 underline">Find out more about Online Safer Giving here.</a></p>
        </div>
        <div className="bg-purple-50 rounded-xl shadow p-8 mb-8">
          <h3 className="font-bold text-purple-800 mb-3 text-lg">Learn how to safeguard yourself against scams (click to read more)</h3>
          <ul className="list-disc pl-6 text-base text-gray-700 mb-3">
            <li><b>Do not provide</b> sensitive personal information (like usernames and passwords) over email or SMS.</li>
            <li><b>Watch</b> for email or SMS that originates from unknown/misleading sources, domains or senders. Be careful of malicious sites.</li>
            <li><b>Inspect</b> URLs carefully. Ensure you are accessing our secure online donation portal via <span className="bg-gray-200 px-2 py-1 rounded">org.sg</span> website.</li>
          </ul>
          <div className="flex gap-2 mb-3">
            <span className="bg-gray-200 px-2 py-1 rounded text-base">singaporecancersociety.org.sg</span>
            <span className="bg-gray-200 px-2 py-1 rounded text-base">https://www.singaporecancersociety.org.sg</span>
          </div>
          <p className="text-base text-gray-700 mb-3 italic">Do not click on links or attachments from senders that you do not recognise.</p>
          <h4 className="font-bold text-base text-purple-800 mt-3 mb-2">2. Know Our Protocols:</h4>
          <ul className="list-disc pl-6 text-base text-gray-700 mb-3">
            <li>You may receive a <b>phone call</b> from our staff when your submitted donation form is incomplete. When a staff calls to verify the details of your donation, he/she will ask for your:<br />Full name<br />NRIC/FIN (the last 4 characters only)<br />Mobile number</li>
            <li>When you call us to process your donation via credit/debit card; we will request for:<br />Cardholder's name as per the credit/debit card for which the donation is to be deducted from<br />Credit/debit card 16-digit numbers<br />Credit/debit card expiry date</li>
            <li>We will <b>never</b> ask for the CVV number of your card or one-time password.</li>
          </ul>
          <p className="text-base text-gray-700">Whenever in doubt, please call SCS hotline: 1800-727-3333.</p>
        </div>
      </section>

      {/* Tabbed Donation Methods */}
      <section className="w-full bg-purple-100 py-10">
        <div className="container mx-auto px-8">
          <div className="flex flex-wrap gap-3 mb-8">
            {tabOptions.map((tab, idx) => (
              <button
                key={tab}
                className={`px-6 py-3 rounded-t font-semibold text-lg border-b-2 ${activeTab === idx ? 'bg-white text-purple-800 border-purple-700' : 'bg-purple-100 text-purple-700 border-transparent'}`}
                onClick={() => setActiveTab(idx)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="bg-white rounded-b-xl shadow p-8">
            {/* Only show PayNow instructions for demo */}
            {activeTab === 0 && (
              <ol className="list-decimal pl-6 text-base text-gray-700 space-y-2">
                <li>Log in to your respective bank (online banking or mobile banking app) and click on the PayNow icon.</li>
                <li>On Unique Entity Number (UEN), key in <b>S65SS0033F</b>. "Singapore Cancer Society" will automatically appear if UEN is keyed in correctly.</li>
                <li>Enter your desired donation amount.</li>
                <li>If you wish to receive <b>tax exemption</b>, kindly indicate your <b>Full Name & Full NRIC/FIN/UEN</b> in the reference number field. Please note that there will not be any tax exemption if you do not provide your NRIC/FIN/UEN at point of donation.</li>
              </ol>
            )}
            {activeTab !== 0 && (
              <div className="text-gray-700 text-base">Please follow the instructions for <b>{tabOptions[activeTab]}</b> donation on our official website.</div>
            )}
            <button className="mt-8 bg-purple-700 text-white px-8 py-3 rounded font-bold shadow hover:bg-purple-800 transition text-lg">CLICK TO DONATE</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-900 text-gray-100 py-14 mt-10">
        <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h5 className="font-bold mb-3 text-purple-300 text-lg">About Cancer</h5>
            <ul className="space-y-2 text-base">
              <li>What Causes Cancer?</li>
              <li>Common Types of Cancer in Singapore</li>
              <li>Cancer Myths Debunked</li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-3 text-purple-300 text-lg">Cancer Screening</h5>
            <ul className="space-y-2 text-base">
              <li>Why Screen for Cancer?</li>
              <li>FIT Kit</li>
              <li>Breast Self-Examination</li>
              <li>Mammogram</li>
              <li>Pap Test</li>
              <li>Community Mammobus Programme</li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-3 text-purple-300 text-lg">How Can We Help</h5>
            <ul className="space-y-2 text-base">
              <li>Assistance for Children & Youth</li>
              <li>Apply for Financial Assistance</li>
              <li>Join Cancer Rehab Programme</li>
              <li>Home-Hospital Transportation</li>
              <li>Apply to Hospice Care</li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-3 text-purple-300 text-lg">Subscribe to Newsletter</h5>
            <p className="text-base mb-3">Get updates on our Society and cancer-related news</p>
            <input type="text" placeholder="Your Name" className="w-full mb-3 px-3 py-2 rounded bg-gray-800 border border-gray-700 text-gray-100 text-base" />
            <input type="email" placeholder="Your Email Address" className="w-full mb-3 px-3 py-2 rounded bg-gray-800 border border-gray-700 text-gray-100 text-base" />
            <button className="w-full bg-purple-700 text-white px-6 py-3 rounded font-bold shadow hover:bg-purple-800 transition text-lg">SUBSCRIBE</button>
          </div>
        </div>
        <div className="text-center text-gray-500 text-base mt-10">&copy; {new Date().getFullYear()} Singapore Cancer Society. All rights reserved.</div>
      </footer>
    </div>
  );
};

export default HomePage;