import React,{useState, useEffect} from "react"
//Whenever comnent is mounted first the useEffect will run and also each time when state values are changed. It harun everytime only if no depedence is defined in useEffect

//componentWillUnmount can be achieved with help of cleapup function in useeffect.
// when state value is changed first cleanup function run, clear all previous task and later actually useEffect task or functions

const UseEffect= () =>{
  const [msg, setMsg] = useState("")
  const [timeDt, setTimeDt]  = useState("time")
useEffect(()=>{
  console.log("the component is mounted")
  return () =>{
    console.log("The cleanup function")
  }
})
  
  function handleTime(){
    setTimeDt(new Date().toString())
  }
  return(
      <>
      <div className="container">
      <h3> Use Effect concept</h3>
        <h4>standard tine</h4>
        <p>{timeDt}</p>
      <button onClick={handleTime} >Show date</button>
        <br/>
        <button onClick={()=>setMsg("Use your time effeciently")}>Show message</button>
        <p>{msg}</p>
        
      </div>
      
      </>
    
  )
};

export default UseEffect;
