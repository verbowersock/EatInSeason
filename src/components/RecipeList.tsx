import React from 'react';

import Recipe from './Recipe';

const RecipeList = ({ recipes }: { recipes: RecipeType[] }) => {
  console.log('RecipeList', recipes);
  return (
    <div className='flex flex-col space-y-6 md:space-y-8'>
      {recipes.map((item: RecipeType) => (
        <Recipe key={item.recipe.uri} recipe={item} />
      ))}
    </div>
  );
};

export default RecipeList;
