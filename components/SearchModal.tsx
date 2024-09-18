"use client";
import { useEffect } from "react";
import {
  Modal,
  Ripple,
  initTWE,
} from "tw-elements";

initTWE({ Modal, Ripple });

const SearchModal = () => {
  return (
    <div
    data-twe-modal-init
    className="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
    id="exampleModalCenteredScrollable"
    tabIndex={-1}
    aria-labelledby="exampleModalCenteredScrollableLabel"
    aria-modal="true"
    role="dialog">
    <div
      data-twe-modal-dialog-ref
      className="pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]">
      <div
        className="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-4 outline-none dark:bg-surface-dark">
        <div
          className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 p-4 dark:border-white/10">
          <h5
            className="text-xl font-medium leading-normal text-surface dark:text-white"
            id="exampleModalCenteredScrollableLabel">
            Modal title
          </h5>
          <button
            type="button"
            className="box-content rounded-none border-none text-neutral-500 hover:text-neutral-800 hover:no-underline focus:text-neutral-800 focus:opacity-100 focus:shadow-none focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-300 dark:focus:text-neutral-300"
            data-twe-modal-dismiss
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
  
        <div className="relative p-4">
          <p>
            This is some placeholder content to show a vertically centered
            modal. We&apos;ve added some extra copy here to show how vertically
            centering the modal works when combined with scrollable modals.
            We also use some repeated line breaks to quickly extend the
            height of the content, thereby triggering the scrolling. When
            content becomes longer than the predefined max-height of modal,
            content will be cropped and scrollable within the modal.
          </p>
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <p>Just like that.</p>
        </div>
  
        <div
          className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 p-4 dark:border-white/10">
          <button
            type="button"
            className="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-200 focus:bg-primary-accent-200 focus:outline-none focus:ring-0 active:bg-primary-accent-200 dark:bg-primary-300 dark:hover:bg-primary-400 dark:focus:bg-primary-400 dark:active:bg-primary-400"
            data-twe-modal-dismiss
            data-twe-ripple-init
            data-twe-ripple-color="light">
            Close
          </button>
          <button
            type="button"
            className="ms-1 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
            data-twe-ripple-init
            data-twe-ripple-color="light">
            Save changes
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SearchModal;
