import React,{useState} from 'react';
interface IState{
    count:number
}
interface IProps{}
const Counter:React.FC=()=>{
    const[state,setState]=useState({count:0})
    //add-increment
    const handleIncrement=()=>{
        setState({count:state.count + 1})
    }
    const handleDecrement=()=>{
        setState({count:state.count - 1})
    }
    return(
        <>
            <h2>Event Handling</h2>
            <h1>{state.count}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </>
    )
}
export default Counter