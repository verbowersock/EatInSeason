import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  userRecipes: [],
  setUserRecipes: (userRecipes) => set({ userRecipes }),
  toggleUserRecipe: (newRecipe) =>
    set((state) => {
      const recipeExists = state.userRecipes.some(
        (recipe) => recipe.recipe.uri === newRecipe.recipe.uri
      );
      if (recipeExists) {
        // Remove the recipe from the array
        return {
          userRecipes: state.userRecipes.filter(
            (recipe) => recipe.recipe.uri !== newRecipe.recipe.uri
          ),
        };
      } else {
        // Add the recipe to the array
        return { userRecipes: [...state.userRecipes, newRecipe] };
      }
    }),
}));
