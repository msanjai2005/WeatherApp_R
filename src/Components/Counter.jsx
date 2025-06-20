import { useState } from 'react'

function Counter(){
    let [count, setCount] = useState(0);
    const add = ()=>{
        setCount(count + 1);
    }
    const dice = ()=>{
        setCount(count - 1);
    }
    const reset = ()=>{
        setCount(0);
    }
    return(
        <div>
            <button onClick={add}>Add</button>
            <span>{count}</span>
            <button onClick={dice}>dice</button>
            <button onClick={reset}>reset</button>
        </div>
        
    );
}
export default Counter