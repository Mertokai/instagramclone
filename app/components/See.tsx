import React from "react";

type Props = {};

const See = (props: Props) => {
  return (
    <div className="h-[232px] w-64 md:w-10/12 justify-center flex items-center flex-col space-y-2 border-gray-200 border-y-2 px-4 max-w-md mx-auto">
      <img className="w-32 h-32" src="boşver.png" alt="" />
      <p className="text-xl">You Saw Everything</p>
      <p className="text-lg text-blue-500">See old posts</p>
    </div>
  );
};

export default See;
