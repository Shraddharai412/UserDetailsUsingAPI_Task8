import React from 'react';
import User from './Components/Users';
import UserDetails from './Components/UserDetails';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App()
{
  return(
   
   <Router>
            <>
            <Navbar />
            <Routes>
                <Route path="/" element={<div style={{padding:'20px',border:'2', backgroundColor:'lightyellow',borderradius:'5px',boxshadow:'0 2px 4px rgba(0,0,0,0.1)',display:'flex',flexDirection:'column',alignItems:'center',maxWidth:'600px',margin:'auto',marginTop:'20px'}}><h1 style={{alignContent:'center'}}>Welcome to the Home Page</h1></div> } />
                <Route path="/users" element={<User />} />
                <Route path="/users/:id" element={<UserDetails />} />
            </Routes>
        </>
        </Router>
    
    
   
  );

}
export default App;