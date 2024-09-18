"use client";
import { useEffect } from "react";
import ProductCard from "./ProductCard";

import {
    Ripple,
    initTWE,
} from "tw-elements";

initTWE({ Ripple });
const FilterCard = () => {
  return (
    <div
    className="block w-72 py-3 my-1 rounded-lg bg-white text-surface shadow-secondary-1">
        <h2 className="mb-2 ml-5 text-xl text-black font-bold font-medium leading-tight">FILTER BY PRICE</h2>
        
    </div>
  );
};

export default FilterCard;