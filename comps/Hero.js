import React from 'react';

const Hero = () => {
  return (
    <section class='text-black'>
      <div class='container mx-auto flex px-5 py-24 items-center justify-center flex-col'>
        <div class='text-center lg:w-2/3 w-full'>
          <h1 class='title-font sm:text-4xl text-3xl mb-4 font-medium	 text-black font-mono'>
            This is your super duper title.{' '}
          </h1>
          <p class='leading-relaxed mb-8 font-normal'>
            The University of Huddersfield's School of Art, Design and
            Architecture presents the work of 10 of its award-winning interior
            design graduates in this school show for Virtual Design Festival.
          </p>
          <div class='flex justify-center'>
            <button class='border-2 border-black  text-black rounded-sm font-bold py-4 px-6 mr-2 flex items-center hover:bg-gray-900 hover:text-pink-500 transition ease-in-out duration-700'>
              Show me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
