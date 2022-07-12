import React from 'react'

const Category = ({ category: { title, image }}) => {
  return (
    <a href="#" className="flex flex-col items-center text-center p-4 gap-y-2 group transition hover:bg-purple-50">
        <img src={image} alt={title} className="w-12 h-12 mx-auto rounded border border-gray-200" />
        <span className="text-sm font-semibold text-gray-700 group-hover:text-brand-color tracking-tight whitespace-nowrap">{title}</span>
    </a>
  )
}

export default Category