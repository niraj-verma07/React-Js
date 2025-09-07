// import { useState } from "react";

// const Create = (props) => {
//   console.log(props);
//   const [fullname, setfullname] = useState("");
//   const [age, setage] = useState(18);

//   const SubmitHandler = (e) => {
//     e.preventDefault();
//     const newuser = { fullname, age };
//     console.log(newuser);
//   };

//   return (
//     <div>
//       <h1>Register User</h1>
//       <form onSubmit={SubmitHandler}>
//         <input
//           onChange={(e) => setfullname(e.target.value)}
//           value={fullname}
//           type="text"
//           placeholder="Full Name"
//         />

//         <input
//           onChange={(e) => setage(e.target.value)}
//           value={age}
//           type="number"
//           placeholder="Age"
//         />

//         <button>Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Create;

//Todos App Code Goes Here
import { useState } from "react";
import { nanoid } from "nanoid";

const Create = (props) => {
  const todos = props.todos;
  const settodos = props.settodos;

  const [title, settitle] = useState("");

  const SubmitHandler = (e) => {
    e.preventDefault();
    const newTodo = {
      id: nanoid(), //nanoid generates random id
      title: title,
      isCompleted: false,
    };

    let copytodos = [...todos];
    copytodos.push(newTodo);
    settodos(copytodos);

    // settodos([...todos, newTodo]);  // Alternative way to add new todo (Short Code)

    settitle("");
  };

  const buttoncss = {
    color: "white",
    backgroundColor: "black",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    padding: "10px 15px",
    fontSize: "16px",
  };
  return (
    <>
      <h1>Create Task</h1>
      <form onSubmit={SubmitHandler}>
        <input
          type="text"
          value={title}
          onChange={(e) => settitle(e.target.value)}
        />
        <br /> <br />
        <button style={buttoncss} type="submit">
          Create Todo
        </button>
      </form>
    </>
  );
};

export default Create;
