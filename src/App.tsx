// import Customers from "./components/Customer";
// import Users from "./components/Users";
// import Counter from './components/Counter'
// import FunctionwithPara from "./components/FunctionwithPara";
// import Login from "./components/Login";
// import AuthUser from "./components/AuthUser";
// import UserList from "./components/UserList";
import { Route, Routes } from "react-router-dom";
import FetchAPI from "./components/FetchAPI";
import Aboutus from "./components/pages/Aboutus";
import Contactus from "./components/pages/Contactus";
import Navbar from "./components/Navbar";
import StyleComp from "./components/StyleComp";
import UserDetails from "./components/UserDetails";
function App() {
  return (
    <>
      {/* <h2>App Components</h2>
      <Users name='Rana' designation='Software Developer' age={45}/>

      <Customers customerid={3} customerName='Shiva Singh'/>

      <hr/>
      <Counter/>
      <hr/>
      <FunctionwithPara/>
      <hr/> 
      <Login/>
      <hr/>
      <AuthUser/>
      <hr/>
      <UserList/>
      <hr/> */}
      
      <Navbar/>
      <Routes>
       <Route path='/' element={<FetchAPI/>}/>
       <Route path='/user/:id' element={<UserDetails/>}/>
       <Route path='/aboutus' element={<Aboutus/>}/>
       <Route path='/contactus' element={<Contactus/>}/>
       <Route path='/styletype' element={<StyleComp/>}/>
      </Routes>
    </>
  );
}

export default App;
