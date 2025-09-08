// const Read = (props) => {
//   const users = props.users;

//   // const setusers = props.setusers;

//   const renderuser = users.map((user, index) => {
//     return <li key={index}>{user.name}</li>;
//   });

//   return (
//     <div>
//       <h1>User Data</h1>
//       <ol>{renderuser}</ol>
//     </div>
//   );
// };

// export default Read;

//Todos App Code Goes Here

import { useContext } from "react";
import { toast } from "react-toastify";
import { todocontext } from "../Wrapper";

const Read = (props) => {
  const [todos, settodos] = useContext(todocontext);

  const DeleteHandler = (id) => {
    // console.log("Delete Pressed");
    console.log(id);
    const filteredTodos = todos.filter((todo) => todo.id !== id); //filtering out the todo which does not match the id and returning a new array
    settodos(filteredTodos);
    toast.error("Todo Deleted");
  };

  const renderTodos = todos.map((todo) => {
    return (
      <li
        key={todo.id}
        className=" mb-4 flex justify-between items-center p-4 bg-gray-900 rounded "
      >
        <span className="text-xl font-thin">{todo.title}</span>
        <button
          className="font-thin text-red-400 text-sm"
          onClick={() => DeleteHandler(todo.id)}
        >
          Delete
        </button>
      </li>
    );
  });

  return (
    <div className="w-[40%] p-10">
      <h1 className="mb-10 text-5xl font-thin">
        <span className="text-pink-400">Pending</span> Todos
      </h1>
      <ol>{renderTodos}</ol>
    </div>
  );
};

export default Read;
