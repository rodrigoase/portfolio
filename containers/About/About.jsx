import React from 'react'
import {FaAward} from 'react-icons/fa'
import {MdWork} from 'react-icons/md'
import {IoIosRocket} from 'react-icons/io'

function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src="/assets/me-about.jpg" alt="About Image"></img>  
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className='about__card'>
              <MdWork className='about__icon'/>
              <h5>Projects</h5>
              <small>50+</small>
            </article>
            <article className='about__card'>
              <IoIosRocket className='about__icon'/>
              <h5>Startups</h5>
              <small>2</small>
            </article>
          </div>

          <p>
            Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About