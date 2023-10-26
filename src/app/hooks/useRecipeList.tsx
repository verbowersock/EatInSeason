import { getUserRecipes } from '@/db_client/supabaseRequests';
import { UserRecipeType } from '@/types';
import { useAuth } from '@clerk/nextjs';
import { useEffect, useState } from 'react';

type UseRecipeListProps = {
  userId: string;
};

const useRecipeList = ({ userId }: UseRecipeListProps) => {
  const { getToken } = useAuth();
  const [data, setData] = useState<UserRecipeType[]>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error>();
  useEffect(() => {
    setLoading(true);

    const fetchUserRecipes = async () => {
      try {
        const token = await getToken({ template: 'supabase' });
        const allUserRecipes = await getUserRecipes({
          userId: userId as string,
          token: token as string,
        });
        if (allUserRecipes) {
          setData(allUserRecipes);
          setLoading(false);
        }
      } catch (error) {
        setError(new Error('Could not retrieve recipes'));
        setLoading(false);
      }
    };
    fetchUserRecipes();
    console.log(data);
  }, [userId]);
  if (loading) {
    return { data: [], loading: true, error };
  }

  return { data, loading, error };
};

export default useRecipeList;
