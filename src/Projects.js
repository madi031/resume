import React from 'react';

import './css/App.css';
import './css/Projects.css';

const Projects = () => {
  return (
    <div>
      <h2 className='page-title'>
        Projects
      </h2>
      <center>
        <p>
          {
            `Here's a selection of some of my recent work. 
          For more up to date work you can visit me on `
          }
          <em style={{color: '#1fab89'}}>
          GitHub
          </em>
          {
            `.`
          }
        </p>
      </center>
      <div className='project-list'>
        <h2>
          EngineEar
        </h2>
        <p>
          {
            `A mobile app assistant to listen for abnormal behavior 
            in home and automatically alert the home owner about it.`
          }
        </p>
        <h2>
          Image Analyzer with IBM Watson
        </h2>
        <p>
          {
            `A mobile app that uses IBM Watson’s image analyzer to analyze the
            photo taken from the mobile device, classify them and deduct 
            information about the image.`
          }
        </p>
        <h2>
          Open Door Prediction
        </h2>
        <p>
          {
            `An analytics model that predicts whether the door is open or not 
            using Intel Edison. Model was hosted in IBM Cloud.`
          }
        </p>
        <h2>
          Design Pattern bot
        </h2>
        <p>
          {
            `A slack bot that provides the boiler plate code for the 
            appropriate design patterns based on the user’s needs. 
            Application server was hosted in docker container in AWS.`
          }
        </p>
        <h2>
          Research on Effort Estimation of Solo Methods
        </h2>
        <p>
          {
            `Created 48 solo methods using 8 preprocessors and 6
            learners, ranked the solo methods using 7 error measures 
            after applying to 14 different datasets. Proved that solos 
            cannot be better ranked on frequency or cumulative methodology 
            alone and both methods has
            to be combined to rank the solos better.`
          }
        </p>
        <h2>
          Walmart Store Sales Forecasting
        </h2>
        <p>
          {
            `Predicted weekly sales for each department in each store using time
            series analysis and ensemble forecasting methods such as ARIMA and 
            multiple linear regression models with mean error percentage of 9%.`
          }
        </p>
        <h2>
          TV Show App
        </h2>
        <p>
          {
            `Application to follow your favorite TV shows and get alerts in 
            real time when new episode is released.`
          }
        </p>
        <h2>
          Speed Monitoring System
        </h2>
        <p>
          {
            `An application that identifies the speed limit of the road, tracks 
            the speed of the vehicle, and records the speed limit violation, 
            if any, in real time.`
          }
        </p>
      </div>
    </div>
  );
};

export default Projects;
