import { supabaseClient } from './supabaseClient';

import { SupabaseClient } from '@supabase/supabase-js';

export const getAllPlants = async (token: string) => {
  const supabase: SupabaseClient = await supabaseClient(token);
  const { data } = await supabase.from('Plants').select('*');
  return data;
};

export const getUserPlants = async ({ userId, token }: PlantRequestProps) => {
  const supabase: SupabaseClient = await supabaseClient(token);
  const { data } = await supabase
    .from('User_Plants')
    .select('*')
    .eq('userId', userId);
  return data;
};

export const deleteUserPlants = async ({
  userId,
  token,
  plantId,
}: PlantRequestProps) => {
  const supabase: SupabaseClient = await supabaseClient(token);
  const { data } = await supabase
    .from('User_Plants')
    .delete()
    .eq('userId', userId);

  return data;
};

export const getUserRecipes = async ({ userId, token }: RecipeRequestProps) => {
  const supabase: SupabaseClient = await supabaseClient(token);
  const { data } = await supabase
    .from('User_Recipes')
    .select('*')
    .eq('userId', userId);
  return data;
};

export const addUserPlants = async ({
  userId,
  token,
  plantId,
}: PlantRequestProps) => {
  const supabase = await supabaseClient(token);
  const { data, error } = await supabase
    .from('User_Plants')
    .insert({
      userId: userId,
      plant: plantId,
    })
    .select();
  if (error) {
    throw new Error(error.message);
  }
  return data;
};

export const removeUserPlant = async ({
  userId,
  token,
  plantId,
}: PlantRequestProps) => {
  const supabase = await supabaseClient(token);
  const { data, error } = await supabase
    .from('User_Plants')
    .delete()
    .eq('userId', userId)
    .eq('plant', plantId)
    .select();
  if (error) {
    return error;
  }
  return data;
};

export const addUserRecipe = async ({
  userId,
  token,
  recipe_id,
}: RecipeRequestProps) => {
  const supabase = await supabaseClient(token);
  const { data, error } = await supabase
    .from('User_Recipes')
    .insert({
      userId: userId,
      recipe_id: recipe_id,
    })
    .select();
  if (error) {
    throw new Error(error.message);
  }
  return data;
};

export const removeUserRecipe = async ({
  userId,
  token,
  recipe_id,
}: RecipeRequestProps) => {
  const supabase = await supabaseClient(token);
  const { data, error } = await supabase
    .from('User_Recipes')
    .delete()
    .eq('userId', userId)
    .eq('recipe_id', recipe_id)
    .select();
  if (error) {
    return error;
  }
  return data;
};
