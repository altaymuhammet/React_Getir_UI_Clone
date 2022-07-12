import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

const Product = ({product}) => {
  return (
    <a href="#" className="relative flex flex-col items-center justify-start gap-y-1 text-center rounded-lg p-2 text-sm font-semibold bg-white">
      <button className="absolute top-1 right-1 w-8 h-8 rounded-lg transition border border-gray-200 flex items-center justify-center cursor-pointer text-brand-color hover:border-gray-400">
        <AiOutlinePlus size={18} />
      </button>
      <img className="w-24 h-24 mb-1" src={product.image} alt={product.title} />
      <p className="text-purple-700">₺{product.price}</p>
      <p className="my-1">{product.title}</p>
      <p className="text-gray-400">{product.alt}</p>
    </a>
  )
}

export default Product