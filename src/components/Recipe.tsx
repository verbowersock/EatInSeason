import { addUserRecipe, removeUserRecipe } from '@/db_client/supabaseRequests';
import { useRecipeStore } from '@/stores/recipeStore';
import { useAuth } from '@clerk/nextjs';
import Image from 'next/image';
import React, { useState } from 'react';

const Recipe = ({ recipe }: { recipe: RecipeType }) => {
  const { toggleUserRecipe } = useRecipeStore((store) => store);
  const { userId, getToken } = useAuth();
  const [selected, setSelected] = useState(recipe.selected);
  const { label, image, ingredientLines, url, calories, images } =
    recipe.recipe;
  const servings = recipe.recipe.yield;
  const cuisineType =
    recipe.recipe.cuisineType[0].charAt(0).toUpperCase() +
    recipe.recipe.cuisineType[0].slice(1);

  const toggleFavorites = async (recipe: RecipeType) => {
    try {
      const token = await getToken({ template: 'supabase' });
      const recipe_id = recipe._links.self.href;
      if (!selected) {
        const result = await addUserRecipe({
          userId,
          token,
          recipe_id,
        } as RecipeRequestProps);
        if (result) {
          toggleUserRecipe(recipe);
          setSelected(true);
        }
      } else {
        const result = await removeUserRecipe({
          userId,
          token,
          recipe_id,
        } as RecipeRequestProps);
        if (result) {
          toggleUserRecipe(recipe);
          setSelected(false);
        }
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
      throw new Error('An unknown error occurred.');
    }
  };

  return (
    <section>
      <div className='relative m-auto flex h-fit w-full max-w-4xl flex-grow-0 flex-col justify-between overflow-hidden rounded-3xl shadow-2xl sm:w-3/4 md:h-128 md:w-full md:flex-row'>
        <div className='relative h-48 w-full flex-shrink-0 overflow-hidden sm:h-80 md:h-full md:w-6/12'>
          <Image
            src={image}
            alt={label}
            sizes='10000px'
            fill
            style={{ objectFit: 'cover' }}
            loading='lazy'
            placeholder='blur'
            blurDataURL={images.THUMBNAIL.url}
          />
        </div>
        <div className='flex flex-1 flex-col gap-4'>
          <div className='w-full self-center  bg-lime-900/90'>
            <h1 className='content-center px-4 py-4 text-xl text-white sm:text-2xl'>
              {label}
            </h1>

            <hr className='border-1 border-white' />
            <div className='flex h-14 w-full flex-row items-center justify-between px-1 text-xs text-white sm:px-2 sm:text-sm xl:px-6'>
              <div className='mx-2 sm:mx-4'>SERVES: {servings}</div>
              <div className='mx-2 sm:mx-4'>
                CALORIES: {Math.floor(calories / servings)}
              </div>
              <div className='mx-2 sm:mx-4'>
                CUISINE: {cuisineType}
                {}
              </div>
            </div>
          </div>
          <div className='mb-4 flex-1 overflow-auto p-4 pl-8'>
            {ingredientLines.map((ingredient, index) => (
              <div className='sm:text-md my-1 text-left text-sm' key={index}>
                {ingredient}
              </div>
            ))}
          </div>
          <div className='mb-8 flex h-16 w-3/4 flex-shrink-0 flex-row justify-between self-center align-middle'>
            <Image
              src={
                selected
                  ? '/assets/svg/heart-filled.svg'
                  : '/assets/svg/heart.svg'
              }
              alt='heart icon'
              width={35}
              height={35}
              onClick={() => toggleFavorites(recipe as RecipeType)}
              className='cursor-pointer justify-self-start'
            />
            <a
              href={url}
              target='_blank'
              className='mx-4 box-content flex h-full items-center rounded-xl bg-lime-900/90 px-6 text-center text-sm text-white sm:mx-6 sm:text-lg'
            >
              View Full Recipe
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recipe;
