import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
type Props = {};

const SearchBar = (props: Props) => {
  return (
    <div className="bg-white z-20 ">
      <div className="flex flex-col h-[170px]  border-b-2 border-gray-200 pl-5 space-y-8 pt-11 ">
        <h4 className="font-semibold text-xl">Search</h4>
        <input
          className="h-[40px] w-10/12 mx-auto mb-5 rounded-r-lg bg-gray-200 focus:outline-none"
          type="text"
          placeholder="Search"
        />
        <div className="bg-gray-200 h-[40px] w-9 absolute top-[72px] rounded-l-lg left-[15px] flex justify-center items-center">
          <MagnifyingGlassIcon className=" w-6 h-6" />
        </div>
      </div>
      <div>
        <h4 className="text-lg pl-8 pt-5">Recent Researches</h4>
        <h5 className="absolute bottom-72  left-40 ">None</h5>
      </div>
    </div>
  );
};

export default SearchBar;
