import React from 'react';

function Banner() {
  return (
    <div style={styles.banner}>
      <p style={styles.text}>Full-width banner image</p>
    </div>
  );
}

const styles = {
  banner: {
    width: '1217px',
    height: '145px',
    backgroundColor: '#D9D9D9',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '20px auto',  
    position: 'relative',
  },
  text: {
    width: '138px',
    height: '15px',
    fontFamily: 'Inter, sans-serif',
    fontSize: '12px',
    fontWeight: '400',
    lineHeight: '14.52px',
    color: '#000000',
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',  
    textAlign: 'center',
  },
};

export default Banner;
