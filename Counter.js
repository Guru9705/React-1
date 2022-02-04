import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Counter = (props) => {
    const [ count, setCount ] = useState(props.value);
    const increamentHandler = () => {
        setCount(count+1);
        console.log("c",count)
    }
    const decreamentHandler = () => {
        setCount(count-1);
        console.log("c",count)
    }
    return ( 
        <div>
            <h1>Counter</h1>
            <div>{count}</div>
            <button onClick={()=>increamentHandler()}>Increament</button>
            <button onClick={()=>decreamentHandler()}>Decreament</button>
        </div>
     );
}
 
export default Counter;