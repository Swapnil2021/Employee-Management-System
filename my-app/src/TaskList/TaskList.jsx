import React from 'react'

const TaskList = ({data}) => {
  return (
    <div id="tasklist" className='h-[55%] overflow-x-auto py-5 w-full flex flex-start items-center gap-5 flex-nowrap  mt-10 '>
      <div className='flex-shrink-0 h-full p-5 w-[300px] bg-red-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 text-sm py-1 rounded '>High</h3>
                <h4 className='text-sm' >20 feb 2024</h4>
            </div>

        <h2 className='mt-5 text-xl font-semibold'>Make Youtube Video </h2>
        
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium dolorem porro aut beatae, omnis tempore non quia unde veritatis nam deleniti velit. Alias illum aliquam blanditiis possimus odio doloremque vero!</p>

      </div>
      {/*  */}

       <div className='flex-shrink-0 h-full p-5 w-[300px] bg-blue-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 text-sm py-1 rounded '>High</h3>
                <h4 className='text-sm' >20 feb 2024</h4>
            </div>

        <h2 className='mt-5 text-xl font-semibold'>Make Youtube Video </h2>
        
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium dolorem porro aut beatae, omnis tempore non quia unde veritatis nam deleniti velit. Alias illum aliquam blanditiis possimus odio doloremque vero!</p>

      </div>
      {/*  */}

       <div className='flex-shrink-0 h-full p-5 w-[300px] bg-green-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 text-sm py-1 rounded '>High</h3>
                <h4 className='text-sm' >20 feb 2024</h4>
            </div>

        <h2 className='mt-5 text-xl font-semibold'>Make Youtube Video </h2>
        
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium dolorem porro aut beatae, omnis tempore non quia unde veritatis nam deleniti velit. Alias illum aliquam blanditiis possimus odio doloremque vero!</p>

      </div>
      {/*  */}

       <div className='flex-shrink-0 h-full p-5 w-[300px] bg-yellow-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 text-sm py-1 rounded '>High</h3>
                <h4 className='text-sm' >20 feb 2024</h4>
            </div>

        <h2 className='mt-5 text-xl font-semibold'>Make Youtube Video </h2>
        
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium dolorem porro aut beatae, omnis tempore non quia unde veritatis nam deleniti velit. Alias illum aliquam blanditiis possimus odio doloremque vero!</p>

      </div>
      {/*  */}
      
      

   
    </div>
  )
}

export default TaskList
