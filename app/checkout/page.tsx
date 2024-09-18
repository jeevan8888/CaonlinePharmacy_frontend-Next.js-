


import React from "react";
import { Checkbox } from "@nextui-org/react";
import Image from 'next/image';


const Checkout = () => {
    return (
        <div className="flex  justify-center items-center mb-56">
            <div className=" grid container grid-cols-2">
                <div className=" grid-cols-1 md:grid-cols-2">
                    <form>
                        <div className="grid gap-6 mb-6 md:grid-cols-2 mt-20 ">
                            <div>
                                <label
                                    htmlFor="first_name"
                                    className="block mb-2 font-base text-xl text- text-gray-900"
                                >
                                    First name<p className=" text-red-400 inline"> *</p>
                                </label>
                                <input
                                    type="text"
                                    id="first_name"
                                    className=" border border-gray-300 text-gray-900 text-xl  focus:ring-blue-500 focus:border-blue-500 rounded-3xl block w-full p-2.5"
                                    placeholder="First name"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="last_name"
                                    className="block mb-2 base text-xl text-gray-900 "
                                >
                                    Last name<p className=" text-red-400 inline"> *</p>
                                </label>
                                <input
                                    type="text"
                                    id="last_name"

                                    className=" border border-gray-300 text-gray-900 text-xl  focus:ring-blue-500 focus:border-blue-500 rounded-3xl block w-full p-2.5"
                                    placeholder="Last name"
                                    required
                                />
                            </div>
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="company"
                                className="block mb-2 base text-xl text-gray-900 "
                            >
                                Company name (optional)
                            </label>
                            <input
                                type="text"
                                id="company"
                                className=" border border-gray-300 text-gray-900 text-xl  focus:ring-blue-500 focus:border-blue-500 rounded-3xl block w-full p-2.5 "
                                placeholder=""

                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="country"
                                className="block mb-2 base text-xl text-gray-900 "
                            >
                                Country/Region<p className=" text-red-400 inline"> *</p>
                            </label>
                            <input
                                type="text"
                                id="country"
                                className=" border border-gray-300 text-gray-900 text-xl  focus:ring-blue-500 focus:border-blue-500 rounded-3xl block w-full p-2.5"
                                placeholder="United States (US)"
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="house"
                                className="block mb-2 base text-xl text-gray-900 dark:text-white"
                            >
                                Street address<p className=" text-red-400 inline"> *</p>
                            </label>
                            <input
                                type="text"
                                id="house"
                                className=" border border-gray-300 text-gray-900 text-xl  focus:ring-blue-500 focus:border-blue-500 rounded-3xl block w-full p-2.5"
                                placeholder="House number and street name"
                            />
                        </div>
                        <div className="mb-6">
                            <input
                                type="text"
                                id="house"
                                className=" border border-gray-300 text-gray-900 text-xl  focus:ring-blue-500 focus:border-blue-500 rounded-3xl block w-full p-2.5"
                                placeholder="Apartment, suite, unit, etc. (optional)"
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="town"
                                className="block mb-2 base text-xl text-gray-900 dark:text-white"
                            >
                                Town/City<p className=" text-red-400 inline"> *</p>
                            </label>
                            <input
                                type="text"
                                id="town"
                                className=" border border-gray-300 text-gray-900 text-xl  focus:ring-blue-500 focus:border-blue-500 rounded-3xl block w-full p-2.5"
                                placeholder=""
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="state"
                                className="block mb-2 base text-xl text-gray-900 dark:text-white"
                            >
                                State<p className=" text-red-400 inline"> *</p>
                            </label>
                            <input
                                type="text"
                                id="state"
                                className=" border border-gray-300 text-gray-900 base text-xl  focus:ring-blue-500 focus:border-blue-500 rounded-3xl block w-full p-2.5"
                                placeholder="Kentucky"
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="zipcode"
                                className="block mb-2 base text-xl text-gray-900 dark:text-white"
                            >
                                ZIP Code<p className=" text-red-400 inline"> *</p>
                            </label>
                            <input
                                type="text"
                                id="zipcode"
                                className=" border border-gray-300 text-gray-900 text-xl  focus:ring-blue-500 focus:border-blue-500 rounded-3xl block w-full p-2.5"
                                placeholder=""
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="phone"
                                className="block mb-2 base text-xl text-gray-900 dark:text-white"
                            >
                                Phone<p className=" text-red-400 inline"> *</p>
                            </label>
                            <input
                                type="text"
                                id="phone"
                                className=" border border-gray-300 text-gray-900 text-xl  focus:ring-blue-500 focus:border-blue-500 rounded-3xl block w-full p-2.5"
                                placeholder=""
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="email"
                                className="block mb-2 base text-xl text-gray-900 dark:text-white"
                            >
                                Email address<p className=" text-red-400 inline"> *</p>
                            </label>
                            <input
                                type="text"
                                id="email"
                                className=" border border-gray-300 text-gray-900  text-xl  focus:ring-blue-500 focus:border-blue-500 rounded-3xl block w-full p-2.5"
                                placeholder=""
                            />
                        </div>
                    </form>
                    <div className="flex items-center mb-4">

                        <label htmlFor="checkbox" className="text-xl"><input type="checkbox" value="" className=" w-4 h-4 mr-3 text-blue-500  bg-gray-100 border-gray-300"></input>Ship to another address?</label>
                    </div>

                    <div className="">
                        <label htmlFor="orderNotes" className=" text-xl">
                            Order notes (optional)
                        </label>
                        <textarea
                            id="orderNotes"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-xl focus:ring-blue-500 focus:border-blue-500 rounded-3xl block h-44 w-full p-2.5"
                            placeholder="Notes about your order, e.g. special notes for delivery"
                        />
                    </div>

                    <div className="flex justify-start items-center mb-4 mt-4">

                        <label htmlFor="agree" className="text-xl"> <input type="checkbox" value="" className=" w-4 h-4 mr-3 text-blue-500 bg-gray-100 border-gray-300"></input> Yes, I am ok with you sending me additional newsletter and email content (optional)</label>
                    </div>
                </div>
                <div className="flex flex-col px-10 w-full justify-start items-center mt-10 bg-neutral-50">
                    <div className="flex justify-center items-center mb-5 text-2xl font-bold ">
                        YOUR ORDER
                    </div>


                    <div className="flex flex-col w-full items-center bg-white">
                        <div className="flex justify-between w-full items-center  border-b-2 border-gray-400">
                            <div className=" flex justify-start items-center my-3 text-xl font-semibold">
                                PRODUCT
                            </div>
                            <div className=" flex justify-start items-center text-xl font-semibold">
                                SUBTOTAL
                            </div>
                        </div>
                        <div className="flex justify-between w-full items-center  border-b-2 border-gray-200">
                            <div className=" flex justify-start items-center mb-3 mt-3 font-light text-xl">
                                Alprazolam (Ksalol) 1mg - 60 pills x 1  × 1

                            </div>
                            <div className=" flex justify-start items-center font-light text-xl">
                                $407.00
                            </div>

                        </div>
                        <div className="flex justify-between w-full items-center border-b-1 border-gray-200">
                            <div className=" flex justify-start items-center pb-3 mt-3 border-b-2 font-light text-xl">
                                Ambien (Zoltrate) 10mg - 30 pills x 1  × 2


                            </div>
                            <div className=" flex justify-start items-center font-light text-xl">
                                $594.00

                            </div>

                        </div>
                        <div className="flex justify-between w-full items-center pb-3 mt-3 border-b-2 border-gray-200">
                            <div className=" flex justify-start items-center font-light text-xl">
                                Aspadol (HAB)100mg - 60 pills x 1  × 1



                            </div>
                            <div className=" flex justify-start items-center font-light text-xl">
                                $407.00

                            </div>

                        </div>
                        <div className="flex justify-between w-full items-center pb-3 mt-3 border-b-2 border-gray-200">
                            <div className=" flex justify-start items-center font-semibold text-xl">
                                Subtotal
                            </div>
                            <div className=" flex justify-start items-center font-medium text-xl text-green-500">
                                $1,408.00
                            </div>

                        </div>
                        <div className="flex justify-between w-full items-center pb-3 mt-3 border-b-2 border-gray-200">
                            <div className=" flex justify-start items-center font-semibold text-xl">
                                Shipping
                            </div>
                            <div className=" flex justify-start items-center ">
                                <div className=" flex justify-center items-center font-light text-xl">Flat rate:</div>
                                <div className="flex justify-start items-center font-medium text-xl text-green-500"> $35.00
                                </div>

                            </div>

                        </div>
                        <div className="flex justify-between w-full items-center pb-3 mt-3 border-b-2 border-gray-200">
                            <div className=" flex justify-start items-center font-medium text-xl">
                                PAYPAL Handling Fee

                            </div>
                            <div className=" flex justify-start items-center font-medium text-xl text-green-500">
                                $140.80

                            </div>

                        </div>

                        <div className="flex justify-between w-full items-center pb-3 mt-3 border-b-2 border-gray-200">
                            <div className=" flex justify-start items-center text-2xl font-bold">
                                Total

                            </div>
                            <div className=" flex justify-start items-center text-2xl font-bold text-green-500">
                                $1,583.80


                            </div>

                        </div>
                    </div>
                    <div className="flex justify-start w-full mt-8 mb-8 items-start">
                        <div className=" flex justify-center items-center text-xl">
                            Paypal
                            <img alt="image" src="./image/PayPal.png" />
                        </div>
                    </div>

                    <div className=" flex justify-center items-center bg-white pt-8">
                        <div className="flex justify-center items-center pb-6 border-gray-400 border-b-2 text-xl text-gray-500">
                            Please note: Do not use PayPal to buy more than $700 of medicines, because it may not be able to provide you with after-sales service, if you want to buy more you can contact us or use other payment methods!
                        </div>
                    </div>

                    <div className="  justify-center items-center pt-5 text-xl text-gray-500">
                        Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <a href="privacy policy"><strong>privacy policy</strong></a>   .
                    </div>

                    <a href="./" className=" w-full justify-center items-center">
                        <div className=" flex justify-center items-center w-full h-14 mt-7 bg-green-500 rounded-md text-white text-xl ">PLACE ORDER</div>
                    </a>
                </div>

            </div>



        </div>



    );
}

export default Checkout;
