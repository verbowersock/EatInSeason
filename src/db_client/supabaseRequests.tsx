import { supabaseClient } from './supabaseClient';

import { SupabaseClient } from '@supabase/supabase-js';

export interface GetPlantsProps {
  userId: string;
  token: string;
}

export const getPlants = async ({ userId, token }: GetPlantsProps) => {
  const supabase: SupabaseClient = await supabaseClient(token);
  const { data } = await supabase
    .from('User_Plants')
    .select('*')
    .eq('userId', userId);
  return data;
};
