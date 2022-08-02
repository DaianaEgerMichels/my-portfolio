import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'


const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: IMG2,
      title: 'SGI',
      frontend: 'https://github.com/DaianaEgerMichels/projeto-02',
    },
    {
      id: 2,
      image: IMG3,
      title: 'Book Store',
      frontend: 'https://github.com/DaianaEgerMichels/redux-book-store',
    },
    {
      id: 3,
      image: IMG1,
      title: 'To Do List',
      frontend: 'https://github.com/DaianaEgerMichels/Lista-de-Afazeres---ToDoList',
      backend: 'https://book-store-redux.netlify.app/'
    },
    {
      id: 4,
      image: IMG4,
      title: 'DEV in Hortifruti',
      frontend: 'https://github.com/DEVin-Involves-PariPassu/M3P2-DEVinHortifruti-FrontEnd',
      backend: 'https://github.com/DEVin-Involves-PariPassu/M3P2-DEVinHortifruti-BackEnd'
    },
    {
      id: 5,
      image: IMG5,
      title: 'Controle de Finanças',
      frontend: 'https://github.com/DaianaEgerMichels/financas-app',
      backend: 'https://github.com/DaianaEgerMichels/financas-api'
    },
    {
      id: 6,
      image: IMG6,
      title: 'Health System',
      frontend: 'https://github.com/DaianaEgerMichels/HealthcareInstitution-app',
      backend: 'https://github.com/DaianaEgerMichels/HealthcareInstitution-api'
    },

  ]

  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, frontend, backend}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title}></img>
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={frontend} className='btn' target='noopener noreferrer'>Front-end</a>
                  {backend && <a href={backend} className='btn btn-primary' target='noopener noreferrer'>Back-end</a>}
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