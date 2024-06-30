import React from "react";
import logo from "../../../src/assets/RVS 1.png";
import { Link } from "react-router-dom";
import { LuPencilLine } from "react-icons/lu";

const AfteraddRdv = () => {
  return (
    <div className="flex">
      <div className="w-1/4 h-screen relative top-20 ">
        <div className="bg-sky-950 rotate-45 absolute  -left-14 w-48 h-48 rounded-xl"></div>
        <div className="bg-sky-600 rotate-45 absolute -left-20 w-48 h-48 rounded-xl"></div>
      </div>

      <div className="flex flex-col  items-center w-2/4  py-20">
        <img
          src={logo}
          alt="imageLogo"
          className="w-44 bg-sky-300 rounded-full py-3"
        />
        <div className=" p-2 w-full">
          <div className="max-w-md mx-auto border-solid border-2 border-gray-600 rounded-lg overflow-hidden py-10">
            <div className="p-3 mx-5">
              <div className="flex justify-between items-center">
                <div>
                  <span class="font-semibold text-gray-700">Titre:</span>
                  <span class="text-gray-600">Réunion de travail</span>
                </div>
                <LuPencilLine />
              </div>
            </div>

            <div className="p-3 mx-5">
              <div className="flex justify-between items-center">
                <div>
                  <span class="font-semibold text-gray-700">Avec:</span>
                  <span class="text-gray-600">Equipe Xarala</span>
                </div>
                <LuPencilLine />
              </div>
            </div>

            <div className="p-3 mx-5">
              <div className="flex justify-between items-center">
                <div>
                  <span class="font-semibold text-gray-700">Adresse:</span>
                  <span class="text-gray-600">Cité Avion, Ouakam</span>
                </div>
                <LuPencilLine />
              </div>
            </div>

            <div className="p-3 mx-5">
              <div className="flex justify-between items-center">
                <div>
                  <span class="font-semibold text-gray-700">Date:</span>
                  <span class="text-gray-600">28/05/2023</span>
                </div>
                <LuPencilLine />
              </div>
            </div>

            <div className="p-3 mx-5">
              <div className="flex justify-between items-center">
                <div>
                  <span class="font-semibold text-gray-700">Heure:</span>
                  <span class="text-gray-600">08 H 00</span>
                </div>
                <LuPencilLine />
              </div>
            </div>

            <div className="p-3 mx-5">
              <div className="flex justify-between items-center">
                <div>
                  <span class="font-semibold text-gray-700">Lieu:</span>
                  <span class="text-gray-600">Campus liberté 06</span>
                </div>
                <LuPencilLine />
              </div>
            </div>
          </div>

          <div className=" p-3 w-full">
            <div className="max-w-md mx-auto border-none rounded-lg">
              <Link to="/dashboard/mesrendezvous">
                <button
                  className="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg
border-blue-600
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px] w-full"
                >
                  Enregistrer
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="w-1/4 h-screen relative ">
        <div
          className="bg-sky-950 rotate-45 absolute bottom-3 right-2
                    w-48 h-48 rounded-xl"
        ></div>
        <div className="bg-sky-600 rotate-45 absolute bottom-4 right-8 w-48 h-48 rounded-xl"></div>
      </div>
    </div>
  );
};

export default AfteraddRdv;
