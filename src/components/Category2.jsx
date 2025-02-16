import React from 'react';
import Image1 from "../assets/category/gaming.png";
import Image2 from "../assets/category/vr.png";
import Image3 from "../assets/category/speaker.png";
import Button from './Shared/Button';

const Category = () => {
  return (
    <div className='py-12 px-4'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {/* First col (MacBook moved here) */}
        <div className='p-8 bg-gradient-to-br from-red-500 to-red-500 text-white rounded-3xl relative h-[380px] w-full sm:w-[500px] flex flex-col justify-between items-start shadow-lg ml-auto'>
          <div>
            <p className='mb-1 text-gray-300 text-lg'>Enjoy</p>
            <p className='text-3xl font-semibold mb-1'>With</p>
            <p className='text-5xl xl:text-6xl font-bold opacity-40'>MacBook</p>
          </div>
          <Button text="Browse" bgColor="bg-white" textColor="text-red-500" />
          <img src={Image3} alt="MacBook" className='w-[280px] absolute bottom-4 right-4' />
        </div>

        {/* Second col */}
        <div className='p-8 bg-gradient-to-br from-yellow-400 to-yellow-300 text-black rounded-3xl relative h-[380px] w-full sm:w-[420px] flex flex-col justify-between items-start shadow-lg mx-auto'>
          <div>
            <p className='mb-1 text-gray-600 text-lg'>Enjoy</p>
            <p className='text-3xl font-semibold mb-1'>With</p>
            <p className='text-5xl xl:text-6xl font-bold opacity-40'>Gadget</p>
          </div>
          <Button text="Browse" bgColor="bg-white" textColor="text-yellow-500" />
          <img src={Image2} alt="Watch" className='w-[280px] absolute bottom-4 right-4' />
        </div>

        {/* Third col (Earphone moved here) */}
        <div className='p-8 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[380px] w-full sm:w-[420px] flex flex-col justify-between items-start shadow-lg mx-auto'>
          <div>
            <p className='mb-1 text-gray-400 text-lg'>Enjoy</p>
            <p className='text-3xl font-semibold mb-1'>With</p>
            <p className='text-5xl xl:text-6xl font-bold opacity-40'>Earphone</p>
          </div>
          <Button text="Browse" bgColor="bg-red-500" textColor="text-white" />
          <img src={Image1} alt="Earphone" className='w-[280px] absolute bottom-4 right-4' />
        </div>
      </div>
    </div>
  );
};

export default Category;