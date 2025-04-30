"use client";
import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./styles.css";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { getProducts } from "@/service/getProducts";
import { ProductsType } from "@/types/ProductsType";
import ProductItem from "./ProductItem";

const Products:FC<{title:string}> = ({title}) => {
  const { data: products } = getProducts();

  return (
    <div className="products pb-[80px]">
      <div className="containers !mb-[50px] ">
        <h2 className="text-black text-[32px] font-bold leading-[130%]">
          {title}
        </h2>
      </div>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation]}
        className=""
      >
        {products.map((item: ProductsType) => (
          <SwiperSlide>
            <ProductItem item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Products;
