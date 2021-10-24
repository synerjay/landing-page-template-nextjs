import React from 'react';

const Action = () => {
  return (
    <div class='Testimonials min-h-screen py-6 flex flex-col justify-center mx-auto sm:py-12'>
      <div class=''>
        <div class='h-auto py-20 px-10 w-2/3 bg-indigo-500 flex flex-col space-y-5 mx-auto rounded-3xl shadow-xl hover:rotate-1 transition-transform'>
          <h1 class=' font-medium text-white text-xl tracking-wide'>
            Workcation
          </h1>
          <h2 class='font-normal tracking-wide text-2xl text-white lg:w-2/5'>
            Workflow has completely transformed how we interact with our
            customers. We've seen record bookings, higher customer satisfaction
            and reduced churn
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
    </div>
  );
};

export default Action;
