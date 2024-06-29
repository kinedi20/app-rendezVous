import React from 'react'
import photoDashboard from '../../../src/assets/photoDashboard.png'

const Moncompte = () => {
  return (
    <div>
      <h1 className="text-4xl text-blue-500 font-light text-center py-3">Rendez-vous</h1>
    <div className=" mx-auto p-12">
     
      
      <div className="flex items-center bg-blue-500 rounded-lg p-4">
        <div className="flex-shrink-0">
          <img src={photoDashboard} alt="imageCompte"  className="h-24 w-24 rounded-full border-4 border-white"/>

        </div>
        <div className="ml-4 text-white">
          <p class="text-lg">Mon Compte</p>

        </div>

      </div>
      
    </div>
    </div>
  )
}

export default Moncompte