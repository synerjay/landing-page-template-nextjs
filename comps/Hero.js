import React from 'react';

const Hero = () => {
  return (
    <section className='hero px-16 text-black'>
      <div className='container mx-auto flex px-5 py-24 items-center justify-center flex-col'>
        <div className='text-center lg:w-2/3 w-full'>
          <h1 className='mb-8 text-2xl font-black tracking-tighter text-black md:text-5xl title-font'>
            Here's to the Crazy Ones{' '}
          </h1>
          <p className='px-24 leading-relaxed mb-8 font-normal'>
            Innovation distinguishes between a leader and a follower. Design is
            not just what it looks like and feels like. Design is how it works.
          </p>
          <div className='flex justify-center'>
            <button className='border-2 border-black  text-black rounded-sm font-bold py-4 px-6 mr-2 flex items-center hover:bg-gray-900 hover:text-pink-500 transition ease-in-out duration-700'>
              Make this my Landing Page
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
