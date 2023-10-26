import React from 'react';
import Navigation from './Nav';

const SmallHeader = () => {
  return (
    <div className='relative z-30 h-20 w-full bg-black'>
      <Navigation />
    </div>
  );
};

export default SmallHeader;
