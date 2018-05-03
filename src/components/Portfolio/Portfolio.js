import React from "react";
import "./Portfolio.css";

const Portfolio = () =>
  <div className="container">
    <div className="" row>
      <h1>
        <u>Portfolio</u>
      </h1>
    </div>

    <div class="row">
      <div class="col s1 m3">
        <div class="card">
          <div class="card-image">
            <img
              src={require("../../images/Sts.png")}
              alt="Sport-Team-Scheduler"
            />
          </div>
          <div class="card-content">
            <p>
              An app for sports scheduling that will allow coaches to chat and
              create roster and schedule. Tech used: react, axios, socket.io,
              mongodb etc.
            </p>
          </div>
          <div class="card-action">
            <a href="https://agile-stream-27904.herokuapp.com/">
              Sport-Team-Scheduler
            </a>
          </div>
        </div>
      </div>

      <div class="col s1 m3">
        <div class="card">
          <div class="card-image">
            <img
              src={require("../../images/Stna.png")}
              alt="Scraped-that-news-app"
            />
          </div>
          <div class="card-content">
            <p>
              A web app that lets users view and leave comments on the latest
              news. Tech used: Mongoose and Cheerio
            </p>
          </div>
          <div class="card-action">
            <a href="https://evening-stream-73257.herokuapp.com/">
              Scraped-that-news-App
            </a>
          </div>
        </div>
      </div>
      <div class="col s1 m3">
        <div class="card">
          <div class="card-image">
            <img
              src={require("../../images/Cta.png")}
              alt="Customer-Ticketing-App"
            />
          </div>
          <div class="card-content">
            <p>
              App to facilitate service for Agents and Clients using chat rooms
              and text messages. Tech used: twilio, socket.io, sequelize,
              express, etc.
            </p>
          </div>
          <div class="card-action">
            <a href="https://esm-customer-support-app.herokuapp.com/">
              Customer-ticketing-App
            </a>
          </div>
        </div>
      </div>

      <div class="col s1 m3">
        <div class="card">
          <div class="card-image">
            <img src={require("../../images/Edb.png")} alt="Eat-da-Burger" />
          </div>
          <div class="card-content">
            <p>
              A restaurant app that lets users input the names of burgers
              they'd like to eat.Tech used: MySQL, Node, Express,
              Handlebars and sequelize.
            </p>
          </div>
          <div class="card-action">
            <a href="https://morning-falls-11723.herokuapp.com/">
              Eat-da-Burger
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>;

export default Portfolio;