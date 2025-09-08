import { useNavigate, useParams } from "react-router-dom";

const ServiceUpdate = () => {
  const navigate = useNavigate(); //navigates between routes

  return (
    <div>
      <h1 className="text-4xl font-thin mb-3"> Service Update</h1>
      <h2 className="text-3xl font-thin mb-5">Update karwalo service..</h2>
      <button
        onClick={() => navigate(-1)}
        className="bg-white text-black px-4 py-2 rounded mr-10"
      >
        Go Back
      </button>
      <button
        onClick={() => navigate("/about")}
        className="bg-white text-black px-4 py-2 rounded"
      >
        Go to about
      </button>
    </div>
  );
};

export default ServiceUpdate;
