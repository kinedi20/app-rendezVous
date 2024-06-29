import React from 'react'
import TopNav from '../../components/TopNav'
import { IoAdd } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";

const Patients = () => {
  return (
    <div className='p-12'> 
          <TopNav />
      <div className="flex items-center justify-between my-9">
        <h2 className="text-3xl">Mes patients</h2>
        <IoAdd className="text-blue-800 text-2xl cursor-pointer" />
      </div>
      <table class=" border-slate-400 w-full ...">
      <thead>
                <tr>
                    <th className="py-2 px-4 text-left">Prénom</th>
                    <th className="py-2 px-4 text-left">Nom</th>
                    <th className="py-2 px-4 text-left">Profil</th>
                </tr>
            </thead>
            <tbody>
                <tr className="border-t">
                    <td className="py-2 px-4 flex gap-5 items-center">
                    <div className="flex items-center  py-4">
                        <FaRegUserCircle className="text-4xl text-sky-600" />
                        </div>
                        Moustapha
                    </td>
                    <td className="py-2 px-4">FALL</td>
                    <td className="py-2 px-4">
                        <button className="bg-green-500 text-white py-1 px-3 rounded">VOIR</button>
                    </td>
                </tr>
                <tr className="border-t">
                    <td className="py-2 px-4 flex gap-5 items-center">
                    <div className="flex items-center  py-4">
                        <FaRegUserCircle className="text-4xl text-sky-600" />
                        </div>
                        Alimatou
                    </td>
                    <td className="py-2 px-4">SECK</td>
                    <td className="py-2 px-4">
                        <button className="bg-green-500 text-white py-1 px-3 rounded">VOIR</button>
                    </td>
                </tr>
                <tr className="border-t">
                    <td className="py-2 px-4 flex  gap-5 items-center">
                        <div className="flex items-center  py-4">
                        <FaRegUserCircle className="text-4xl text-sky-600" />
                        </div>
                        Pathé
                    </td>
                    <td className="py-2 px-4">FALL</td>
                    <td className="py-2 px-4">
                        <button className="bg-green-300 text-white py-1 px-3 rounded">VOIR</button>
                    </td>
                </tr>
                <tr className="border-t">
                    <td className="py-2 px-4 flex gap-5 items-center">
                    <div className="flex items-center  py-4">
                        <FaRegUserCircle className="text-4xl text-sky-600" />
                        </div>
                        Cheikh Bara
                    </td>
                    <td className="py-2 px-4">DIOP</td>
                    <td className="py-2 px-4">
                        <button className="bg-green-500 text-white py-1 px-3 rounded">VOIR</button>
                    </td>
                </tr>
            </tbody>
</table>
    </div>
  )
}

export default Patients