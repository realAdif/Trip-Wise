import React from "react";

const Booking = () => {
  return (
    <div id='booking' className='w-full max-w-[1240px] mx-auto '>
      <form className='lg:flex lg:justify-between w-full items-center  p-3 my-8 '>
        <div className='booking w-full flex p-2 md:flex-row flex-col'>
          <div className='flex flex-col my-2 py-2 mx-2 '>
            <label>Destination</label>
            <select className='lg:w-[300px] md:w-full border rounded-md p-2'>
              <option value=''>Grande Antiqua</option>
              <option value=''>Key West</option>
              <option value=''>Maldives</option>
              <option value=''>Cozumel</option>
            </select>
          </div>
          <div className='flex w-full  '>
            <div className='flex flex-col w-full lg:max-w-[250px] my-2 p-2 '>
              <label>Check In</label>
              <input type='date' className='border rounded p-2' />
            </div>

            <div className='flex flex-col w-full lg:max-w-[250px] my-2 p-2'>
              <label>Check out</label>
              <input type='date' className=' border rounded p-2' />
            </div>
          </div>

          <div className='flex flex-col my-2 p-2 w-full'>
            <label htmlFor=''>Search</label>
            <button className='lg:w-full  bg-indigo-600  hover:bg-indigo-800'>
              Rates Availabilities
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Booking;
