'use client';

import React, { useEffect, useState } from 'react';

import { useAuth } from '@clerk/nextjs';
import { getUserRecipes } from '@/db_client/supabaseRequests';
import RecipePlaceholder from './RecipePlaceholder';
import dynamic from 'next/dynamic';
const Recipe = dynamic(() => import('@/components/Recipe'), {
  ssr: false,
});

const UserRecipes = () => {
  const { userId, getToken } = useAuth();
  const [updatedRecipes, setUpdatedRecipes] = useState<RecipeType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserRecipes = async () => {
      setLoading(true);
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
              setUpdatedRecipes(updatedRecipesTemp);
              setLoading(false);
            })
            .catch((error) => console.error('Error:', error));
        }
        console.log('allUserRecipes', allUserRecipes);
      } else {
        setLoading(false);
        throw new Error('Could not retrieve recipes');
      }
    };
    fetchUserRecipes();
  }, [userId]);
  if (loading) {
    return <RecipePlaceholder />;
  }

  return (
    <div className='flex flex-col gap-10'>
      {!loading && updatedRecipes && updatedRecipes.length > 0 ? (
        <div className='flex flex-row justify-center gap-4'>
          {updatedRecipes?.length} recipes saved
        </div>
      ) : (
        <div className='flex flex-row justify-center gap-4 pt-12 text-2xl'>
          You have not added any recipes yet.
        </div>
      )}
      {updatedRecipes?.map((recipe, index) => (
        <Recipe key={index} recipe={recipe} />
      ))}
    </div>
  );
};

export default UserRecipes;
