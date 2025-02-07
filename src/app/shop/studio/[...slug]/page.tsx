"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import Image from "next/image";

interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  category: string;
  discountPercent: number;
  colors: string[];
  sizes: string[];
}

export default function ProductDetails() {
  const { slug } = useParams(); // ✅ Get Dynamic Slug
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const getProduct = async (slug: string | string[]) => {
      if (!slug) return;
      const data = await getProduct(slug);
      
    };
    
  }, [slug]);

  if (!product) return <p className="text-center">Loading...</p>;

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* ✅ Product Image */}
        <Image
          src={product.imageUrl}
          width={500}
          height={500}
          alt={product.name}
          className="rounded-lg shadow-md"
        />

        {/* ✅ Product Details */}
        <div>
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="text-gray-600 mt-2">{product.description}</p>
          <p className="text-xl font-bold mt-4">${product.price}</p>

          {/* ✅ Size Options */}
          <div className="mt-4">
            <p className="font-semibold">Size:</p>
            <div className="flex gap-2 mt-2">
              {product.sizes.map((size) => (
                <span key={size} className="px-3 py-1 border rounded">
                  {size}
                </span>
              ))}
            </div>
          </div>

          {/* ✅ Color Options */}
          <div className="mt-4">
            <p className="font-semibold">Available Colors:</p>
            <div className="flex gap-2 mt-2">
              {product.colors.map((color) => (
                <span key={color} className="px-3 py-1 border rounded" style={{ backgroundColor: color }}></span>
              ))}
            </div>
          </div>

          {/* ✅ Add to Cart Button */}
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
