import React from "react";
import {
  HomeIcon as Outline,
  MagnifyingGlassIcon as Search,
  HeartIcon as She,
  PlusCircleIcon as Plus,
} from "@heroicons/react/24/outline";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div className="flex w-full bg-white sticky bottom-0 h-[48px] justify-center items-center space-x-5 z-40 border-t-2 border-gray-100 sm:hidden ">
      <Outline className="h-3/4" />
      <She className="h-3/4" />
      <Plus className="h-3/4" />
    </div>
  );
};

export default Sidebar;
