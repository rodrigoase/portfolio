import React from 'react'
import { About, Footer, Header, Skills, Testimonial, Work } from '../containers'
import { Navbar } from '../components'

function index() {
  return (
    <>
      <Navbar/>
      <About/>
      <Footer/>
      <Header/>
      <Skills/>
      <Testimonial/>
      <Work/>
    </>
  )
}

export default index