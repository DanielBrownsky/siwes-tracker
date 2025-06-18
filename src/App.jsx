import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SetupPage from './pages/SetupPage';
import Dashboard from './pages/Dashboard';
import ProgressSummary from './pages/ProgressSummary';
import AuthPage from './pages/AuthPage';
import TeamPage from './pages/TeamPage';
import TeamLanding from './pages/TeamLanding';
import CreateGroup from './pages/CreateGroup';
import JoinGroup from './pages/JoinGroup';
import { Toaster } from "react-hot-toast";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import GroupDashboard from './pages/GroupDashboard';
import GroupAddLog from './pages/component/groups/GroupAddLog';
import ViewGroupLog from './pages/component/groups/ViewGroupLog';
import GroupSettings from './pages/component/GroupSettings';



function App() {
 
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path='/team' element= {<TeamLanding />} />
      <Route path="/team/create" element={<CreateGroup />} />
      <Route path="/team/join" element={<JoinGroup />} />
      {/* <Route path='/team' element= {<TeamPage />} /> */}
      <Route path="/team/dashboard" element={<GroupDashboard />} />
      <Route path="/setup" element={<SetupPage onSave={() => {}} />} />
      <Route path="/dashboard" element={<Dashboard />} /> 
      <Route path="summary" element={<ProgressSummary />}/>
      <Route path="/group/add-log" element={<GroupAddLog />} />
      <Route path="/group/logs" element={<ViewGroupLog />} />
      <Route path="/team/settings" element={<GroupSettings />} />
      </Routes>
    <Toaster position='top-left'/>
    <ToastContainer
        position="top-center"
    />

    </Router>
  )
}

export default App
