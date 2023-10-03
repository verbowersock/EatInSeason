'use client';
import Link from 'next/link';
import React from 'react';
import {
  SignInButton,
  SignOutButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';
import Image from 'next/image';
import AuthLinks from './authlinks';

export type NavlinksProps = {
  open?: boolean;
  onClose: () => void;
};

const Navlinks = ({ open, onClose }: NavlinksProps) => {
  const closeMenu = () => {
    onClose();
  };

  console.log('open', open);
  return (
    <div className='flex w-full flex-col-reverse justify-between md:flex-row'>
      <div
        className={`${open ? 'mt-6' : 'mt-0'}
        ml-10 mt-6 flex flex-col space-y-6 md:ml-0 md:mt-0 md:flex-row  md:space-x-10 md:space-y-0`}
      >
        <Link
          href='/about'
          className={`nav_button ${open ? 'block' : 'hidden'} md:block`}
        >
          About us
        </Link>
        <Link
          href='/contact'
          className={`nav_button ${open ? 'block' : 'hidden'} md:block`}
        >
          Contact
        </Link>
      </div>
      <hr
        className={`${
          open ? 'block' : 'hidden'
        } my-2 h-px border-0 bg-leafyGreen/30 `}
      />
      <AuthLinks open={open} onClose={onClose} />
    </div>
  );
};

export default Navlinks;
