import React from "react";

const Footer = () => {
  return (
    <div className='w-full max-w-[1240px] mx-auto'>
      <div className='uppercase flex justify-between mx-4 footer-top cursor-pointer'>
        <p className='hover:underline'>Flights</p>
        <p className='hover:underline'>Cruises</p>
        <p className='hover:underline'>Deals</p>
        <p className='hover:underline'>Brochures</p>
      </div>

      <div className='footer-top my-4 mx-4'>
        <div className='flex justify-evenly flex-col items-center text-center md:flex-row cursor-pointer'>
          <div>
            <h2 className='text-1xl underline'>TripWise</h2>
            <p className='hover:underline'>About Us</p>
            <p className='hover:underline'>Contact Us</p>
            <p className='hover:underline'>Sponsorship</p>
            <p className='hover:underline'>Careers</p>
          </div>
          <div>
            <h2 className='text-1xl underline'>Site Quick Links</h2>
            <p className='hover:underline'>Flights</p>
            <p className='hover:underline'>Holidays</p>
            <p className='hover:underline'>Car hire</p>
            <p className='hover:underline'>Deals</p>
          </div>
          <div>
            <h2 className='text-1xl underline'>Help Support</h2>
            <p className='hover:underline'>Flights</p>
            <p className='hover:underline'>Holidays</p>
            <p className='hover:underline'>Car hire</p>
            <p className='hover:underline'>Deals</p>
          </div>
        </div>
        <div></div>
        <p className='text-xs text-center mt-4 hover:underline cursor-pointer'>
          <a href='https://github.com/'>Made by Aditya Gaikwad </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
