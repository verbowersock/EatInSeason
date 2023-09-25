'use client';

import React, { useEffect, useState } from 'react';
import Plant, { PlantProps } from './Plant';
import {
  GetPlantsProps,
  addUserPlants,
  getAllPlants,
  getUserPlants,
} from '@/db_client/supabaseRequests';
import { useAuth } from '@clerk/nextjs';
import { usePlantStore } from '../stores/plantStore';
import PageLoader from 'next/dist/client/page-loader';
import LoadingAnimation from './Loader';
import { ToastContainer, toast } from 'react-toastify';

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
  const { userId, getToken } = useAuth();
  const [loading, setLoading] = useState(false);
  const { userPlants, setUserPlants, addUserPlant, removeUserPlant } =
    usePlantStore((store) => store);
  console.log('userPlantsinStore', userPlants);

  useEffect(() => {
    const fetchAllPlants = async () => {
      setLoading(true);
      const token = await getToken({ template: 'supabase' });
      const allPlants = await getAllPlants(token as string);
      const userPlants = await getUserPlants({
        userId,
        token,
      } as GetPlantsProps);
      const updatedPlantList = allPlants?.map((plant) => {
        return {
          id: plant.id,
          file: `${plant.plant_name.toLowerCase().replace(/ /g, '')}.png`,
          label: plant.plant_name,
        };
      });
      //find plants in allplants that also exist in userplants and mark them as selected

      const selectedPlantList = updatedPlantList?.map((plant) => {
        if (userPlants?.find((userPlant) => userPlant.plant === plant.id)) {
          return { ...plant, selected: true };
        }
        return { ...plant, selected: false };
      });
      console.log('userPlants', userPlants);
      console.log('selectedPlantList', selectedPlantList);
      setUserPlants(selectedPlantList as PlantProps[]); // provide an initial value of an empty array
      setLoading(false);
    };

    fetchAllPlants();
  }, []);

  //const [plants, setPlants] = useState<PlantProps[]>([]);
  return (
    <section className='container mx-auto flex flex-col justify-center px-1 align-middle sm:px-4'>
      <h2 className='mx-auto py-14 text-6xl'>Your plants</h2>
      {loading ? (
        <LoadingAnimation />
      ) : (
        <div className='grid grid-cols-3 gap-1 sm:grid-cols-4 sm:gap-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7'>
          {userPlants.map((plant) => (
            <Plant
              key={plant.id}
              id={plant.id}
              file={plant.file}
              selected={plant.selected}
              label={plant.label}
              onSelect={() => setSelected(plant.id)}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default PlantList;