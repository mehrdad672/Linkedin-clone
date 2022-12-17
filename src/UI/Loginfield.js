import React from 'react'
import { motion } from 'framer-motion'
const Loginfield = ({id}) => {
  return (
    <div className='relative mt-10 w-72 mx-auto '>
        <input className='peer w-full rounded-xl focus:placeholder-transparent  focus:border-blue-500 border border-gray-600 p-2 focus:outline-none' placeholder='plase enter your name' type="text" id='name'/>
        <label className='uppercase transition-all duration-200 ease-in-out  absolute z-10 text-blue-500 -top-3 bg-white px-1 left-2 hidden peer-focus:inline-flex text-sm ' for="name">username</label>
    </div>
  )
}

export default Loginfield