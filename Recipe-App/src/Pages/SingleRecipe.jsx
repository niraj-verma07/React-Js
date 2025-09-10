import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { recipecontext } from "../Context/RecipeContext";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const SingleRecipe = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { data, setData } = useContext(recipecontext);
  const recipe = data.find((recipe) => params.id == recipe.id);
  //   console.log(data, params.id);
  //   console.log(recipe);
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      title: recipe?.title, // ? -> check recipe aya hai tab title show karo (ternary operator bhi use kar skte hai)
      chef: recipe?.chef,
      image: recipe?.image,
      inst: recipe?.inst,
      desc: recipe?.desc,
      ingr: recipe?.ingr,
    },
  });

  const UpdateHandler = (recipe) => {
    const index = data.findIndex((recipe) => params.id == recipe.id);
    const copydata = [...data];
    copydata[index] = { ...copydata[index], ...recipe };
    // console.log(index);
    setData(copydata);
    localStorage.setItem("recipes", JSON.stringify(copydata));
    toast.success("Recipe Updated");
  };

  const deleteHandler = () => {
    const filterdata = data.filter((r) => r.id != params.id);
    setData(filterdata);
    localStorage.setItem("recipes", JSON.stringify(filterdata)); //set local strorage
    toast.success("Recipe Deleted");
    navigate("/recipes");
  };
  return recipe ? (
    <div className="w-full flex">
      <div className="left w-1/2 p-2">
        <h1 className="text-5xl font-black">{recipe.title}</h1>
        <img className="h-[20vh]" src={recipe.image} alt="" />
        <h2>{recipe.chef}</h2>
        <p>{recipe.desc}</p>
      </div>

      <form className="w-1/2 p-2" onSubmit={handleSubmit(UpdateHandler)}>
        <input
          className="block border-b outline-0 p-2"
          {...register("image")}
          type="url"
          placeholder="Enter image url"
        />
        <small className="text-red-400">Error</small>

        <input
          className="block border-b outline-0 p-2"
          {...register("title")}
          type="text"
          placeholder="Recipe title"
        />

        <input
          className="block border-b outline-0 p-2"
          {...register("chef")}
          type="text"
          placeholder="Chef Name"
        />

        <textarea
          className="block border-b outline-0 p-2"
          {...register("desc")}
          placeholder="Write description"
        ></textarea>

        <textarea
          className="block border-b outline-0 p-2"
          {...register("ingr")}
          placeholder="Write Ingredients"
        ></textarea>

        <textarea
          className="block border-b outline-0 p-2"
          {...register("inst")}
          placeholder="Write Instructions"
        ></textarea>

        <select
          className="block border-b outline-0 p-2 bg-gray-800"
          {...register("category")}
        >
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="super">Supper</option>
          <option value="dinner">Dinner</option>
        </select>

        <button className="mt-5 block bg-blue-900 px-4 py-2 rounded">
          Update Recipe
        </button>

        <button
          onClick={deleteHandler}
          className="mt-5 block bg-red-900 px-4 py-2 rounded"
        >
          Delete Recipe
        </button>
      </form>
    </div>
  ) : (
    "Loading! "
  );
};

export default SingleRecipe;
