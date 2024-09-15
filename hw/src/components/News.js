import React from 'react';
import { useLocation } from 'react-router-dom';

function News() {
  const location = useLocation(); 

 
  const isFullWidth = location.pathname === '/news';

  return (
    <aside style={isFullWidth ? styles.fullWidthNewsContainer : styles.newsContainer}>
      <p style={styles.text}>News</p>
      <div style={isFullWidth ? styles.sectionFullWidth : styles.section1}></div>
      <div style={isFullWidth ? styles.sectionFullWidth : styles.section2}></div>
      <div style={isFullWidth ? styles.sectionFullWidth : styles.section3}></div>
    </aside>
  );
}

const styles = {
  newsContainer: {
    width: '330px',
    height: '447px',
    backgroundColor: '#D9D9D9',
    position: 'relative',
    margin: '20px',
    padding: '10px',
    left: '35px',
  },
  fullWidthNewsContainer: {
    width: '100%', 
    height: '500px',
    backgroundColor: '#D9D9D9',
    position: 'relative',
    margin: '20px 0',  
    padding: '20px',
    boxSizing: 'border-box',
  },
  text: {
    width: '100%',
    height: '20px',
    fontFamily: 'Inter, sans-serif',
    fontSize: '12px',
    fontWeight: '400',
    lineHeight: '14.52px',
    color: '#000000',
    position: 'absolute',
    top: '10px',
    left: '50%',
    transform: 'translateX(-50%)',
    textAlign: 'center',
  },
  section1: {
    width: '247px',
    height: '110px',
    backgroundColor: '#BDCDF6',
    position: 'absolute',
    top: '62px',
    left: '45px', 
  },
  section2: {
    width: '247px',
    height: '110px',
    backgroundColor: '#BDCDF6',
    position: 'absolute',
    top: '190px',
    left: '45px', 
  },
  section3: {
    width: '247px',
    height: '110px',
    backgroundColor: '#BDCDF6',
    position: 'absolute',
    top: '315px',
    left: '45px', 
  },
  sectionFullWidth: {
    width: '95%',
    height: '110px',
    backgroundColor: '#BDCDF6',
    position: 'relative',
    margin: '20px auto', 
  },
};

export default News;
