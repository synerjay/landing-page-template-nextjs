import React from 'react';

const Action = () => {
  return (
    <div className='Testimonials py-2 flex flex-col justify-center mx-auto sm:py-12'>
      <div className='h-auto py-10 px-10 w-2/3 bg-indigo-500 flex flex-col justify-center items-center space-y-7 mx-auto rounded-3xl shadow-xl hover:rotate-1 transition-transform'>
        <h1 className='text-white font-bold text-4xl tracking-tight'>
          Ready to take the plunge?
        </h1>
        <h2 className='font-normal tracking-tight text-lg text-white'>
          Here's some room for that final call to action
        </h2>
        <div className='flex justify-center items-center'>
          <a
            href=''
            className='bg-gray-900 rounded-full font-bold text-white px-4 py-3 transition duration-300 ease-in-out hover:bg-gray-800 mr-6'
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
        <div className='flex text-white justify-center items-center gap-x-10 text-sm'>
          <span className='flex items-center gap-x-1'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-4 w-4'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                clipRule='evenodd'
              />
            </svg>{' '}
            30-day free trial{' '}
          </span>
          <span className='flex items-center gap-x-1'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-4 w-4'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                clipRule='evenodd'
              />
            </svg>{' '}
            No credit card required{' '}
          </span>
          <span className='flex items-center gap-x-1'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-4 w-4'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                clipRule='evenodd'
              />
            </svg>{' '}
            Cancel anytime{' '}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Action;
