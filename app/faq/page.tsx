
"use client"
import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import { Accordion, AccordionItem } from "@nextui-org/react";

const Faq: React.FC = () => {
  return (
    <>
      <div className="flex flex-col w-full h-screen">
        <div className="flex flex-col bg-[#f9f9f9] px-8 pt-8 mb-7">
          <div className="flex justify-center items-start mb-5 text-2xl font-semibold">
            FAQ
          </div>
          <div className="flex justify-start items-center mb-1 text-base font-semibold">
            100% Satisfaction Guaranteed Or Your Money Back!
          </div>
          <div className="flex justify-start items-center text-base">
            We pride ourselves on our top-notch service and high-quality
            products. However, by law USPS and US Customs have the right to
            block/destroy/seize packages. We stand by our product and all we can
            do is promise to reship or refund in a timely manner. Items that are
            held in US Customs for over two weeks are covered by our Reshipment
            Policy. Your package will be reshipped free of charge or you may
            request a full refund. If you fail to receive the second shipment, a
            full refund will be issued.
          </div>
        </div>

        <Accordion>
          <AccordionItem indicator={<p className=" text-white">w</p>} title={<div className=" group"><summary
            className=" group-[]: flex group: items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer hover:text-green-500 open:text-green-500 "
          >
            <svg
              className="w-5 h-5 text-gray-500  transition rotate-0 group-open:rotate-180 mt-1.5 md:mt-0 flex-shrink-0 rotate-180 transform h-5 w-5 text-[#5B5675]"
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
            </svg>
            <span className="flex items-center ">
              <i className=" fas fa-laptop"> </i> Q: HOW DO I KNOW THIS IS
              NOT A SCAM
            </span>
          </summary></div>}>
            <p className=" font-light  text-gray-500">
              A: If you are not satisfied with our products you will
              receive a full refund. Shipment is guaranteed or your money
              back.
            </p>
          </AccordionItem>


          <AccordionItem indicator={<p className=" text-white">w</p>} title={<summary
            className="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer hover:text-green-500 focus:text-green-500 "
          >
            <svg
              className="w-5 h-5 text-gray-500 transition rotate-0 group-open:rotate-180  mt-1.5 md:mt-0 flex-shrink-0 rotate-180 transform h-5 w-5 text-[#5B5675]"
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
            </svg>
            <span className="flex items-center ">
              <i className=" fas fa-laptop"> </i> Q: DO YOU SHIP TO ALL COUNTRIES?
            </span>
          </summary>}>
            <p className=" font-light  text-gray-500">
              A. Yes, generic drugs are just as safe and effective as their brand name counterparts. All of our products come directly from some of the famous manufacturers listed below. Ajanta (www.ajantapharma.com), Aurochem (www.aurochemlaboratories.com), Aventis (www.sanofiindialtd.com), Cipla (www.cipla.com), Cadila (www.cadilapharma.com), Cosmo (www.cosmopharmaceuticals.com), Cyril (www.dawabazar.in), GlaxoSmithKline (www.gsk.com), HAB (www.habpharma.in), Ind-Swift (www.indswift.com), Intas (www.intaspharma.com), Intacto (www.indiamart.com), Jpee (www.jpeedrugs.com), Leeford (www.leeford.in), Okasa (www.okasa.com), Ranbaxy (www.ranbaxyusa.com), Roche (www.roche.com), Sun pharma (www.sunpharma.com), Torrent (www.torrentpharma.com), Unicure Remedies (www.unicurepharma.com), Vipro (www.viprolifescience.com), Wipro LifeScinces (www.wipro.com), Watson (www.watson.com), Zydus (www.zydususa.com).
            </p>
          </AccordionItem>


          <AccordionItem indicator={<p className=" text-white">w</p>} title={<summary
            className="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer hover:text-green-500 focus:text-green-500 "
          >
            <svg
              className="w-5 h-5 text-gray-500 transition rotate-0 group-open:rotate-180 mt-1.5 md:mt-0 flex-shrink-0 rotate-180 transform h-5 w-5 text-[#5B5675]"
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
            </svg>
            <span className="flex items-center ">
              <i className=" fas fa-laptop"> </i> Q: ARE GENERIC DRUGS SAFE?
            </span>
          </summary>}>
            <p className=" font-light  text-gray-500">
              A. We compare prices online and update our prices everyday so our customers can get the best deals online on our website. A large part of the costs incurred by original manufacturers of brand name drugs are for research, development, and advertising. The expense of obtaining FDA approval alone in the U.S. is enormous. Manufacturers of generic drugs do not have to absorb or recover these costs. Consequently, significant cost savings can be passed along to you the customer. The generic drugs that you order from us are subject to the same stringent approval and regulatory processes as all brand name drugs.
            </p>
          </AccordionItem>


          <AccordionItem indicator={<p className=" text-white">w</p>} title={<summary
            className="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer hover:text-green-500 focus:text-green-500 "
          >
            <svg
              className="w-5 h-5 text-gray-500 transition rotate-0 group-open:rotate-180 mt-1.5 md:mt-0 flex-shrink-0 rotate-180 transform h-5 w-5 text-[#5B5675]"
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
            </svg>
            <span className="flex items-center ">
              <i className=" fas fa-laptop"> </i> Q:WHY ARE MEDICATIONS CHEAPER AT Canadian Pharacy Online?
            </span>
          </summary>}>
            <p className=" font-light  text-gray-500">
              A. We deliver our products with international registered mail that comes with a tracking number. Other companies that may offer free shipping have the cost of their shipping factored into their base prices. There are no hidden charges or membership fees when you order from Canadian Pharmacy Online.
            </p>
          </AccordionItem>



          <AccordionItem indicator={<p className=" text-white">w</p>} title={<summary
            className="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer hover:text-green-500 focus:text-green-500 "
          >
            <svg
              className="w-5 h-5 text-gray-500 transition rotate-0 group-open:rotate-180 mt-1.5 md:mt-0 flex-shrink-0 rotate-180 transform h-5 w-5 text-[#5B5675]"
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
            </svg>
            <span className="flex items-center ">
              <i className=" fas fa-laptop"> </i> Q: WHY IS THERE A SHIPPING CHARGE? ARE THERE HIDDEN FEES?
            </span>
          </summary>}>
            <p className=" font-light  text-gray-500">
              A. Depending on your location, the package may take anywhere within 2 to 9 business days.
            </p>
          </AccordionItem>



          <AccordionItem indicator={<p className=" text-white">w</p>} title={<summary
            className="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer hover:text-green-500 focus:text-green-500 "
          >
            <svg
              className="w-5 h-5 text-gray-500 transition rotate-0 group-open:rotate-90 mt-1.5 md:mt-0 flex-shrink-0 rotate-180 transform h-5 w-5 text-[#5B5675]"
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
            </svg>
            <span className="flex items-center ">
              <i className=" fas fa-laptop"> </i> Q: HOW  LONG IS DELIVERY TIME?
            </span>
          </summary>}>
            <p className=" font-light  text-gray-500">
              A. We respect your privacy and are committed to keeping your personal information confidential and secure. Everything you share with us will stay exclusively on our state-of-the-art secured server. All credit card and personal information submitted to us is received through a highly secure site using 128-bit encryption. We will not sell any of the information you submit to us, nor will we share it with anyone. All of your personal and confidential information will be safely stored and protected according to current patient/physician privacy laws.
            </p>
          </AccordionItem>
        </Accordion>
      </div>






















    </>
  );
};
export default Faq;
