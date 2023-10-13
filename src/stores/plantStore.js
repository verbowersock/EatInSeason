import { create } from 'zustand';

export const usePlantStore = create((set) => ({
  userPlants: [],
  setUserPlants: (userPlants) => set({ userPlants }),
  toggleUserPlant: (id) =>
    set((state) => ({
      userPlants: state.userPlants.map((plant) => {
        if (plant.id === id) {
          return {
            ...plant,
            selected: !plant.selected,
          };
        }
        return plant;
      }),
    })),
}));
