import React from 'react'
import { Header, About, Experience, Services, Portfolio, Testimonials, Contact, Footer } from '../containers'
import { Navbar } from '../components'

function index() {
  return (
    <>
      <Header/>
      <Navbar/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default index