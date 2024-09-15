import React from 'react';
import { Link } from 'react-router-dom'; 
import './Blog.css'; 

function Blog() {
  return (
    <section className="blog-container">
      <p className="blog-text">Blog</p>

      {/* Кликабельные ссылки */}
      <div className="blog-section1">
        <Link to="/blog/post-1" className="blog-link">Post 1</Link>
      </div>

      <div className="blog-section2">
        <Link to="/blog/post-2" className="blog-link">Post 2</Link>
      </div>

      <div className="blog-section3">
        <Link to="/blog/post-3" className="blog-link">Post 3</Link>
      </div>

      <div className="blog-section4">
        <Link to="/blog/post-4" className="blog-link">Post 4</Link>
      </div>
    </section>
  );
}

export default Blog;
