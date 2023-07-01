import React,{useState,useMemo, useEffect, useCallback} from "react"
//UseCallback return function Vs UseMemo return value
const UseCallBack = () =>{
    const [counter, setCounter] = useState(1)
    const [name1, setName1] = useState("")
    const result = useMemo(()=>{
       return factorial(counter)
    },[counter])

  const displayName = useCallback((greeting)=>{
    return greeting+" "+name1
  },[name1])
  const myCompany= "amazon"
  return(
      <>
      <div className="container">
      <h3>The UseMemo Concept</h3>
      <h4> The factorial of {counter} : {result} </h4>
        <button onClick={()=>setCounter(counter-1)}>Decrement</button>
        <button onClick={()=>setCounter(counter+1)}>Increment</button>
        <hr/>
        <br/>
        <label>Enter Your Name</label>
        <input type="text" placeholder="enter name" value={name1} onChange={(e)=>setName1(e.target.value)} ></input>
        <h5>Name: {name1}</h5>
        <DisplayName display={displayName} cmp={myCompany} />
      </div>
      </>
    
  )
};
const DisplayName = ({display,cmp}) =>{
  const [value, setValue] = useState("")
  useEffect(()=>{
    setValue(display("hello"))
    console.log("component rendered DisplayName")
  },[display])

  return(
    <>
    <span>My name: {value}</span>
    <h4>the company {cmp} </h4>
    </>
  )
};

const factorial = (n)=>{
  //Adding complex stuff to slow down the compnent
  let i= 0;
  while(i<50000000000000){
  if(n<0){
    return -1
  }
  else if(n===0){
    return 1
  }
  else{
  
  return n*factorial(n-1)
  }
}
  i++
  } 

export default UseCallBack;