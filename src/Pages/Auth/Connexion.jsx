import React from 'react'
import { Link } from 'react-router-dom'
import { FaFingerprint } from "react-icons/fa";

const Connexion = () => {
  return (
    <div className='flex'>
        <div className='w-1/4 h-screen relative top-20 '>
        <div className='bg-sky-950 rotate-45 absolute  -left-14 w-48 h-48 rounded-xl'></div>
             <div className='bg-sky-600 rotate-45 absolute -left-20 w-48 h-48 rounded-xl'></div>
        </div>
        <div className='flex flex-col justify-center items-center w-2/4 '>
            <h2 className='text-6xl'>Se connecter</h2>
            <input className='w-full p-5 m-5 bg-stone-100'type="text" placeholder='Adresse e-mail' />
            <input className='w-full p-5 m-5 bg-stone-100' type="password" placeholder='Mot de passe' />
            <Link to='/dashboard' className='w-full'>
            <button className="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg
border-blue-600
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px] w-full">Se connecter</button>
            </Link>
            <Link to='/dashboard' className='w-full'>
            <button className="cursor-pointer flex items-center justify-center transition-all bg-black text-white px-6 py-2 rounded-lg
border-black
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px] w-full my-5">Continuer avec Google <FaFingerprint className='mx-7' /></button>
            </Link>
        </div>
        <div className='w-1/4 h-screen '>
        <div className='bg-sky-950 rotate-45 absolute bottom-3 right-2
         w-48 h-48 rounded-xl'></div>
             <div className='bg-sky-600 rotate-45 absolute bottom-4 -right-8 w-48 h-48 rounded-xl'></div>
        </div>
        
    </div>
  )
}

export default Connexion