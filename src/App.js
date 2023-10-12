
import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const pageSize = 6;
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <Navbar />

        {/* react top scroll loading bar */}
        <LoadingBar color='blue' height={3} transitionTime={2000} progress={progress} />
        
        <Routes>
          <Route path="/technology" element={<News setProgress={setProgress} pageSize={pageSize} country="us" category="technology" />} />
          <Route path="/sports" element={<News setProgress={setProgress} pageSize={pageSize} country="us" category="sports" />} />
          <Route path="/health" element={<News setProgress={setProgress} pageSize={pageSize} country="us" category="health" />} />
          <Route path="/general" element={<News setProgress={setProgress} pageSize={pageSize} country="us" category="general" />} />
          <Route path="/science" element={<News setProgress={setProgress} pageSize={pageSize} country="us" category="science" />} />
          <Route path="/entertainment" element={<News setProgress={setProgress} pageSize={pageSize} country="us" category="entertainment" />} />
          <Route path="/business" element={<News setProgress={setProgress} pageSize={pageSize} country="us" category="business" />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
