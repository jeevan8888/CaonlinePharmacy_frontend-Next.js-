import React from "react";
interface CardProps {
    cutItem: {
      title: string;
      content: string;
    };
  }
  
const Card: React.FC<CardProps> = ({ cutItem }) => {
    return (
        <div className="w-56 h-16 flex">
            <div className="p-2 size-16">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-12 text-green-600">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>
            </div>
            <div className="flex flex-col justify-around w-40 h-16 p-2 text-black text-sm">
                <p className="font-bold">{cutItem.title}</p>
                <p className="">{cutItem.content}</p>
            </div>
        </div>
    )
}

export default Card;