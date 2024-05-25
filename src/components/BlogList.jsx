/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import BlogPost from './BlogPost';

function BlogList({ posts }) {
  return (
    <div>
      <h2>Blog Posts</h2>
      {posts.map((post) => (
        <BlogPost key={post.id} post={post} />
      ))}
    </div>
  );
}

export default BlogList;