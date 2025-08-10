import { AuthContext } from '@/context/AuthProvider'
import React, { useContext } from 'react'

const AllTask = ({data}) => {
  const [userData,setUserData]= useContext(AuthContext)
  

  return (
    <div className='bg-[#1C1C1C] p-5 mt-5 rounded h-60 '>
      <div className='bg-red-400 px-4 py-2 mt-2 py-2 px-4 flex justify-between rounded'>
        <h2 className='w-1/5 '>Employee</h2>
            <h3 className='w-1/5 '>NewTask</h3>
            <h5 className='w-1/5 '>Active Task</h5>
            <h5 className='w-1/5 '>Completed</h5>
            <h5 className='w-1/5 '>Failed</h5>
      </div>
    <div className='h-[80%] overflow-auto'>
        {userData.map(function(elem,idx){
        return <div key={idx} className='bg-emerald-900 px-4 py-2 mt-2 py-2 px-4 flex justify-between rounded '>
        <h2 className='w-1/5 text-white text-xl'>{elem.firstName}</h2>
            <h3 className='w-1/5 text-blue-600 text-xl'>{elem.taskNumbers.newTask}</h3>
            <h5 className='w-1/5 text-yellow-400 text-xl'>{elem.taskNumbers.active}</h5>
            <h5 className='w-1/5 text-green-600 text-xl'>{elem.taskNumbers.completed}</h5>
            <h5 className='w-1/5 text-red-800 text-xl'>{elem.taskNumbers.failed}</h5>
      </div>
      })}
    </div>
      
    </div>
  )
}

export default AllTask
