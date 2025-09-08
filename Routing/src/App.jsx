import Nav from "./Components/Nav";
import Mainroutes from "./Routes/Mainroutes";

const App = () => {
  return (
    <div className="h-screen w-screen bg-gray-800 text-white px-[10%]">
      <Nav />
      <Mainroutes />
    </div>
  );
};

export default App;
