import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='w-full max-w-[1240px] mx-auto   py-4 px-3  nav'>
      <div className='flex justify-between items-center'>
        <h1 className='mx-2 text-2xl my-auto'>TripWise</h1>

        <ul className='hidden md:flex'>
          <li className='mx-2'>
            <a href='#booking'>Booking </a>
          </li>
          <li className='mx-2'>
            <a href='#about-us'>About Us </a>
          </li>
          <li className='mx-2'>
            <a href='#explore'> Explore </a>
          </li>
          <li className='mx-2'>
            <a href='#price'>Plans </a>
          </li>
        </ul>

        <div className='flex items-center'>
          <button className='bg-indigo-600 text-white font-[Poppins] py-1 px-5 rounded md:ml-8  '>
            Join Now
          </button>
          {nav ? (
            <AiOutlineClose
              onClick={handleNav}
              size={30}
              className='mx-3 items-center ease-in duration-500 md:hidden'
            />
          ) : (
            <AiOutlineMenu
              onClick={handleNav}
              size={30}
              className='mx-3 items-center ease-in duration-500 md:hidden'
            />
          )}
        </div>
      </div>

      <div className={nav ? "block   md:hidden" : "hidden"}>
        <ul className='flex flex-col gap-4 items-center'>
          <li className='mx-2 text-lg border-b-2 border-white w-[20%] text-center'>
            <a href='#booking'>Booking </a>
          </li>
          <li className='mx-2 text-lg border-b-2 border-white w-[20%] text-center'>
            <a href='#about-us'>About Us </a>
          </li>
          <li className='mx-2 text-lg border-b-2 border-white w-[20%] text-center'>
            <a href='#explore'>Explore </a>
          </li>
          <li className='mx-2 text-lg border-b-2 border-white w-[20%] text-center'>
            <a href='#price'>Plans </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
