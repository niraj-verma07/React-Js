import axios from "axios";
import { useEffect, useState } from "react";

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

  let printUserData = <h3 className="text-gray-500 text-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">"Loading..."</h3>;

  if (userData.length > 0) {
    printUserData = userData.map((elem, idx) => {
      return (
        <div key={idx}>
          <a href={elem.url} target="_blank">
            <div className="h-40 w-44  rounded-xl overflow-hidden">
              <img
                className="h-full w-full object-cover"
                src={elem.download_url}
                alt=""
              />
            </div>
            <h2 className="font-bold text-lg">{elem.author}</h2>
          </a>
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
