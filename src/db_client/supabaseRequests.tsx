import { supabaseClient } from './supabaseClient';

import { SupabaseClient } from '@supabase/supabase-js';

export interface GetPlantsProps {
  userId: string;
  token: string;
  plantId?: number;
}

export const getAllPlants = async (token: string) => {
  const supabase: SupabaseClient = await supabaseClient(token);
  const { data } = await supabase.from('Plants').select('*');
  return data;
};

export const getUserPlants = async ({ userId, token }: GetPlantsProps) => {
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
}: GetPlantsProps) => {
  const supabase: SupabaseClient = await supabaseClient(token);
  const { data } = await supabase
    .from('User_Plants')
    .delete()
    .eq('userId', userId);

  return data;
};

export const getUserRecipes = async ({ userId, token }) => {
  const supabase: SupabaseClient = await supabaseClient(token);
  const { data } = await supabase
    .from('User_Recipes')
    .select('*')
    .eq('userId', userId);
  return data;
};

export const addUserPlants = async ({ userId, token, plantId }) => {
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

export const removeUserPlant = async ({ userId, token, plantId }) => {
  const supabase = await supabaseClient(token);
  const { data, error } = await supabase
    .from('User_Plants')
    .delete()
    .eq('userId', userId)
    .eq('plant', plantId)
    .select();
  if (error) {
    console.log('!!!ERROR', error);
    return error;
  }
  console.log(data);
  return data;
};

export const addUserRecipe = async ({ userId, token, recipe }) => {
  const supabase = await supabaseClient(token);
  const { data, error } = await supabase
    .from('User_Recipes')
    .insert({
      userId: userId,
      recipe_content: recipe,
    })
    .select();
  if (error) {
    throw new Error(error.message);
  }
  return data;
};

export const removeUserRecipe = async ({ userId, token, recipeId }) => {
  const supabase = await supabaseClient(token);
  const { data, error } = await supabase
    .from('User_Recipes')
    .delete()
    .eq('userId', userId)
    .eq('id', recipeId)
    .select();
  if (error) {
    console.log('!!!ERROR', error);
    return error;
  }
  console.log(data);
  return data;
};
