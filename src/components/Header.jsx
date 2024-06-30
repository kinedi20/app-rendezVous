import React from 'react'
import imgHeader from '../../src/assets/Confirmed attendance-amico 1.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex items-center px-10 overflow-hidden'>
        <div>
            <h1 className='text-8xl'>Rendez-vous</h1>
            <p className='leading-8 my-10 border-4 w-4/5 text-left tracking-wide border-hidden'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, nesciunt recusandae animi deleniti molestias, nobis dolore magni ad repudiandae, nostrum fugiat possimus dicta aspernatur commodi nisi! Expedita rerum in veritatis.</p>
            <Link to='/inscription'>
            <button className="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg
border-blue-600
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px] w-4/5 text-xl font-semibold">Commencer</button>
            </Link>
         
        </div>
        <div>
            <img src={imgHeader} alt="Image1" className='max-w-xl' />
            <div className='relative bottom-16'>
             <div className='bg-sky-950 rotate-45 absolute right-5 w-48 h-48 rounded-xl'></div>
             <div className='bg-sky-600 rotate-45 absolute right-16 w-48 h-48 rounded-xl'></div>
            </div>
        </div>
    </div>
  )
}

export default Header