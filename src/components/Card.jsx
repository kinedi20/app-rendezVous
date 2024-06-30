import React from 'react'
import { FaMeetup } from "react-icons/fa";


const Card = (props) => {
  return (
    <div className={props.color}>
        <div className='flex items-center justify-center p-5 '>
         
         <p className='bg-white rounded-xl translate-x-2 p-3 cursor-pointer'>{props.number} </p>
         <FaMeetup  className=' bg-white text-4xl rounded-full'/>
        </div>
        <h2 className='text-center text-2xl text-white font-bold cursor-pointer'>{props.texte}</h2>
    </div>
  )
}

export default Card

// 'bg-sky-600 p-7 rounded-xl'