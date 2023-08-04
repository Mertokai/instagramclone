"use client";
import React from "react";
import {
  HomeIcon as Outline,
  SearchCircleIcon,
  HeartIcon as She,
  PlusCircleIcon as Plus,
  VideoCameraIcon,
  InboxIcon,
  FolderIcon,
} from "@heroicons/react/outline";

import Logo from "./Logo";
import { useState } from "react";
import SearchBar from "./SearchBar";
import Meh from "./Meh";

type Props = {};

const SidebarPc = (props: Props) => {
  const [mm, setmm] = useState<boolean>(false);
  const mel = () => {
    setmm(!mm);
  };
  return (
    <div className="inset-y-0 h-screen sticky hidden sm:flex bg-white z-20">
      <div className="md:w-[244px] w-[50px] border-gray-200 border-r-2">
        <div className="w-[220px] flex-col lg:pl-6 space-y-6 py-10 md:pl-2">
          <Logo mm={mm} />
          <Meh Icon={Outline} des="Home" mm={mm} />
          <Meh Icon={SearchCircleIcon} des="Search" mm={mm} mel={mel} />
          <Meh Icon={VideoCameraIcon} des="Discover" mm={mm} />
          <Meh Icon={InboxIcon} des="Messages" mm={mm} />
          <Meh Icon={Plus} des="Notifications" mm={mm} />
          <Meh Icon={FolderIcon} des="Create" mm={mm} />
        </div>
      </div>
      <div
        className={`${
          mm
            ? "w-[397px]  z-10 absolute top-0 left-16 h-full transition-all rounded-r-[20px] border-x-2 border-gray-200 bg-white drop-shadow-xl "
            : "w-[0px]  z-10 relative right-44 transition-all"
        }`}
      >
        {mm ? <SearchBar /> : null}
      </div>
    </div>
  );
};

export default SidebarPc;
