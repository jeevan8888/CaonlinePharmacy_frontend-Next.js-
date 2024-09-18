"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import dynamic from "next/dynamic";
import ProductShowCard from "../components/ProductShowCard";
import BestSellerCard from "../components/BestSellerCard";
import Carousel from '../components/Carousel';
import Card from "../components/Card";

const Field = dynamic(() => import("../components/Field"), {
  ssr: false,
});

export default function Home() {
  let menuItems = [
    "A.D.H.D.",
    "Anti Anxiety",
    "men's Health",
    "Muscle Relaxant",
    "Pain Relief",
    "Sleeping Aids",
    "Weight Loss",
  ]
  let cartData = [
    {
      'title' : 'US to US shipping',
      'content' : '2 to 9 business days',
    },
    {
      'title' : 'Join Risk Free',
      'content' : '30 days refund',
    },
    {
      'title' : 'Support 24/7',
      'content' : 'Online 24 hours',
    },
    {
      'title' : '100% Safe',
      'content' : 'Secure shopping',
    },
  ]
  const [productData, setProductData] = React.useState([]);
  const [topRatedProductsList, setTopRatedProductsList] = React.useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/get-products`);
        setProductData(response.data[0]);
      } catch (error) {
      }
    };
    const getTopRatedProducts = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/get-top-rated-products`);
        setTopRatedProductsList(response.data);
      } catch (error) {
      }
    };
    getProducts();
    getTopRatedProducts()
  }, []); 
  return (
    <main className="flex flex-col items-center justify-start min-h-screen">
      <div className="grid grid-cols-4 w-full">
        <div >
        {
            menuItems.map((tmp, index) => {
                return (
                    <div key={index} className="flex w-72 h-12 border-x-2 border-b-2">
                        <div className="flex flex-col justify-around items-center w-72 h-12 p-2 text-black text-sm ">
                            <button 
                                className="font-bold"
                                // onClick={() => {
                                //     setCurrentCategory(index);
                                // }}
                            >
                                {tmp}
                            </button>
                        </div>
                    </div>
                )
            })
        }
          <Field 
            title = {"Top Rated"}
            productData = {topRatedProductsList[1]}
          />
          <Field 
            title = {"Products"}
            productData = {productData}
          />
        </div>
        <div className="col-span-3">
          <Carousel />
          <div className="flex flex-row justify-between py-8">
            {
              cartData.map((tmp, index) => {
                return (
                  <Card key={index} cutItem={tmp} />
                )
              })
            }
          </div>
          <div className="flex flex-row justify-between flex-wrap">
            <div className="w-full p-8">
              <p className="text-2xl">Product Showcase</p>
            </div>
            {
              productData && productData.length > 0 ? 
                productData.slice(0, 12).map((tmp, index) => (
                  <ProductShowCard key={index} cutItem={tmp} />
                ))
                :
                null
            }
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between flex-wrap py-8">
        <div className="w-full p-8">
          <p className="text-2xl">Product Showcase</p>
        </div>
        {
          productData && productData.length > 0 ? 
            productData.slice(0, 10).map((tmp, index) => (
              <ProductShowCard key={index} cutItem={tmp} />
            ))
            :
            null
        }
      </div>
      <div className="flex flex-row justify-between flex-wrap py-8">
        <div className="w-full p-8">
          <p className="text-2xl">Best Sellers</p>
        </div>
        <BestSellerCard />
        <BestSellerCard />
        <BestSellerCard />
        <BestSellerCard />
      </div>
    </main>
  );
}
