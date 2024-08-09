import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaFingerprint } from "react-icons/fa";
import axios from "axios";

const url = "http://localhost:3000/auth/login";



const Connexion = () => {


  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    motDePasse: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { username: formData.email, password: formData.motDePasse };
    try {
      const response = await axios.post(
        url,
        payload
      );
      navigate('/dashboard');
      console.log(response.data);
      localStorage.setItem('medecin', JSON.stringify(response.data))
      
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
      <div className="flex flex-col justify-center items-center w-2/4 max-w-md mx-auto ">
        <h2 className="text-6xl">Se connecter</h2>
        <form className="w-full flex flex-col justify-center items-center  mx-auto " onSubmit={handleSubmit}>
        <input
          className="w-full p-5 m-5 bg-stone-100"
          type="email"
          placeholder="Adresse e-mail"
          value={formData.email}
          name="email"
          onChange={handleChange}
          
          
          
        />
        <input
          className="w-full p-5 m-5 bg-stone-100"
          type="password"
          placeholder="Mot de passe"
          value={formData.motDePasse}
          name="motDePasse"
          onChange={handleChange}
          
       
        />
       
        {/* <Link to="/dashboard" className="w-full"> */}
          <button type="submit"
            className="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg
border-blue-600
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px] w-full text-xl"
          >
            Se connecter
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

export default Connexion;
