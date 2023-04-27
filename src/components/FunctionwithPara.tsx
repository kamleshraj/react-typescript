import React,{useState} from 'react'

const FunctionwithPara:React.FC=()=>{
    const[state,setState]=useState({message:'Welcome'})
    const handleGreet=(greet:string):void=>{
        setState({message:greet})
    }
    return(
        <>
        <h2>Function with Para</h2>
        <div style={{padding:'10px'}}>
            <h1>{state.message}</h1>
            <button onClick={()=>handleGreet('Like')}>Like</button>
            <button onClick={()=>handleGreet('Comment')}>Comment</button>
            <button onClick={()=>handleGreet('Subscribe')}>Subscribe</button>
        </div>
        </>
    )
}

export default FunctionwithPara