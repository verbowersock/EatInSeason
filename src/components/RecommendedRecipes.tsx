import { useAuth } from '@clerk/nextjs';
import React, { useEffect } from 'react';
import usePlantList from '@/app/hooks/usePlantList';
import Link from 'next/link';
import { PlantProps } from './Plant';
import RecipeListWrapper from './RecipeList';
import RecipeList from './RecipeList';

const RecommendedRecipes = () => {
  const { userId } = useAuth();
  const { userPlants, loading } = usePlantList({ userId: userId! });

  const [ingredients, setIngredients] = React.useState([]);

  useEffect(() => {
    if (!loading) {
      const selectedPlants = userPlants.filter(
        (plant: PlantProps) => plant.selected === true
      );
      setIngredients(selectedPlants);
    }
  }, [userPlants, loading]);

  const toggleIngredient = (label: string) => {
    const newIngredients = ingredients.map((ingredient) => {
      if (ingredient.label === label) {
        return { ...ingredient, selected: !ingredient.selected };
      }
      return ingredient;
    });
    setIngredients(newIngredients);
  };

  return (
    <section>
      {userPlants.length === 0 ? (
        loading ? (
          <div>Loading...</div>
        ) : (
          <div className='text-md my-10 w-full text-center sm:text-xl'>
            You don&apos;t have any plants selected. Please select some{' '}
            <Link href='/plants' className='text-leafyGreen'>
              HERE
            </Link>
            !
          </div>
        )
      ) : (
        <RecipeList
          ingredients={ingredients}
          onSelectIngredient={toggleIngredient}
        />
      )}
    </section>
  );
};

export default RecommendedRecipes;
