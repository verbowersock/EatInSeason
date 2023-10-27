type IngredientType = {
  label: string;
  selected: boolean;
  onChange: (selected: boolean) => void;
};

type PlantType = {
  id: number;
  file: string;
  label: string;
};

interface PlantProps extends PlantType {
  selected?: boolean;
}

type RecipeListProps = {
  ingredients: IngredientType[];
  onSelectIngredient: (label: string) => void;
};

type RecipeType = {
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

type UserRecipeType = {
  uri: any;
  id: number;
  recipe_content: RecipeType;
};

type PlantRequestProps = {
  userId: string;
  token: string;
  plantId?: number;
};

type RecipeRequestProps = {
  userId: string;
  token: string;
  recipe?: RecipeType;
};
