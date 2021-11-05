import React from 'react';
import GlassCard from './GlassCard';

const Hero = () => {
  return (
    <section className='hero px-0 md:px-16 text-black'>
      <div className='container mx-auto flex px-5 py-16 items-center justify-center flex-col'>
        <div className='text-center md:w-2/3 w-full'>
          <h1 className='mb-1 text-3xl font-black tracking-tight text-black md:text-5xl title-font'>
            Here's to the Crazy Ones{' '}
          </h1>
          <p className='px-0 md:px-24 leading-relaxed mb-6 font-normal w-full'>
            The misfits. The rebels. The troublemakers. The round pegs in the
            square holes. The ones who see things differently.
          </p>
          <div className='flex flex-col items-center justify-center'>
            <button className=' flex bg-gray-900 rounded-full font-bold text-white px-4 py-3 transition duration-300 ease-in-out hover:bg-gray-800 mr-6'>
              Make this my Landing Page{' '}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M13 7l5 5m0 0l-5 5m5-5H6'
                />
              </svg>
            </button>
            <p className='mt-2 text-sm'>React, Next.js + Tailwind</p>
            <div className='w-full md:w-3/4 mb-16'>
              <GlassCard>
                <div className='p-5 w-auto text-sm text-center'>
                  <p>
                    "I remember the awe I felt when I first discovered sliced
                    bread. Honestly, this is the best thing since then."
                  </p>
                  <p className='font-bold mt-2'> Tim Apple, CEO at Apple</p>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
