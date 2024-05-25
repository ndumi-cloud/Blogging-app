/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function BlogPost({ post }) {
  const [likes, setLikes] = useState(post.likes || 0);
  const [comments, setComments] = useState(post.comments || []);
  const [newComment, setNewComment] = useState('');

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleComment = () => {
    if (newComment.trim() !== '') {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <div>
        <button onClick={handleLike}>Like ({likes})</button>
        <input
          type="text"
          placeholder="Add a comment..."
          value={newComment}
          onChange={handleCommentChange}
        />
        <button onClick={handleComment}>Comment</button>
      </div>
      <div>
        <h4>Comments</h4>
        {comments.map((comment, index) => (
          <p key={index}>{comment}</p>
        ))}
      </div>
      <Link to={`/post/${post.id}`}>Read More</Link>
    </div>
  );
}

export default BlogPost;