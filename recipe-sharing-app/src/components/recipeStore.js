import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  favorites: [],
  recommendations: [],
  setSearchTerm: (term) => set({ searchTerm: term }),
  addRecipe: (newRecipe) => set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  updateRecipe: (id, updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
      ),
    })),
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter(
        (recipe) =>
          recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
          recipe.ingredients.some((ingredient) =>
            ingredient.toLowerCase().includes(state.searchTerm.toLowerCase())
          )
      ),
    })),
  addFavorite: (recipeId) => set((state) => ({
    favorites: [...state.favorites, recipeId]
  })),
  removeFavorite: (recipeId) => set((state) => ({
    favorites: state.favorites.filter((id) => id !== recipeId)
  })),
  generateRecommendations: () =>
    set((state) => {
      const recommended = state.recipes.filter((recipe) =>
        state.favorites.includes(recipe.id)
      );
      return { recommendations: recommended };
    }),
}));
