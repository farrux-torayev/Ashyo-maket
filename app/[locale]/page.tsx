import React from "react";
import Products from "@/components/Products/Products";
import Brands from "@/modules/Brand";
import Hero from "@/modules/Hero";
import BrandCategory from "@/modules/BrandCategory";

export default function Home() {
  return (
    <>
      <Hero />
      <Brands />
      <Products title="Most popular product" />
      <Products title="Most popular product" />
      <Products title="Sale product" />
      <BrandCategory />
    </>
  );
}
