import React from 'react';

const Offset = () => {
  return (
    <div>
      <div
        class='bannerFondo h-screen bg-green-800	bg-left-top bg-auto bg-repeat-x'
        // style='background-image: url(./img/continuartl_4.png)'
      ></div>

      <div class='-mt-64 '>
        <div class='w-full text-center'>
          <p class='text-sm tracking-widest text-white'>Subtitle</p>
          <h1 class='font-bold text-5xl text-white'>Title</h1>
        </div>

        <div class='grid grid-cols-1 gap-4 sm:grid-cols-3 '>
          <div class='p-2 sm:p-10 text-center cursor-pointer'>
            <div class='py-16 max-w-sm rounded overflow-hidden shadow-lg hover:bg-white transition duration-500  bg-white'>
              <div class='space-y-10'>
                <i class='fa fa-spa'></i>

                <div class='px-6 py-4'>
                  <div class='space-y-5'>
                    <div class='font-bold text-xl mb-2'>Spa</div>
                    <p class='text-gray-700 text-base'>
                      Todo tipo de masajes y técnicas
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class='p-2 sm:p-10 text-center cursor-pointer text-white'>
            <div class='py-16 max-w-sm rounded overflow-hidden shadow-lg bg-orange-500 hover:bg-orange-600 transition duration-500'>
              <div class='space-y-10'>
                <i class='fa fa-head-side-mask'></i>
                <div class='px-6 py-4'>
                  <div class='space-y-5'>
                    <div class='font-bold text-xl mb-2'>Bioseguridad</div>
                    <p class='text-base'>Altos estandares de bioseguridad</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class='p-2 sm:p-10 text-center cursor-pointer translate-x-2'>
            <div class='py-16 max-w-sm rounded overflow-hidden shadow-lg hover:bg-white transition duration-500 bg-white '>
              <div class='space-y-10'>
                <i class='fa fa-swimmer'></i>

                <div class='px-6 py-4'>
                  <div class='space-y-5'>
                    <div class='font-bold text-xl mb-2'>Piscina</div>
                    <p class='text-gray-700 text-base'>Piscina temperada</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offset;
