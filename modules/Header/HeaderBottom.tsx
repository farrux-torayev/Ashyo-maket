"use client";

import { getCategories } from "@/service/getCategories";

const HeaderBottom = () => {
  const { data, isLoading, isError } = getCategories();

  if (isLoading) return <div>Yuklanmoqda...</div>;
  if (isError) return <div>Xatolik yuz berdi</div>;

  return (
    <ul className="flex containers justify-between">
      {data?.map((category) => (
        <li key={category.id}>{category.name}</li>
      ))}
    </ul>
  );
};

export default HeaderBottom;
