import React from 'react';

const PlantPlaceholder = (props: any) => (
  <div className='grid grid-cols-3 gap-1 sm:grid-cols-4 sm:gap-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7'>
    {Array.from({ length: 12 }, (_, index) => (
      <div
        className='h-20 w-20 rounded-full bg-gray-300 md:h-36 md:w-36'
        key={index}
      ></div>
    ))}
  </div>
);

export default PlantPlaceholder;
