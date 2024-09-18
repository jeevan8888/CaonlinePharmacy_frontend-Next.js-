"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import dynamic from "next/dynamic";

const FilterCard = dynamic(() => import("../../components/FilterCard"), {
    ssr: false,
});
const StockCard = dynamic(() => import("../../components/StockCard"), {
    ssr: false,
});
const Field = dynamic(() => import("../../components/Field"), {
    ssr: false,
});
const ShopCard = dynamic(() => import("../../components/ShopCard"), {
    ssr: false,
});
export default function Shop() {
    let menuItems = [
        "A.D.H.D.",
        "Anti Anxiety",
        "men's Health",
        "Muscle Relaxant",
        "Pain Relief",
        "Sleeping Aids",
        "Weight Loss",
    ]
    const [viewProductData, setviewProductData] = React.useState([]);
    const [totalPageNum, setTotalPageNum] = React.useState(0);
    const [currentPageNum, setCurrentPageNum] = React.useState(1);
    const [itemsPerPage, setItemsPerPage] = React.useState(9);
    const [currentcategory, setCurrentCategory] = React.useState(0);
    const [topRatedProductsList, setTopRatedProductsList] = React.useState([]);

    useEffect(() => {
        const viewProducts = async () => {
            const data = new FormData();
            data.append("page", currentPageNum.toString());
            data.append("itemsPerPage", itemsPerPage.toString());
            data.append("category_name", currentcategory.toString());
            try {
                const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/view-products`, data);
                console.log(response)
                setviewProductData(response.data.products);
                setTotalPageNum(response.data.totalPages);
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

        viewProducts();
        getTopRatedProducts();
    }, []); 
    useEffect(() => {
        const viewProducts = async () => {
            const data = new FormData();
            data.append("page", currentPageNum.toString());
            data.append("itemsPerPage", itemsPerPage.toString());
            data.append("category_name", currentcategory.toString());
            try {
                const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/view-products`, data);
                setviewProductData(response.data.products);
                setTotalPageNum(response.data.totalPages);
            } catch (error) {
            }
        };
        viewProducts();
    }, [currentPageNum, itemsPerPage, currentcategory]);
    return (
        <main className="flex flex-col items-center justify-start min-h-screen">
            <div className="grid grid-cols-4 w-full h-full">
                <div >
                    {
                        menuItems.map((cutItem, index) => {
                            return (
                                <div key={index} className="flex w-72 h-12 border-x-2 border-b-2">
                                    <div className="flex flex-col justify-around items-center w-72 h-12 p-2 text-black text-sm ">
                                        <button 
                                            className="font-bold"
                                            onClick={() => {
                                                setCurrentCategory(index);
                                            }}
                                        >
                                            {cutItem}
                                        </button>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <FilterCard />
                    <StockCard />
                    <Field
                        title={"TOP RATED PRODUCTS"}
                        productData={topRatedProductsList[1]}
                    />
                </div>
                <div className="col-span-3">
                    <div className="p-2">
                        <nav
                            className="relative flex w-full flex-wrap items-center justify-between bg-zinc-50 py-2 shadow-dark-mild lg:py-4">
                            <div className="flex w-full flex-wrap items-center justify-between px-3">
                                <nav className="flex flex-row justify-between w-full rounded-md" aria-label="breadcrumb">
                                    <ol className="list-reset ms-2 flex">
                                        <li>
                                            <a
                                                href="/"
                                                className="motion-reduce:transition-none-none text-black transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition motion-reduce:transition-none"
                                            >Home</a>
                                        </li>
                                        <li>
                                            <span className="mx-2 text-black/60 dark:text-white/60">/</span>
                                        </li>
                                        <li>
                                            <a
                                                href="/shop"
                                                className="motion-reduce:transition-none-none text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition motion-reduce:transition-none"
                                            >Shop</a>
                                        </li>
                                    </ol>
                                    <div className="flex flex-row justify-start gap-5">
                                        <ol className="list-reset ms-2 flex">
                                            <span className="font-bold pr-3">show:</span>
                                            <li>
                                                <button
                                                    onClick={() => {
                                                        setItemsPerPage(9);
                                                    }}
                                                    className="motion-reduce:transition-none-none text-black transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition motion-reduce:transition-none"
                                                >9</button>
                                            </li>
                                            <li>
                                                <span className="mx-2 text-black/60">\</span>
                                            </li>
                                            <li>
                                                <button
                                                    onClick={() => {
                                                        setItemsPerPage(12);
                                                    }}
                                                    className="motion-reduce:transition-none-none text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80"
                                                >12</button>
                                            </li>
                                            <li>
                                                <span className="mx-2 text-black/60 dark:text-white/60">\</span>
                                            </li>
                                            <li>
                                                <button
                                                    onClick={() => {
                                                        setItemsPerPage(18);
                                                    }}
                                                    className="motion-reduce:transition-none-none text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80"
                                                >18</button>
                                            </li>
                                            <li>
                                                <span className="mx-2 text-black/60 dark:text-white/60">\</span>
                                            </li>
                                            <li>
                                                <button
                                                    onClick={() => {
                                                        setItemsPerPage(24);
                                                    }}
                                                    className="motion-reduce:transition-none-none text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80"
                                                >24</button>
                                            </li>
                                        </ol>
                                        <ol className="list-reset ms-2 flex gap-2">
                                            <li>
                                                <a
                                                    href="#"
                                                    className="motion-reduce:transition-none-none transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80"
                                                >
                                                    <svg className="w-[25px] h-[25px] fill-[#414141]" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">

                                                        <path d="M448 96V224H288V96H448zm0 192V416H288V288H448zM224 224H64V96H224V224zM64 288H224V416H64V288zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"></path>

                                                    </svg>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="motion-reduce:transition-none-none transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80"
                                                >
                                                    <svg className="w-[25px] h-[25px] fill-[#414141]" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">

                                                        <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm88 64v64H64V96h88zm56 0h88v64H208V96zm240 0v64H360V96h88zM64 224h88v64H64V224zm232 0v64H208V224h88zm64 0h88v64H360V224zM152 352v64H64V352h88zm56 0h88v64H208V352zm240 0v64H360V352h88z"></path>

                                                    </svg>
                                                </a>
                                            </li>
                                        </ol>
                                        <select aria-label="category" defaultValue="A.D.H.D" className="h-full pl-2 pr-2 focus:outline-none border-l-2 border-r-2 text-sm text-gray-500">
                                            <option value="A.D.H.D" >Sort by popularity</option>
                                            <option value="A.D.H.D">Sort by average rating</option>
                                            <option value="Anti Anxiety">Sort by latest</option>
                                            <option value="Muscle Relaxant">Sort by price:low to high</option>
                                            <option value="Pain Relief">Sort by price:high to low</option>
                                        </select>
                                    </div>
                                </nav>
                            </div>
                        </nav>
                    </div>
                    <div className="flex flex-row justify-between flex-wrap p-2">
                        {
                            viewProductData.map((cutItem, index)=>{
                                return (
                                    <ShopCard key={index} cutItem = {cutItem} />
                                )
                            })
                        }
                    </div>
                    <div className='flex flex-row justify-center p-5'>
                        <nav aria-label="Page navigation example">
                            <ul className="list-style-none flex">
                                <li>
                                    <a
                                        className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-surface transition duration-300 hover:bg-neutral-100 focus:bg-neutral-100 focus:text-primary-700 focus:outline-none active:bg-neutral-100 active:text-primary-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:focus:text-primary-500 dark:active:bg-neutral-700 dark:active:text-primary-500"
                                        href="#"
                                        aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                    </a>
                                </li>
                                {
                                    Array.from({ length: totalPageNum }).map((_, index) => (
                                        <li key={index}>
                                          <button
                                            className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-surface transition duration-300 hover:bg-neutral-100 focus:bg-neutral-100 focus:text-primary-700 focus:outline-none active:bg-neutral-100 active:text-primary-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:focus:text-primary-500 dark:active:bg-neutral-700 dark:active:text-primary-500 hover:cursor-pointer"
                                            onClick={() => {
                                                setCurrentPageNum(index);
                                            }}
                                          >
                                            {index + 1} 
                                          </button>
                                        </li>
                                    ))
                                }
                                <li>
                                    <a
                                        className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-surface transition duration-300 hover:bg-neutral-100 focus:bg-neutral-100 focus:text-primary-700 focus:outline-none active:bg-neutral-100 active:text-primary-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:focus:text-primary-500 dark:active:bg-neutral-700 dark:active:text-primary-500"
                                        href="#"
                                        aria-label="Next"
                                        ><span aria-hidden="true">&raquo;</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </main>
    );
}
