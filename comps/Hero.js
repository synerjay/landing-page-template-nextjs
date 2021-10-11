import React from 'react';

const Hero = () => {
  return (
    <section className='px-16 text-black'>
      <div className='container mx-auto flex px-5 py-24 items-center justify-center flex-col'>
        <div className='text-center lg:w-2/3 w-full'>
          <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium	 text-black font-mono'>
            Hero Title Here Blah Blah blah{' '}
          </h1>
          <p className='leading-relaxed mb-8 font-normal'>
            The University of Huddersfield's School of Art, Design and
            Architecture presents the work of 10 of its award-winning interior
            design graduates in this school show for Virtual Design Festival.
          </p>
          <div className='flex justify-center'>
            <button className='border-2 border-black  text-black rounded-sm font-bold py-4 px-6 mr-2 flex items-center hover:bg-gray-900 hover:text-pink-500 transition ease-in-out duration-700'>
              Show me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
