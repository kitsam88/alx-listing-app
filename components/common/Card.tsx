import React from 'react'
import { CardProps } from '../../interfaces'

const Card: React.FC<CardProps> = ({ title, image, price }) => {
  return (
    <div className="border rounded shadow-md p-4">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded"
      />
      <h3 className="mt-2 text-lg font-semibold">{title}</h3>
      <p className="text-gray-600">${price}</p>
    </div>
  )
}

export default Card
