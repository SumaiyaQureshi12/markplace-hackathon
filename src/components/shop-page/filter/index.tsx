import React from "react";
import CategoriesSection from "@/components/shop-page/filter/CategoriesSection";
import ColorsSection from "@/components/shop-page/filter/ColorsSection";
import DressStyleSection from "@/components/shop-page/filter/DressStyleSection";
import PriceSection from "@/components/shop-page/filter/PriceSection";
import SizeSection from "@/components/shop-page/filter/SizeSection";
import { Button } from "@/components/ui/button";

const Filters = () => {
  return (
    <>
      <hr className="border-t-black/10" />
      <CategoriesSection />
      <hr className="border-t-black/10" />
      <PriceSection />
      <hr className="border-t-black/10" />
      <ColorsSection />
      <hr className="border-t-black/10" />
      <SizeSection />
      <hr className="border-t-black/10" />
      <DressStyleSection />
      <Button
        type="button"
        className="bg-black w-full rounded-full text-sm font-medium py-4 h-12"
      >
        Apply Filter
      </Button>
    </>
  );
};

export default Filters;