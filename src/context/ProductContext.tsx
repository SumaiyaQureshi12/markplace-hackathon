'use client';

import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { useCart } from "@/context/CartContext" // Import the useCart hook


interface ProductDetailsProps {
  product: {
    _id: string;
    name: string;
    description: string;
    price: number;
    discountPercent: number;
    rating: number;
    imageUrl: string[] | null; // Handle null for imageUrl
    colors: string[] | null; // Handle null for colors
    sizes: string[] | null; // Handle null for sizes
  };
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || '');
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || '');
  const [quantity, setQuantity] = useState(1);

  const { dispatch } = useCart(); // Access the dispatch function

  const handleQuantityChange = (type: 'increment' | 'decrement') => {
    setQuantity((prevQuantity) =>
      type === 'increment' ? prevQuantity + 1 : Math.max(1, prevQuantity - 1)
    );
  };

  const handleAddToCart = () => {
    const cartItem = {
      id: product._id,
      name: product.name,
      price: product.price,
      imageUrl: product.imageUrl?.[0] || '', // Fallback to first image if available
      quantity,
      color: selectedColor,
      size: selectedSize,
    };
    dispatch({ type: 'ADD_TO_CART', payload: cartItem }); // Dispatch add to cart action
  };

  // Ensure the first image is displayed and handled properly
  const mainImageUrl = product.imageUrl?.[0] || '';

  return (
    <div className='container grid md:grid-1 w-full px-[120px] py-[493] mt-10 p-20'>
    <h1 className="text-3xl font-extrabold text-center mb-6">YOU MAY ALSO LIKE
    </h1>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
    <div>
        <Image
        src="/images/pic5.png"
        alt='Sell'
        width={295}
        height={298}
        />
        <h3 className="mt-4 text-lg font-semibold">VERTICAL STRIPED SHIRT</h3>
          <div className="flex items-center mt-2">
            <div className="flex text-yellow-400">
              {"★".repeat(Math.round(5))}
              {"☆".repeat(5 - Math.round(5))}
            </div>
            <span className="text-gray-500 text-sm ml-2">
              ({5})
            </span>
          </div>
          <div className="flex items-center space-x-2 mt-2">
            <span className="text-red-500 font-bold">${212}</span>
            <span className="text-gray-400 line-through">
              ${232}
            </span>
            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              -{20}%
            </span>
          </div>
    </div>
    <div>
        <Image
        src="/images/pic6.png"
        alt='Sell'
        width={295}
        height={298}
        />
        <h3 className="mt-4 text-lg font-semibold">COURAGE GRAPHIC T-SHIRT</h3>
          <div className="flex items-center mt-2">
            <div className="flex text-yellow-400">
              {"★".repeat(Math.round(4))}
              {"☆".repeat(5 - Math.round(4))}
            </div>
            <span className="text-gray-500 text-sm ml-2">
              ({4})
            </span>
          </div>
          <div className="flex items-center space-x-2 mt-2">
            <span className="text-red-500 font-bold">${212}</span>
            <span className="text-gray-400 line-through">
              ${232}
            </span>
            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              -{20}%
            </span>
          </div>
    </div>
    <div>
        <Image
        src="/images/pic7.png"
        alt='Sell'
        width={295}
        height={298}
        />
        <h3 className="mt-4 text-lg font-semibold">LOOSE FIT BERMUDA SHORTS</h3>
          <div className="flex items-center mt-2">
            <div className="flex text-yellow-400">
              {"★".repeat(Math.round(3))}
              {"☆".repeat(5 - Math.round(3))}
            </div>
            <span className="text-gray-500 text-sm ml-2">
              ({9/3})
            </span>
          </div>
          <div className="flex items-center space-x-2 mt-2">
            <span className="text-red-500 font-bold">${125}</span>
           
            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              -{20}%
            </span>
          </div>
    </div>
    <div>
        <Image
        src="/images/pic8.png"
        alt='Sell'
        width={295}
        height={298}
        />
        <h3 className="mt-4 text-lg font-semibold">FADED SKINNY JEANS</h3>
          <div className="flex items-center mt-2">
            <div className="flex text-yellow-400">
              {"★".repeat(Math.round(4))}
              {"☆".repeat(5 - Math.round(4))}
            </div>
            <span className="text-gray-500 text-sm ml-2">
              ({4})
            </span>
          </div>
          <div className="flex items-center space-x-2 mt-2">
            <span className="text-red-500 font-bold">${210}</span>
            {/* <span className="text-gray-400 line-through">
              ${232}
            </span> */}
            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              -{20}%
            </span>
          </div>
    </div>
    </div>
    <div className="text-center mt-8">
      <button className="px-6 py-2 border border-b-gray-500 text-black font-semibold rounded-3xl hover:bg-red-600">
        View All Products
      </button>
    </div>
    </div>
)
}

export default ProductDetails;
