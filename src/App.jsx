/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';
import CreatePost from './components/CreatePost';
import PostDetails from './components/PostDetails';
import './App.css'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([
    { id: 1, title: 'Predefined Article 1', content: 'Content of predefined article 1', author: 'Admin', likes: 0, comments: [] },
    { id: 2, title: 'Predefined Article 2', content: 'Content of predefined article 2', author: 'Admin', likes: 0, comments: [] },
  ]);

  const handleLogin = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
  };

  const handleSignUp = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
  };

  const handleCreatePost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <Router>
      <Header isAuthenticated={isAuthenticated} user={user} />
      <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<SignUp onSignUp={handleSignUp} />} />
        <Route path="/create-post" element={isAuthenticated ? <CreatePost onCreatePost={handleCreatePost} user={user} /> : <div>Please log in to create a new post.</div>} />
        <Route path="/post/:id" element={<PostDetails posts={posts} user={user} />} />
        <Route path="/" element={<Home posts={posts} isAuthenticated={isAuthenticated} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
