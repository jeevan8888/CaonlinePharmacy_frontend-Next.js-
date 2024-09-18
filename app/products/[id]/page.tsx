"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductShowCard from "../../../components/ProductShowCard";

export default function ProductPage({ params }: { params: { product: string } }) {
    const [produectID, setProduectID] = React.useState(params.product);
    const [quantity, setQuantity] = React.useState(0);
    const [cartCount, setCartCount] = React.useState(0);
    const [produectData, setProduectData] = React.useState({
        image_url: "",
        product_name: "",
        min_price:  "",
        max_price: "",
        description: "",
        delivery_data: ""
    });
    const [relatedproduectData, setRelatedProduectData] = React.useState([]);
    useEffect(() => {
        const viewProduct = async () => {
            try {
                const data = new FormData();
                data.append("selected_product_id", produectID);
                const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/products/random`, data);
                console.log(response.data);
                setProduectData(response.data.selected_product);
                setRelatedProduectData(response.data.related_products);
            } catch (error) {
            }
        };
        
        viewProduct();
    }, []); 

    const addCard = async () => {
        try {
            const data = new FormData();
            data.append("product_id", produectID);
            data.append("quantity", quantity.toString());
            data.append("cart_count", cartCount.toString());
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/add-to-cart`, data);
            console.log(response.data);
        } catch (error) {
        }
    };

    function IDcon(type: string){
        console.log(type)
        if(type == '+' ){
            setCartCount(parseInt(cartCount.toString(), 10)+1)
        }else{
            if(cartCount==0){
                setCartCount(cartCount)
            }else{
                setCartCount(cartCount-1)
            }
        }
    }
    return (
        <div className='h-[1000px]'>
            <div className="grid grid-cols-2 pt-10 gap-10">
                <div>
                    <img
                        // src={produectData.image_url}
                        src="./image/addreamg.jpg" 
                        className="h-auto min-w-full"
                        alt="product" />
                </div>
                <div>
                    <nav
                        className="relative flex w-full flex-wrap items-center justify-between">
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
                                            href=""
                                            className="motion-reduce:transition-none-none text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition motion-reduce:transition-none"
                                        >A.D.H.D</a>
                                    </li>
                                </ol>
                                <div className="flex flex-row justify-start gap-5">
                                    <ol className="list-reset ms-2 flex gap-2">
                                        <li>
                                            <a
                                                href="#"
                                                className="motion-reduce:transition-none-none transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition motion-reduce:transition-none"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                                                </svg>

                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="motion-reduce:transition-none-none transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition motion-reduce:transition-none"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="motion-reduce:transition-none-none transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition motion-reduce:transition-none"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                                </svg>

                                            </a>
                                        </li>
                                    </ol>
                                </div>
                            </nav>
                        </div>
                    </nav>
                    <div>
                        <div>
                            <h1 className="text-4xl text-black py-2">
                                {produectData.product_name}
                            </h1>
                            <h2 className="text-2xl font-bold text-green-500 py-2">
                                $ {produectData.min_price} - $ {produectData.max_price}
                            </h2>
                            <p className="text-sm py-2">
                                {produectData.description}
                            </p>
                            <p className="text-base font-bold py-2">
                                {produectData.product_name}
                            </p>
                            <p className="text-base py-3">
                                {produectData.delivery_data}
                            </p>
                        </div>
                        <div className="py-3">
                            <div>
                                <span className="text-sm">quantities:</span>
                                <select  
                                    aria-label="category"
                                    defaultValue="A.D.H.D" 
                                    className="w-56 mx-10 h-full p-2 rounded-full focus:outline-none border-2 text-sm text-gray-500"
                                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                                >
                                    <option value="" >choose an option</option>
                                    <option value="30">30pills x 1</option>
                                    <option value="60">60pills x 1</option>
                                    <option value="90">90pills x 1</option>
                                </select>
                            </div>
                            <div className="relative mb-4 flex flex-wrap items-stretch py-2">
                                <div className="pr-3">
                                    <button
                                        className="z-[2] inline-block rounded-l-full border-2 border-primary-100 px-2 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:border-primary hover:bg-primary hover:text-white active:border-primary-accent-200"
                                        data-twe-ripple-init
                                        type="button"
                                        id="button-addon1"
                                        onClick={() => IDcon("-")}
                                    >
                                        -
                                    </button>
                                    <input
                                        type="text"
                                        className="relative w-20 m-0 -ms-px border border-solid border-neutral-200 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none"
                                        placeholder=""
                                        aria-label="Example text with button addon"
                                        aria-describedby="button-addon1" 
                                        onChange={(e) => setCartCount(parseInt(e.target.value))}
                                        value={cartCount}
                                    />
                                    <button
                                        className="z-[2] inline-block rounded-r-full border-2 border-primary-100 px-2 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:border-primary hover:bg-primary hover:text-white active:border-primary-accent-200"
                                        data-twe-ripple-init
                                        type="button"
                                        id="button-addon1"
                                        onClick={() => IDcon("+")}
                                    >
                                        +
                                    </button>
                                </div>
                                <div className="">
                                    <button
                                        type="button"
                                        className="inline-block mx-3 rounded border-2 border-success px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-success transition duration-150 ease-in-out hover:border-success-600 hover:bg-success-50/50 hover:text-success-600 focus:border-success-600 focus:bg-success-50/50 focus:text-success-600 focus:outline-none focus:ring-0 active:border-success-700 active:text-success-700 motion-reduce:transition-none dark:hover:bg-green-950 dark:focus:bg-green-950"
                                        data-twe-ripple-init
                                        onClick={() => addCard()}

                                    >
                                        ADD TO CARD
                                    </button>
                                    <button
                                        type="button"
                                        className="inline-block mx-3 rounded border-2 border-success px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-success transition duration-150 ease-in-out hover:border-success-600 hover:bg-success-50/50 hover:text-success-600 focus:border-success-600 focus:bg-success-50/50 focus:text-success-600 focus:outline-none focus:ring-0 active:border-success-700 active:text-success-700 motion-reduce:transition-none dark:hover:bg-green-950 dark:focus:bg-green-950"
                                        data-twe-ripple-init>
                                        BUY NOW
                                    </button>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <h1 className="text-2xl text-black py-2">
                        RELATED PRODUCTS
                    </h1>
                </div>
                <div className='flex flex-row justify-start pt-5'>
                    {
                        relatedproduectData && relatedproduectData.length > 0 ? 
                            relatedproduectData.map((cutItem, index) => (
                            <ProductShowCard key={index} cutItem={cutItem} />
                            ))
                        :
                        null
                    }
                </div>
            </div>
        </div>
    )
}
