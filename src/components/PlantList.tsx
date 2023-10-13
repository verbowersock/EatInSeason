'use client';

import React from 'react';
import Plant, { PlantProps } from './Plant';
import { useAuth } from '@clerk/nextjs';
import PlantPlaceholder from './PlantPlaceholder';
import usePlantList from '@/app/hooks/usePlantList';

export interface PlantType {
  id: number;
  file: string;
  label: string;
}

const PlantList = () => {
  /* const defaultPlants = [
    { file: 'beet.png', label: 'Beets', selected: false },
    { file: 'broccoli.png', label: 'Broccoli', selected: false },
    { file: 'cabbage.png', label: 'Cabbage', selected: false },
    { file: 'carrot.png', label: 'Carrot', selected: false },
    { file: 'cucumber.png', label: 'Cucumber', selected: false },
    { file: 'eggplant.png', label: 'Eggplant', selected: false },
    { file: 'peas.png', label: 'Peas', selected: false },
    { file: 'bellpepper.png', label: 'Pepper', selected: false },
    { file: 'pumpkin.png', label: 'Pumpkin', selected: false },
    { file: 'raddish.png', label: 'Raddish', selected: false },
    { file: 'tomato.png', label: 'Tomato', selected: false },
    { file: 'zucchini.png', label: 'Zucchini', selected: false },
    { file: 'greenbeans.png', label: 'Green Beans', selected: false },
  ];
*/
  const { userId } = useAuth();
  const { userPlants, loading } = usePlantList({ userId: userId! });

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
