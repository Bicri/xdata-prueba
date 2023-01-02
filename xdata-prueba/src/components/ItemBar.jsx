import Image from 'next/image'
import React from 'react'


const ItemBar = ({texto, img}) => {
  return (
    <div className="h-auto flex items-center py-4">
        <Image
            src={img}
            alt="Logo"
            className='mx-auto lg:mx-0'
        />
        <span className="hidden lg:inline-block text-gray-400 font-semibold mx-5">{ texto }</span>
    </div>
  )
}

export default ItemBar