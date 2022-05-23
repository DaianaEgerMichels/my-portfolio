import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.png'

//importar imagem do todo list, sgi e book store
//por no netlify o todo list e o book store

const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: IMG1,
      title: 'TO-DO List',
      github: 'https://github.com/DaianaEgerMichels/Lista-de-Afazeres---ToDoList',
      netlify: 'linknetlify'
    },
    {
      id: 2,
      image: IMG2,
      title: 'SGI',
      github: 'https://github.com/DaianaEgerMichels/projeto-02',
      netlify: 'https://sistema-de-gestao-integrada.netlify.app/'
    },
    {
      id: 3,
      image: IMG3,
      title: 'Book Store',
      github: 'https://github.com/DaianaEgerMichels/redux-book-store',
      netlify: 'linknetlify'
    }

  ]

  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, netlify}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portifolio__item-image">
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