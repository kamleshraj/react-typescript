import React from 'react'
import Logo from './Logo'
import { NavLink } from 'react-router-dom'

const Navbar:React.FC=()=>{
    const navStyle={
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'black',
        color:'#fff'
    }
    return(
        <header style={navStyle}>
            <Logo/>
        <nav>
            <ul style={{display:'flex', alignItems:'center',justifyItems:'space-between',listStyle:'none'}}>
                <li><NavLink to={'/'} style={{color:'#fff',padding:'15px',textDecoration:'none'}}>Home</NavLink></li>
                <li><NavLink to={'/aboutus'} style={{color:'#fff',padding:'15px', textDecoration:'none'}}>About Us</NavLink></li>
                <li><NavLink to={'/contactus'} style={{color:'#fff',padding:'15px', textDecoration:'none'}}>Contact Us</NavLink></li>
                <li><NavLink to={'/styletype'} style={{color:'#fff',padding:'15px', textDecoration:'none'}}>Styled Type</NavLink></li>
            </ul>
        </nav>
        </header>
    )
}

export default Navbar