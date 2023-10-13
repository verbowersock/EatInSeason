'use client';

import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import { useAuth } from '@clerk/nextjs';
import { getUserRecipes } from '@/db_client/supabaseRequests';

const UserRecipes = () => {
  const { userId, getToken } = useAuth();
  const [data, setData] = useState();

  useEffect(() => {
    const fetchUserRecipes = async () => {
      const token = await getToken({ template: 'supabase' });

      const allUserRecipes = await getUserRecipes({
        userId,
        token: token as string,
      });
      setData(allUserRecipes);
      console.log(allUserRecipes);
    };
    fetchUserRecipes();
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
