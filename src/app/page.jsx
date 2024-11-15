'use client'
import { useRef, useState } from "react";
import NavbarComponent from '@/src/components/navbar/NavbarComponent';
import Banner from '@/src/components/Banners/Banner';
import Image from 'next/image';
import Card from '@/src/components/cards/Card';

const Home = () => {
  const [counter, setCounter] = useState(0);
  const clickRef = useRef(0);

  const handleClick = () => {
    clickRef.current = clickRef.current + 1;
    alert('You clicked ' + clickRef.current + ' times');
  };

  return (
    <> 
      <NavbarComponent />
      <div className="h-full w-full  items-center justify-center p-5">
      <Banner />
      <div className="h-[100vh] w-full flex items-center justify-center p-5 flex-wrap gap-4">
      <Card/>
      <Card/>
       
      </div>
      </div>
    </>
  );
};

export default Home;
