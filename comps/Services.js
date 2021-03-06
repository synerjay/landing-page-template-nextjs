import React from 'react';

const Services = () => {
  return (
    <section className='bg-white h-auto md:h-screen flex flex-col-reverse  '>
      <div className='container px-3 md:px-24 pt-8 md:pt-20 pb-10 md:pb-20  md:mx-auto flex justify-center items-center flex-wrap'>
        <div className='flex flex-col justify-center items-center text-center w-full mb-2'>
          <h2 className='text-xs text-black tracking-widest font-medium title-font mb-3'>
            TRUSTED BY THESE LEADING COMPANIES
          </h2>
        </div>
        <div className='w-full md:w-2/3'>
          <div className='flex flex-row justify-around items-center rounded-lg h-full bg-gray-200 p-3'>
            <img
              className='h-10'
              src='https://img.icons8.com/fluency/96/000000/stripe.png'
            />
            <img
              className='h-10'
              src='https://img.icons8.com/color/96/000000/ebay.png'
            />
            <img
              className='h-10'
              src='https://img.icons8.com/ios-filled/100/000000/nike.png'
            />
            <img
              className='h-7'
              src='https://img.icons8.com/color/96/000000/amazon.png'
            />
            <img
              className='h-7'
              src='https://img.icons8.com/color/96/000000/heroku.png'
            />
            <img
              className='h-7'
              src='https://img.icons8.com/ios-filled/50/000000/mac-os.png'
            />
            <img
              className='h-10'
              src='https://img.icons8.com/ios-filled/100/000000/bbc-logo.png'
            />
            <img
              className='h-7'
              src='https://img.icons8.com/fluency/96/000000/google-logo.png'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
