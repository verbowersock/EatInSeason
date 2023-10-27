import React, { useEffect } from 'react';
import useSWR from 'swr';
import Recipe from './Recipe';
import Ingredient from './Ingredient';

import useRecipeList from '@/app/hooks/useRecipeList';
import { useAuth } from '@clerk/nextjs';
import RecipePlaceholder from './RecipePlaceholder';

const app_id = process.env.NEXT_PUBLIC_API_APP_ID;
const app_key = process.env.NEXT_PUBLIC_API_APP_KEY;

const fetcher = async (url: string) => {
  console.log('fetcher', url);
  const res = await fetch(url);
  return res.json();
};

const RecipeList = ({ ingredients, onSelectIngredient }: RecipeListProps) => {
  const { userId } = useAuth();

  const selectedIngredients = ingredients
    .filter((ingredient) => ingredient.selected)
    .map((ingredient) => ingredient.label);
  const [url, setUrl] = React.useState<string | null>(null);

  console.log('selectedIngredients', selectedIngredients);
  console.log('url', url);

  const [prevUrl, setPrevUrl] = React.useState<string | null>(null);
  const [nextUrl, setNextUrl] = React.useState<string | null>(null);
  const {
    data: userRecipes,
    loading,
    error,
  } = useRecipeList({ userId: userId! });

  const { data: swrData, error: swrError, isLoading } = useSWR(url, fetcher);

  useEffect(() => {
    if (swrData && userRecipes) {
      //compare 2 arrays and find if any of the uri from userrecipes are present in swrdata
      const matchingRecipes = userRecipes.filter((recipe) =>
        swrData.hits.some((hit: RecipeType) => hit.recipe.uri === recipe.uri)
      );
      console.log('matchingRecipes', matchingRecipes);
    }
  }, [swrData]);

  useEffect(() => {
    selectedIngredients.length > 0
      ? setUrl(
          `https://api.edamam.com/api/recipes/v2?type=public&q=${selectedIngredients.join(
            '%20'
          )}&app_id=${app_id}&app_key=${app_key}`
        )
      : null;
  }, [selectedIngredients]);

  useEffect(() => {
    setNextUrl(swrData?._links?.next?.href);
  }, [swrData]);

  const handleLoadMore = () => {
    setPrevUrl(url);
    setUrl(nextUrl);
  };
  const handleGoBack = () => {
    setNextUrl(url);
    setUrl(prevUrl);
  };

  // if (error || swrError) {
  //   throw new Error('unable to load recipes');
  // }

  return (
    <div className='text-md my-10 w-full text-center sm:text-xl'>
      <RecipePlaceholder />
      <div className='pb-10 text-black'>
        Here are the recipes containing all the following ingredients:{' '}
        <div className='flex flex-row flex-wrap justify-center gap-4 py-8 text-leafyGreen'>
          {ingredients.map((ingredient: IngredientType) => (
            <Ingredient
              key={ingredient.label}
              label={ingredient.label}
              selected={ingredient.selected ?? false}
              onChange={() => onSelectIngredient(ingredient.label)}
            />
          ))}
        </div>
        Check or uncheck ingredients to see different recipes depending on your
        preference. Please select at least one ingredient to see recipes.
      </div>
      <div className='p-6'>
        {swrData?.hits?.length === 0 && (
          <div className='text-md my-10 w-full text-center sm:text-xl'>
            Sorry, we couldn&apos;t find any recipes with those ingredients.
            <br />
            Please try removing an ingredient or two.
          </div>
        )}
        <div className='flex flex-col gap-10'>
          {isLoading ? (
            <div>Loading your recipes</div>
          ) : (
            <div className='flex flex-row justify-center gap-4'>
              {swrData?.count} recipes available
            </div>
          )}
          {swrData?.hits?.map((item: RecipeType) => (
            <Recipe key={item.recipe.uri} recipe={item} />
          ))}
          <div className='flex flex-row justify-center gap-10'>
            {prevUrl && (
              <button onClick={handleGoBack}>
                &lt;&lt;&lt; Previous 20 recipes
              </button>
            )}
            {nextUrl && (
              <button onClick={handleLoadMore}>
                Next 20 recipes &gt; &gt; &gt;
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeList;
