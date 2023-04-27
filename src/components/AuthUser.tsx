import React,{useState} from 'react'
interface IState{
    isLogin:boolean
}
const AuthUser: React.FC=()=>{
    const[state,setState]=useState<IState>({
        isLogin:false
})

//login function
const handleLogin=():void=>{
    setState({isLogin:true})
}

//login function
const handleLogout=():void=>{
    setState({isLogin:false})
}
    return(
        <>
        {state.isLogin && state.isLogin ? 
            (<h3>Welcome User</h3>):
            (<h3>Please login for Dashboard</h3>)
        }
        {
            state.isLogin && state.isLogin ? (<button onClick={handleLogout}>Logout</button>):(<button onClick={handleLogin}>Login</button>)
        }
            
            
        </>
    )
}

export default AuthUser