import React from "react";
import UserPatient from "../../../src/assets/UserPatient.png";
import { Link, useLocation } from "react-router-dom";
import { LuPencilLine } from "react-icons/lu";

const ConfirmationAddPatient = () => {
  const { state } = useLocation();
  console.log("state", state);
  return (
    <div className="flex">
      <div className="w-1/4 h-screen relative top-20 ">
        <div className="bg-sky-950 rotate-45 absolute  -left-14 w-48 h-48 rounded-xl"></div>
        <div className="bg-sky-600 rotate-45 absolute -left-20 w-48 h-48 rounded-xl"></div>
      </div>

      <div className="flex flex-col  items-center w-2/4  py-20">
        <img
          src={UserPatient}
          alt="imageLogo"
          className="w-44 bg-sky-300 rounded-full py-3"
        />
        <div className=" p-2 w-full">
          <div className="max-w-md mx-auto border-solid border-2 border-gray-600 rounded-lg overflow-hidden py-10">
            <div className="p-3 mx-5">
              <div>
                <div className="flex  gap-4">
                  <span className="font-semibold text-gray-700">
                    Prénom : 
                  </span>
                  <span className="text-gray-600">{state.patient.prenom}</span>
                </div>
              </div>
            </div>

            <div className="p-3 mx-5">
              <div >
                <div className="flex  gap-4">
                  <span className="font-semibold text-gray-700">Nom:</span>
                  <span className="text-gray-600">{state.patient.nom}</span>
                </div>
                
              </div>
            </div>

            <div className="p-3 mx-5">
              <div>
                <div className="flex  gap-4">
                  <span className="font-semibold text-gray-700">Age:</span>
                  <span className="text-gray-600">{state.patient.age}</span>
                </div>
                
              </div>
            </div>

            <div className="p-3 mx-5">
              <div >
                <div className="flex  gap-4">
                  <span className="font-semibold text-gray-700">Adresse:</span>
                  <span className="text-gray-600">{state.patient.adresse}</span>
                </div>
                
              </div>
            </div>

            <div className="p-3 mx-5">
              <div >
                <div className="flex  gap-4">
                  <span className="font-semibold text-gray-700">Téléphone : </span>
                  <span className="text-gray-600">
                    {state.patient.telephone}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className=" p-3 w-full">
            <div className="max-w-md mx-auto border-none rounded-lg">
              <Link to="/dashboard/patients">
                <button
                  className="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg
border-blue-600
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px] w-full"
                >
                  Retour à la liste des patients
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="w-1/4 h-screen ">
        <div
          className="bg-sky-950 rotate-45 absolute bottom-3 right-2
                    w-48 h-48 rounded-xl"
        ></div>
        <div className="bg-sky-600 rotate-45 absolute bottom-4 right-8 w-48 h-48 rounded-xl"></div>
      </div>
    </div>
  );
};

export default ConfirmationAddPatient;
