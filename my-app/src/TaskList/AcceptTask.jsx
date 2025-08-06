import React from 'react'

const AcceptTask = () => {
  return (
      <div className='flex-shrink-0 h-full p-5 w-[300px] bg-red-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 text-sm py-1 rounded '>Category</h3>
                <h4 className='text-sm' >20 feb 2024</h4>
            </div>

        <h2 className='mt-5 text-xl font-semibold'>Make Youtube Video </h2>
        
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium dolorem porro aut beatae, omnis tempore non quia unde veritatis nam deleniti velit. Alias illum aliquam blanditiis possimus odio doloremque vero!</p>
<div className='flex justify-between mt-4 '>
    <button className='bg-green-500 py-1 px-2 text-sm'>Mark as Completed</button>
    <button className='bg-red-500 py-1 px-2 text-sm'>mark as Failed</button>
</div>
      </div>
  )
}

export default AcceptTask
