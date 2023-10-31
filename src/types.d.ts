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
  _links: { self: { href: string } };
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
  id: number;
  recipe_id: string;
};

type PlantRequestProps = {
  userId: string;
  token: string;
  plantId?: number;
};

type RecipeRequestProps = {
  userId: string;
  token: string;
  recipe?: string;
};
