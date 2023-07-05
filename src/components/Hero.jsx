import React from "react";
import paris from "../images/Paris.jpg";
const Hero = () => {
  return (
    <div className='w-full   mx-auto z-1 relative'>
      <div className='relative mx-auto'>
        <img
          src={paris}
          alt='/'
          className='w-full h-[250px] md:h-[500px] lg:h-[700px] xl:h-[700px] object-cover origin-bottom-right'
        />
        <div className='w-full mx-auto text-center my-3  '>
          <p className='text-xl md:text-[30px] font-bold'>
            Explore the world with TripWise
          </p>
          <button className='btn my-2'>Join</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
{
  /* <h2 className='absolute top-[35%] left-[10%] font-bold  text-white md:w-[250px] md:text-4xl text-2xl w-[200px] max-w-[1240px] mx-auto'>
          Go Explore, And see the world with us
        </h2> */
}
