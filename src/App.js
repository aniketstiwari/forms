import React, { useState } from 'react';

const App = () => {

  // const [firstname, setName] = useState("");
  // const [lastname, setLastName] = useState("");
  // const [fullName, setFullName] = useState();

  // const inputEvent = (event) => {
  //   setName(event.target.value);
  // }

  // const inputEvent2 = (event) => {
  //   setLastName(event.target.value);
  // }

  // const onSubmit = (event) => {
  //   event.preventDefault();
  //   setFullName(firstname + " " + lastname);
  // }

  const [fullname, setFullName] = useState({
    fname: "",
    lname: ""
  });

  const inputEvent = (event) => {
   // setName(event.target.value);
    const name = event.target.name;
    const value = event.target.value;
    setFullName((prevVal) => {
      if(name === 'Fname'){
        return {fname: value, lname: prevVal.lname }
      }else if(name === 'Lname'){
        return { fname: prevVal.fname, lname: value }
      }
    })
  }

  const onSubmit = (event) => {
    event.preventDefault();
    alert("form submitted");
    //setFullName(firstname + " " + lastname);
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <h1>Hello {fullname.fname} {fullname.lname} </h1>
          <input type="text"
          placeholder="Enter your First Name"
          onChange={inputEvent}
          name="Fname"
          value={fullname.fname}
          />
          <input type="text"
          placeholder="Enter your Last Name"
          onChange={inputEvent}
          name="Lname"
          value={fullname.lname}
          />
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  )
}

export default App;