/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TopBar from "./components/TopBar";
import Homepage from "./pages/Homepage/Homepage";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Settings from "./pages/Settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/Write/Write";

// Main App component
function App() {
  return (
    <Router>
      {/* Top navigation bar */}
      <TopBar />

      {/* Define routes using the Routes component */}
      
      <Routes>
        {/* Route for homepage */}
        <Route path="/" element={<Homepage />} />
        
        {/* Route for posts */}
        <Route path="/posts" element={<Homepage />} />
        
        {/* Route for registration page */}
        <Route path="/register" element={<Register />} />
        
        {/* Route for login page */}
        <Route path="/login" element={<Login />} />
        
        {/* Route for viewing a single post */}
        <Route path="/post/:id" element={<Single />} />
        
        {/* Route for writing a post */}
        <Route path="/write" element={<Write />} />
        
        {/* Route for settings */}
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;

