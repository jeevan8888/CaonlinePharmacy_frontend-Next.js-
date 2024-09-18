"use client";
import React, { useState }from "react";
import Dropdown from './Dropdown';
import OffCanvas from './SiginOffCanvas/OffCanvas';
import CardOffCanvas from './CardOffCanvas';
import Image from 'next/image';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isCard, setIsCard] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
    const toggleCard = () => {
        setIsCard(!isCard);
      };
	return (
		<header className="flex flex-col w-full ">
			<div className="flex items-center h-[42px] text-xs ">
				Welcome to Caonlinepharmacy.com
			</div>
			<div className="flex flex-row justify-between items-center w-full h-[105px] gap-2">
                <div className="flex flex-row items-center" >
                    <a href="/" className="cursor-pointer">
                        <img
                            alt="logo"
                            src="/image/logo.webp"
                            style={{ width: "100%" ,height:"100%" }}
                        />
                    </a>
                </div>
				<div className="w-[54%] pt-0 ps-2">
					<div className="flex flex-row items-center w-full h-[46px] border-2 border-gray-300 rounded-full">
						<input 
                            aria-label="search"
                            className="w-[68%] h-[40px] text-sm focus:outline-none rounded-l-full pl-4"
                        ></input>
						<select  
                            aria-label="search"
                            defaultValue="A.D.H.D" className="h-full pl-2 pr-2 focus:outline-none border-l-2 border-r-2 text-sm text-gray-500">
							<option value="A.D.H.D" >A.D.H.D</option>
							<option value="A.D.H.D">Anti Anxiety</option>
							<option value="Anti Anxiety">Men&apos;s Health</option>
							<option value="Muscle Relaxant">Muscle Relaxant</option>
							<option value="Pain Relief">Pain Relief</option>
							<option value="Sleeping Aids">Sleeping Aids</option>
							<option value="Weight Loss">Weight Loss</option>
						</select>
						<button
                            aria-label="toggle"
                            className="size-10 ml-3 rounded-full text-white bg-[#16a34a] hover:bg-[#318531]"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="p-2 size-10">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </button>
					</div>
				</div> 
                <div className="flex flex-row items-center ">
                    <a className="px-2 cursor-pointer" href="#">ABOUT US</a>|
                    <a className="px-2 cursor-pointer" href="#">CONTACT US</a>
                </div>
			</div>
            <div className="flex items-center justify-between h-[56px] text-base ">
                <div className="flex items-center">
                    <Dropdown />
                </div>
                <div className="flex justify-center">
                    <a href="/" className="px-3 text-base font-bold hover:text-[#16a34a]">Home</a>
                    <a href="/shop" className="px-3 text-base font-bold hover:text-[#16a34a]">SHOP</a>
                    <a href="/about" className="px-3 text-base font-bold hover:text-[#16a34a]">ABOUT US</a>
                    <a href="contact" className="px-3 text-base font-bold hover:text-[#16a34a]">CONTACT US</a>
                    <a href="faq" className="px-3 text-base font-bold hover:text-[#16a34a]">FAQ</a>
                    <a href="orders" className="px-3 text-base font-bold hover:text-[#16a34a]">ORDERSTRACKING</a>
                </div>
                <div className="flex items-center">
                    <button
                        aria-label="toggle"
                        className="size-11 mx-1 rounded-full text-white bg-[#16a34a] hover:bg-[#166534]"
                        type="button"
                        onClick={toggleMenu}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-11">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                    </button>
                    <button
                        className="h-11 w-28 text-white flex rounded-full bg-[#16a34a] hover:bg-[#166534]"
                        type="button"
                        onClick={toggleCard}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="m-1 size-9 p-2 rounded-full bg-white text-black">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                        <span className="p-2">$0.00</span>
                    </button>
                </div>
			</div>
            <OffCanvas isOpen={isOpen} toggleMenu={toggleMenu} />
            <CardOffCanvas isCard={isCard} toggleCard={toggleCard} />
		</header>
	)
}

export default Header;
