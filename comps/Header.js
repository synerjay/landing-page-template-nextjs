import React, { useEffect, useState } from 'react';

const Header = () => {
  const [sticky, setSticky] = useState(false);

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  // }, []);

  // const handleScroll = () => {
  //   if (window.scrollY > 90) {
  //     setSticky(true);
  //   } else if (window.scrollY < 90) {
  //     setSticky(false);
  //   }
  // };

  return (
    <header className={`header${sticky ? ' sticky' : ''}`}>
      <div className='container mx-auto flex text-black flex-wrap px-0 md:px-36 pt-10 flex-col md:flex-row items-center md:justify-between'>
        <a
          href='#'
          className='logo flex title-font text-lg font-bold items-center text-black mb-4 md:mb-0'
        >
          Company
        </a>
        <div className='md:my-auto mx-0 md:mx-0 text-sm flex flex-wrap items-center justify-center md:justify-end'>
          <a href='#' className='mr-5 text-black font-semibold'>
            {' '}
            Documentation
          </a>
          <a href='#' className='mr-5 text-black font-semibold'>
            {' '}
            Pricing
          </a>
          <a href='#' className='mr-5 text-black font-semibold'>
            {' '}
            Sign up
          </a>
          <a href='#' className='mr-5 text-black font-semibold'>
            {' '}
            Sign in
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
