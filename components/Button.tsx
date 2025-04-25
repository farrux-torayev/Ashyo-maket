import { ButtonType } from "@/types/ButtonType";
import React, { FC } from "react";

const Button: FC<ButtonType> = ({ icon, iconPosition, title, extraStyle,onClick }) => {
  return (
    <button onClick={onClick} className={`bg-[#134E9B] text-white font-medium text-[16px] py-[15px] px-[25px] rounded-[6px] flex items-center justify-center gap-[20px] contain-paint duration-300 hover:opacity-80  ${extraStyle}`}>
      {icon && iconPosition == "left" && icon}
      {title}
      {icon && iconPosition == "right" && icon}
    </button>
  );
};

export default Button;
