'use client';

import React, { useEffect, useState } from 'react';

import { useAuth } from '@clerk/nextjs';
import RecipePlaceholder from './RecipePlaceholder';
import useRecipeList from '@/app/hooks/useRecipeList';
import RecipeList from './RecipeList';
import { useRecipeStore } from '@/stores/recipeStore';
import Link from 'next/link';

const UserRecipes = () => {
  const { userId } = useAuth();

  const {
    userRecipes: updatedRecipes,
    loading,
    error,
  } = useRecipeList({ userId: userId! });

  const { userRecipes } = useRecipeStore((store) => store);

  useEffect(() => {
    console.log('userRecipesFromStore', userRecipes);
  }, [userRecipes]);

  if (loading) {
    return <RecipePlaceholder />;
  }

  if (error) {
    throw new Error(error.message);
  }

  return (
    <div className='mb-10 flex flex-col gap-10'>
      {!loading && userRecipes && userRecipes.length > 0 ? (
        <div className='flex flex-row justify-center gap-4 pt-8 text-xl'>
          {userRecipes?.length} recipe(s) saved. Find more
          <Link href='/' className='text-leafyGreen'>
            HERE
          </Link>
        </div>
      ) : (
        <div className='flex flex-row justify-center gap-4 pt-12 text-2xl'>
          You have not added any recipes yet. Find some
          <Link href='/' className='text-leafyGreen'>
            HERE
          </Link>
        </div>
      )}
      {userRecipes && <RecipeList recipes={userRecipes} />}
    </div>
  );
};

export default UserRecipes;
