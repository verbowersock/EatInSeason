import { useEffect, useState } from 'react';
import { getAllPlants, getUserPlants } from '@/db_client/supabaseRequests';
import { useAuth } from '@clerk/nextjs';
import { usePlantStore } from '@/stores/plantStore';

const usePlantList = ({ userId }: { userId: string }) => {
  const { getToken } = useAuth();
  const [loading, setLoading] = useState(true);
  const { userPlants, setUserPlants } = usePlantStore((store) => store);
  const [error, setError] = useState<Error>();
  useEffect(() => {
    const fetchAllPlants = async () => {
      console.log('fetching plants');
      try {
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
        console.log('userPlants', userPlants);
      } catch (error) {
        setLoading(false);
        setError(new Error('Could not retrieve plants'));
      }
    };

    fetchAllPlants();
  }, [userId]);

  if (loading) {
    return { userPlants: [], loading: true };
  }

  return { userPlants, loading, error };
};

export default usePlantList;
