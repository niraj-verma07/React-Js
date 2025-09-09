import { Link } from "react-router-dom";

const RecipeCard = (props) => {
  const { id, image, title, desc, chef } = props.recipe;
  return (
    <Link
      to={`/recipes/details/${id}`}
      className="duration-150 hover:scale-101 block mr-3 mb-3 w-[23vw] rounded overflow-hidden shadow"
    >
      <img className="w-full object-cover h-[20vh]" src={image} alt="" />
      <h1 className="mt-2 px-2 font-black">{title}</h1>
      <small className="px-2 text-red-400">{chef}</small>
      <p className="px-2 pb-3">
        {desc.slice(0, 100)}...<small className="text-blue-400">more</small>
      </p>
    </Link>
  );
};

export default RecipeCard;
