import React from "react";
import {
  SearchCircleIcon,
  HeartIcon,
  InboxIcon,
  PlusCircleIcon,
  DotsCircleHorizontalIcon,
} from "@heroicons/react/outline";

type Props = {
  image: string;
  des: string;
  name: string;
};

const Posts = ({ image, des, name }: Props) => {
  return (
    <div className="max-w-md md:w-full w-64  mx-auto justify-center items-center">
      <div className="flex justify-between items-center">
        <div className="border-red-600 border-2 rounded-full w-9 h-9 flex  md:space-x-5 items-center my-2 space-x-2">
          <img className="rounded-full w-9 h-9 " src={image} alt="Avatar" />
          <p>{name}</p>
        </div>
        <div>
          <DotsCircleHorizontalIcon className="w-6 h-6 cursor-pointer" />
        </div>
      </div>
      <div className="md:w-[468.4px] md:h-[585.5px] rounded-md flex  ">
        <img
          className="object-fill rounded-md w-full h-full"
          src={image}
          alt="image"
        />
      </div>
      <div className="flex space-x-4 cursor-pointer py-2">
        <HeartIcon className="w-9 h-9" />
        <InboxIcon className="w-9 h-9" />
        <PlusCircleIcon className="w-9 h-9" />
      </div>
      <div className="flex items-center space-x-3">
        <h4 className="font-semibold text-lg">{name}</h4>
        <p>Context = {des}</p>
      </div>
      <div className="flex-col">
        <p>see whole comments</p>
        <div className="flex  items-center justify-between py-3">
          <div className="flex items-center space-x-3">
            <h1 className="font-semibold text-sm">Mertokai</h1>
            <p>✈️💥💪</p>
          </div>
          <div className="cursor-pointer">
            <HeartIcon className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
