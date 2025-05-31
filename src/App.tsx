import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import MobileAppPage from './pages/mobile/MobileAppPage';
import SenseSpotPage from './pages/sensespot/SenseSpotPage';
import CorporatePage from './pages/corporate/CorporatePage';
import AILearningPage from './pages/ai/AILearningPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="mobile" element={<MobileAppPage />} />
        <Route path="sensespot" element={<SenseSpotPage />} />
        <Route path="corporateDashboard" element={<CorporatePage />} />
        <Route path="ai" element={<AILearningPage />} />
      </Route>
    </Routes>
  );
}

export default App;