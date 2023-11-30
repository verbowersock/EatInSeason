'use client';

import React, { useEffect } from 'react';
import Plant from './Plant';
import { useAuth } from '@clerk/nextjs';
import PlantPlaceholder from './PlantPlaceholder';
import usePlantList from '@/app/hooks/usePlantList';
import Link from 'next/link';

const PlantList = () => {
  const { userId } = useAuth();

  const { userPlants, loading, error } = usePlantList({ userId: userId! });

  if (error) {
    throw new Error(error.message);
  }
  return (
    <section className='container mx-auto flex w-full flex-col justify-center px-1 align-middle sm:px-4'>
      <h2 className='mx-auto py-6 text-3xl md:py-14 md:text-6xl lg:py-14'>
        Your plants
      </h2>
      <div className='mb-10 block w-full text-center text-base sm:text-lg'>
        Select the plants that are producing fruit in your garden, so we can
        suggest recipes for your abundant harvest. Add or remove the plants as
        needed throughout the growing season! Once you are done, see your
        recommended recipes
        <Link href='/'>
          {' '}
          <a className='text-leafyGreen'>HERE</a>
        </Link>
      </div>
      {loading ? (
        <PlantPlaceholder />
      ) : (
        <div className='grid grid-cols-3 gap-1 sm:grid-cols-4 sm:gap-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7'>
          {userPlants.map((plant: PlantProps) => (
            <Plant
              key={plant.id}
              id={plant.id}
              file={plant.file}
              selected={plant.selected}
              label={plant.label}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default PlantList;
