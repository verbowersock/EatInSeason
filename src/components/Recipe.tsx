import { addUserRecipe } from '@/db_client/supabaseRequests';
import { useAuth } from '@clerk/nextjs';
import Image from 'next/image';
import React from 'react';

const Recipe = ({ recipe }: { recipe: RecipeType }) => {
  const { userId, getToken } = useAuth();
  const { label, image, ingredientLines, url, calories, images } =
    recipe.recipe;
  const servings = recipe.recipe.yield;
  const cuisineType =
    recipe.recipe.cuisineType[0].charAt(0).toUpperCase() +
    recipe.recipe.cuisineType[0].slice(1);

  const addToFavorites = async (recipe: string) => {
    try {
      const token = await getToken({ template: 'supabase' });
      const result = await addUserRecipe({
        userId,
        token,
        recipe,
      } as RecipeRequestProps);
      console.log(result);
    } catch (error) {
      throw new Error("Couldn't add recipe to favorites");
    }
  };

  return (
    <section className='container m-auto'>
      <div className='relative m-auto flex h-fit w-full max-w-4xl flex-grow-0 flex-col justify-between overflow-hidden rounded-3xl shadow-2xl sm:w-2/3 md:h-128 md:w-full md:flex-row'>
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
          <div className=' w-full self-center  bg-lime-900/90'>
            <h1 className='p-2 text-center text-lg text-white sm:px-4 sm:py-2 sm:pt-6 sm:text-2xl'>
              {label}
            </h1>
            <hr className='border-1 border-white' />
            <div className='mt-8 flex w-full flex-row justify-between justify-self-start px-1 pb-4 text-xs text-white sm:px-2 sm:pb-10 sm:text-sm xl:px-6'>
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
          <div className='mb-8 flex h-16 w-full flex-shrink-0 flex-row justify-center gap-4 pl-2 sm:gap-8'>
            <Image
              src='/assets/svg/heart.svg'
              alt='heart icon'
              width={35}
              height={35}
              onClick={() => addToFavorites(recipe._links.self.href as string)}
              className='cursor-pointer justify-self-start'
            />
            <a
              href={url}
              target='_blank'
              className=' mx-4 box-content rounded-xl bg-lime-900/90 px-6 py-4 text-center align-middle text-sm text-white sm:mx-6 sm:text-lg'
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
