import React from 'react';

const Action = () => {
  return (
    <div className='Testimonials py-2 flex flex-col justify-center mx-auto sm:py-12'>
      <div className='h-auto py-10 px-10 w-2/3 bg-indigo-500 flex flex-col justify-center items-center space-y-5 mx-auto rounded-3xl shadow-xl hover:rotate-1 transition-transform'>
        <h1 className='text-white font-bold text-4xl tracking-wide'>
          Ready to take the plunge?
        </h1>
        <h2 className='font-normal tracking-wide text-lg text-white'>
          Here's some room for that final call to action
        </h2>
        <div className='flex justify-center items-center'>
          <a
            href=''
            className='bg-gray-700 rounded-full font-bold text-white px-4 py-3 transition duration-300 ease-in-out hover:bg-gray-600 mr-6'
          >
            Get started for free
          </a>
          <a
            href=''
            className='bg-gray-100 rounded-full font-bold text-gray-900 px-4 py-3 transition duration-300 ease-in-out hover:bg-gray-300 mr-6'
          >
            Get a Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Action;
