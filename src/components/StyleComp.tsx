import React from 'react'

const StyleComp:React.FC=()=>{
    let bg={
        backgroundColor:'blue',
        color:'#fff',
        padding:'15px'
    }
    return(
        <>
            <h2 style={{color:'red'}}>Style Component</h2>
            <h5 style={bg}>This is the internal css</h5>
        </>
    )
}

export default StyleComp