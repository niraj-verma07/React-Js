import { nanoid } from "nanoid";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { recipecontext } from "../Context/RecipeContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const { data, setData } = useContext(recipecontext);
  const { register, handleSubmit, reset } = useForm();

  const SubmitHandler = (recipe) => {
    recipe.id = nanoid();
    // console.log(recipe);

    // const copydata = [...data];
    // copydata.push(recipe);
    //   setData(copydata);  //Iska Sort niche wala hai

    setData([...data, recipe]);
    toast.success("New Recipe Created!");
    reset();
    navigate("/recipes");
  };
  return (
    <form onSubmit={handleSubmit(SubmitHandler)}>
      <input
        className="block border-b outline-0 p-2"
        {...register("image")}
        type="url"
        placeholder="Enter image url"
      />
      <small className="text-red-400">Error will show like this</small>

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

      <button className="mt-5 block bg-gray-900 px-4 py-2 rounded">
        Save Recipe
      </button>
    </form>
  );
};

export default Create;
