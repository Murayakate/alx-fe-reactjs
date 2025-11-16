import create from 'zustand';

// Define a Zustand store for managing user recipes
const useRecipeStore = create((set) => ({
    recipes: [],
    addRecipe: (newRecipe) => set((state) => ({
        recipes: [...state.recipes, newRecipe]
    }))
}));