import { useContext } from "react";
import { recipecontext } from "../Context/RecipeContext";
import RecipeCard from "../Components/RecipeCard";

const Recipes = () => {
  const { data } = useContext(recipecontext);

  const renderrecipes = data.map((recipe) => (
    <RecipeCard recipe={recipe} key={recipe.id} />
  ));
  return (
    <div className="flex flex-wrap">
      {data.length > 0 ? renderrecipes : "No Recipes Found!"}
    </div>
  );
};

export default Recipes;
