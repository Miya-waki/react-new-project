import { useState } from "react";

export default function app() {
 let [counter,setCounter ]= useState(100);
 const incrment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);
  return (
    <div>
      <div>{counter}    </div>
      <input type="button" value="increment" onclick ={incrment} />
<input type="button" value="decrement" onclick={decrement} />      
  
   
    </div>
  );
}
