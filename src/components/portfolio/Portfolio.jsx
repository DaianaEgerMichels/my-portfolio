import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'


const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: IMG2,
      title: "Task Tracker - Vue 3",
      frontend: "https://github.com/DaianaEgerMichels/task-tracker",
    },
    {
      id: 2,
      image: IMG1,
      title: "Personal Blog - Angular",
      frontend: "https://github.com/DaianaEgerMichels/angular-blog",
    },
    {
      id: 3,
      image: IMG3,
      title: "Cooking Up - Vue 3",
      frontend: "https://github.com/DaianaEgerMichels/cookin-up-vue",
    },
    {
      id: 4,
      image: IMG5,
      title: "Finance Control - React & Java",
      frontend: "https://github.com/DaianaEgerMichels/financas-app",
      backend: "https://github.com/DaianaEgerMichels/financas-api",
    },
    {
      id: 5,
      image: IMG6,
      title: "Health System - React & Java",
      frontend:
        "https://github.com/DaianaEgerMichels/HealthcareInstitution-app",
      backend: "https://github.com/DaianaEgerMichels/HealthcareInstitution-api",
    },
    {
      id: 6,
      image: IMG4,
      title: "QR Code Generator - HTML, CSS & JavaScript",
      frontend:
        "https://github.com/DaianaEgerMichels/qr-code-generator/tree/main",
    },
  ];

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