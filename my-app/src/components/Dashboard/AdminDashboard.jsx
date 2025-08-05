import AllTask from '../Other/AllTask'
import CreateTask from '../Other/CreateTask'
import Header from '../Other/Header'
import React from 'react'

const AdminDashboard = () => {
  return (
    <div className='h-screen w-full p-10'>
      <Header></Header>
        <CreateTask></CreateTask>
        <AllTask></AllTask>
    
    </div>
  )
}

export default AdminDashboard
