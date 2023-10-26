'use client';
import React, { useEffect, useState } from 'react';
import Navlinks from './Navlinks';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className='absolute left-0 top-0 w-full bg-gradient-to-b from-black/90 to-transparent'>
      <div className='z-30 m-auto flex h-20 justify-between  lg:w-full xl:w-3/4'>
        <Navlinks open={isMenuOpen} onClose={closeMenu} />

        {/*Hamburger Button*/}
        <div>
          <button
            id='menu-btn'
            type='button'
            className={`hamburger 
          ${isMenuOpen ? 'open' : ''}
        z-50 block focus:outline-none md:hidden`}
            onClick={toggleMenu}
          >
            <span className='hamburger-top'></span>
            <span className='hamburger-middle'></span>
            <span className='hamburger-bottom'></span>
          </button>
        </div>
        {/*menu container*/}
        <div
          id='menu'
          className={`absolute bottom-0 left-0 top-0 !z-40 h-fit w-full bg-black pb-10 ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
        >
          <Navlinks open={isMenuOpen} onClose={closeMenu} />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
