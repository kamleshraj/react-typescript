import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { IUsers } from './models/IUsers';
import { UsersService } from './services/UsersService';
import { Link } from 'react-router-dom';

interface IParams{
    id:string
}

interface IState{
    loading:boolean,
    user:IUsers,
    errorMsg:string
}

const UserDetails:React.FC=()=>{
    const{id} = useParams<IParams | any>();
    const[state,setState] = useState<IState>({
        loading:false,
        user:{} as IUsers,
        errorMsg:''
    })

    //getting data from API
    useEffect(()=>{
        console.log(state.user)
        if(id){
            setState({...state, loading:true})
            UsersService.getUser(id)
            .then((res)=>
                setState({...state, loading:false, user:res.data})
            )
            .catch((error)=>setState({...state, loading:false, errorMsg:error.message}))
        }
    },[])
    const{loading,user,errorMsg} = state;
    return(
        <>
        <h3>Single User Details</h3>
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
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                    </tr>
                </tbody>
            </table>
            <Link to='/'>Back To Home</Link>
            <p>this is for git</p>
            <div>I am testing the new branch of react-typescript-git</div>
        </>
    )
}

export default UserDetails