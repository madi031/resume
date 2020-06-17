import React from 'react';

import './css/App.css';
import './css/Honors.css';

const Honors = () => {
  return (
    <div>
      <h2 className='page-title'>
        Honors
      </h2>
      <ul className='awards-list'>
        <li>
          <strong>
            {
              `People's Choice Award (2018)`
            }
          </strong>
          {
            ` for EngineEar.`
          }
        </li>
        <li>
          <strong>
            {
              `Eminence and Excellence Award (2018)`
            }
          </strong>
          {
            ` for achieving the team's goals for that year.`
          }
        </li>
        <li>
          <strong>
            {
              `Manager's Choice Award (2017)`
            }
          </strong>
          {
            ` for proactively solving potential problems in the system.`
          }
        </li>
        <li>
          SPOT Award (2015)
        </li>
        <li>
          <strong>
            {
              `Team Extra Miler Award (2014)`
            }
          </strong>
          {
            ` for implementing automations and optimizations to improve 
            the performance of an application`
          }
        </li>
        <li>
          <strong>
            {
              `Best Project`
            }
          </strong>
          {
            ` by `
          }
          <strong>
            {
              `Computer Society of India`
            }
          </strong>
          {
            ` for Speed Monitoring System on `
          }
          <strong>
            {
              `discovery thinking (2012).`
            }
          </strong>
        </li>
      </ul>
      <h2 className='page-title'>
        Inventions
      </h2>
      <ul className='awards-list'>
        <li>
          {
            `Published `
          }
          <strong>
            {
              `Method and System for Correlating Real-Time Sensor Glucose 
              and Blood Pressure Data for Suggesting Treatment Plans`
            }
          </strong>
          {
            ` in IP.com. `
          }
          <a
            href='https://priorart.ip.com/IPCOM/000261480'
            rel='noopener noreferrer'
            target='_blank'
            style={{textDecoration: 'none'}}
          >
            More...
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Honors;
