"use client";
import { useEffect } from "react";
import ProductCard from "./ProductCard";

import {
  Ripple,
  initTWE,
} from "tw-elements";

initTWE({ Ripple });

interface FieldProps {
  title: string;
  productData: any[]; // Array of Product objects
}

const Field : React.FC <FieldProps> = ({ title, productData }) => {

  let count = 0
  return (
    <div
      className="block w-72 py-6 my-3 rounded-lg bg-white text-surface shadow-secondary-1">
      <h4 className="mb-2 ml-5 text-xl text-black font-bold font-medium leading-tight">{title}</h4>
      {
        productData?.map((cutItem, index) => {
          count++
          if (count < 8) {
            return (
              <ProductCard key={index} cutItem={cutItem} />
            )
          }
        })
      }
    </div>
  );
};

export default Field;