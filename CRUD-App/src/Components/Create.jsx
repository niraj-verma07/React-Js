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

  return (
    <div className="border w-[60%] p-10 mx-auto">
      <h1 className="mb-10 text-5xl font-thin">Set <span className="text-red-400">Reminders</span> for <br /> tasks</h1>
      <form onSubmit={SubmitHandler}>
        <input className="border-b wifull text-2xl font-thin outline-0"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => settitle(e.target.value)}
        />
        <br /> <br />
        <button className="mt-5 text-xl px-10 py-2 border rounded" type="submit">Create Todo</button>
      </form>
    </div>
  );
};

export default Create;
