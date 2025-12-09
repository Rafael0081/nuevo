import { useState } from 'react'
import './App.css'
import Header from './componentes/Header'
import Inicio from './componentes/Inicio'
import Productos from './componentes/Productos'
import Contactenos from './componentes/Contactenos'
import Acercade from './componentes/Acercade'
import Error404 from './componentes/Error404'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'


function App() {

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route exact path="/"            element={<Inicio />} />
          <Route exact path="productos"    element={<Productos />} />
          <Route exact path="contactenos"  element={<Contactenos />} />
          <Route exact path="acercade"     element={<Acercade />} />
          <Route exact path='*'            element={<Error404 />} />
        </Routes>
      </BrowserRouter>
        
      

    </>
  )
}

export default App
