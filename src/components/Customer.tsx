import React from 'react'
interface IState{
    address:String,
    city:String
}
interface IPROPS{
    customerid:number,
    customerName:String
}
export default class Customers extends React.Component<IPROPS,IState>{
    //eslint-disable-next-line
    constructor(props:IPROPS){
        super(props)
        this.state={
            address:'New Sangvi',
            city:'Pune'
        }
    }
    render(){
        let {customerid,customerName}=this.props;
        let {address,city}=this.state
        return(
            <>
                <h3>Welcome to the class component</h3>
                <h5>Customer Name is {customerName} and Customerid is {customerid}</h5>

                <h2>State Information:</h2>
                <h5>{address}</h5>
                <h5>{city}</h5>
            </>
        )
    }
}