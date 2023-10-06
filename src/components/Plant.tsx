'use client';
import Image from 'next/image';
import React from 'react';
import { PlantType } from './PlantList';
import { addUserPlants, removeUserPlant } from '@/db_client/supabaseRequests';
import { useAuth } from '@clerk/nextjs';
import { usePlantStore } from '@/stores/plantStore';
import { toast } from 'react-toastify';

export interface PlantProps extends PlantType {
  selected?: boolean;
}

const Plant = ({ file, label, selected, id }: PlantProps) => {
  const { userId, getToken } = useAuth();
  const { toggleUserPlant } = usePlantStore((store) => store);

  const selectPlant = async () => {
    try {
      const token = await getToken({ template: 'supabase' });
      if (!selected) {
        const result = await addUserPlants({ userId, token, plantId: id });
        console.log('result', result);
      } else {
        await removeUserPlant({ userId, token, plantId: id });
      }
      toggleUserPlant(id);
    } catch (error) {
      alert('Something went wrong');
    }
  };
  return (
    <div
      onClick={selectPlant}
      className={`${
        selected
          ? 'cursor-pointer border-4 border-leafyGreen'
          : 'cursor-pointer border-4 border-gray-200 shadow-md shadow-black transition ease-in-out hover:shadow-sm hover:delay-100 '
      } circle box-content flex flex-col place-self-center overflow-hidden rounded-full`}
    >
      <div className='relative z-0 mx-auto mt-2 h-12 w-12 overflow-hidden sm:mt-4 sm:h-20 md:w-20'>
        <Image
          src={`/assets/images/${file}`}
          alt={label}
          fill
          objectFit='contain'
        />
      </div>
      <div className='m-auto mt-0 text-[10px] sm:mt-2 sm:text-xs'>{label}</div>
    </div>
  );
};

export default Plant;
