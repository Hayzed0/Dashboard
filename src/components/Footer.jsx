import React from 'react'
import { FaHeart } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='xl:ml-80'>
        <div className='flex items-center justify-between p-6'>
            <div className='flex text-sm text-gray-500 items-center'>
            © 2024, made with <FaHeart className='text-red-500 w-3 h-3 mx-2'/>  <strong className='mx-1'>Olawale Azeez</strong> for a better web.
            </div>
            <div className='flex space-x-4 text-sm text-gray-500'>
                    <p>Olawale Azeez</p>
                    <p>About us</p>
                    <p>Blog</p>
                    <p>License</p>
            </div>

        </div>

    </footer>
  )
}

export default Footer