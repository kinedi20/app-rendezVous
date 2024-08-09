import React, { useEffect, useState } from "react";
import TopNav from "../../components/TopNav";
import { IoAdd } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const url = "http://localhost:3000/patient";

const Patients = () => {
  const navigate = useNavigate();

  const [patients, setPatients] = useState([]);


  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axios.get(url);
        setPatients(response.data);
        setError(null);
      } catch (error) {}
    };

    fetchPatients();
  }, []);

  return (
    <div className="p-12">
      <TopNav />
      <div className="flex items-center justify-between my-9">
        <h2 className="text-3xl">Mes patients</h2>
        <Link to="/addPatient">
          <IoAdd className="text-blue-800 text-2xl cursor-pointer" />
        </Link>
      </div>
      <table className=" border-slate-400 w-full ...">
        <thead>
          <tr>
            <th className="py-2 px-4 text-left">Prénom</th>
            <th className="py-2 px-4 text-left">Nom</th>
            <th className="py-2 px-4 text-left">Profil</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr className="border-t" key={patient.id}>
              <td className="py-2 px-4 flex gap-5 items-center">
                <div className="flex items-center  py-4">
                  <FaRegUserCircle className="text-4xl text-sky-600" />
                </div>
                {patient.prenom}
              </td>
              <td className="py-2 px-4">{patient.nom}</td>
              <td className="py-2 px-4">
                <button
                  className="bg-green-500 text-white py-1 px-3 rounded"
                  onClick={() => {
                    navigate("/confirmationAddPatient", { state: { patient } });
                  }}
                >
                  VOIR
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Patients;
