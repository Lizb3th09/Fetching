'use client'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const TarjetaProductoDummy = ({ item }) => {
  const router = new useRouter();

  return (
    <div className=''>
      <div className='border-md flex  flex-col  mt-6 rounded-md bg-white items-center mx-auto max-w-md   font-serif '>
        <h2 className=' text-2xl p-5'>{item.title}</h2>
        <img src={item.thumbnail} alt={item.title} className='w-40 ' />
        <button
          className='p-4'
          onClick={() => {
            console.log(item.id);
            router.push(`http://localhost:3000/dummyapi/${item.id}`);
          }}
        >
          ver más
        </button>
      </div>
      
    </div>
  );
}

export default TarjetaProductoDummy;