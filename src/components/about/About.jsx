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
              <small>Frontend: React - Vue - JavaScript</small>
              <br />
              <small>Backend: Java - Spring Boot</small>
            </article>

            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>Jr Development Analyst at Pixeon</small>
              <br />
              <small>9 Months Student DEVinHouse</small>
            </article>

            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>
          </div>
          <br/>
          <p>
            Hi, my name is Daiana. I am 25 years old, currently working as a
            Junior Development Analyst at Pixeon.
          </p>
          <p>I am a person who is always looking for new knowledge.</p>
          <p>
            About my personality, my essence lies in knowing how to relate to
            people, having respect for others and always being willing to help.
          </p>
          <p>
            With a light soul and increasingly enchanted by the programming, I
            continue to learn a little more about this vast universe every day.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
