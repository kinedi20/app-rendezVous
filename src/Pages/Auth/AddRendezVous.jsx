import React, { useEffect, useState } from "react";
import logo from "../../../src/assets/RVS 1.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const url = "http://localhost:3000";
const rdvUrl = url + "/rdvs";
const patientUrl = url + "/patient";

const AddRendezVous = () => {
  const navigate = useNavigate();

  const [options, setOptions] = useState([]);
  const [selectedId, setSelectedId] = useState("");

  const [formData, setFormData] = useState({
    titre: "",
    avecQui: "",
    date: "",
    heure: "",
    lieu: "",
    patient: {
      id: selectedId,
    },
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("formData", formData);
    formData.patient.id = +selectedId;
    console.log("formData", formData);
    try {
      const response = await axios.post(rdvUrl, formData);
      navigate("/dashboard/mesrendezvous");
      console.log(response.data);
    } catch (error) {
      console.error("Erreur lors de l inscription:", error);
    }
  };

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const response = await axios.get(patientUrl);
        setOptions(response.data);
      } catch (error) {
        console.error("Erreur lors du chargement des options:", error);
      }
    };

    fetchOptions();
  }, []);
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

        <form className="max-w-md mx-auto " onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Titre Rendez-vous"
            className="w-full  border-solid border-2 border-gray-600 rounded-lg max-w-md mx-auto px-7 h-12 m-2 "
            value={formData.titre}
            name="titre"
            onChange={handleChange}
          />

          <input
            type="text"
            placeholder="Avec qui ?"
            className="w-full  border-solid border-2 border-gray-600 rounded-lg max-w-md mx-auto px-7 h-12 m-2 "
            value={formData.avecQui}
            name="avecQui"
            onChange={handleChange}
          />

          <input
            type="text"
            placeholder="Date rendez-vous"
            className="w-full  border-solid border-2 border-gray-600 rounded-lg max-w-md mx-auto px-7 h-12 m-2"
            value={formData.date}
            name="date"
            onChange={handleChange}
          />

          <input
            type="text"
            placeholder="Heure de rendez-vous"
            className="w-full  border-solid border-2 border-gray-600 rounded-lg max-w-md mx-auto px-7 h-12 m-2"
            value={formData.heure}
            name="heure"
            onChange={handleChange}
          />

          <input
            type="text"
            placeholder="Lieu rendez-vous"
            className="w-full  border-solid border-2 border-gray-600 rounded-lg max-w-md mx-auto px-7 h-12 m-2"
            value={formData.lieu}
            name="lieu"
            onChange={handleChange}
          />

          <select
            value={selectedId}
            onChange={(e) => setSelectedId(e.target.value)}
            className="w-full p-2 my-2 border rounded"
          >
            <option value="">Choisir le patient</option>
            {options.map((option) => (
              <option key={option.id} value={option.id}>
                {option?.prenom + " " + option?.nom}
              </option>
            ))}
          </select>
          {/* <Link to="/mesrendezvous"> */}
          <button
            className="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg
border-blue-600
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px] w-full "
          >
            Valider
          </button>
          {/* </Link> */}
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

export default AddRendezVous;
