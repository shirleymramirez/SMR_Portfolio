import React from "react";
import "./Portfolio.css";

const Portfolio = () =>
  <div className="container">
    <div className="row">
      <h1>
        <u>Portfolio</u>
      </h1>
    </div>

    <div className="row">
      <div className="col s4 m4">
        <div className="card">
          <div className="card-image waves-effect waves-block waves-light">
            <img
              className="activator"
              src={require("../../images/Sts.png")}
              alt="Sport-Team-Scheduler"
            />
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">
              Sport-Team-Scheduler<i className="material-icons right">
                more_vert
              </i>
            </span>
            <p>
              <a
                href="https://agile-stream-27904.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click me to see working app
              </a>
            </p>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">
              Sport-Team-Scheduler<i className="material-icons right">close</i>
            </span>
            <p>
              An app for sports scheduling that will allow coaches and parents
              to chat with each other, coaches can create roster and schedule.
              Parents can view schedule and roster that coaches created.
            </p>
            <p>
              Tech used: react, axios, socket.io, mongodb, mongoose, redux,
              express, react-materialize-component for the web, react-forecast
              and react-google-maps.
            </p>
            <p>
              <a
                href="https://github.com/shirleymramirez/Sport-Team-Schedule"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click me for my repo.
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="col s4 m4">
        <div className="card">
          <div className="card-image waves-effect waves-block waves-light">
            <img
              className="activator"
              src={require("../../images/Stna.png")}
              alt="Scraped-that-News-App"
            />
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">
              Scraped-that-News-App<i className="material-icons right">
                more_vert
              </i>
            </span>
            <p>
              <a
                href="https://evening-stream-73257.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click me to see working app
              </a>
            </p>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">
              Scraped-that-News-App<i className="material-icons right">close</i>
            </span>
            <p>
              A web app that lets users view and leave comments on the latest
              news.
            </p>
            <p>Tech used: Mongoose and Cheerio</p>
            <p>
              <a
                href="https://github.com/shirleymramirez/Scraped_that_News_App"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click me for my repo.
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="col s4 m4">
        <div className="card">
          <div className="card-image waves-effect waves-block waves-light">
            <img
              className="activator"
              src={require("../../images/Cta.png")}
              alt="Customer-Ticketing-App"
            />
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">
              Customer-ticketing-App<i className="material-icons right">
                more_vert
              </i>
            </span>
            <p>
              <a
                href="https://esm-customer-support-app.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click me to see working app
              </a>
            </p>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">
              Customer-ticketing-App<i className="material-icons right">
                close
              </i>
            </span>
            <p>
              App to facilitate service for Agents and Clients using chat rooms
              and text messages.
            </p>
            <p>Tech used: twilio, socket.io, sequelize, express, etc.</p>
            <p>
              <a
                href="https://github.com/shirleymramirez/Customer-Ticket-App"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click me for my repo.
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="col s4 m4">
        <div className="card">
          <div className="card-image waves-effect waves-block waves-light">
            <img
              className="activator"
              src={require("../../images/Edb.png")}
              alt="Eat-da-Burger"
            />
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">
              Eat-da-Burger<i className="material-icons right">more_vert</i>
            </span>
            <p>
              <a
                href="https://morning-falls-11723.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click me to see working app
              </a>
            </p>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">
              Eat-da-Burger<i className="material-icons right">close</i>
            </span>
            <p>
              A restaurant app that lets users input the names of burgers they'd
              like to eat.
            </p>
            <p>Tech used: MySQL, Node, Express, Handlebars and sequelize.</p>
            <p>
              <a
                href="https://github.com/shirleymramirez/sequelizedBurger"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click me for my repo.
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="col s4 m4">
        <div className="card">
          <div className="card-image waves-effect waves-block waves-light">
            <img
              className="activator"
              src={require("../../images/liri.png")}
              alt="liri-node-app"
            />
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">
              liri-node-app<i className="material-icons right">more_vert</i>
            </span>
            <p>
              <a
                href="https://github.com/shirleymramirez/liri-node-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click me to see working app
              </a>
            </p>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">
              liri-node-app<i className="material-icons right">close</i>
            </span>
            <p>
              A command line node app that takes in parameters and gives you
              back data.
            </p>
            <p>
              LIRI is a node app which stands for Language Interpretation and
              Recognition Interface. It is like SIRI (from an iphone).
            </p>
            <p>Tech used: Nodejs, tweeter api, spotify api, ombd api .</p>
            <p>
              <a
                href="https://github.com/shirleymramirez/liri-node-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click me for my repo.
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="col s4 m4">
        <div className="card">
          <div className="card-image waves-effect waves-block waves-light">
            <img
              className="activator"
              src={require("../../images/ff.png")}
              alt="FriendFinder"
            />
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">
              FriendFinder<i className="material-icons right">more_vert</i>
            </span>
            <p>
              <a
                href="https://young-coast-19729.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click me to see working app
              </a>
            </p>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">
              FriendFinder<i className="material-icons right">close</i>
            </span>
            <p>Node and Express Servers dating app</p>
            <p>
              This full-stack site will take in results from your users'
              surveys, then compare their answers with those from other users.
            </p>
            <p>
              The app will then display the name and picture of the user with
              the best overall match.
            </p>
            <p>
              Tech used: Express, body-parser, path, javascript, jquery, ajax,
              nodejs
            </p>
            <p>
              <a
                href="https://github.com/shirleymramirez/FriendFinder"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click me for my repo.
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>;

export default Portfolio;