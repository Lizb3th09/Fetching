import React from 'react'

async function obtnerDatoDummy(id){
    const response = await fetch(`http://localhost:3000/dummyapi/${id}`)
    if(! response.ok) throw Error('no se puede')
    return response.json()
}

const page = async ({params}) => {
    const {id} = params
    const data = await obtnerDatoDummy(id)

    return (
    <div>
        {data.title}
        
    
    </div>

  )
}

export default page