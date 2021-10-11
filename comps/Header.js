import React from 'react';

const Header = () => {
  return (
    <header className='text-gray-700'>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-center'>
        <a
          href='#'
          className='logo flex title-font font-medium items-center text-black mb-4 md:mb-0'
        >
          Logo
        </a>
        <nav className='md:my-auto md:mx-48  flex flex-wrap items-center text-base justify-center'>
          <a className='mr-5 hover:text-black font-semibold'> Link</a>
          <a className='mr-5 hover:text-black font-semibold'> Link</a>
          <a className='mr-5 hover:text-black font-semibold'> Link</a>
          <a className='mr-5 hover:text-black font-semibold'> Link</a>
          <a className='mr-5 hover:text-black font-semibold'> Link</a>
        </nav>
        <a href='#' rel='noopener' target='_blank'>
          <button className='border-2 border-black  text-black  rounded-sm font-bold py-4 px-6 mr-2 flex items-center hover:bg-white hover:text-indigo-500 transition ease-in-out duration-700 md:mt-0'>
            See Plans
          </button>
        </a>
      </div>
    </header>
  );
};

export default Header;
