import React,{useState} from 'react'
interface IState{
    city:String,
    address:String,
}
interface IPROPS{
    name:String,
    designation:String,
    age?:Number
}

let Users:React.FC<IPROPS>=({name,designation,age})=>{
    const[state,setState]=useState<IState>({
        city:'Pune',
        address:'New Sangvi'
    })
    return(
        <>
            <h3>User Component</h3>
            <h5>Name: {name}</h5>
            <h6>Designation: {designation}</h6>
            Age: {age}

            <h2>State Management</h2>
            <h5>City:{state.city}</h5>
            <h5>Address: {state.address}</h5>
        </>
    )
}

export default Users