import axios from "axios";

const App = () => {
  const getData = async () => {
    let data = await axios.get(
      "https://picsum.photos/v2/list?page=2&limit=100"
    );
    console.log(data.data[1].download_url);
  };

  return (
    <div className="bg-black p-4 h-screen text-white">
      <button
        onClick={getData}
        className="bg-green-600 mb-3  px-5 py-2 rounded active:scale-95"
      >
        Get Data
      </button>
    </div>
  );
};

export default App;
