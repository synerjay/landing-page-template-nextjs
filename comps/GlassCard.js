import React from 'react';

const GlassCard = () => {
  return (
    <div className='GlassDiv flex flex-col lg:flex-row bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 rounded-xl overflow-hidden w-full max-w-5xl shadow-lg m-4 lg:m-6'>
      <div className='p-6'>
        <img
          src='/images/landingimage.png'
          alt=''
          className='img-fluid mx-auto d-block rounded-xl shadow-lg'
        />
      </div>
    </div>
  );
};

export default GlassCard;
