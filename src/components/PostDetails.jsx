/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

function PostDetails({ posts, user }) {
  const postId = window.location.pathname.split('/').pop();
  const post = posts.find((p) => p.id === parseInt(postId));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>Author: {post.author}</p>
      <p>{post.content}</p>
      {/* Add comments and interactions here */}
    </div>
  );
}

export default PostDetails;