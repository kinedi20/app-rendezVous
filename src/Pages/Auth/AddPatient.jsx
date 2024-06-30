import React from 'react'
import User from '../../../src/assets/User.png'
import { Link } from 'react-router-dom'

const AddPatient = () => {
  return (
    <div className='flex'>
         <div className='w-1/4 h-screen relative top-20 '>
        <div className='bg-sky-950 rotate-45 absolute  -left-14 w-48 h-48 rounded-xl'></div>
             <div className='bg-sky-600 rotate-45 absolute -left-20 w-48 h-48 rounded-xl'></div>
        </div>

        <div className='flex flex-col  items-center w-2/4  py-20'>
           <img src={User} alt="imageLogo"  className='w-48 rounded-full py-3'/>

        <div className=" p-2 w-full">
        <div className="max-w-md mx-auto border-solid border-2 border-gray-600 rounded-lg overflow-hidden">
          <div className="p-2 mx-5">
            <div className="flex justify-between items-center">
              <div>
                <span class="text-gray-600">Prénom</span>
              </div>
            </div>
          </div>
        </div>
        </div>

        
        <div className=" p-2 w-full">
        <div className="max-w-md mx-auto border-solid border-2 border-gray-600 rounded-lg overflow-hidden">
          <div className="p-2 mx-5">
            <div className="flex justify-between items-center">
              <div>
                <span class="text-gray-600">Nom</span>
              </div>
            </div>
          </div>
        </div>
        </div>

        <div className=" p-2 w-full">
        <div className="max-w-md mx-auto border-solid border-2 border-gray-600 rounded-lg overflow-hidden">
          <div className="p-2 mx-5">
            <div className="flex justify-between items-center">
              <div>
                <span class="text-gray-600">Age</span>
              </div>
            </div>
          </div>
        </div>
        </div>

        <div className=" p-2 w-full">
        <div className="max-w-md mx-auto border-solid border-2 border-gray-600 rounded-lg overflow-hidden">
          <div className="p-2 mx-5">
            <div className="flex justify-between items-center">
              <div>

                <span class="text-gray-600">Adresse</span>
              </div>
            </div>
          </div>
        </div>
        </div>

        <div className=" p-2 w-full">
        <div className="max-w-md mx-auto border-solid border-2 border-gray-600 rounded-lg overflow-hidden">
          <div className="p-2 mx-5">
            <div className="flex justify-between items-center">
              <div>
                <span class="text-gray-600">Téléphone </span>
              </div>
            </div>
          </div>
          </div>
        </div>

        <div className=" p-2 w-full">
        <div className="max-w-md mx-auto border-none rounded-lg">
          
              
              <Link to='/dashboard/patients'><button className="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg
border-blue-600
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px] w-full">Valider</button></Link>
              
            
          
        </div>
      </div>

      
           
        </div>
        <div className='w-1/4 h-screen '>
        <div className='bg-sky-950 rotate-45 absolute bottom-3 right-2
         w-48 h-48 rounded-xl'></div>
             <div className='bg-sky-600 rotate-45 absolute bottom-4 -right-8 w-48 h-48 rounded-xl'></div>
        </div>


    </div>
  )
}

export default AddPatient