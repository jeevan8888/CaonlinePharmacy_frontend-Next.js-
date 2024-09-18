import { link } from "fs";
import React from "react";

interface ButtonPicProps {
  imgUrl: string;
  linkurl: string;
  name: string;
  priceMin: number;
  priceMax: number;
}

const Offering: React.FC<ButtonPicProps> = ({
  imgUrl,
  linkurl,
  name,
  priceMin,
  priceMax,
}) => {
  return (
    <div className=" flex justify-start items-center">
      <div className=" flex justify-center items-center">
        <a
          href={linkurl}
          className=" flex justify-center items-center w-full h-auto cursor-pointer"
        >
          <img
            src={imgUrl}
            style={{ width: "65px", height: "54px" }}
            alt="Image"
          />
        </a>
      </div>
      <div className="flex flex-col justify-start items-start ml-3">
        <a href="./">
          <div className=" flex justify-start items-start text-base font-semibold">
            {name}
          </div>
        </a>
        <div className=" flex justify-start items-start text-base font-semibold text-green-500">
          ${priceMin} - ${priceMax}
        </div>
      </div>
    </div>
  );
};

export default Offering;
