import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.jpg'

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
    {
      id: 3,
      image: IMG4,
      title: 'Temperature Converter',
      github: 'https://github.com/DaianaEgerMichels/ConversorDeTemperatura',
      netlify: 'https://conversor-de-temperatura-js.netlify.app/'
    }

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
                  <a href="https://github.com/DaianaEgerMichels/Lista-de-Afazeres---ToDoList" className='btn' target='_blank'>GitHub</a>
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
                  <a href={github} className='btn' target='_blank'>GitHub</a>
                  <a href={netlify} className='btn btn-primary' target='_blank'>Live Demo</a>
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