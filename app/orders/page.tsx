import React from "react";

const Orders = () => {
  return (
    <div className="  h-screen pt-16">
      <div className="flex justify-center ">
        <div className="flex flex-col w-full items-center justify-center p-20">
          <div className=" w-full h-14 border-red-500 border-[1px]">
            <div className="flex h-full mb-3">
              <input
                type="text"
                className="w-full bg-white pl-2 text-base font-light outline-0"
                placeholder="Tracking Number(*required)"
                id=""
              />
              <div className="flex w-10 items-center justify-start bg-red-500 p-5 cursor-pointer">
                <svg
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  className="pointer-events-none absolute w-5 fill-white transition"
                >
                  <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
                </svg>
              </div>
              <input
                type="button"
                value="Track"
                className= " bg-red-500 p-2 pr-10 h-100% text-white font-semibold cursor-pointer"
              />
            </div>


            <div className="flex w-full">
          <div className=" flex justify-start items-center text-base font-light text-gray-500">
            Please enter your tracking number to track.
            </div>
            </div>
          </div>
            
        </div>
      </div>
    </div>
  );
};

export default Orders;
