import React from 'react';

import apiGateway from './images/apiGateway.png';
import fbLogo from './images/fbLogo.png';
import ibmLogo from './images/ibmLogo.png';
import infyLogo from './images/infosysLogo.jpeg';
import sugariq from './images/sugariq.jpeg';

import './css/App.css';
import './css/Work.css';

const Work = () => {
  return (
    <div>
      <h2 className='page-title'>
        Work
      </h2>
      <div className='work-container ibm-container'>
        <div style={{ marginRight: '20px' }}>
          <img
            alt='ibm'
            src={ibmLogo}
          />
        </div>
        <div style={{ width: '100%' }}>
          <h2 className='work-title ibm-title'>
            IBM Corporation (Apr 2017 - Present)
          </h2>
          <h4 className='work-position ibm-position'>
            Software Developer
          </h4>
          <div className='work-details'>
            <h3 className='work-team ibm-team'>
              IBM Cloud API Gateway
            </h3>
            <center>
              <img
                alt='API Gateway'
                className='work-img'
                src={apiGateway}
              />
            </center>
            <ul className='ibm-team-details'>
              <li>
                {
                  `Reduced the App bundle size by 50% thereby 
                making the application load faster.`
                }
              </li>
              <li>
                {
                  `Built a UI microservice for APIC 6.0 on Cloud that 
                aids the users and businesses to create their own API
                Connect services and manage them.`
                }
              </li>
              <li>
                {
                  `Built a provisioning service for API Gateway 
                service that enables thousands of users to create 
                their own gateway services.`
                }
              </li>
              <li>
                {
                  `Developed a robust API details UI microservice 
                for API Gateway service that enables thousands of 
                users and businesses to create and manage 
                their own APIs on a cloud platform.`
                }
              </li>
            </ul>
            <a
              className='more-link'
              href='https://cloud.ibm.com/catalog/services/api-gateway#about'
              rel='noopener noreferrer'
              target='_blank'
            >
              More details...
          </a>
            <h3 className='work-team ibm-team'>
              Sugar.IQ
          </h3>
            <center>
              <img
                alt='API Gateway'
                className='work-img'
                src={sugariq}
              />
            </center>
            <ul className='ibm-team-details'>
              <li>
                {
                  `Implemented OAuth authentication, thereby avoiding 
                the maintenance of user records at our database.`
                }
              </li>
              <li>
                {
                  `Improved automated test coverage from 9% to 43%.`
                }
              </li>
              <li>
                {
                  `Implemented a mechanism to include insulin and 
                workout data into the home stream feed.`
                }
              </li>
              <li>
                {
                  `Implemented a mechanism to add food using barcode, 
                making it easier for the user to log it.`
                }
              </li>
            </ul>
            <a
              className='more-link'
              href='https://www.medtronicdiabetes.com/products/sugar.iq-diabetes-assistant'
              rel='noopener noreferrer'
              target='_blank'
            >
              More details...
          </a>
            <h3 className='work-team ibm-team'>
              Customer Experience Layer Portal
          </h3>
            <ul className='ibm-team-details'>
              <li>
                {
                  `Built a notification component that notifies the 
                user with all types of notification.`
                }
              </li>
              <li>
                {
                  `Improved the UI response time for status change of 
                notifications and delete operation.`
                }
              </li>
              <li>
                {
                  `Designed and implemented an algorithm that chooses 
                the correct order of product logos to be displayed
                in all the product pages.`
                }
              </li>
              <li>
                {
                  `Built an API to upload, get and delete alert messages, 
                workbooks and dashboards in the portal.`
                }
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='work-container fb-container'>
        <div style={{ marginRight: '20px' }}>
          <img
            alt='fb'
            src={fbLogo}
          />
        </div>
        <div style={{ width: '100%' }}>
          <h2 className='work-title fb-title'>
            Facebook Inc. (May 2016 - Aug 2016)
          </h2>
          <h4 className='work-position fb-position'>
            Software Developer, Intern
          </h4>
          <h3 className='work-team fb-team'>
            Facebook Lite
          </h3>
          <ul className='work-details fb-team-details'>
            <li>
              {
                `Designed and implemented an algorithm that decides on 
                how to delete certain types of tokens in the comments.`
              }
            </li>
            <li>
              {
                `Built a TokenInput component which does text processing 
                based on tokens (Mentions, Hashtags, URLs, 
                Groups, Locations, etc.), for their mobile app.`
              }
            </li>
            <li>
              {
                `Built a Stateless MentionsInput (search for friends and tag 
                them) component, which can replace the existing Stateful 
                component. It can be used in any FB product on both 
                Android and iOS platforms.`
              }
            </li>
          </ul>
        </div>
      </div>
      <div className='work-container infy-container'>
        <div style={{ marginRight: '20px' }}>
          <img
            alt='infosys'
            src={infyLogo}
          />
        </div>
        <div style={{ width: '100%' }}>
          <h2 className='work-title infy-title'>
            Infosys Limited (Oct 2012 - Jun 2015)
          </h2>
          <h4 className='work-position infy-position'>
            Senior Systems Engineer
          </h4>
          <ul className='work-details infy-team-details'>
            <li>
              {
                `Reduced the operation team’s work by 70% through automation.`
              }
            </li>
            <li>
              {
                `Redesigned the file sharing among the web farm clusters 
                which resulted in faster and efficient file share.`
              }
            </li>
            <li>
              {
                `Implemented an interface to share the necessary details 
                among the systems which resulted in reduction of 45% of 
                manual work.`
              }
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Work;
