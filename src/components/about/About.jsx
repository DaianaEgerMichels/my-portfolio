import React from 'react'
import './about.css'
import SHE from '../../assets/she.png'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'
import {FaLaptopCode} from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me-image'>
            <img src={SHE} alt="she"></img>
          </div>
        </div>

      <div className='about_content'>
          <div className="about_cards">    
          <article className='about_card'>
              <FaLaptopCode className='about_icon'/>
              <h5>Programming Languages</h5>
              <small>Frontend: React - JavaScript | Backend: Java - Spring Boot</small>
            </article>

            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>9 Months Student DEVinHouse</small>
            </article>

            <article className='about_card'>
              <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>
        </div>

        <p>
          Hello, my name is Daiana. I am 24 years old, graduated in Civil Engineering from UNISUL.

          At the moment I am encouraged to learn and develop myself in another area of ​​knowledge, technology.

          I'm currently taking DEVinHouse, Dev FullStack training course.

          In this course I already got knowledge on the frontend about HTML, CSS, JavaScript and React. And, on the backend: Java, Spring Boot, Spring Security and database using PostgreSQL. In addition, during the course, concepts of methodologies such as Scrum and Kanban, code versioning using Git and some Docker commands were worked on.
          In addition to this knowledge, I recently learned and am learning about TDD, Unit and Integration Testing, both for the backend (in Java Spring) and for the frontend (in React).

          Having said that, about myself, it is worth mentioning that I am a hardworking person who is always in search of new knowledge.

          About my personality, my essence lies in knowing how to relate to people, having respect for others and always being willing to help.
        </p>

        </div>
      </div>
    </section>
  )
}

export default About