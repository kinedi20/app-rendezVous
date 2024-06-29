import React from 'react'
import { ImBell } from "react-icons/im";
import photoDashboard from '../../../src/assets/photoDashboard.png'
import Card from '../../components/Card';


const Accueils = () => {
    const table = [  
        {
        color:"bg-blue-600 p-7 rounded-xl", 
        number:'98', 
        texte:'Liste des rendez-vous'
        },
        {color:"bg-green-700 p-7 rounded-xl", 
        number:'62', 
        texte:'Liste des patients'
        },
        {
        color:"bg-gray-800 p-7 rounded-xl", 
        number:'98', 
        texte:'Liste des rendez-vous'   
        },
        {
        color:"bg-sky-300 p-7 rounded-xl", 
        number:'62', 
        texte:'Liste des patients'
        }


    ]
    
  return (
    <div>
    <div className='flex justify-between gap-4 items-start p-10'>
        <div className='w-2/4'>
        <h2 className='text-sky-400 text-3xl font-bold'>Bienvenue ! Docteur</h2>
        <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit animi aspernatur doloremque deserunt, illo veritatis.</p>
        </div>
        <div className='flex items-center gap-3'>
        <ImBell className='text-2xl'/>
        <img src={photoDashboard} alt="photoDashboard" className='w-14' />
        </div>
        

        </div>
        <div className='p-10'><h1 className='text-7xl'>Rendez-vous</h1>
        </div>
        <div className='grid grid-cols-2 my-5 gap-5 p-10'>
            {
                table.map((item) => (
                    <Card color = {item.color} number = {item.number} texte = {item.texte} />
                ))
                    
            }
        
        </div>
        <div className='w-1/4 h-screen '>
                <div className='bg-sky-950 rotate-45 absolute bottom right-2
                    w-48 h-48 rounded-xl'></div>
                <div className='bg-sky-600 rotate-45 absolute bottom right-8 w-48 h-48 rounded-xl'></div>
            </div>
        
    </div>
  )
}

export default Accueils