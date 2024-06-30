import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Mesrendezvous from './Pages/Auth/Mesrendezvous'
import Moncompte from './Pages/Auth/Moncompte'
import { NoPage } from './Pages/Auth/NoPage'
import Connexion from './Pages/Auth/Connexion'
import Inscription from './Pages/Auth/Inscription'
import Dashboard from './components/Dashboard'
import Patients from './Pages/Auth/Patients'
import Accueils from './Pages/Auth/Accueils'
import AddRendezVous from './Pages/Auth/AddRendezVous'
import AddPatient from './Pages/Auth/AddPatient'
function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        {/* home */}
        <Route path="/" element={<Navbar />}>
          <Route index element={<Header />} />
          <Route path="/mesrendezvous" element={<Mesrendezvous />} />
          <Route path="/moncompte" element={<Moncompte />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="*" element={<NoPage />} />
          </Route>
           {/* Dashboard */}
           <Route path="/dashboard" element={<Dashboard />}>
           <Route index element={<Accueils />}/>
           <Route path="/dashboard/mesrendezvous" element={<Mesrendezvous />} />
           <Route path="/dashboard/patients" element={<Patients />} />
           <Route path="/dashboard/moncompte" element={<Moncompte />} />
           </Route>
           {/* Add rdv*/}
           <Route path="/addRendezVous" element={<AddRendezVous />}>

           </Route>
           {/* Add patient */}
           <Route path="/addPatient" element={<AddPatient />}>

           </Route>

           
        
       
      </Routes>
    </BrowserRouter>
  
     {/* <Navbar />
     <Header /> */}
    </>
  )
}

export default App
