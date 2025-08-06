import React from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { useState } from 'react'
const App = () => {
  
  const [user, setUser] = useState("")
  const handleLogin = (email,password)=> {
    if (email=='admin@me.com' && password=='123') {
    console.log("whis is admin");
  }else if(email=='user@me.com' && password=='123') {
    console.log("this is user")
  }
  
  
  else{
    alert("Invalid credentials");
  }
  }
  handleLogin('admin@me.com',123)
  return (
      <>
      {!user ? <Login handleLogin={handleLogin}/>: ''}
      {/* <Login /> */}
      {/* <EmployeeDashboard></EmployeeDashboard> */}
      {/* <AdminDashboard></AdminDashboard> */}
      </>
  )
}

export default App
