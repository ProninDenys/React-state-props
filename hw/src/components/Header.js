import React from 'react';

function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.section1}></div>
      <div style={styles.section2}>
        <p style={styles.text}>Blog name</p>
      </div>
      <div style={styles.nav}>
        <div style={styles.section3}></div>
        <div style={styles.section4}></div>
        <div style={styles.section5}></div>
        <div style={styles.section6}></div>
        <div style={styles.section7}></div>
      </div>
    </header>
  );
}

const styles = {
  header: {
    width: '1177px',
    height: '48px',
    backgroundColor: '#D9D9D9',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 20px',
    position: 'relative',
    margin: '20px auto',
  },
  section1: {
    width: '181px',
    height: '37px',
    backgroundColor: '#F1F2AE',
    position: 'absolute',
    top: '6px',
    left: '46px',
  },
  section2: {
    position: 'absolute',
    top: '16px',
    left: '576px',
    height: '17px',
  },
  text: {
    fontFamily: 'Inter, sans-serif',
    fontSize: '12px',
    fontWeight: '400',
    lineHeight: '14.52px',
    color: '#000000',
    textAlign: 'center',
    margin: 0,
  },
  nav: {
    display: 'flex',
    gap: '5px',
    position: 'absolute',
    top: '6px',
    right: '46px',
  },
  section3: {
    width: '46px',
    height: '37px',
    backgroundColor: '#E7EFD6',
  },
  section4: {
    width: '46px',
    height: '37px',
    backgroundColor: '#E7EFD6',
  },
  section5: {
    width: '46px',
    height: '37px',
    backgroundColor: '#E7EFD6',
  },
  section6: {
    width: '46px',
    height: '37px',
    backgroundColor: '#E7EFD6',
  },
  section7: {
    width: '46px',
    height: '37px',
    backgroundColor: '#E7EFD6',
  },
};

export default Header;
