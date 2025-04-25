"use client";
import { Context } from "@/context/Context";
import { getCategories } from "@/service/getCategories";
import { HeaderRightType } from "@/types/HeaderCenter";
import { Item } from "@radix-ui/react-select";
import React, { useContext } from "react";

const HeaderPopapCategory = () => {
  const { setShowCategory, showCategory } = useContext(Context);
  const { data:categories, isLoading } = getCategories();
  return (
    <div
      className={`${
        showCategory ? "h-[570px]" : "h-0"
      } w-full duration-300   absolute flex shadow-xl bg-white top-[102px]`}
    >
      <div className="w-[30%] bg-[#EBEFF3]">
      </div>
      <div className="w-[70%] bg-white"></div>
    </div>
  );
};

export default HeaderPopapCategory;
