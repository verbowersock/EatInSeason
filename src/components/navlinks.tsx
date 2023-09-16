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

type NavlinksProps = {
  open?: boolean;
  onClose: () => void;
};

const Navlinks = ({ open, onClose }: NavlinksProps) => {
  const closeMenu = () => {
    onClose();
  };

  console.log('open', open);
  return (
    <div className='flex w-full flex-col justify-between md:flex-row'>
      <div
        className={`flex md:flex-row md:justify-between ${
          open ? 'my-6 ml-10 flex-col space-y-6 pt-12 ' : 'flex-row'
        }`}
      >
        <SignedOut>
          <>
            <Link
              href='sign-up'
              className='nav_button rounded-md bg-leafyGreen px-4 text-black duration-300 ease-in-out hover:scale-110 hover:transform'
              onClick={closeMenu}
            >
              Sign Up
            </Link>
            <Link href='sign-in' onClick={closeMenu} className='nav_button'>
              Sign In
            </Link>
          </>
        </SignedOut>
        <SignedIn>
          {open && (
            <div className='mb-6'>
              <UserButton afterSignOutUrl='/' />
              <SignOutButton>
                <div className='nav_button !mx-2 mt-6 flex'>
                  Sign Out{' '}
                  <Image
                    priority
                    src='/assets/svg/logout.svg'
                    height={25}
                    width={25}
                    alt='logout'
                    className='ml-2'
                  />
                </div>
              </SignOutButton>
            </div>
          )}
        </SignedIn>
      </div>

      <hr
        className={`${
          open ? 'block' : 'hidden'
        } my-2 h-px border-0 bg-leafyGreen/30 `}
      />

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
        {!open && (
          <div className='hidden md:flex'>
            <SignedIn>
              <div className='px-10'>
                <UserButton afterSignOutUrl='/' />
              </div>
            </SignedIn>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navlinks;
