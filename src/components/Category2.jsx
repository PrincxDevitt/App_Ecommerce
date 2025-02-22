import React from 'react';
import Image1 from "../assets/category/gaming.png";
import Image2 from "../assets/category/vr.png";
import Image3 from "../assets/category/speaker.png";
import Button from './Shared/Button';

const Category = () => {
  return (
    <div className='py-12 px-4'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {/* First col */}
        <div className='p-8 bg-gradient-to-br from-gray-400/90 to-gray-100 text-white rounded-3xl relative h-[380px] w-full sm:w-[500px] flex flex-col justify-between items-start shadow-lg ml-auto'>
          <div>
            <p className='mb-1 text-gray-300 text-lg'>Enjoy</p>
            <p className='text-3xl font-semibold mb-1'>With</p>
            <p className='text-5xl xl:text-6xl font-bold opacity-40'>Gaming</p>
          </div>
          <Button text="Browse" bgColor="bg-red-500" textColor="text-white"/>
          <img src={Image1} alt="Play" className='w-[280px] absolute bottom-4 right-4' />
        </div>

        {/* Second col */}
        <div className='p-8 bg-gradient-to-br from-green-600 to-green-400 text-black rounded-3xl relative h-[380px] w-full sm:w-[420px] flex flex-col justify-between items-start shadow-lg mx-auto'>
          <div>
            <p className='mb-1 text-white text-lg'>Enjoy</p>
            <p className='text-3xl font-semibold mb-1'>With</p>
            <p className='text-5xl xl:text-6xl font-bold opacity-40'>VR</p>
          </div>
          <Button text="Browse" bgColor="bg-white" textColor="text-green-600"/>
          <img src={Image2} alt="Watch" className='w-[280px] absolute bottom-4 right-4' />
        </div>

        {/* Third col (Earphone moved here) */}
        <div className='p-8 bg-gradient-to-br from-blue-600 to-blue-400 text-white rounded-3xl relative h-[380px] w-full sm:w-[420px] flex flex-col justify-between items-start shadow-lg mx-auto'>
          <div>
            <p className='mb-1 text-gray-400 text-lg'>Enjoy</p>
            <p className='text-3xl font-semibold mb-1'>With</p>
            <p className='text-5xl xl:text-6xl font-bold opacity-40'>Speaker</p>
          </div>
          <Button text="Browse" bgColor="bg-white" textColor="text-blue-600" />
          <img src={Image3} alt="Earphone" className='w-[280px] absolute bottom-4 right-4' />
        </div>
      </div>
    </div>
  );
};

export default Category;