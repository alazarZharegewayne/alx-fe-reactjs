import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/RecipeDetails";
import SearchBar from "./components/SearchBar";
import FavoritesList from "./components/FavoritesList";  // Import the FavoritesList
import RecommendationsList from "./components/RecommendationsList";  // Import the RecommendationsList
import { useRecipeStore } from "./store/recipeStore";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const setRecipes = useRecipeStore((state) => state.setRecipes);
  const recipes = [
    { id: 1, title: "Spaghetti", description: "Delicious spaghetti with tomato sauce", ingredients: ["pasta", "tomato sauce"] },
    { id: 2, title: "Salad", description: "A fresh and healthy salad", ingredients: ["lettuce", "tomato", "cucumber"] }
  ];

  useEffect(() => {
    setTimeout(() => {
      setRecipes(recipes);
      setIsLoading(false);
    }, 1000);
  }, [setRecipes]);

  return (
    <Router>
      <div className="App">
        <h1>Recipe Sharing App</h1>
        <SearchBar />
        <AddRecipeForm />

        {isLoading ? (
          <p>Loading recipes...</p>
        ) : (
          <>
            <RecipeList />
            <FavoritesList />  {/* Add FavoritesList component */}
            <RecommendationsList />  {/* Add RecommendationsList component */}
          </>
        )}

        <Routes>
          <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
