import React from 'react';

function Blog() {
  return (
    <section style={styles.blogContainer}>
      <p style={styles.text}>Blog</p>
      <div style={styles.section1}></div>
      <div style={styles.section2}></div>
      <div style={styles.section3}></div>
      <div style={styles.section4}></div>
    </section>
  );
}

const styles = {
  blogContainer: {
    width: '750px',
    height: '337px',
    backgroundColor: '#D9D9D9',
    position: 'relative',
    margin: '20px auto', 
    padding: '65px',
  },
  text: {
    width: '26px',
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
    width: '759px',
    height: '70px',
    backgroundColor: '#F9D7D7',
    position: 'absolute',
    top: '57px',  
    left: '46px',
  },
  section2: {
    width: '759px',
    height: '70px',
    backgroundColor: '#F9D7D7',
    position: 'absolute',
    top: '156px',  
    left: '46px',
  },
  section3: {
    width: '759px',
    height: '70px',
    backgroundColor: '#F9D7D7',
    position: 'absolute',
    top: '253px', 
    left: '51px',
  },
  section4: {
    width: '759px',
    height: '70px',
    backgroundColor: '#F9D7D7',
    position: 'absolute',
    top: '350px', 
    left: '51px',
  },
};

export default Blog;
