import React from "react";
import Offering from "./Offering";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col w-full">
      <div>
        <div className="flex justify-between items-center mb-7">
          <div className="grid md:grid-cols-1 lg:grid-cols-2 w-full">
            <div className="flex flex-wrap md:flex-nowrap flex-shrink justify-start items-start gap-5">
              <a href="./" className=" text-xl font-light whitespace-nowrap">
                FAQ
              </a>
              <a href="./" className=" text-xl font-light whitespace-nowrap">
                Privacy Policy
              </a>
              <a href="./" className=" text-xl font-light whitespace-nowrap">
                Return Policy
              </a>
              <a href="./" className=" text-xl font-light whitespace-nowrap">
                Terms of Service
              </a>
              <a href="./" className=" text-xl font-light whitespace-nowrap">
                Affiliate Area
              </a>
            </div>
            <div className=" flex justify-end items-start">
              <img src="./image/payment_1.webp" title="payment" />
            </div>
          </div>
        </div>

        <div className=" bg-gray-500 h-[1px]"></div>

        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-2 items-start">
          <div className="flex justify-start items-center font-arial text-xl font-light leading-10">
            🌐 Explore Canadian Pharmacy Online™ – Your Global Source for
            Quality Medicines! No prescriptions needed, no awkward doctor
            visits! Enjoy convenience, privacy, and savings on top-notch
            medications, all delivered to your doorstep. Plus, with our 100%
            satisfaction guarantee, you’re in safe hands! 🚚💊
          </div>
          <div className="flex flex-col">
            <div className="mb-6 font-semibold text-xl ">Product</div>
            <div className="flex flex-col pl-4 gap-y-6">
              <div className="flex gap-10">
                <a href="./products/A.D.H.d" className=" text-xl font-light">
                  A.D.H.D
                </a>
                <a
                  href="./products/Anti Anxiety"
                  className=" text-xl font-light"
                >
                  Anti Anxiety
                </a>
              </div>
              <div className="flex gap-10">
                <a
                  href="./products/Men's Health"
                  className=" text-xl font-light"
                >
                  Men &apos;s Health
                </a>
                <a
                  href="./products/Pain Relief"
                  className=" text-xl font-light"
                >
                  Pain Relief
                </a>
              </div>
              <div className="flex gap-10">
                <a
                  href="./products/Sleeping Aids"
                  className=" text-xl font-light"
                >
                  Sleeping Aids
                </a>
                <a href="./products/Aids" className=" text-xl font-light">
                  Aids
                </a>
              </div>
            </div>
          </div>
          <div className="flex grid-cols-1 flex-col">
            <div className="  mb-3 font-semibold text-xl ">Offerings</div>

            <div className=" grid grid-cols-1 flex-col justify-start  gap-y-3">
              <div className=" border-b border-gray-200 border-solid pb-3">
                <Offering
                  imgUrl="./image/images-7.jpg"
                  linkurl="./"
                  name="Drug"
                  priceMin={100}
                  priceMax={200}
                />
              </div>
              <div className=" border-b border-gray-200 border-solid pb-3">
                <Offering
                  imgUrl="./image/images-7.jpg"
                  linkurl="./"
                  name="Drug"
                  priceMin={100}
                  priceMax={200}
                />
              </div>
              <div className=" border-b border-gray-200 border-solid pb-3">
                <Offering
                  imgUrl="./image/images-7.jpg"
                  linkurl="./"
                  name="Drug"
                  priceMin={100}
                  priceMax={200}
                />
              </div>
            </div>
          </div>

          <div className=" flex grid-cols-1 flex-col">
            <div className=" font-semibold text-xl  mb-5">Contact Details</div>

            <div>
              <p className=" ftext-xl font-light mb-5">
                Address : Colombia Mine Road
              </p>
              <p className=" text-xl font-light mb-5">
                Wheeling , West Virgina,
              </p>
              <p className=" text-xl font-light mb-5">26003</p>
              <p className=" text-xl font-light mb-5">
                Contact : +1(256) 661-0777
              </p>
              <p className=" text-xl font-light mb-5">E-mail:</p>
              <p className=" text-xl font-light mb-5">
                sales@caonolnepharmacy.com
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center text-xl font-light">
          © 2023 onlinepharmacy
        </div>
      </div>
    </footer>
  );
};

export default Footer;
