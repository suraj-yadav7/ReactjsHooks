import React,{useState,useMemo} from "react"
//Optimizing expensive operations
//Referntial Equality : when sub component is defined with props from first component. whenever any state changes the second compnent will rerender. to avoid it bind the second component with React.Memo(()). now it will render only when the given props value is changed in the first component state.
//always return should be written inside the useMemo to return the value after operation
const UseMemo = () =>{
    const [counter, setCounter] = useState(1)
    const [name1, setName1] = useState("")
    const result = useMemo(()=>{
       return factorial(counter)
    },[counter])
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
      </div>
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

export default UseMemo;