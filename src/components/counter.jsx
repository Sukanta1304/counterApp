import React,{useState} from 'react' ;
import style from './style.module.css';


const Counter=()=>{
    const[count,setCount] = useState(0) ;
return (
    <div>
        <h1>Welcome to Counter App</h1>

        <h3 className={count%2 ===0? style.even : style.odd}>Count={count}</h3>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
        <button onClick={()=>setCount(count*2)}>Double</button>
    </div>
)
}

export default Counter ;
