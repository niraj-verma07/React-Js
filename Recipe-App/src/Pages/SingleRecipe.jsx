import { useContext } from "react";
import { useParams } from "react-router-dom";
import { recipecontext } from "../Context/RecipeContext";

const SingleRecipe = () => {
  const { data } = useContext(recipecontext);
    const params = useParams();
    const recipe = data.find(recipe => params.id == recipe.id)
//   console.log(data, params.id);
  console.log(recipe);

  return recipe ? <div>SingleRecipe</div> : "Loading* ";
};

export default SingleRecipe;
