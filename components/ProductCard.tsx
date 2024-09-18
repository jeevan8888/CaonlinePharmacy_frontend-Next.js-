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
const ProductCard: React.FC<CardProps> = ({ cutItem }) => {
    const router = useRouter();

    const handleClickItem = () => {
        router.push(`/products/${cutItem.id}`);
    }

    return (
        <div className="flex w-72 h-20 pb-2 mb-2 border-b-2">
            <div className="w-20 h-20 p-2">
                <a onClick={handleClickItem} className="cursor-pointer">
                    <img src={cutItem.image_url}  alt="image"/>
                </a>
            </div>
            <div className="flex flex-col justify-around w-44 h-20 p-2 text-black text-sm">
                <a onClick={handleClickItem} className="cursor-pointer"><p className="">{cutItem.product_name}</p></a>
                <p className="text-green-500 font-bold">$ {cutItem.min_price}- $ {cutItem.max_price}</p>
            </div>
        </div>
    )
}

export default ProductCard;
