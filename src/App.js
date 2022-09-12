
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Navbar from './components/navbar';
import Sidebar from './components/Sidebar';
import Announcements from './pages/announcements/announcements.js';
import Report from './pages/createreport/createreport';
import Createteam from './pages/createteam/createteam.js';
import Dashboard from './pages/dashboard/dashboard.js';
import Login from './pages/login/login';
import Signup from './pages/signup/signup.js';
// import Sidebar from './components/sidebar.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <div className='container'>
          <Navbar />
          {/* <Sidebar />        */}
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route path="/createteam" element={<Createteam />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/createreport" element={<Report />} />
            <Route path="/announcements" element={<Announcements />} />

          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
