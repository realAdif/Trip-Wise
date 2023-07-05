import React from "react";
import { VscLocation } from "react-icons/vsc";
const Explore = () => {
  return (
    <div id='explore' className='w-full max-w-[1240px] mx-auto my-10'>
      <h1 className='text-center'>Explore The Beauty of World</h1>

      <div className='grid gap-3 grid-cols-2 md:grid-cols-4 mx-3   '>
        <div className='col-span-2 relative  img-hover-zoom'>
          <img
            src='https://source.unsplash.com/GiEh4Q3BUe8'
            alt='/'
            className='h-full w-full rounded-lg'
          />
          <h1 className='absolute bottom-0 right-[10%] '>USA & Canada</h1>
        </div>

        <div className=' col-span-2 relative img-hover-zoom'>
          <img
            src='https://source.unsplash.com/Wj9ELwGXa6c'
            alt='/'
            className='h-full w-full rounded-lg'
          />
          <h1 className='absolute bottom-0 left-[10%]'>Nepal</h1>
        </div>

        <div className='relative img-hover-zoom'>
          <img
            src='https://source.unsplash.com/-2WlTWZLnRc'
            alt='/'
            className=' h-full w-full rounded-lg'
          />
          <h1 className='absolute bottom-0 right-[10%] text-4xl'>Bali</h1>
        </div>

        <div className='relative img-hover-zoom '>
          <img
            src='https://source.unsplash.com/1GFUOji-yck'
            alt='/'
            className=' h-full w-full rounded-lg'
          />
          <h1 className='absolute bottom-0 right-[10%] text-4xl'>Australia</h1>
        </div>

        <div className='relative md:col-span-1 col-span-2 img-hover-zoom '>
          <img
            src='https://source.unsplash.com/tn2rBnvIl9I'
            alt='/'
            className='h-full w-full rounded-lg '
          />
          <h1 className='absolute bottom-0 left-[10%] text-4xl'>Germany</h1>
        </div>

        <div className='flex flex-col items-center justify-center md:col-span-1  col-span-2'>
          <h1 className='w-full text-center'>Join us Today</h1>
          <button className=' mt-7'>Join</button>
        </div>
      </div>
    </div>
  );
};

export default Explore;

{
  /* <div className='md:w-[250px] w-[190px] text-sm mx-3'>
          <img
            src='https://source.unsplash.com/1naE8177_bI'
            alt='/'
            className='w-[250px] h-[200px]  rounded'
          />
          <div className='my-2 flex items-center'>
            <VscLocation size={30} color='white' />
            <h2 className='font-bold mx-1'>City of Venice, Italy</h2>
          </div>
        </div>
        <div className='md:w-[250px] w-[190px] text-sm mx-3'>
          <img
            src='https://source.unsplash.com/eU4pipU_8HA'
            alt='/'
            className='w-[250px] h-[200px] rounded'
          />
          <div className='my-2 flex items-center'>
            <VscLocation size={30} color='white' />
            <h2 className='font-bold'> Taj Mahal, Agra, India</h2>
          </div>
        </div>
        <div className='md:w-[250px] w-[190px] text-sm mx-3'>
          <img
            src='https://source.unsplash.com/tBokRntPn3A'
            alt='/'
            className='w-[250px] h-[200px] rounded-lg'
          />
          <div className='my-2 flex items-center'>
            <VscLocation size={30} color='white' />
            <h2 className='font-bold'> Pizol, Mels, Switzerland</h2>
          </div>
        </div>
        <div className='md:w-[250px] w-[190px] text-sm mx-3'>
          <img
            src='https://source.unsplash.com/Rz4uFe0Ynmo'
            alt='/'
            className='w-[250px] h-[200px] rounded'
          />
          <div className='my-2 flex items-center'>
            <VscLocation size={30} color='white' />
            <h2 className='font-bold'>Milan, Italie</h2>
          </div>
        </div> */
}
