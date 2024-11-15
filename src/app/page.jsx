'use client'
import Link from "next/link";
import { useRef, useState } from "react";
// import page from './dashboard/page';
import NavbarComponent from '@/src/components/navbar/NavbarComponent';
import  Banner  from '@/src/components/Banners/Banner';

const home = () =>{
  const [counter,setCounter] = useState(0);
  const clickRef = useRef(0);
  const handleClick = () => {
    clickRef.current = clickRef.current + 1;
    alert('you clicked' + clickRef.current + 'times'
    );
  }

  return(
    <> 
    <NavbarComponent />
    <Banner/>
    <div className="h-[100vh] w[100%] items-center justify-center">
  
      </div>
    </>
   
  );
}
export default home;

{/* <Link href={'/dashboard'}>dashboard page</Link> */}