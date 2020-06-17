import React from 'react';
import {FaCode, FaLaptopCode} from 'react-icons/fa';
import {MdMail} from 'react-icons/md';
import {Link} from 'react-router-dom';

import './css/App.css';
import './css/About.css';

import profilePhoto from './images/profile_photo.jpg';

const About = () => {
  return (
    <div className='about-container'>
      <div className='name-container'>
        <div className='image-cropper'>
          <img
            src={
              profilePhoto
            }
            className='profile-photo'
            alt='logo'
          />
        </div>
        <div>
          <h2>
            {'I\'m Mathioli Ramalingam (madi)'}
          </h2>
          <em>
              a UI Engineer
          </em>
          <p>
            Live in Raleigh, North Carolina, USA
          </p>
          <p>
            Fluent in English and Tamil
          </p>
          <a href='mailto:mail@mathioli.dev'>
            <MdMail className='mail-icon' />
          </a>
        </div>
      </div>
      <hr />
      <div className='hi-container'>
        <h2>
          Hi.
        </h2>
        <p style={{marginTop: 0, textAlign: 'center'}}>
          {
            `I'm a web and mobile developer with good knowledge 
            of front-end technologies. I love spending time on 
            fixing little details and optimizing apps. I stand 
            for quality and love to create apps for web and 
            mobile devices.`
          }
        </p>
        <h2>
          What I can do.
        </h2>
        <div className='work-section'>
          <div style={{marginRight: '20px'}}>
            <FaLaptopCode className='large-icon' />
          </div>
          <div>
            <h3 style={{color: '#71c9ce'}}>
              Develop what you need
            </h3>
            <p>
              {
                `I can create application to run across devices using 
                latest technologies. `
              }
              <Link
                to='/work'
                style={{textDecoration: 'none'}}
              >
                More...
              </Link>
            </p>
          </div>
        </div>
        <h2>
          What are my abilities.
        </h2>
        <div className='work-section'>
          <div style={{marginRight: '20px'}}>
            <FaCode className='large-icon' />
          </div>
          <div>
            <h3 style={{color: '#71c9ce'}}>
            Languages and Technologies
            </h3>
            <ul>
              <li>
                {
                  `React; JavaScript; Webpack; Redux; GraphQL; HTML5; CSS3`
                }
              </li>
              <li>
                {
                  `Swift; React Native`
                }
              </li>
              <li>
                {
                  `Kubernetes; Docker`
                }
              </li>
              <li>
                {
                  `IBM Cloud; WebSphere; AWS`
                }
              </li>
              <li>
                {
                  `Xcode; Visual Studio; Microsoft SQL Server`
                }
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
