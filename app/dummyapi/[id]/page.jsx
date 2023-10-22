import React from 'react'

async function obtnerDatoDummy(id){
    const response = await fetch(`https://dummyjson.com/products/${id}`)
    if(! response.ok) throw Error('no se puede')
    return response.json()
}

const page = async ({params}) => {
    const {id} = params
    const products = await obtnerDatoDummy(id)

    return (
    <div className='p-8 mx-auto text-center max-w-3xl  bg-zinc-900 rounded-md '>

        <div className='bg-white'> 

    <p className='font-serif text-3xl p-3'> {products.title}</p>
    <p className=' p-3'>{products.images}</p>
    <p className='font-serif  p-2'>{products.description}</p>

        </div>


    </div>

  )
}

export default page