'use client';

import React, { useEffect } from 'react';
import Plant from './Plant';
import { useAuth } from '@clerk/nextjs';
import PlantPlaceholder from './PlantPlaceholder';
import usePlantList from '@/app/hooks/usePlantList';
import { PlantProps } from '@/types';

const PlantList = () => {
  const { userId } = useAuth();

  const { userPlants, loading, error } = usePlantList({ userId: userId! });

  if (error) {
    throw new Error(error.message);
  }
  return (
    <section className='container mx-auto flex w-full flex-col justify-center px-1 align-middle sm:px-4'>
      <h2 className='mx-auto py-14 text-6xl'>Your plants</h2>
      <div className='my-10 w-full text-center'>
        Select the plants that are producing fruit in your garden, so we can
        suggest recipes for your abundant harvest. Add or remove the plants as
        needed throughout the growing season!
      </div>
      {loading ? (
        <div className='grid grid-cols-3 gap-1 sm:grid-cols-4 sm:gap-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7'>
          {Array.from({ length: 12 }, (_, index) => (
            <div className='circle box-border' key={index}>
              <PlantPlaceholder
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              />
            </div>
          ))}
        </div>
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
