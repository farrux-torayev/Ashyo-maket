import React from "react";
import Products from "@/components/Products/Products";
import Brands from "@/modules/Brand";
import Hero from "@/modules/Hero";
import BrandCategory from "@/modules/BrandCategory";
import Musics from "@/modules/Musics";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <>
      <Hero />
      <Brands />
      <Products title="Most popular product" />
      <Products title="Most popular product" />
      <Products title="Sale product" />
      <BrandCategory />
      <Products title="Aksiyadagi tovarlar"/>
      <Musics/>
      <Products title="Oxirgi ko’rgan mahsulotlar"/>
      <ToastContainer position="top-right" />
    </>
  );
}
