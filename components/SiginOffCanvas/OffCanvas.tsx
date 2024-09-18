import React, { useState } from 'react';
import axios from 'axios';
import {Input, Button, Checkbox, Link} from "@nextui-org/react";
import {EyeFilledIcon} from "./EyeFilledIcon";
import {EyeSlashFilledIcon} from "./EyeSlashFilledIcon";
interface OffCanvasProps {
    isOpen: boolean,
    toggleMenu: () => void,
}
const OffCanvas: React.FC<OffCanvasProps> = ({ isOpen, toggleMenu}) => {

  const [isVisible, setIsVisible] = React.useState(false);
  const [error, setError] = React.useState();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const toggleVisibility = () => setIsVisible(!isVisible);
  const signin = async () => {

    if( email == '' || password == '' ){
      alert('Please enter email and password');
      return;
    }
    else
    {
      try {
          const response = await axios.post("http://localhost:8000/login", {email,password});
          console.log(response.data)
      } 
      catch (error) {
      }
    }
};
  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? 'block' : 'hidden'}`}>
      <div className="absolute inset-0 bg-black opacity-50 transition duration-100 ease-in-out" onClick={toggleMenu}></div>
      <div className="absolute transition duration-100 ease-in-out inset-y-0 right-0 max-w-xs w-full bg-white shadow-lg">
        <div className="p-4">
          <div className="flex items-center justify-between p-4 border-b-1">
            <p className="text-lg font-semibold pb-5">Sign in</p>
            <button
              type="button"
              className="box-content rounded-none border-none text-neutral-500 hover:text-neutral-800 hover:no-underline focus:text-neutral-800 focus:opacity-100 focus:shadow-none focus:outline-none"
              data-twe-offcanvas-dismiss
              onClick={toggleMenu}
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
          <div className='py-4 border-b-1'>
          <form onSubmit={signin}>
            <div className='pb-3'>
              <Input
                key="outside"
                type="email"
                label="Email"
                labelPlacement="outside"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='pb-6'>
              <Input
                label="Password"
                variant="bordered"
                labelPlacement="outside"
                // placeholder="Enter your password"
                endContent={
                  <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                    {isVisible ? (
                      <EyeSlashFilledIcon customClassName="text-2xl text-default-400 pointer-events-none" />
                    ) : (
                      <EyeFilledIcon customClassName="text-2xl text-default-400 pointer-events-none" />
                    )}
                  </button>
                }
                type={isVisible ? "text" : "password"}
                className="max-w-xs"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className='pb-3 w-full'>
              <Button 
              type='submit'
              color="success" variant="bordered" fullWidth
              // onClick={() => signin()}
              >
                Sign in
              </Button>  
            </div>
            <div className='flex items-center justify-between'>
              <Checkbox defaultSelected color="success" size="sm">Remember me</Checkbox>
              <Link href="#" color="success" size="sm">Lost your password?</Link>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffCanvas;
