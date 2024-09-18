import React from "react";


const About: React.FC = () => {
  return (
    <div className="flex flex-col w-full mb-[450px] h-screen ">
      <div className="flex justify-center items-center h-48 w-full mb-8 px-10 py-16 bg-neutral-50 text-2xl font-bold ">
        About US
      </div>
      <div className="flex justify-start items-start">
        <img
          className=" justify-start items-start "
          src="./image/images-4.webp"
          title="image_4"
        ></img>
      </div>

      <div className=" flex text-sm justify-start items-start mb-6 mt-4">
        Canadian Pharmacy Online™ is an international online pharmacy that
        offers its customers a proven and trusted source of quality medicines.
      </div>
      <div className=" flex text-sm justify-start items-start my-12">
        Canadian Pharmacy Online™ offers a convenient, private, and affordable
        alternative to conventional pharmacies and other costly online services.
        We enable those patients with transportation issues, with limited access
        to quality medical care, and with privacy needs to have their
        medications safely delivered directly to their door, without the hassle
        and time constraint of visiting a doctor’s office.
      </div>
      <div className=" flex text-base font-semibold justify-start items-start mb-8">
        Reasons to shop with us
      </div>
      <div className="  justify-start items-start mb-8">
        No prior prescriptions required
      </div>
      <div className="  justify-start items-start mb-8">
        No embarrassing doctor visits
      </div>
      <div className="  justify-start items-start mb-8">
        No appointments to schedule ahead of time
      </div>
      <div className=" flex text-base font-semibold justify-start items-start mb-8">
        100% satisfaction guaranteed or your money back
      </div>
      <div className=" flex  justify-start items-start mb-8">
        Next day shipping worldwide
      </div>
      <div className=" flex  justify-start items-start mb-8">
        We can get your package dispatched the next day after placing your
        order. We provide the ability to track your order so you can check its
        status at any time.
      </div>
      <div className=" flex  justify-start items-start mb-8">
        Safe and secure ordering online
      </div>
      <div className=" flex  justify-start items-start mb-8">
        At Canadian Pharmacy Online™ your financial information and medical
        history will never be jeopardized. We only use secure pages to process
        your transactions.
      </div>
    </div>
  );
};

export default About;
