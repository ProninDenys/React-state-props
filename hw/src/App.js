import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Blog from './components/Blog';
import News from './components/News';

function App() {
  // Хук для состояния темы (темная или светлая)
  const [darkMode, setDarkMode] = useState(false);

  // Хук для переключения темы на основе пользовательских предпочтений
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark);
  }, []);

  // Функция для переключения темы вручную
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div style={{ ...styles.container, backgroundColor: darkMode ? '#282c34' : '#fff', color: darkMode ? '#fff' : '#333' }}>
      <Header />
      <Banner />
      <button onClick={toggleTheme} style={styles.button}>
        {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
      <div style={styles.content}>
        <Blog />
        <News />
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    transition: 'background-color 0.3s ease', 
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  button: {
    padding: '10px 20px',
    margin: '20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default App;
