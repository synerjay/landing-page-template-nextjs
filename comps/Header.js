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
      <div className='container mx-auto flex text-gray-700 flex-wrap px-36 pt-10 flex-col md:flex-row items-center md:justify-between'>
        <a
          href='#'
          className='logo flex title-font font-bold items-center text-black mb-4 md:mb-0'
        >
          Company
        </a>
        <div className='md:my-auto md:mx-0 flex flex-wrap items-center text-base justify-end'>
          <a className='mr-5 hover:text-black font-semibold'> Documentation</a>
          <a className='mr-5 hover:text-black font-semibold'> Pricing</a>
          <a className='mr-5 hover:text-black font-semibold'> Sign up</a>
          <a className='mr-5 hover:text-black font-semibold'> Sign in</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
