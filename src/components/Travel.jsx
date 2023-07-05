import React from "react";

const Travel = () => {
  return (
    <div
      id='about-us'
      className='w-full max-w-[1240px] mx-auto flex flex-col  md:flex-row'
    >
      <div className=' mx-3 flex-[1]'>
        <img
          src='https://source.unsplash.com/CJ4mbwSK3EY'
          alt='/'
          className='rounded'
        />
      </div>

      <div className=' mx-3  flex-[1]'>
        <h2 className='text-3xl  font-bold title'>
          Make Memories Come To Life Again
        </h2>
        <p className='my-3'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, vitae
          eligendi soluta tenetur, quasi ut, sed sapiente recusandae vel unde
          nesciunt fuga eius nobis maxime nam deleniti repellendus atque ad?
        </p>
        <div className='flex  justify-center my-3 text-white'>
          <div className='p-4 bg-[#72e8b6] mx-3 rounded card'>
            <h1 className='text-center'>10</h1>
            <h2 className='text-center'>Years Experience</h2>
          </div>

          <div className='p-4 bg-[#72e8b6] mx-3 rounded card'>
            <h1 className='text-center'>50K</h1>
            <h2 className='text-center'>Happy Customer</h2>
          </div>

          <div className='p-4 bg-[#72e8b6] mx-3 rounded card'>
            <h1 className='text-center'>500</h1>
            <h2 className='text-center'>Year Collaboration</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Travel;
