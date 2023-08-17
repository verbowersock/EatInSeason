'use client';
import React, { useEffect, useState } from 'react';
import { UserId } from '../context/context';
import { useContext } from 'react';
import Navlinks from './navlinks';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className='absolute right-0 top-0 z-50 flex w-full justify-between p-5 '>
      <Navlinks onClose={closeMenu} />

      {/*Hamburger Button*/}
      <div>
        <button
          id='menu-btn'
          type='button'
          className={`hamburger 
          ${isMenuOpen ? 'open' : ''}
        z-40 block focus:outline-none md:hidden`}
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
        className={`absolute bottom-0 left-0 top-0 h-96 w-full bg-black ${
          isMenuOpen ? 'block' : 'hidden'
        }`}
      >
        <Navlinks open={isMenuOpen} onClose={closeMenu} />
      </div>
    </div>
  );
};

export default Navigation;
