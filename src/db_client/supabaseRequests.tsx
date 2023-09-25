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

export const addUserPlants = async ({ userId, token, plantId }) => {
  console.log(userId, token, plantId);
  const supabase = await supabaseClient(token);
  const { data, error } = await supabase
    .from('User_Plants')
    .insert({
      userId: userId,
      plant: plantId,
    })
    .select();
  console.log(data, error);
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
  console.log(data, error);
  if (error) {
    console.log('!!!ERROR', error);
    return error;
  }
  console.log(data);
  return data;
};
