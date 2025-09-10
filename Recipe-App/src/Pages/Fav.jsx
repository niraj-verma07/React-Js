import RecipeCard from "../Components/RecipeCard";

const Fav = () => {
  const favorite = JSON.parse(localStorage.getItem("fav") || []);

  const renderrecipes = favorite.map((recipe) => (
    <RecipeCard recipe={recipe} key={recipe.id} />
  ));
  return (
    <div className="flex flex-wrap">
      {favorite.length > 0 ? renderrecipes : "No Favorite Found!"}
    </div>
  );
};

export default Fav;
