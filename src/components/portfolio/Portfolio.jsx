import React from "react";
import "./portfolio.css";
import por1 from "../../assets/portfolio1.jpg";
import por2 from "../../assets/portfolio2.jpg";

import por3 from "../../assets/portfolio3.jpg";

import por4 from "../../assets/portfolio4.jpg";

import por5 from "../../assets/portfolio5.jpg";
import por6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: por1,
    title: " Point-News a API based new article fetch web app and shows news on time.",
    github: "https://github.com/ankitkumar0799/Point-News",
    demo: "www.000webhostapp.com",
  },
  {
    id: 2,
    image: por2,
    title: " Nika Chat App is a Real Time Chat Application chat with everybody.",
    github: "https://github.com/ankitkumar0799/nika-chat-app",
    demo: "https://nika-chat-app.000webhostapp.com/",
  },
  {
    id: 3,
    image: por3,
    title: " Tic Tac Toe a html,css,javascript based game.",
    github: "https://github.com/ankitkumar0799/tic_tac_toe",
    demo: "https://imperfect-sevens.000webhostapp.com/",
  },
  {
    id: 4,
    image: por4,
    title:
      "Text-Utils is a text Manupilation web app where you can modify you text.",
    github: "https://github.com/ankitkumar0799/textutils-react",
    demo: "https://ankitkumar0799.github.io/textutils-react/",
  },
  {
    id: 5,
    image: por5,
    title:
      " OpenWeather is a Weather Forecast app youn can see Weather Forecast all over the india.",
    github: "https://github.com/ankitkumar0799/openweathermap_api",
    demo: "https://the-weather-bird.000webhostapp.com/",
  },

  {
    id: 6,
    image: por6,
    title: " Music Player is javascript based music player Enjoy your music.",
    github: "https://github.com/ankitkumar0799/javascript_music_player",
    demo: "https://heart-beat-music.000webhostapp.com/",
  },
];

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta ">
                <a href={github} className="btn">
                  Github
                </a>
                <a href={demo} className="btn btn-primary " target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
