import React from 'react'

const TarjetaProductoFake = ({item}) => {
  return (
    <div className=''>

      <div key={item.id} className='border-md flex  flex-col  mt-6 rounded-md bg-white items-center mx-auto max-w-md p-6'>
      <h2 className=' p-4 font-serif text-2xl w-full'>{item.title}</h2>
      <img src={item.image} alt={item.title} className='w-40 ' />
      <p className='p-4 font-bold text-2xl font-mono'>Precio: ${item.price} </p>  
      <p className='font-serif'>{item.description}</p>
    

  </div></div>
  )
}

export default TarjetaProductoFake