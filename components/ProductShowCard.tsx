import React from "react";
import { useRouter } from 'next/navigation';

interface CardProps {
    cutItem: {
        image_url: string;
        product_name: string;
        id: string;
        category_name: string;
        min_price: string;
        max_price: string;
    };
  }
const Card: React.FC<CardProps> = ({ cutItem }) => {
    const router = useRouter();

    const handleClickItem = () => {
        router.push(`/products/${cutItem.id}`);
    }
    return (
        <div className="flex flex-col items-center w-52 h-64 mx-2 mb-2">
            <style>
                {`
                    a {
                        pointer-events: all !important;
                        z-index: 1000;
                    }
                `}
            </style>
            <div className="group/item relative flex flex-row justify-center items-center w-52 h-48 overflow-hidden bg-cover bg-no-repeat">
                <img src={cutItem.image_url} alt={cutItem.product_name} className="w-full h-full object-cover" />
                <div className="group/back absolute flex flex-row justify-between items-center w-full h-full transition duration-100 ease-in-out bg-black opacity-0 group-hover/item:opacity-40">
                {/* Content can go here if needed */}
                </div>
                <div className="group/search absolute flex flex-row justify-between items-center top-1 right-1 text-white font-semibold opacity-0 group-hover/item:opacity-100 transition duration-500">
                <button aria-label="a">
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="p-2 w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </button>
                </div>
                <div className="group/btn absolute flex flex-row justify-center items-center text-white font-semibold opacity-0 group-hover/item:opacity-100 transition duration-500 hover:cursor-pointer w-full h-full">
                <a onClick={handleClickItem} className="flex flex-row justify-center items-center w-20 h-15 px-1 border-2 border-white text-sm">
                    <span>SELECT OPTIONS</span>
                </a>
                </div>
                <div className="group/child absolute flex flex-row justify-between items-center text-white font-semibold opacity-0 group-hover/btn:opacity-100 transition duration-500">
                <button aria-label="a" className="w-20 h-13 border-2 border-white text-sm">
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                </button>
                </div>
            </div>
            <div className="flex flex-col items-center mt-2">
                <p className="text-center">{cutItem.product_name}</p>
                <p className="text-current">{cutItem.category_name}</p>
                <p className="text-green-500">$ {cutItem.min_price} - $ {cutItem.max_price}</p>
            </div>
        </div>
    )
}


export default Card;