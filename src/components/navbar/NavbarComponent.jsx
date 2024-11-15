import Link from 'next/link';
import React from 'react';
import { IoBagHandleOutline, IoHeartOutline } from 'react-icons/io5';
import Image from 'next/image';

export default function NavbarComponent() {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,           // Keeps it fixed at the top of the page
        left: 0,          // Stretches across the entire width
        width: '100%',    // Full width of the page
        height: '60px',   // Height of the navbar
        backgroundColor: 'black',  // Background color
        color: 'white',   // Text color
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 16px', // Padding for the navbar content
        zIndex: 50,       // Ensures it stays on top of other elements
      }}
    >
      {/* Logo */}
      <Link href="/">
      
          <Image src="/logo.png" alt="logo" width={70} height={70} />
        
      </Link>

      {/* Navigation Links */}
      <div style={{ display: 'flex', gap: '16px' }}>
        <Link href="#">New</Link>
        <Link href="#">Men</Link>
        <Link href="#">Women</Link>
        <Link href="#">Kids</Link>
        <Link href="#">Best Sellers</Link>
      </div>

      {/* Icons */}
      <div style={{ display: 'flex', gap: '16px', cursor: 'pointer' }}>
        <IoHeartOutline color="#f80" size={30} />
        <IoBagHandleOutline color="#f80" size={30} />
      </div>
    </div>
  );
}


 