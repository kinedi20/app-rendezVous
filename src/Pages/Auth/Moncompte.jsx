import React, { useState } from "react";
import photoDashboard from "../../../src/assets/photoDashboard.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const url = "http://localhost:3000/medecin";

const Moncompte = () => {

  const navigate = useNavigate();
  //localStorage
  const medecinJSON = localStorage.getItem("medecin");
  const medecin = JSON.parse(medecinJSON);
  console.log(medecin);

 
  const [formData, setFormData] = useState({
    nom: medecin.user.nom,
    prenom: medecin.user.prenom,
    profession: medecin.user.profession,
    telephone: medecin.user.telephone,
    email: medecin.user.email,
    motDePasse: "",
  });


  const validateForm = () => {
    let errors = {};
    if (!formData.nom) {
      errors.nom = 'Nom est requis';
    }
    if (!formData.prenom) {
      errors.prenom = 'Prénom est requis';
    }
    if (!formData.profession) {
      errors.profession = 'Profession est requis';
    }
    if (!formData.telephone) {
      errors.telephone = 'Telephone  est requis';
    }
    if (!formData.email) {
      errors.email = 'Email est requis';
    }
    if (!formData.motDePasse) {
      errors.motDePasse = 'Mot de passe est requis';
    }
    return errors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()){
    try {
      const response = await axios.put(
        url+"/" +medecin.user.id,
        formData
      );
      // navigate('/connexion');
      console.log(response.data);
      
    } catch (error) {
      console.error("Erreur lors de l'inscription:", error);
      
    }
  }else {
    console.log('Le formulaire contient des erreurs');
  }
  };
  return (
    <div>
      <h1 className="text-7xl text-blue-500 font-light text-center m-10">
        Mon Compte
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
            <p className="text-2xl font-bold ">Mon Compte</p>
          </div>
        </div>
      </div>
      {/* --------------------------------------------------------------------------------------------------- */}
      <form  className="max-w-md mx-auto " onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Nom "
          className="w-full  border-solid border-2 border-gray-600 rounded-lg max-w-md mx-auto px-7 h-12 m-2 "
          value={formData.nom}
          name="nom"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          placeholder="Prénom"
          className="w-full  border-solid border-2 border-gray-600 rounded-lg max-w-md mx-auto px-7 h-12 m-2"
          value={formData.prenom}
          name="prenom"
          onChange={handleChange}
          required
          
        />

        <input
          type="text"
          placeholder="Profession"
          className="w-full  border-solid border-2 border-gray-600 rounded-lg max-w-md mx-auto px-7 h-12 m-2"
          value={formData.profession}
          name="profession"
          onChange={handleChange}
          required
        />

        <input
          type="string"
          placeholder="Téléphone"
          className="w-full  border-solid border-2 border-gray-600 rounded-lg max-w-md mx-auto px-7 h-12 m-2"
          value={formData.telephone}
          name="telephone"
          onChange={handleChange}
          required
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full  border-solid border-2 border-gray-600 rounded-lg max-w-md mx-auto px-7 h-12 m-2"
          value={formData.email}
          name="email"
          onChange={handleChange}
          required
        />

        <input
          type="password"
          placeholder="Mot de Passe"
          className="w-full  border-solid border-2 border-gray-600 rounded-lg max-w-md mx-auto px-7 h-12 m-2"
          value={formData.motDePasse}
          name="motDePasse"
          onChange={handleChange}
          required
        />
        
          <button
            className="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg
border-blue-600
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px] w-full " type="submit" 
          >
            Enregistrer
          </button>
        
      </form>
      <div className="w-1/4 h-screen ">
        <div
          className="bg-sky-950 rotate-45 absolute bottom right-2
                    w-48 h-48 rounded-xl"
        ></div>
        <div className="bg-sky-600 rotate-45 absolute bottom right-8 w-48 h-48 rounded-xl"></div>
      </div>
    </div>
  );
};

export default Moncompte;
