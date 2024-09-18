import React from "react";
import Image from 'next/image';

interface ButtonPicProps {
  imgUrl: string;
  selectUrl: string;
  searchUrl: string;
  name: string;
  category: string;
  priceMin: number;
  priceMax: number;
}

const ButtonPic: React.FC<ButtonPicProps> = ({
  imgUrl,
  selectUrl,
  searchUrl,
  name,
  category,
  priceMin,
  priceMax,
}) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="  flex justify-center  relative group cursor-pointer overflow-hidden duration-500 w-64 h-80 bg-zinc-800 text-gray-50">
        <img src={imgUrl} className="flex w-full h-full" alt="image" />
        <div className="">
          <div className="absolute w-56 left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12">
            <div className="absolute -z-10 left-0 w-64 h-28 opacity-0 duration-500 group-hover:opacity-100 group-hover:bg-green-500"></div>

            <div className="flex justify-center items-center h-10 group-hover:opacity-100 w-56 duration-500 opacity-0 ">
              <a href={selectUrl}>SELECT OPTION</a>
            </div>
          </div>
          {/* sencond button */}
          <div className="absolute w-56 left-56 top-8 duration-500 group-hover:-translate-x-12">
            <div>
              <a href={searchUrl}>
                <img
                  src="./image/search.png"
                  alt="image"
                  className="right-2 top-5 w-12 h-full group-hover:opacity-100 duration-500 opacity-0 "
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center text-base font-semibold">
        {name}
      </div>
      <div className=" flex justify-center items-center text-sm text-gray-500">
        {category}
      </div>
      <div className=" flex justify-center items-center text-base text-green-600 font-semibold">
        ${priceMin} - $ {priceMax}
      </div>
    </div>
  );
};

export default ButtonPic;
