import React from "react";

export const Price = () => {
  return (
    <div id='price' className='w-full max-w-[1240px] mx-auto'>
      <h1 className='text-center'>Choose The Plan That Suits You</h1>
      <h2 className='text-center'>
        Many attractive offers by becomming a premium member
      </h2>
      <main className='flex justify-evenly items-center flex-col md:flex-row'>
        <div className='my-6 w-[15rem] h-[25rem] p-8 flex flex-col text-center justify-center items-center card'>
          <h1 className='leading-none'>EXPERIENCE JAPAN</h1>
          <h2>2023/2024</h2>
          <div className='border-t-[2px] border-t-white w-full'>
            <p>FROM</p>
            <h1>$1,200</h1>
          </div>

          <p>Save $249</p>
          <button className='btn my-3'>More Info</button>
        </div>

        <div className='my-6 w-[15rem] h-[25rem] p-8 flex flex-col text-center justify-center items-center card'>
          <h1>Australia</h1>
          <h2>2023/2024</h2>
          <div className='border-t-[2px] border-t-white w-full'>
            <p>FROM</p>
            <h1>$1,800</h1>
          </div>

          <p>Save $449</p>
          <button className='btn my-3'>More Info</button>
        </div>

        <div className='my-6 w-[15rem] h-[25rem] p-8 flex flex-col text-center justify-center items-center card'>
          <h1 className='leading-none'>EXPERIENCE Greece</h1>
          <h2>2023/2024</h2>
          <div className='border-t-[2px] border-t-white w-full'>
            <p>FROM</p>
            <h1>$2,200</h1>
          </div>

          <p>Save 849</p>
          <button className='btn my-3'>More Info</button>
        </div>
      </main>
    </div>
  );
};
