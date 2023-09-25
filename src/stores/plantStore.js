import { create } from 'zustand';

export const usePlantStore = create((set) => ({
  userPlants: [],
  setUserPlants: (userPlants) => set({ userPlants }),
  toggleUserPlant: (id) =>
    set((state) => ({
      userPlants: state.userPlants.map((plant) => {
        if (plant.id === id) {
          console.log('plant', plant);
          return {
            ...plant,
            selected: !plant.selected,
          };
        }
        return plant;
      }),
    })),
}));
