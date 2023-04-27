import React, { useState } from 'react'
import { ILogin } from './models/ILogin'

interface IState{
    user:ILogin
}
const Login:React.FC=()=>{
    const[state,setState]=useState<IState>({
        user:{
            email:'',
            password:''
        }
    })
    const inputHandler=(event: React.ChangeEvent<HTMLInputElement>):void=>{
        setState({
            user:{
                ...state.user,
                [event.target.name]:event.target.value
            }
        })
    }
    //form handler
    const handleSubmit=(event: React.FormEvent<HTMLFormElement>):void=>{
        event.preventDefault();
        console.log(state.user)
    }
    return(
        <>
            <div className='card' style={{margin:'25px'}}>
                <h3>Login Form Example</h3>
                <form onSubmit={handleSubmit}>
                    <label>Email Address</label>
                    <input type='email' 
                    name='email'
                    onChange={inputHandler}
                    value={state.user.email}

                    placeholder='enter the email'/>

                    <label>Password</label>
                    <input type='password' 
                    name='password'
                    onChange={inputHandler}
                    value={state.user.password}
                    placeholder='enter the password'/>
                    <button type='submit'>Submit</button>
                </form>
                <p>{JSON.stringify(state.user)}</p>
            </div>
        </>
    )
}

export default Login