import { useState } from "react";
import Create from "./components/Create";
import Read from "./components/Read";

const App = () => {
  const [users, setusers] = useState([
    { name: "John", age: 25 },
    { name: "Jane", age: 30 },
    { name: "Doe", age: 22 },
  ]);

  return (
    <div>
      <Create />
      <Read users={users} setusers={setusers} />
    </div>
  );
};

export default App;
