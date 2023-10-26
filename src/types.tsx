export type IngredientType = {
  label: string;
  selected: boolean;
  onChange: (selected: boolean) => void;
};

export type PlantType = {
  id: number;
  file: string;
  label: string;
};

export interface PlantProps extends PlantType {
  selected?: boolean;
}

export type RecipeListProps = {
  ingredients: IngredientType[];
  onSelectIngredient: (label: string) => void;
};

export type RecipeType = {
  recipe: {
    label: string;
    image: string;
    ingredientLines: string[];
    url: string;
    uri: string;
    calories: number;
    mealType: string[];
    images: {
      THUMBNAIL: {
        url: string;
      };
    };
    yield: number;
    cuisineType: string[];
  };
};

export type UserRecipeType = {
  id: number;
  recipe_content: RecipeType;
};

export type PlantRequestProps = {
  userId: string;
  token: string;
  plantId?: number;
};

export type RecipeRequestProps = {
  userId: string;
  token: string;
  recipe?: RecipeType;
};
