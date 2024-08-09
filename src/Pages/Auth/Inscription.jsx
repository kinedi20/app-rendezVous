import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaFingerprint } from "react-icons/fa";
import axios from "axios";

const url = "http://localhost:3000/medecin";

const Inscription = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    profession: "",
    telephone: "",
    email: "",
    motDePasse: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/medecin",
        formData
      );
      navigate("/connexion");
      console.log(response.data);
    } catch (error) {
      console.error("Erreur lors de l inscription:", error);
    }
  };

  return (
    <div className="flex">
      <div className="w-1/4 h-screen relative top-20 ">
        <div className="bg-sky-950 rotate-45 absolute  -left-14 w-48 h-48 rounded-xl"></div>
        <div className="bg-sky-600 rotate-45 absolute -left-20 w-48 h-48 rounded-xl"></div>
      </div>
      <div className="flex flex-col justify-center items-center w-2/4 max-w-md mx-auto">
        <h2 className="text-5xl">S'inscrire</h2>
        <form
          className="w-full flex flex-col justify-center items-center mx-auto"
          onSubmit={handleSubmit}
        >
          <input
            className="w-full p-3 m-3 bg-stone-100"
            type="text"
            placeholder="Entrer votre nom"
            value={formData.nom}
            name="nom"
            onChange={handleChange}
          />
          <input
            className="w-full p-3 m-3 bg-stone-100"
            type="text"
            placeholder="Entrer votre prénom"
            value={formData.prenom}
            name="prenom"
            onChange={handleChange}
          />
          <input
            className="w-full p-3 m-3 bg-stone-100"
            max-w-md
            mx-auto
            type="email"
            placeholder="Entrer votre adresse mail"
            value={formData.email}
            name="email"
            onChange={handleChange}
          />

          <input
            className="w-full p-3 m-3 bg-stone-100"
            max-w-md
            mx-auto
            type="text"
            placeholder="Entrer votre numero de telephone"
            value={formData.telephone}
            name="telephone"
            onChange={handleChange}
          />

          <input
            className="w-full p-3 m-3 bg-stone-100"
            type="password"
            placeholder="Entrer votre mot de passe"
            value={formData.motDePasse}
            name="motDePasse"
            onChange={handleChange}
          />

          <input
            className="w-full p-3 m-3 bg-stone-100"
            type="text"
            placeholder="Entrer votre profession"
            value={formData.profession}
            name="profession"
            onChange={handleChange}
          />

          {/* <Link to="/connexion" className="w-full"> */}
          <button
            type="submit"
            className="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg
border-blue-600
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px] w-full text-xl"
          >
            S'inscrire
          </button>
        </form>
        {/* </Link> */}
        <Link to="/dashboard" className="w-full">
          <button
            className="cursor-pointer flex items-center justify-center transition-all bg-black text-white px-6 py-2 rounded-lg
border-black
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px] w-full my-5 text-xl"
          >
            Continuer avec Google <FaFingerprint className="mx-7" />
          </button>
        </Link>
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

export default Inscription;
