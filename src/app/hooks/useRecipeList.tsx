import { getUserRecipes } from '@/db_client/supabaseRequests';
import { useAuth } from '@clerk/nextjs';
import { useEffect, useState } from 'react';
import { useRecipeStore } from '@/stores/recipeStore';

type UseRecipeListProps = {
  userId: string;
};

const useRecipeList = ({ userId }: UseRecipeListProps) => {
  const { getToken } = useAuth();
  const [data, setData] = useState<RecipeType[]>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error>();
  const { userRecipes, setUserRecipes } = useRecipeStore((store) => store);
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
          if (allUserRecipes.length === 0) {
            setLoading(false);
          } else {
            const fetchPromises = allUserRecipes.map((element) =>
              fetch(element.recipe_id)
                .then((response) => response.json())
                .catch((error) => {
                  setLoading(false);
                  throw new Error(error.message);
                })
            );

            Promise.all(fetchPromises)
              .then((updatedRecipesTemp) => {
                updatedRecipesTemp.map((recipe) => {
                  recipe.selected = true;
                });
                setData(updatedRecipesTemp);
                setUserRecipes(updatedRecipesTemp);
                setLoading(false);
              })
              .catch((error) => console.error('Error:', error));
          }
        }
      } catch (error) {
        setError(new Error('Could not retrieve recipes'));
        setLoading(false);
      }
    };
    fetchUserRecipes();
  }, [userId]);
  if (loading) {
    return { userRecipes: [], loading: true, error };
  }

  return { userRecipes, loading, error };
};

export default useRecipeList;
