import React from "react";
import "./about.css";
import SHE from "../../assets/she.png";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import { FaLaptopCode } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={SHE} alt="she"></img>
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaLaptopCode className="about_icon" />
              <h5>Programming Languages</h5>
              <small>Frontend: Vue - Angular - React -  JavaScript - TypeScript</small>
              <br />
              <small>Backend: Java - Spring Boot</small>
            </article>

            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>1+ year Full Stack Development at Pixeon</small>
              <br />
              <small>Technical graduation: DEV in House - SENAI 2022</small>
            </article>

            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>
          </div>
          <br/>
          <p>
            Hi, my name is Daiana. I am 26 years old, currently working as a
            Full Stack Developer at Pixeon.
          </p>
          <p>
          Among the knowledge and skills that I have developed and consolidated through my professional activities are:
          <ul>
            <li>- Agile methodologies: Kanban and Scrum</li>
            <li>- Code versioning using Git, GitHub, GitLab and Bitbucket</li>
            <li>- Frontend: HTML, CSS, Tailwind, JavaScript, TypeScript, React, Angular and Vue</li>
            <li>- Backend: Maintenance and development of microservices in Java (with Spring Boot), NodeJs (with NestJs)</li>
            <li>- Relational Database: SQL Server and MySQL</li>
            <li>- Unitary tests (frontend and backend)</li>
            <li>- Basics container orchestration with Docker and Kubernetes</li>
            <li>- Basic notions of messaging through queues (RabbitMQ)</li>
            <li>- Observability and log query using Grafana and Prometheus</li>
            <li>- Documentation with Swagger</li>
          </ul>
          </p>
          <p>
            In addition to the skills mentioned,
            I am constantly looking for new knowledge and technical improvements,
            participating in DIO bootcamps and taking specific training on the Alura platform.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
