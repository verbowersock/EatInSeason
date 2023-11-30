'use client';

import React, { useEffect } from 'react';

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
    return (
      <div className='p-4'>
        <RecipePlaceholder />
      </div>
    );
  }

  if (error) {
    throw new Error(error.message);
  }

  return (
    <div className='text-md my-10 w-full px-4 text-center sm:text-xl'>
      {!loading && userRecipes && userRecipes.length > 0 ? (
        <div className='inline-block justify-center gap-4 py-8 text-xl'>
          {userRecipes?.length} recipe(s) saved.{' '}
          <Link href='/' className='text-leafyGreen'>
            Find more here!
          </Link>
        </div>
      ) : (
        <div className='text-md justify-center gap-4 pt-12 sm:text-xl'>
          You have not added any recipes yet. Find some{' '}
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
