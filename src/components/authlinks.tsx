import { SignOutButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { NavlinksProps } from './navlinks';

const AuthLinks = ({ open, onClose }: NavlinksProps) => {
  const closeMenu = () => {
    onClose();
  };

  return (
    <div
      className={`flex md:flex-row md:justify-between ${
        open ? 'ml-10 mt-6 flex flex-col space-y-6 pt-12 ' : 'hidden md:flex'
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
        {open ? (
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
        ) : (
          <div className='hidden md:block md:px-10'>
            <UserButton afterSignOutUrl='/' />
          </div>
        )}
      </SignedIn>
    </div>
  );
};

export default AuthLinks;
