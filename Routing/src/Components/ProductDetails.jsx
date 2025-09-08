import { useNavigate, useParams } from "react-router-dom";

const ProductDetails = () => {
  const navigate = useNavigate(); //navigates between routes
  const parms = useParams(); //Extracts the parameter given in dynamic routing

  console.log(parms);
  return (
    <div>
      <h1 className="text-4xl font-thin mb-3">{parms.name}</h1>
      <h2 className="text-3xl font-thin mb-5">Product details...</h2>
      <button
        onClick={() => navigate(-1)}
        className="bg-white text-black px-4 py-2 rounded"
      >
        Go Back
      </button>
    </div>
  );
};

export default ProductDetails;
