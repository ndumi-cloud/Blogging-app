/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import TopBar from './components/TopBar';
import Homepage from './pages/home/home';
import Single from './pages/home/Single/Single';
import Write from './pages/Write/Write';
import Settings from './pages/Settings/Settings';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  // Simulate current user state
  const [currentUser, setCurrentUser] = useState(true); // Set to true for now, simulate logged-in user

  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/posts" element={<Homepage />} />
        <Route path="/register" element={currentUser ? <Homepage /> : <Register />} />
        <Route path="/login" element={currentUser ? <Homepage /> : <Login />} />
        <Route path="/post/:id" element={<Single />} />
        <Route path="/write" element={currentUser ? <Write /> : <Login />} />
        <Route path="/settings" element={currentUser ? <Settings /> : <Login />} />
      </Routes>
    </Router>
  );
}

export default App;
