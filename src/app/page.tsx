"use client";
import { useEffect, useState } from "react";
import ProductListSec from "@/components/common/ProductListSec";
import Brands from "@/components/homepage/Brands";
import DressStyle from "@/components/homepage/DressStyle";
import Header from "@/components/homepage/Header";
import Reviews from "@/components/homepage/Reviews";
import { fetchProducts } from "@/sanity/lib/fetch"; 
import { Product } from "@/types/product.types";
import { Review } from "@/types/review.types";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    getProducts();
  }, []);

  // reviewsData ko yahan move kar diya
  const reviewsData: Review[] = [
    {
      id: 1,
      user: "Alex K.",
      content:
        '"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”',
      rating: 5,
      date: "August 14, 2023",
    },
    {
      id: 2,
      user: "Sarah M.",
      content: `"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”`,
      rating: 5,
      date: "August 15, 2023",
    },
    {
      id: 3,
      user: "James L.",
      content: `"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”"`,
      rating: 5,
      date: "August 16, 2023",
    },
  ];

  return (
    <div>
      <Header />
      <Brands />
      <main className="my-[50px] sm:my-[72px]">
        <ProductListSec
          title="NEW ARRIVALS"
          data={products}
          viewAllLink="/shop#new-arrivals"
          addToCart={function (product: Product): void {}}
        />
        <div className="max-w-frame mx-auto px-4 xl:px-0">
          <hr className="h-[1px] border-t-black/10 my-10 sm:my-16" />
        </div>
        <div className="mb-[50px] sm:mb-20">
          <DressStyle />
        </div>
        <Reviews data={reviewsData} />
      </main>
    </div>
  );
}
