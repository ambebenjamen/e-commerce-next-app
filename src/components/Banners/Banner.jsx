import Image from 'next/image';
import React from 'react';

const Banner = () => {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh', // Full viewport height
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* Text Behind the Image */}
      <div
        style={{
          position: 'absolute',
          zIndex: 10,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '0 16px',
        }}
      >
        <p
          style={{
            fontSize: '10rem', // Increased font size of the text
            textAlign: 'center',
            fontWeight: 'bold',
            color: 'black', // Text color
            margin: 0,
          }}
        >
          NIKE AIR
        </p>
      </div>

      {/* Image Centered Over the Text */}
      <div
        style={{
          position: 'absolute',
          zIndex: 20,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          transform: 'translateY(40px)', // Moves the image down by 40px
        }}
      >
        <Image
          src="/nike2.png"
          alt="Nike Air"
          width={500}  // Increased image width
          height={500} // Increased image height
          priority
        />
      </div>
    </div>
  );
};

export default Banner;

