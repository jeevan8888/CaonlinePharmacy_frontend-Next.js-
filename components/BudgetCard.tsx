import React from "react";
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface BudgetCardProps {
  item: {
    id: number; // Assuming item.id is of type number
    image_url: string;
    product_name: string;
    total_price: number;
    // Add other properties of 'item' as needed
  };
  toggleCard: () => void; // Assuming toggleCard is a function with no parameters and returns void
}


const BudgetCard: React.FC<BudgetCardProps> = ({ item, toggleCard }) => {
    const router = useRouter();

    const handleClickItem = () => {
        router.push(`/products/${item.id}`);
    }
    return (
        <div className="flex w-72 h-20 pb-2 mb-2 border-b-2">
            <div className="w-20 h-20 p-2">
                <a onClick={() => {handleClickItem(),toggleCard()}} className="cursor-pointer"><img alt="imgae" src={item.image_url} /></a>
            </div>
            <div className="flex flex-col justify-around w-44 h-20 p-2 text-black text-sm">
                <a onClick={() => {handleClickItem(),toggleCard() }} className="cursor-pointer"><p className="">{item.product_name}</p></a>
                <p className="text-green-500 font-bold">$ {item.total_price}</p>
            </div>
        </div>
    )
}

export default BudgetCard;
