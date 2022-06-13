import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'

//importar imagem do todo list, sgi e book store
//por no netlify o todo list e o book store

const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: IMG2,
      title: 'SGI',
      github: 'https://github.com/DaianaEgerMichels/projeto-02',
      netlify: 'https://sistema-de-gestao-integrada.netlify.app/'
    },
    {
      id: 2,
      image: IMG3,
      title: 'Book Store',
      github: 'https://github.com/DaianaEgerMichels/redux-book-store',
      netlify: 'https://book-store-redux.netlify.app/'
    },

  ]

  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={IMG1} alt='TO DO List'></img>
                </div>
                <h3>TO DO List</h3>
                <div className="portfolio__item-cta">
                  <a href="https://github.com/DaianaEgerMichels/Lista-de-Afazeres---ToDoList" className='btn' target='noopener noreferrer'>GitHub</a>
                </div>
        </article>
        <article className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={IMG4} alt='DEV in Hortifruti'></img>
                </div>
                <h3>DEV in Hortifruti</h3>
                <div className="portfolio__item-cta">
                  <a href="https://github.com/DEVin-Involves-PariPassu/M3P2-DEVinHortifruti-FrontEnd" className='btn' target='noopener noreferrer'>FrontEnd</a>
                  <a href="https://github.com/DEVin-Involves-PariPassu/M3P2-DEVinHortifruti-BackEnd" className='btn btn-primary' target='noopener noreferrer'>Backend</a>
                </div>
        </article>
        {
          data.map(({id, image, title, github, netlify}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title}></img>
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='noopener noreferrer'>GitHub</a>
                  <a href={netlify} className='btn btn-primary' target='noopener noreferrer'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio