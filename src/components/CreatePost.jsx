/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

function CreatePost({ onCreatePost, user }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform post creation logic, e.g., API call
    const newPost = {
      id: Date.now(),
      title,
      content,
      author: user.email,
      likes: 0,
      comments: [],
    };
    onCreatePost(newPost);
    setTitle('');
    setContent('');
  };

  return (
    <div>
      <h2>Create Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}

export default CreatePost;