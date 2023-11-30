import { useAuth } from '@clerk/nextjs';
import React, { useEffect } from 'react';
import usePlantList from '@/app/hooks/usePlantList';
import Link from 'next/link';
import RecipeList from './RecipeList';
import useSWR from 'swr';

import useRecipeList from '@/app/hooks/useRecipeList';
import RecipePlaceholder from './RecipePlaceholder';
import Ingredient from './Ingredient';

const app_id = process.env.NEXT_PUBLIC_API_APP_ID;
const app_key = process.env.NEXT_PUBLIC_API_APP_KEY;

const fetcher = async (url: string) => {
  console.log('fetcher', url);
  const res = await fetch(url);
  return res.json();
};

const RecommendedRecipes = () => {
  const { userId } = useAuth();
  const [url, setUrl] = React.useState<string | null>(null);
  const [recipeData, setRecipeData] = React.useState<RecipeType[]>();
  const {
    userPlants,
    loading: userPlantsLoading,
    error: userPlantsError,
  } = usePlantList({ userId: userId! });
  const {
    userRecipes: userRecipes,
    loading: userRecipesLoading,
    error: userRecipesError,
  } = useRecipeList({ userId: userId! });

  const {
    data: swrData,
    error: swrError,
    isLoading: isSWRLoading,
  } = useSWR(url, fetcher);

  const [ingredients, setIngredients] = React.useState<IngredientType[]>([]);
  const [emptyPlants, setEmptyPlants] = React.useState<boolean>(false);

  useEffect(() => {
    if (!userPlantsLoading) {
      const selectedPlants = userPlants.filter(
        (plant: PlantProps) => plant.selected === true
      );
      selectedPlants.length === 0
        ? setEmptyPlants(true)
        : setEmptyPlants(false);
      setIngredients(selectedPlants);
      console.log('userplantsinuseeffect', userPlants);
    }
  }, [userPlants, userPlantsLoading]);

  const toggleIngredient = (label: string) => {
    const newIngredients = ingredients.map((ingredient: IngredientType) => {
      if (ingredient.label === label) {
        return { ...ingredient, selected: !ingredient.selected };
      }
      return ingredient;
    });
    setIngredients(newIngredients);
  };

  const [prevUrl, setPrevUrl] = React.useState<string | null>(null);
  const [nextUrl, setNextUrl] = React.useState<string | null>(null);

  useEffect(() => {
    if (swrData && userRecipes) {
      console.log('swrData', swrData, 'userRecipes', userRecipes);
      const matchingRecipes = swrData.hits.map((recipe: RecipeType) => {
        const isSelected = userRecipes.some(
          (userRecipe: RecipeType) =>
            recipe.recipe.uri === userRecipe.recipe.uri
        );
        return { ...recipe, selected: isSelected };
      });

      setRecipeData(matchingRecipes);
    }
  }, [swrData]);

  useEffect(() => {
    const selectedIngredients = ingredients
      .filter((ingredient) => ingredient.selected)
      .map((ingredient) => ingredient.label);
    console.log('selectedIngredients', selectedIngredients);
    console.log('ingredients', ingredients);

    selectedIngredients.length > 0
      ? setUrl(
          `https://api.edamam.com/api/recipes/v2?type=public&q=${selectedIngredients.join(
            '%20'
          )}&app_id=${app_id}&app_key=${app_key}`
        )
      : null;
  }, [ingredients]);

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

  if (swrError) {
    throw new Error(swrError.message);
  }
  if (userPlantsError) {
    throw new Error(userPlantsError.message);
  }
  if (userRecipesError) {
    throw new Error(userRecipesError.message);
  }

  if (userPlantsLoading) {
    return <div className='text-center text-xl'>Loading your plants...</div>;
  }

  return (
    <section>
      {emptyPlants ? (
        <div className='text-md my-10 w-full text-center sm:text-xl'>
          You don&apos;t have any plants selected. Please select some{' '}
          <Link href='/plants' className='text-leafyGreen'>
            HERE
          </Link>
          !
        </div>
      ) : (
        <div className='text-md my-10 w-full text-center sm:text-xl'>
          <div className='pb-10 text-black'>
            Here are the recipes containing all the following ingredients:{' '}
            <div className='flex flex-row flex-wrap justify-center gap-4 py-8 text-leafyGreen'>
              {ingredients.map((ingredient: IngredientType) => (
                <Ingredient
                  key={ingredient.label}
                  label={ingredient.label}
                  selected={ingredient.selected ?? false}
                  onChange={() => toggleIngredient(ingredient.label)}
                />
              ))}
            </div>
            Check or uncheck ingredients to see different recipes depending on
            your preference. Please select at least one ingredient to see
            recipes.
          </div>
          <div>
            {swrData?.hits?.length === 0 && (
              <div className='text-md my-10 w-full text-center sm:text-xl'>
                Sorry, we couldn&apos;t find any recipes with those ingredients.
                <br />
                Please try removing an ingredient or two.
              </div>
            )}
            <div className='flex flex-col gap-10'>
              {isSWRLoading ? (
                <div>
                  {Array(6)
                    .fill(null)
                    .map((_, index) => (
                      <RecipePlaceholder key={index} />
                    ))}
                </div>
              ) : (
                <div className='flex flex-row justify-center gap-4'>
                  {swrData?.count} recipes available
                </div>
              )}
              {swrData && <RecipeList recipes={recipeData || []} />}
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
      )}
    </section>
  );
};

export default RecommendedRecipes;
