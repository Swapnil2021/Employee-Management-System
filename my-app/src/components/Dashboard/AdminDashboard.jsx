import AllTask from '../Other/AllTask'
import CreateTask from '../Other/CreateTask'
import Header from '../Other/Header'
import React from 'react'

const AdminDashboard = (props) => {
  return (
    <div className='h-screen w-full p-10'>
      <Header changeUser={props.changeUser}></Header>
        <CreateTask></CreateTask>
        <AllTask></AllTask>
    </div>
  )
}

export default AdminDashboard
