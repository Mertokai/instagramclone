import React from "react";

type Props = {
  Icon: any;
  des: string;
  mm: boolean;
  mel?: () => void;
};

const Meh = ({ Icon, des, mm, mel }: Props) => {
  return (
    <div
      onClick={mel}
      className="group flex md:space-x-4 items-center rounded-lg md:hover:bg-gray-200 py-2 px-1 cursor-pointer"
    >
      <div className="w-7 h-8 group-hover:scale-110 hover:bg-gray-200 flex justify-center items-center rounded-lg px-[2px] py-[2px]">
        {<Icon />}
      </div>
      {!mm ? <div className="md:flex hidden">{des}</div> : null}
    </div>
  );
};

export default Meh;
