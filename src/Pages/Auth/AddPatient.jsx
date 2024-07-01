import React from "react";
import User from "../../../src/assets/User.png";
import { Link } from "react-router-dom";

const AddPatient = () => {
  return (
    <div className="flex">
      <div className="w-1/4 h-screen relative top-20 ">
        <div className="bg-sky-950 rotate-45 absolute  -left-14 w-48 h-48 rounded-xl"></div>
        <div className="bg-sky-600 rotate-45 absolute -left-20 w-48 h-48 rounded-xl"></div>
      </div>

      <div className="flex flex-col  items-center w-2/4  py-20">
        <img src={User} alt="imageLogo" className="w-48 rounded-full py-3" />

        <form action="" className="max-w-md mx-auto ">
          <input
            type="text"
            placeholder="Prénom"
            className="w-full  border-solid border-2 border-gray-600 rounded-lg max-w-md mx-auto px-7 h-12 m-2 "
          />

          <input
            type="text"
            placeholder="Nom"
            className="w-full  border-solid border-2 border-gray-600 rounded-lg max-w-md mx-auto px-7 h-12 m-2 "
          />

          <input
            type="text"
            placeholder="Age"
            className="w-full  border-solid border-2 border-gray-600 rounded-lg max-w-md mx-auto px-7 h-12 m-2"
          />

          <input
            type="text"
            placeholder="Adresse"
            className="w-full  border-solid border-2 border-gray-600 rounded-lg max-w-md mx-auto px-7 h-12 m-2"
          />

          <input
            type="text"
            placeholder="Téléphone"
            className="w-full  border-solid border-2 border-gray-600 rounded-lg max-w-md mx-auto px-7 h-12  m-2"
          />

          <Link to="/confirmationAddPatient">
            <button
              className="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg
border-blue-600
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px] w-full "
            >
              Valider
            </button>
          </Link>
        </form>
      </div>
      <div className="w-1/4 h-screen ">
        <div
          className="bg-sky-950 rotate-45 absolute bottom-3 right-2
         w-48 h-48 rounded-xl"
        ></div>
        <div className="bg-sky-600 rotate-45 absolute bottom-4 -right-8 w-48 h-48 rounded-xl"></div>
      </div>
    </div>
  );
};

export default AddPatient;
