import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import Banner from './components/Banner';
import Blog from './components/Blog';
import News from './components/News';
import Contact from './components/Contact';
import SinglePost from './components/SinglePost'; 
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark);
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className={`app-container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/news">News</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <Header />
        <Banner />
        <button className="toggle-button" onClick={toggleTheme}>
          {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
        <Routes>
          <Route path="/" element={
            <div className="main-content">
              <Blog />
              <News />
            </div>
          } />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog/:postId" element={<SinglePost />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
