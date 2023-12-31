import React from 'react';
import { Link } from 'react-router-dom';

function Navber(props) {

const handeleButton =()=>{
    console.log('check')
}

    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       
      
        <li> <Link to='/'>Home</Link></li>
      
        <li> <Link to='/about'>About</Link></li>
      
        <li> <Link to='/dashboard'>Dashboard</Link></li>
      </ul>
    </div>
   <Link> <a className="btn btn-ghost normal-case text-xl">Hotel </a></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      
      <li tabIndex={0}>
        
     <Link to='/'>Home</Link>
      </li>
      <li tabIndex={0}>
        
        <Link to='/about'>About</Link>
         </li>     <li tabIndex={0}>
        
        <Link to='/dashboard'>Dashboard</Link>
         </li>
      
    </ul>
  </div>
  <div className="navbar-end">

    <Link to='/login' className='btn btn-outline btn-success' >Login</Link>
  </div>
</div>
        </div>
    );
}

export default Navber;