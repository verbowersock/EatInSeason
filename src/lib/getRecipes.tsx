'use server';

export const getRecipes = async ({ url }: { url: string }) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('unable to load recipes');
  }
  return res.json();
};
