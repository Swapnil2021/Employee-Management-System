import { setLocalStorage } from '@/utils/localStorage'
import { LogOut } from 'lucide-react'
import React, { useState } from 'react'

const Header = (props) => {
  // const [username, setUsername] = useState()
  // if (!data){
  //   setUsername('Admin')
  // }else
  //   setUsername(data.firstName)
const logoutUser = ()=> {
  // logouting
  localStorage.setItem('loggedInUser','')
  props.changeUser('')
}
  return (

    <div className='flex items-end justify-between'>
      <h1 className='text-2xl'> Hello <br /> <span className='font-semibold text-3xl'> Admin😎</span></h1>
      <button onClick={logoutUser} className='bg-red-600 text-white text-lg font-medium px-5 py-2 rounded-small'>logout</button>
    </div>
  )
}
export default Header
