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

const Read = (props) => {
  const todos = props.todos;
  const settodos = props.settodos;

  const renderTodos = todos.map((todo) => {
    return <li style={{color: todo.isCompleted ? "green" : "tomato"}} key={todo.id}> {todo.title} </li>;
  });

  return (
    <>
      <h1 style={{color:"tomato"}} >Pending Todos</h1>
      <ol>{renderTodos}</ol>
    </>
  );
};

export default Read;
