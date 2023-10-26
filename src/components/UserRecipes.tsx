'use client';

import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import { useAuth } from '@clerk/nextjs';
import { getUserRecipes } from '@/db_client/supabaseRequests';
import { UserRecipeType } from '@/types';

const UserRecipes = () => {
  const { userId, getToken } = useAuth();
  const [data, setData] = useState<UserRecipeType[]>();

  useEffect(() => {
    const fetchUserRecipes = async () => {
      const token = await getToken({ template: 'supabase' });

      const allUserRecipes = await getUserRecipes({
        userId: userId as string,
        token: token as string,
      });
      if (allUserRecipes) {
        setData(allUserRecipes);
        console.log(allUserRecipes);
      } else {
        throw new Error('Could not retrieve recipes');
      }
    };
    fetchUserRecipes();
    console.log(data);
  }, [userId]);

  return (
    <div className='flex flex-col gap-10'>
      <div className='flex flex-row justify-center gap-4'>
        {data?.length} recipes saved
      </div>
      {data?.map((recipe, index) => (
        <Recipe key={index} recipe={recipe.recipe_content} />
      ))}
    </div>
  );
};

export default UserRecipes;
