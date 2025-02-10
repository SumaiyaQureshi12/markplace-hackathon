import React, { useState } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext"; // Import the useCart hook

interface ProductDetailsProps {
  product: {
    _id: string;
    name: string;
    description: string;
    price: number;
    discountPercent: number;
    rating: number;
    imageUrl: string[] | null;
    colors: string[] | null;
    sizes: string[] | null;
  };
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || "");
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || "");
  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useCart(); // ✅ Correctly getting addToCart function

  const handleQuantityChange = (type: "increment" | "decrement") => {
    setQuantity((prevQuantity) =>
      type === "increment" ? prevQuantity + 1 : Math.max(1, prevQuantity - 1)
    );
  };

  const handleAddToCart = () => {
    const cartItem = {
      id: product._id,
      name: product.name,
      price: product.price,
      imageUrl: product.imageUrl?.[0] || "",
      quantity,
      color: selectedColor,
      size: selectedSize,
    };
    addToCart(cartItem); // ✅ Now using addToCart function instead of dispatch
  };

  return (
    <div>
      <h2>{product.name}</h2>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
