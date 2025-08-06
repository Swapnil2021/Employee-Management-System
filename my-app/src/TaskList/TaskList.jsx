import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  console.log(data)
  return (
    <div id="tasklist" className='h-[55%] overflow-x-auto py-5 w-full flex flex-start items-center gap-5 flex-nowrap  mt-10 '>
      {data.tasks.map(()=>{
        return <h1>Hello guys</h1>   
      })}
     
      
</div>
   
  )
}

export default TaskList
