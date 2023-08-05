import React from "react";
import "./experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

function Experience() {
  return (
    <section id="experience">
      <h5>What Skills I Have ?</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Forntend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon blue__tick" />
              <div>
                <h4>HTMl</h4>
                <small clasName="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon blue__tick" />
              <div>
                <h4>CSS</h4>
                <small clasName="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon blue__tick" />
              <div>
                <h4>JAVASCRIPT</h4>
                <small clasName="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon blue__tick" />
              <div>
                <h4>REACT</h4>
                <small clasName="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon blue__tick" />
              <div>
                <h4>BOOTSTRAP</h4>
                <small clasName="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon blue__tick" />
              <div>
                <h4>TAILLWIND</h4>
                <small clasName="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon blue__tick" />
              <div>
                <h4>Node JS</h4>
                <small clasName="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon blue__tick" />
              <div>
                <h4>MongoDB</h4>
                <small clasName="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon blue__tick" />
              <div>
                <h4>PHP</h4>
                <small clasName="text-light">Basic</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon blue__tick" />
              <div>
                <h4>Mysql</h4>
                <small clasName="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
