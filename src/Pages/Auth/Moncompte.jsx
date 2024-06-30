import React from "react";
import photoDashboard from "../../../src/assets/photoDashboard.png";
import { FaUserCheck } from "react-icons/fa";
import { LuPencilLine } from "react-icons/lu";
import { Link } from "react-router-dom";

const Moncompte = () => {
  return (
    <div>
      <h1 className="text-7xl text-blue-500 font-light text-center m-10">
        Rendez-vous
      </h1>
      <div className=" mx-auto p-12">
        <div className="flex items-center bg-blue-500 rounded-lg py-5">
          <div>
            <img
              src={photoDashboard}
              alt="imageCompte"
              className="h-24 w-24 rounded-full border-4 border-white"
            />
          </div>
          <div className="ml-7 text-white">
            <p class="text-2xl font-bold ">Mon Compte</p>
          </div>
        </div>
      </div>
      {/* --------------------------------------------------------------------------------------------------- */}
      <div className=" p-2">
        <div className="max-w-md mx-auto border-solid border-2 border-gray-600 rounded-lg overflow-hidden">
          <div className="p-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 class="text-xl font-semibold text-blue-500">
                  Docteur N'diaye
                </h2>
                <p class="text-gray-600">Dentiste</p>
              </div>
              <FaUserCheck  className="text-blue-500"/>
            </div>
          </div>
        </div>
      </div>

      <div className=" p-2">
        <div className="max-w-md mx-auto border-solid border-2 border-gray-600 rounded-lg overflow-hidden">
          <div className="p-2 mx-5">
            <div className="flex justify-between items-center">
              <div>
              <span class="font-semibold text-gray-700">Adresse:</span>
                <span class="text-gray-600">Cité Avion, Ouakam</span>
              </div>
              <LuPencilLine />
            </div>
          </div>
        </div>
      </div>

      <div className=" p-2">
        <div className="max-w-md mx-auto border-solid border-2 border-gray-600 rounded-lg overflow-hidden">
          <div className="p-2 mx-5">
            <div className="flex justify-between items-center">
              <div>
              <span class="font-semibold text-gray-700">Téléphone:</span>
                <span class="text-gray-600">+221 77 000 00 02</span>
              </div>
              <LuPencilLine />
            </div>
          </div>
        </div>
      </div>

      <div className=" p-2">
        <div className="max-w-md mx-auto border-solid border-2 border-gray-600 rounded-lg overflow-hidden">
          <div className="p-2 mx-5">
            <div className="flex justify-between items-center">
              <div>
              <span class="font-semibold text-gray-700">Adresse e-mail:</span>
                <span class="text-gray-600">astou.ndiaye90@gmail.com</span>
              </div>
              <LuPencilLine />
            </div>
          </div>
        </div>
      </div>

      <div className=" p-2">
        <div className="max-w-md mx-auto border-solid border-2 border-gray-600 rounded-lg overflow-hidden">
          <div className="p-2 mx-5">
            <div className="flex justify-between items-center">
              <div>
              <span class="font-semibold text-gray-700">Mot de passe:</span>
                <span class="text-gray-600">.........</span>
              </div>
              <LuPencilLine />
            </div>
          </div>
        </div>
      </div>

      <div className=" p-2">
        <div className="max-w-md mx-auto border-none rounded-lg">
          
              
              <Link to='/dashboard'><button className="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg
border-blue-600
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px] w-full">Enregistrer</button></Link>
              
            
          
        </div>
      </div>
      <div className='w-1/4 h-screen '>
                <div className='bg-sky-950 rotate-45 absolute bottom right-2
                    w-48 h-48 rounded-xl'></div>
                <div className='bg-sky-600 rotate-45 absolute bottom right-8 w-48 h-48 rounded-xl'></div>
            </div>

      
    </div>
  );
};

export default Moncompte;
