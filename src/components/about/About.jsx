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
              <small>Java - JavaScript - TypeScript</small>
              <br />
            </article>

            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>2+ year Full Stack Development at Pixeon</small>
            </article>

            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>
          </div>
          <br />
          <p>
            Hi, my name is Daiana. I am 27 years old, currently working as a
            Full Stack Developer at Pixeon.
          </p>
          <p>
            Developer passionate about web technologies and a constant learner.
            Actively working in software development for over two years,
            specializing in web development. Comprehensive command of
            technologies, with skills in languages ​​such as Java and
            JavaScript. Experience using frameworks such as Spring Boot, NestJs,
            Fastify, Angular, Vue and Nuxt. Knowledge of microservices
            architecture, SQL Server, MySQL and Redis databases, RabbitMQ and
            SQS queues, OCI and S3 storage, TypeScript and Tailwind. Experience
            in an agile methodology environment using Jira to manage and
            organize the backlog of demands. Expertise in developing,
            maintaining and efficiently implementing solutions using JUnit and
            Jest to build unit tests.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
