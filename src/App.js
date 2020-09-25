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

  ////////////////////////////////////////////////////////////////

  const [fullname, setFullName] = useState({
    fname: "",
    lname: "",
    email: "",
    phone_num: ""
  });

  const inputEvent = (event) => {
   // setName(event.target.value);
    //const name = event.target.name;
    //const value = event.target.value;
    const {name, value} = event.target;

    setFullName((prevVal) => {
      return {
        ...prevVal,
        [name]: value
      }
      // if(name === 'fname'){
      //   return { fname: value, lname: prevVal.lname, email: prevVal.email, phone_num: prevVal.phone_num }
      // }else if(name === 'lname'){
      //   return { fname: prevVal.fname, lname: value, email: prevVal.email, phone_num: prevVal.phone_num }
      // }else if(name === 'email'){
      //   return { fname: prevVal.fname, lname: prevVal.lname, email: value, phone_num: prevVal.phone_num }
      // }else if(name === 'phone_num'){
      //   return { fname: prevVal.fname, lname: prevVal.lname, email: prevVal.email, phone_num: value }
      // }
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
          <p>{fullname.email}</p>
          <p>{fullname.phone_num}</p>
          <input type="text"
          placeholder="Enter your First Name"
          onChange={inputEvent}
          name="fname"
          value={fullname.fname}
          />
          <input type="text"
          placeholder="Enter your Last Name"
          onChange={inputEvent}
          name="lname"
          value={fullname.lname}
          />
          <input type="email"
          placeholder="Enter your Email"
          onChange={inputEvent}
          name="email"
          value={fullname.email}
          />
          <input type="text"
          placeholder="Enter your Mobile Number"
          onChange={inputEvent}
          name="phone_num"
          value={fullname.phone_num}
          />
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  )
}


export default App;