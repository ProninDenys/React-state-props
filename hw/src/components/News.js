import React from 'react';

function News() {
  return (
    <aside style={styles.newsContainer}>
      <p style={styles.text}>News</p>
      <div style={styles.section1}></div>
      <div style={styles.section2}></div>
      <div style={styles.section3}></div>
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
  text: {
    width: '46px',
    height: '20px',
    fontFamily: 'Inter, sans-serif',
    fontSize: '12px',
    fontWeight: '400',
    lineHeight: '14.52px',
    color: '#000000',
    position: 'absolute',
    top: '17px',  
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
    left: '42px',  
  },
  section2: {
    width: '247px',
    height: '110px',
    backgroundColor: '#BDCDF6',
    position: 'absolute',
    top: '181px',  
    left: '42px',  
  },
  section3: {
    width: '247px',
    height: '110px',
    backgroundColor: '#BDCDF6',
    position: 'absolute',
    top: '300px',
    left: '42px',  
  },
};

export default News;
