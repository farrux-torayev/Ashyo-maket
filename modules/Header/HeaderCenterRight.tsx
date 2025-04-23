import { CompareIcon, LikeIcon, ProfileIcon, ShopIcon } from "@/assets/icons";
import HeaderRight from "@/components/HeaderRight";
import { HeaderRightType } from "@/types/HeaderCenter";
import React from "react";

const HeaderCenterRight = () => {
  const avctionList = [
    {
      id: 1,
      icon: <CompareIcon />,
      actionCount: 2,
    },
    {
      id: 2,
      icon: <LikeIcon />,
      actionCount: 11,
    },
    {
      id: 3,
      icon: <ShopIcon />,
      actionCount: 7,
    },
    {
      id: 4,
      icon: <ProfileIcon />,
      actionCount: 0,
    },
  ];
  return (
    <div className="flex gap-[15px]">
      {avctionList.map((item: HeaderRightType) => (
        <HeaderRight key={item.id} actionCount={item.actionCount} icon={item.icon} />
      ))}
    </div>
  );
};

export default HeaderCenterRight;
