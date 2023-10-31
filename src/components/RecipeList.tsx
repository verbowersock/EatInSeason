import React from 'react';

import Recipe from './Recipe';

const RecipeList = ({ recipes }: { recipes: RecipeType[] }) => {
  console.log('RecipeList', recipes);
  return (
    <>
      {recipes.map((item: RecipeType) => (
        <Recipe key={item.recipe.uri} recipe={item} />
      ))}
    </>
  );
};

export default RecipeList;
