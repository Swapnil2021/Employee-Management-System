import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl'> Hello <br /> <span className='font-semibold text-3xl'> Swapnil 😎</span></h1>
      <button className='bg-red-600 text-white text-lg font-medium px-5 py-2 rounded-small'>logout</button>
    </div>
  )
}

export default Header
