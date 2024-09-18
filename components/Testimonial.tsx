"use client";
import { useEffect } from "react";

import {
  Carousel,
  initTWE,
} from "tw-elements";

initTWE({ Carousel });

const Testimonial = () => {
  
  return (
    <div
      id="carouselExampleCaptions"
      className="relative"
      data-twe-carousel-init
      data-twe-carousel-slide>
      <div
        className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
        <div
          className="relative float-left -mr-[100%] hidden w-full text-center transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-twe-carousel-active
          data-twe-carousel-item
          style={{ backfaceVisibility: 'hidden' }}>
          <p
            className="mx-auto max-w-4xl text-xl italic text-neutral-700 dark:text-neutral-300">
            &quot;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
            error amet numquam iure provident voluptate esse quasi, voluptas
            nostrum quisquam!&quot;
          </p>
          <div className="mb-6 mt-12 flex justify-center">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
              className="h-24 w-24 rounded-full shadow-lg dark:shadow-black/30"
              alt="smaple image" />
          </div>
          <p className="text-neutral-500 dark:text-neutral-300">- Anna Morian</p>
        </div>

        <div
          className="relative float-left -mr-[100%] hidden w-full text-center transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-twe-carousel-item
          style={{ backfaceVisibility: 'hidden' }}>
          <p
            className="mx-auto max-w-4xl text-xl italic text-neutral-700 dark:text-neutral-300">
            &quot;Neque cupiditate assumenda in maiores repudiandae mollitia
            adipisci maiores repudiandae mollitia consectetur adipisicing
            architecto elit sed adipiscing elit.&quot;
          </p>
          <div className="mb-6 mt-12 flex justify-center">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(31).webp"
              className="h-24 w-24 rounded-full shadow-lg dark:shadow-black/30"
              alt="smaple image" />
          </div>
          <p className="text-neutral-500 dark:text-neutral-300">- Teresa May</p>
        </div>

        <div
          className="relative float-left -mr-[100%] hidden w-full text-center transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-twe-carousel-item
          style={{ backfaceVisibility: 'hidden' }}>
          <p
            className="mx-auto max-w-4xl text-xl italic text-neutral-700 dark:text-neutral-300">
            &quot;Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur est laborum neque
            cupiditate assumenda in maiores.&quot;
          </p>
          <div className="mb-6 mt-12 flex justify-center">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
              className="h-24 w-24 rounded-full shadow-lg dark:shadow-black/30"
              alt="smaple image" />
          </div>
          <p className="text-neutral-500 dark:text-neutral-300">- Kate Allise</p>
        </div>
      </div>

      <button
        className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none dark:text-white dark:opacity-50 dark:hover:text-white dark:focus:text-white"
        type="button"
        data-twe-target="#carouselExampleCaptions"
        data-twe-slide="prev">
        <span className="inline-block h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-6 w-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </span>
        <span
          className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
          >Previous</span>
      </button>
      <button
        className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none dark:text-white dark:opacity-50 dark:hover:text-white dark:focus:text-white"
        type="button"
        data-twe-target="#carouselExampleCaptions"
        data-twe-slide="next">
        <span className="inline-block h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-6 w-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </span>
        <span
          className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
          >Next</span>
      </button>
    </div>
  );
};

export default Testimonial;
