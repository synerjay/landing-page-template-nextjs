import React from 'react';

const Hero = () => {
  return (
    <section className='hero px-16 text-black'>
      <div className='container mx-auto flex px-5 py-16 items-center justify-center flex-col'>
        <div className='text-center lg:w-2/3 w-full'>
          <h1 className='mb-1 text-2xl font-black tracking-tighter text-black md:text-5xl title-font'>
            Here's to the Crazy Ones{' '}
          </h1>
          <p className='px-24 leading-relaxed mb-6 font-normal'>
            Innovation distinguishes between a leader and a follower. <br />
            Design is not just what it looks like and feels like. Design is how
            it works.
          </p>
          <div className='flex justify-center'>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
