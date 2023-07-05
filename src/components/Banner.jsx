import React from "react";

const Banner = () => {
  return (
    <div className='w-full max-w-[1240px] mx-auto my-10 '>
      <div className='mx-4 relative'>
        <img
          src='https://source.unsplash.com/twukN12EN7c'
          alt='/'
          className='rounded w-full h-[400px]'
        />
        <div className='absolute top-[30%] left-5'>
          <h1>The Great Outdoors</h1>
          <p>Travel with TripWise</p>
          <button className='btn my-4'>Explore</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
