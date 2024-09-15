import React from 'react';
import { useParams } from 'react-router-dom'; 

const SinglePost = () => {
  const { postId } = useParams(); 


  const posts = {
    'post-1': { title: 'Post 1', content: 'This is the content for post 1' },
    'post-2': { title: 'Post 2', content: 'This is the content for post 2' },
    'post-3': { title: 'Post 3', content: 'This is the content for post 3' }
  };

  const post = posts[postId]; 

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default SinglePost;
