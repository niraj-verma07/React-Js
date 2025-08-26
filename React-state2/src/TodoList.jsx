import { useState } from "react";
import { v4 as uuidv4 } from "uuid"; //Importing npm pakage uuid for unique id for each todo item
export default function TodoList() {
  let [todos, setTodos] = useState([{ task: "sample task", id: uuidv4(), isDone:false }]); // in id uuid is used
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    // console.log("We have to add new task");
    setTodos((prevTodos) => {
      return [...todos, { task: newTodo, id: uuidv4(), isDone:false }];
    });
    setNewTodo("");
  };
  let updateTodoValue = (event) => {
    // console.log(event.target.value);
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    setTodos((prevTodos) =>
      todos.filter((prevTodos) => {
        return prevTodos.id != id;
      })
    );
  };
  //We can write upper code like this also

  // let deleteTodo = (id) => {
  //     setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id))
  // }

  //Updating array all element (Todo Element)
  let upperCaseAll = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return {
          ...todo,
          task: todo.task.toUpperCase(),
        };
      })
    );
  };

  //Updating array one element (Todo Element)
  let upperCaseOne = (id) => {
    // console.log(id)
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            task: todo.task.toUpperCase(),
          };
        } else {
          return todo;
        }
      })
    );
  };

  //Mark as done (one)
  let markAsDone = (id) => {
    // console.log(id)
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            isDone:true,
          };
        } else {
          return todo;
        }
      })
    );
  };

  //Mark as all done
  let markAllDone = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return {
          ...todo,
          isDone : true,
        };
      })
    );
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add a task"
        value={newTodo}
        onChange={updateTodoValue}
      />
      <br />
      <button onClick={addNewTask}>Add Task</button>
      <br />
      <br />
      <br />
      <hr />
      <h4>Task Todo</h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span style={todo.isDone ? {textDecorationLine : "line-through"} : {}}>{todo.task}</span>
            &nbsp; &nbsp; &nbsp;
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            <button onClick={() => upperCaseOne(todo.id)}>UpperCase </button>
            <button onClick={() => markAsDone(todo.id)}>Mark As Done </button>
          </li>
        ))}
      </ul>
      <br />
      <button onClick={upperCaseAll}>UpperCase All</button>
      <button onClick={markAllDone}>Mark All As Done </button>
    </div>
  );
}
