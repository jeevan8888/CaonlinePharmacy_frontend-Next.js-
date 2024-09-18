"use client";
import React from "react";
import {
    Input,
    Offcanvas,
    Ripple,
    initTWE,
} from "tw-elements";
  
initTWE({ Input, Offcanvas, Ripple });

const BasketCanvas: React.FC = () => {
    return (
        <div
            className="invisible fixed bottom-0 right-0 top-0 z-[1045] flex w-80 max-w-full translate-x-full flex-col border-none bg-white bg-clip-padding text-neutral-700 shadow-sm outline-none transition duration-300 ease-in-out data-[twe-offcanvas-show]:transform-none"
            tabIndex={-1}
            id="BasketCanvas"
            aria-labelledby="offcanvasRightLabel"
            data-twe-offcanvas-init>
            <div className="flex items-center justify-between p-4">
                <h5
                className="mb-0 font-semibold leading-normal"
                id="offcanvasRightLabel">
                    Shopping cart
                </h5>
                <button
                type="button"
                className="box-content rounded-none border-none text-neutral-500 hover:text-neutral-800 hover:no-underline focus:text-neutral-800 focus:opacity-100 focus:shadow-none focus:outline-none"
                data-twe-offcanvas-dismiss
                aria-label="Close">
                <span className="[&>svg]:h-6 [&>svg]:w-6">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor">
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </span>
                </button>
            </div>
            <div className="offcanvas-body flex-grow overflow-y-auto p-4">
            </div>
        </div>
    )
}

export default BasketCanvas;