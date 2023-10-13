import React, { useEffect } from 'react';
import useSWR from 'swr';
import Recipe from './Recipe';
import Ingredient from './Ingredient';
import { PlantProps } from './Plant';

const app_id = process.env.NEXT_PUBLIC_API_APP_ID;
const app_key = process.env.NEXT_PUBLIC_API_APP_KEY;

const fetcher = async (url: string) => {
  console.log('fetcher', url);
  const res = await fetch(url);
  return res.json();
};

const RecipeList = ({ ingredients, onSelectIngredient }) => {
  //extract an array of labels from plants
  //useSWR with that array of labels
  //display recipes
  //if no recipes, display message

  const selectedIngredients = ingredients
    .filter((ingredient) => ingredient.selected)
    .map((ingredient) => ingredient.label);
  const [url, setUrl] = React.useState<string | null>(null);

  console.log('selectedIngredients', selectedIngredients);
  console.log('url', url);

  const [prevUrl, setPrevUrl] = React.useState<string | null>(null);
  const [nextUrl, setNextUrl] = React.useState<string | null>(null);

  const { data, error } = useSWR(url, fetcher);

  const renderCount = React.useRef(0);

  React.useEffect(() => {
    renderCount.current += 1;
    console.log('Render count:', renderCount.current);
  });

  useEffect(() => {
    selectedIngredients.length > 0
      ? setUrl(
          `https://api.edamam.com/api/recipes/v2?type=public&q=${selectedIngredients.join(
            ' '
          )}&app_id=${app_id}&app_key=${app_key}`
        )
      : null;
  }, [selectedIngredients]);

  useEffect(() => {
    setNextUrl(data?._links?.next?.href);
  }, [data]);

  const handleLoadMore = () => {
    setPrevUrl(url);
    setUrl(nextUrl);
  };
  const handleGoBack = () => {
    setNextUrl(url);
    setUrl(prevUrl);
  };
  return (
    <div className='text-md my-10 w-full text-center sm:text-xl'>
      <div className='pb-10 text-black'>
        Here are the recipes containing all the following ingredients:{' '}
        <div className='flex flex-row flex-wrap justify-center gap-4 py-8 text-leafyGreen'>
          {ingredients.map((plant: PlantProps) => (
            <Ingredient
              key={plant.label}
              label={plant.label}
              selected={plant.selected ?? false}
              onChange={() => onSelectIngredient(plant.label)}
            />
          ))}
        </div>
        Check or uncheck ingredients to see different recipes depending on your
        preference. Please select at least one ingredient to see recipes.
      </div>
      <div className='p-6'>
        {data?.hits?.length === 0 && (
          <div className='text-md my-10 w-full text-center sm:text-xl'>
            Sorry, we couldn&apos;t find any recipes with those ingredients.
            <br />
            Please try removing an ingredient or two.
          </div>
        )}
        <div className='flex flex-col gap-10'>
          <div className='flex flex-row justify-center gap-4'>
            {data?.count} recipes available
          </div>
          {data?.hits?.map((recipe, index) => (
            <Recipe key={index} recipe={recipe} />
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
