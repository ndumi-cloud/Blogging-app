/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import BlogPost from './BlogPost';
import { Link } from 'react-router-dom';

function Home({ posts, isAuthenticated }) {
  return (
    <div className="home-container">
      <h2>Blog Posts</h2>
      {isAuthenticated && (
        <Link to="/create-post">
          <button className="new-post-button">New Post</button>
        </Link>
      )}
      <div className="post-list">
        {posts.map((post) => (
          <BlogPost key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Home;
