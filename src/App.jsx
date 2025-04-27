import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Tracker from './pages/Tracker';
import Dashboard from './pages/Dashboard';
import ProgressSummary from './pages/ProgressSummary';


function App() {
  // const [startDate, setStartDay] = useState(null);
  // const [duration, setDuration] = useState(null);

  // const handleSaveTracker = (start, dur) =>{
  //   setStartDate(start);
  //   setDuration(dur);
  // };

  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/setup" element={<Tracker onSave={() => {}} />} />
      <Route path="/dashboard" element={<Dashboard />} /> 
      <Route path="summary" element={<ProgressSummary />}/>
      </Routes>
    </Router>
  )
}

export default App
