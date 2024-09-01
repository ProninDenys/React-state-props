import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Blog from './components/Blog';
import News from './components/News';

function App() {
  return (
    <div style={styles.container}>
      <Header />
      <Banner />
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
    color: '#333',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
  },
};

export default App;
