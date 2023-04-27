import { IUser } from '../models/IUser';

export class UserService{
    private static users:IUser[]=[
        {sno:1, name:'John', age:34},
        {sno:2, name:'Doe', age:44},
        {sno:3, name:'Mark', age:35},
        {sno:4, name:'Taylor', age:25}
    ]
    public static getAllUsers(){
        return this.users
    }
}