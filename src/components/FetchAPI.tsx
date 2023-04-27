import React,{useState,useEffect} from 'react'
import { IUsers } from './models/IUsers'
import { UsersService } from './services/UsersService'
import { Link } from 'react-router-dom'
interface IState{
    loading:boolean,
    users:IUsers[],
    errorMsg:string
}
const FetchAPI:React.FC=()=>{
    const[state,setState]=useState<IState>({
        loading:false,
        users:[] as IUsers[],
        errorMsg:''
    })


    //network request
    useEffect(()=>{
        setState({...state,loading:true})
        UsersService.getAllUsers()
        .then((res)=>setState({
            ...state, loading:false, users:res.data
        }))
        .catch(err=>setState({
            ...state, loading:false, errorMsg:err.message
        }))
        //eslint-disable-next-line
    },[])
    const {loading,users,errorMsg} = state
    return(
        <>
            <h3>Fetch Data From API</h3>
            {errorMsg && (<p>{errorMsg}</p>)}
            {loading && <h1>Loading...</h1>}
            <table>
                <thead>
                   <tr>
                        <th>SNO</th>
                        <th>Name</th>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                   </tr>
                </thead>
                <tbody>
                   {users.length > 0 && users.map(user=>(
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td><Link to={`user/${user.id}`}>{user.name}</Link></td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                    </tr>
                   ))}
                </tbody>
            </table>
        </>
    )
}

export default FetchAPI