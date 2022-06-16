import React from 'react'
import Navegacion from '../components/contacto/Navegacion'
import MainContacto from '../components/contacto/MainContacto'
import Footer from "../components/Footer"

const PaginaContacto = () => {
  return (
    <>
      <div className='bg-body'>
        <Navegacion></Navegacion>
        <MainContacto></MainContacto>
        <Footer></Footer>
      </div>

    
    </>
  )
}

export default PaginaContacto