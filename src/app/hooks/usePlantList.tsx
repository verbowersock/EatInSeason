import { useEffect, useState } from 'react';
import {
  GetPlantsProps,
  getAllPlants,
  getUserPlants,
} from '@/db_client/supabaseRequests';
import { useAuth } from '@clerk/nextjs';
import { usePlantStore } from '@/stores/plantStore';

type PlantProps = {
  id: number;
  file: string;
  label: string;
  selected?: boolean;
};

type UsePlantListProps = {
  userId: string;
};

const usePlantList = ({ userId }: UsePlantListProps) => {
  const { getToken } = useAuth();
  const [loading, setLoading] = useState(true);
  const { userPlants, setUserPlants } = usePlantStore((store) => store);

  useEffect(() => {
    const fetchAllPlants = async () => {
      const token = await getToken({ template: 'supabase' });
      const allPlants = await getAllPlants(token as string);
      const userPlants = await getUserPlants({
        userId,
        token: token as string,
      });
      const updatedPlantList = allPlants?.map((plant) => {
        return {
          id: plant.id,
          file: `${plant.plant_name.toLowerCase().replace(/ /g, '')}.png`,
          label: plant.plant_name,
        };
      });
      const selectedPlantList = updatedPlantList?.map((plant) => {
        if (userPlants?.find((userPlant) => userPlant.plant === plant.id)) {
          return { ...plant, selected: true };
        }
        return { ...plant, selected: false };
      });
      setUserPlants(selectedPlantList as PlantProps[]);
      setLoading(false);
    };

    fetchAllPlants();
  }, [userId]);

  return { userPlants, loading };
};

export default usePlantList;
