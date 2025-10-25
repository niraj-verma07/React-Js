import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  const getData = async () => {
    let response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=10`
    );
    // console.log(response.data[1].download_url);

    setUserData(response.data);
  };

  useEffect(
    function () {
      getData();
    },
    [index]
    // index ke value change pe useeffect chlega
  );

  let printUserData = (
    <h3 className="text-gray-300 text-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold">
      Loading....
    </h3>
  );

  if (userData.length > 0) {
    printUserData = userData.map((elem, idx) => {
      return (
        <div key={idx}>
          <Card elem={elem} />
        </div>
      );
    });
  }

  return (
    <div className="bg-black p-4 h-screen overflow-auto text-white">
      {/* <button
        onClick={getData}
        className="bg-green-600 mb-3  px-5 py-2 rounded active:scale-95"
      >
        Get Data
      </button> */}

      <div className="flex h-[92%] flex-wrap gap-4 p-2">{printUserData}</div>
      <div className="flex justify-center items-center p-4 gap-6">
        <button
          style={{ opacity: index == 1 ? 0 : 1 }}
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1);
              setUserData([]);
            }
          }}
          className="bg-amber-400 text-black px-4 py-2 rounded font-semibold text-sm cursor-pointer active:scale-95"
        >
          Previous
        </button>
        <h4>Page {index}</h4>
        <button
          onClick={() => {
            setIndex(index + 1);
            setUserData([]);
          }}
          className="bg-amber-400 text-black px-4 py-2 rounded font-semibold text-sm cursor-pointer active:scale-95"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
