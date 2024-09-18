import React from "react";

interface CardProps {
    item: string,
    index: string,
}
const MenuItem: React.FC<CardProps> = ({ item, index }) => {
    return (
        <div className="flex w-72 h-12 border-x-2 border-b-2">
            <div className="flex flex-col justify-around items-center w-72 h-12 p-2 text-black text-sm ">
                <button 
                    className="font-bold"
                    onClick={() => {
                        // setCurrentCategory(index);
                    }}
                >{ item }</button>
            </div>
        </div>
    )
}

export default MenuItem;