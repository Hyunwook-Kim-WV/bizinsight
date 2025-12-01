import React from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import SeoulFranchiseDashboard from './components/SeoulFranchiseDashboard';
import SmartBizMap_Bento from './components/SmartBizMap_Bento';
import BusinessCategoryAnalysis from './components/BusinessCategoryAnalysis';

const NavToggler = () => {
  const location = useLocation();
  const isBentoPage = location.pathname === '/newpage';
  const isAnalysisPage = location.pathname === '/analysis';

  return (
    <div className="fixed bottom-4 right-4 z-50 flex gap-2">
      <Link
        to="/"
        className={`px-4 py-2 rounded-full font-bold shadow-lg transition-all ${!isBentoPage ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
      >
        Main
      </Link>
      <Link
        to="/newpage"
        className={`px-4 py-2 rounded-full font-bold shadow-lg transition-all ${isBentoPage ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
      >
        Bento (V2)
      </Link>
      <Link
        to="/analysis"
        className={`px-4 py-2 rounded-full font-bold shadow-lg transition-all ${isAnalysisPage ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
      >
        Analysis
      </Link>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <NavToggler />
      <Routes>
        <Route path="/" element={<SeoulFranchiseDashboard />} />
        <Route path="/newpage" element={<SmartBizMap_Bento />} />
        <Route path="/analysis" element={<BusinessCategoryAnalysis />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
