import React from 'react';

const Action = () => {
  return (
    <div class='Testimonials py-2 flex flex-col justify-center mx-auto sm:py-12'>
      <div class='h-auto py-10 px-10 w-2/3 bg-indigo-500 flex flex-col space-y-5 mx-auto rounded-3xl shadow-xl hover:rotate-1 transition-transform'>
        <h1 class='text-center text-white font-bold text-4xl tracking-wide'>
          Ready to take the plunge?
        </h1>
        <h2 class='font-normal tracking-wide text-lg text-white'>
          Here's some room for that finall call to action
        </h2>
        <div class='flex flex-col'>
          <backquotes class='font-normal text-white text-sm tracking-wider'>
            Marie Chivers{' '}
          </backquotes>
          <backqoutes class='font-normal text-white text-sm tracking-wider'>
            CEO Workcation
          </backqoutes>
        </div>
      </div>
    </div>
  );
};

export default Action;
