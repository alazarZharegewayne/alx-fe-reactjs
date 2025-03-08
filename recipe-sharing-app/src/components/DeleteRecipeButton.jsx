import { useRecipeStore } from "../recipeStore";
import { useNavigate } from "react-router-dom";

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate(); // ✅ Added useNavigate()

  const handleDelete = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this recipe?");
    if (confirmDelete) {
      deleteRecipe(recipeId);
      alert("Recipe deleted successfully!");
      navigate("/"); // ✅ Redirect to home or another page after deletion
    }
  };

  return <button onClick={handleDelete}>Delete Recipe</button>;
};

export default DeleteRecipeButton;
