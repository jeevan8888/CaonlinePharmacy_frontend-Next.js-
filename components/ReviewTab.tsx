"use client";
import { useEffect } from "react";

import {
  Tab,
  initTWE,
} from "tw-elements";

initTWE({ Tab });

const ReviewTab = () => {
  return (
  <div>
    <ul
        className="mb-5 flex list-none flex-row flex-wrap border-b-0 ps-0"
        role="tablist"
        data-twe-nav-ref>
        <li role="presentation" className="flex-auto text-center">
            <a
            href="#tabs-home01"
            className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[twe-nav-active]:border-primary data-[twe-nav-active]:text-primary dark:text-white/50 dark:hover:bg-neutral-700/60 dark:data-[twe-nav-active]:text-primary"
            data-twe-toggle="pill"
            data-twe-target="#tabs-home01"
            data-twe-nav-active
            role="tab"
            aria-controls="tabs-home01"
            aria-selected="true"
            >ADDITIONAL INFORMATION</a>
        </li> 
        <li role="presentation" className="flex-auto text-center">
            <a
            href="#tabs-profile01"
            className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[twe-nav-active]:border-primary data-[twe-nav-active]:text-primary dark:text-white/50 dark:hover:bg-neutral-700/60 dark:data-[twe-nav-active]:text-primary"
            data-twe-toggle="pill"
            data-twe-target="#tabs-profile01"
            role="tab"
            aria-controls="tabs-profile01"
            aria-selected="false"
            >REVIEWS</a>
        </li>
    </ul>
    <div className="mb-6">
        <div
            className="hidden opacity-100 transition-opacity duration-150 ease-linear data-[twe-tab-active]:block"
            id="tabs-home01"
            role="tabpanel"
            aria-labelledby="tabs-home-tab01"
            data-twe-tab-active>
              quantities
              30 pills x 1, 60 pills x 1, 90 pills x 1
        </div>
        <div
            className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[twe-tab-active]:block"
            id="tabs-profile01"
            role="tabpanel"
            aria-labelledby="tabs-profile-tab01">
            REVIEWS
        </div>
    </div>
  </div>
  );
};

export default ReviewTab;