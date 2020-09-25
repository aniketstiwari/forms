import React, { useState } from 'react';

const App = () => {

  const [firstname, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [fullName, setFullName] = useState();

  const inputEvent = (event) => {
    setName(event.target.value);
  }

  const inputEvent2 = (event) => {
    setLastName(event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    setFullName(firstname + " " + lastname);
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <h1>Hello {fullName} </h1>
          <input type="text" placeholder="Enter your First Name" onChange={inputEvent} value={firstname}/>
          <input type="text" placeholder="Enter your Last Name" onChange={inputEvent2} value={lastname}/>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  )
}

export default App;