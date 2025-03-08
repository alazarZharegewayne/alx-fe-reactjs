import react from 'react'
import {useState} from 'react'
function counter(){
    const[count,setCount]= useState(0);
    return(
        <div>
            <p>Current Count:{count}</p>
            <button onclick={()=> setCount (count + 1)}>Increment</button>
            <button onClick={()=> setCount (count - 1)}>Decrement</button>
            <button onClick={()=>setCount(0)}>Reset</button>

        </div>
    );
}
export default counter;