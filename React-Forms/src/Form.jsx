import { useState } from "react";

export default function Form() {
  // let [fullName, setFullName] = useState("");
  // let [username, setUsername] = useState("");

  let [formData, setFormData] = useState({
    fullName: "",
    username: "",
    password: "",
  });

  // let handleNameChange = (event)=>{
  //     console.log(event.target.value);
  //     setFullName(event.target.value);
  // }

  //  let handleUsername = (event)=>{
  //     console.log(event.target.value);
  //     setUsername(event.target.value);
  // }

  let handleInputChange = (event) => {
    let fieldName = event.target.name;
    let newValue = event.target.value;
    // console.log(newValue);
    setFormData((currData) => {
    //   currData[fieldName] = newValue;
    //   return { ...currData, [fieldName] : newValue}; //we can alse use this as below
      return { ...currData, [event.target.name] : event.target.value};
    });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      fullName: "",
      username: "",
      password : ""
    });
    console.log("Form Submitted");
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <label htmlFor="fullname">Full Name</label>
      <input
        type="text"
        placeholder="Enter your full name"
        value={formData.fullName}
        id="fullname"
        name="fullName"
        onChange={handleInputChange}
      />
      <br />
      <label htmlFor="fullname">Userame</label>
      <input
        type="text"
        placeholder="Enter your username"
        value={formData.username}
        id="username"
        name="username"
        onChange={handleInputChange}
      />
      <br />
      <label htmlFor="fullname">Password</label>
      <input
        type="password"
        placeholder="Enter your password"
        value={formData.password}
        id="password"
        name="password"
        onChange={handleInputChange}
      />
      <button>Submit</button>
    </form>
  );
}
