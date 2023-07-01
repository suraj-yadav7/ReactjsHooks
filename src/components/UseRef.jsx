import React,{useState,useEffect, useRef} from "react"

//UseRef gives reference of DOM
//It helpful for storing the previous state 
//holde mutuable values and prevent render of component
//the input tag value can be changed in dom but not in state can be achieved . just to show some info
//When the values in useRef changes the component don't re render

const UseRef = () =>{
  const [name1, setName1] = useState("")
  const [counter, setCounter] = useState(0)
  const inputRef = useRef()

  //below dom refence , element access
  function handleReset(e){
    inputRef.current.value="Reset Done"
    inputRef.current.focus()
    console.log( inputRef.current.value)
    setName1('')
  }

    //storing previous state value
    const previousCounterRef = useRef();

    function handleRandom(){
      let val = Math.ceil(Math.random()*100)
      setCounter(val)
    }
  useEffect(()=>{
    previousCounterRef.current = counter
  },[counter])
  return(
      <>
      <div className="container">
      <h3>The UseRef Concept</h3>
        <input type="text" ref={inputRef} placeholder="enter your name" value={name1} onChange={(e)=>setName1(e.target.value)}></input>
        <button onClick={handleReset}>Reset</button>
        <h4>My name is {name1}</h4>
        <hr/>
        <h3>Generating Random Number</h3>
        <h4>The rando number: {counter}</h4>
        <h5>The Previous value: {previousCounterRef.current}</h5>
        <button onClick={handleRandom}>Random Number</button>
      </div>
      </>
    
  )
};

export default U