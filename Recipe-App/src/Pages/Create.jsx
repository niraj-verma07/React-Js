import { nanoid } from "nanoid";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { recipecontext } from "../Context/RecipeContext";

const Create = () => {
  const { data, setData } = useContext(recipecontext);
  const { register, handleSubmit, reset } = useForm();

  const SubmitHandler = (recipe) => {
    recipe.id = nanoid();
    // console.log(recipe);

    // const copydata = [...data];
    // copydata.push(recipe);
    //   setData(copydata);  //Iska Sort niche wala hai 
      
      setData([...data, recipe])

    reset();
  };
  return (
    <form onSubmit={handleSubmit(SubmitHandler)}>
      <input
        className="block border-b outline-0 p-2"
        {...register("url")}
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
      <small className="text-red-400">Error</small>

      <input
        className="block border-b outline-0 p-2"
        {...register("chef")}
        type="text"
        placeholder="Chef Name"
      />
      <small className="text-red-400">Error</small>

      <textarea
        className="block border-b outline-0 p-2"
        {...register("description")}
        placeholder="Write description"
      ></textarea>
      <small className="text-red-400">Error</small>

      <textarea
        className="block border-b outline-0 p-2"
        {...register("ingredients")}
        placeholder="Write Ingredients"
      ></textarea>
      <small className="text-red-400">Error</small>

      <textarea
        className="block border-b outline-0 p-2"
        {...register("instructions")}
        placeholder="Write Instructions"
      ></textarea>
      <small className="text-red-400">Error</small>

      <select
        className="block border-b outline-0 p-2 bg-gray-800"
        {...register("category")}
      >
        <option value="cat-1">Category 1</option>
        <option value="cat-2">Category 2</option>
        <option value="cat-3">Category 3</option>
      </select>
      <small className="text-red-400">Error</small>

      <button className="mt-5 block bg-gray-900 px-4 py-2 rounded">
        Save Recipe
      </button>
    </form>
  );
};

export default Create;
