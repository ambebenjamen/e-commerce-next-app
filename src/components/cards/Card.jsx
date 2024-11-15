import Image from 'next/image'
import React from 'react'

export default function Card() {
  return (
    <div>
      {/* All carts */}
     
          {/* Card one */}
          <div className="h-[460px] w-[350px] bg-slate-950 cursor-pointer mb-5 flex flex-col gap-3 rounded overflow-hidden">
            <div className="h-[300px] w-full relative overflow-hidden">
              <Image 
                src="/shoes/1.png" 
                alt="Shoes" 
                layout="fill" 
                objectFit="cover" 
                objectPosition="center" 
                
              />
            </div>
          </div>
    </div>
  );
}



        