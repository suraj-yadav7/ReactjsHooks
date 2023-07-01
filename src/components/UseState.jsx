import React, { useState } from "react"
//In useState we can use four different types of datatype like string, boolean, array, objects

const UseState = () => {

  const [user, setUser] = useState("----")

//   let arrUser=["john"]
  const [personName, setPersonName] = useState([])
  console.log("arr val", user)

  const handleForm = (e)=> {
    e.preventDefault()
    setPersonName([...personName, user])
    
  }
  return (
    <>
      <div className="container1">
        <h3>My name is {user}</h3>
        <button onClick={() => setUser("Suraj Kumar")}>Click Here</button>
        <hr />
        <form onSubmit={handleForm}>
          <input type="text" placeholder="Enter your name"  onChange={(e) => setUser(e.target.value)} />
          <button>Submit</button>
        </form>
        <ul>
          {
            personName && personName.map((item,index) => (
              <li key={index}>{item}</li>
            ))
          }

        </ul>
      </div>
    </>
  )
}

export default UseState;