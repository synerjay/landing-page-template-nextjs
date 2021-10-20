import React from 'react';

const GlassCard = ({ children, key }) => {
  return (
    <div
      key={key}
      className='GlassDiv flex flex-col lg:flex-row bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 rounded-xl overflow-hidden w-full max-w-5xl shadow-lg m-4 lg:m-6'
    >
      {children}
    </div>
  );
};

export default GlassCard;
