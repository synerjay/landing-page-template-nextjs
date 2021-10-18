import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Lorem Ipsum',
      desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      title: 'Lorem Ipsum',
      desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      title: 'Lorem Ipsum',
      desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
  ];
  return (
    <section className='bg-white mt-20'>
      <div className='container px-24 pt-24 pb-10 mx-auto flex justify-center items-center flex-wrap'>
        <div className='flex flex-col justify-center items-center text-center w-full mb-2'>
          <h2 className='text-xs text-black tracking-widest font-medium title-font mb-1'>
            TRUSTED BY THESE LEADING COMPANIES AND STARTUPS
          </h2>
          {/* <h1 className='sm:text-3xl text-2xl font-medium title-font text-black'>
            Tell them something about this cards.
          </h1> */}
        </div>
        <div className='p-4 md:w-2/3 '>
          <div className='flex flex-row justify-around items-center rounded-lg h-full bg-gray-200 p-8'>
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
            {/* <div className='flex items-center mb-3'>
              <h2 className='text-gray-700 text-lg title-font font-medium'>
                Lorem Ipsum
              </h2>
            </div> */}
            {/* <div className='flex-grow'>
              <p className='leading-relaxed text-gray-700 font-medium'>
                Put logo icons here: Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s
              </p>
              <a className='mt-3 text-gray-700 inline-flex items-center font-medium'>
                Learn More »
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
