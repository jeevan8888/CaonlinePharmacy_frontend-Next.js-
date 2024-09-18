import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BudgetCard from "./BudgetCard";

interface OffCanvasProps {
  isCard: boolean,
  toggleCard: () => void
}

const OffCanvas: React.FC<OffCanvasProps> = ({ isCard, toggleCard }) => {

    const [isVisible, setIsVisible] = React.useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);

    const [cardData, setCardData] = React.useState([]);
    useEffect(() => {
        const viewCard = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/view-cart`);
                setCardData(response.data.cartItems)
            } catch (error) {
            }
        };
        
        viewCard();
    }, []); 

  return (
    <div className={`fixed inset-0 z-50 ${isCard ? 'block' : 'hidden'}`}>
      <div className="absolute inset-0 bg-black opacity-50 transition duration-100 ease-in-out" onClick={toggleCard}></div>
      <div className="absolute transition duration-100 ease-in-out inset-y-0 right-0 max-w-xs w-full bg-white shadow-lg">
        <div className="p-4">
          <div className="flex items-center justify-between p-4 border-b-1">
            <p className="text-lg font-semibold pb-5">Shopping cart</p>
            <button
              type="button"
              className="box-content rounded-none border-none text-neutral-500 hover:text-neutral-800 hover:no-underline focus:text-neutral-800 focus:opacity-100 focus:shadow-none focus:outline-none"
              data-twe-offcanvas-dismiss
              onClick={toggleCard}
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
          <div className='py-4'>
            {cardData && cardData.length > 0 ? 
                cardData.map((item, index) => (
                    <BudgetCard key={index} item={item} toggleCard ={toggleCard} />
                )) 
                : 
                null
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffCanvas;
