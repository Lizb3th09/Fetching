import TarjetaProductoDummy from '@/app/src/components/TarjetaProductoDummy';
import React from 'react';

async function obtnerDatoDummy(id) {
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  if (!response.ok) throw Error('No se puede obtener el producto');
  return response.json();
}

const page = async ({ params }) => {
  const { id } = params;
  const product = await obtnerDatoDummy(id);

  if (!product) {
    return <div>Error: no se puede obtener el producto</div>;
  }

  return (
    <div className='p-11 mx-auto text-center max-w-3xl bg-zinc-900 rounded-md '>
      <div className='border-md flex  flex-col  mt-5 rounded-md bg-white items-center mx-auto max-w-md  p-8 font-serif '>
        <p className='font-serif text-3xl p-3 ' >{product.title}</p>

        <p className='font-serif p-4'>{product.description}</p> 


        {product.images && product.images.length > 0 && (

    <div className='flex flex-col justify-center items-center'>
    {product.images.map((image, index) => (
      <div key={index} className='m-2'>
    
    <img src={image} width={400} height={400} alt={`Product Image ${index}`} />

    </div>
    ))}
  </div>
)}

      </div>
    </div>
  );
};


export default page;
