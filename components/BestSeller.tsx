import React from "react";

interface ButtonPicProps {
    linkurl: string;
    stock: number;
    category: string;
}

const BestSellerCard: React.FC<ButtonPicProps> = ({
    linkurl,
    stock,
    category,
}) => {
  return (
    <a href={linkurl}>
      <div className="group/item relative flex flex-row justify-center items-center size-72 overflow-hidden bg-cover bg-no-repeat hover:cursor-pointer">
        <img
          src="./image/bestSeller.webp"
          className="group/img transition duration-400 ease-in-out group-hover/item:scale-110"
          alt="Louvre"
        />
        <div className="group/btn absolute flex flex-row justify-between items-center transition duration-50 ease-in-out h-10 text-white font-semibold bg-green-600 opacity-100 group-hover/item:opacity-0">
          <span className="mx-4 text-xl">{category}</span>
        </div>
        <div className="group/back absolute flex flex-row justify-between items-center size-72 transition duration-100 ease-in-out bg-black opacity-0 group-hover/item:opacity-40"></div>
        <div className="group/btn absolute flex flex-row justify-between items-center transition duration-300 delay-100 ease-in h-10 text-white font-semibold group-hover/item:duration-500 opacity-0 group-hover/item:opacity-100">
          <span className="mx-4 text-xl">{stock} Products</span>
        </div>
      </div>
    </a>
  );
};

export default BestSellerCard;
