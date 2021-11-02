import React from 'react';

const Pricing = () => {
  return (
    <div className='bg-gray-100 mb-20'>
      <div className='min-h-screen flex justify-center items-center'>
        <div className=''>
          <div className='text-center font-semibold'>
            <h1 className='text-5xl'>
              <span className='mb-8 text-2xl font-black tracking-tighter text-black md:text-5xl title-font'>
                Affordable, flexible pricing plans
              </span>
            </h1>
            <p className='pt-6 text-xl text-gray-400 font-normal w-full px-8 md:w-full'>
              Our product is for you, whether you're a hobbyist, a team, or a
              large company.
            </p>
          </div>
          <div className='pt-24 flex flex-row'>
            {/* <!-- Basic Card --> */}
            <div className='w-96 p-8 bg-white text-center rounded-3xl pr-16 shadow-xl'>
              <h1 className='text-black font-semibold text-2xl'>Starter</h1>
              <p className='pt-2 tracking-wide'>
                <span className='text-gray-400 align-top'>$ </span>
                <span className='text-3xl font-semibold'>10</span>
                <span className='text-gray-400 font-medium'>/ user</span>
              </p>
              <hr className='mt-4 border-1' />
              <div className='pt-8'>
                <p className='font-semibold text-gray-400 text-left flex'>
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
                      d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                  <span className='pl-2'>Lorem ipsum, dolor sit amet</span>
                </p>
                <p className='font-semibold text-gray-400 text-left pt-5 flex'>
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
                      d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                  <span className='pl-2'>Lorem ipsum, dolor sit amet</span>
                </p>
                <p className='font-semibold text-gray-400 text-left pt-5 flex'>
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
                      d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                  <span className='pl-2'>Lorem ipsum, dolor sit amet</span>
                </p>

                <a href='#' className=''>
                  <p className='w-full py-4 bg-blue-600 mt-8 rounded-xl text-white'>
                    <span className='font-medium'>Choose Plan</span>
                  </p>
                </a>
              </div>
            </div>
            {/* <!-- StartUp Card --> */}
            <div className='w-80 p-8 bg-gray-900 text-center rounded-3xl text-white border-4 shadow-xl border-white transform scale-125'>
              <h1 className='text-white font-semibold text-2xl'>Scale</h1>
              <p className='pt-2 tracking-wide'>
                <span className='text-gray-400 align-top'>$ </span>
                <span className='text-3xl font-semibold'>24</span>
                <span className='text-gray-400 font-medium'>/ user</span>
              </p>
              <hr className='mt-4 border-1 border-gray-600' />
              <div className='pt-8'>
                <p className='font-semibold text-gray-400 text-left flex'>
                  {/* Put checkmark hero icon here */}
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <span className='pl-2'>Lorem ipsum, dolor sit amet</span>
                </p>
                <p className='font-semibold text-gray-400 text-left pt-5 flex'>
                  {/* Put checkmark hero icon here */}
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <span className='pl-2'>Lorem ipsum, dolor sit amet</span>
                </p>
                <p className='font-semibold text-gray-400 text-left pt-5 flex'>
                  {/* Put checkmark hero icon here */}
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <span className='pl-2'>Lorem ipsum, dolor sit amet</span>
                </p>

                <a href='#' className=''>
                  <p className='w-full py-4 bg-blue-600 mt-8 rounded-xl text-white'>
                    <span className='font-medium'>Choose Plan</span>
                  </p>
                </a>
              </div>
              <div className='absolute top-4 right-4'>
                <p className='bg-blue-700 font-semibold px-4 py-1 rounded-full uppercase text-xs'>
                  Popular
                </p>
              </div>
            </div>
            {/* <!-- Enterprise Card --> */}
            <div className='w-96 p-8 bg-white text-center rounded-3xl pl-16 shadow-xl'>
              <h1 className='text-black font-semibold text-2xl'>Enterprise</h1>
              <p className='pt-2 tracking-wide'>
                <span className='text-gray-400 align-top'>$ </span>
                <span className='text-3xl font-semibold'>35</span>
                <span className='text-gray-400 font-medium'>/ user</span>
              </p>
              <hr className='mt-4 border-1' />
              <div className='pt-8'>
                <p className='font-semibold text-gray-400 text-left flex'>
                  {/* Put hero icons here */}
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
                      d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                  <span className='pl-2'>Lorem ipsum, dolor sit amet</span>
                </p>
                <p className='font-semibold text-gray-400 text-left pt-5 flex'>
                  {/* Put hero icons here */}
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
                      d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                  <span className='pl-2'>Lorem ipsum, dolor sit amet</span>
                </p>
                <p className='font-semibold text-gray-400 text-left pt-5 flex'>
                  {/* Put hero icons here */}
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
                      d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                  <span className='pl-2'>Lorem ipsum, dolor sit amet</span>
                </p>

                <a href='#' className=''>
                  <p className='w-full py-4 bg-blue-600 mt-8 rounded-xl text-white'>
                    <span className='font-medium'>Choose Plan</span>
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
