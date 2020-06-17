import React from 'react';
import {FaMapMarkedAlt} from 'react-icons/fa';

import auLogo from './images/auLogo.png';
import ncsuLogo from './images/ncsuLogo.png';

import './css/App.css';
import './css/University.css';

const University = () => {
  return (
    <div>
      <h2 className='page-title'>
        Alma Mater
      </h2>
      <div className='univ-container ncsu-container'>
        <div style={{marginRight: '20px'}}>
          <img
            alt='ncsu'
            src={ncsuLogo}
          />
        </div>
        <div style={{width: '100%'}}>
          <h2 className='univ-title ncsu-title'>
            North Carolina State University (Aug 2015 - Dec 2016)
          </h2>
          <h4 className='univ-degree ncsu-degree'>
            Master of Computer Science
          </h4>
          <h4>
            <a
              className='univ-location ncsu-location'
              href='https://www.ncsu.edu/'
              rel='noopener noreferrer'
              target='_blank'
            >
              <FaMapMarkedAlt />
              <p>
              Raleigh, North Carolina, USA
              </p>
            </a>
          </h4>
          <h3 className='univ-course ncsu-course'>
            Courses
          </h3>
          <p className='univ-course-list ncsu-course-list'>
            {
              `Internet Protocols, Algorithms, Software Engineering, Databases,
              Foundation of Software Science, Automated Learning and 
              Data Analysis, Artificial Intelligence, Operating Systems, 
              Internet of Things, Algorithms for Data Guided Business 
              Intelligence.`
            }
          </p>
        </div>
      </div>
      <div className='univ-container au-container'>
        <div style={{marginRight: '20px'}}>
          <img
            alt='au'
            src={auLogo}
          />
        </div>
        <div style={{width: '100%'}}>
          <h2 className='univ-title au-title'>
            Anna University (2008 - 2012)
          </h2>
          <h4 className='univ-degree au-degree'>
            Bachelor of Engineering in Computer Science
          </h4>
          <h4>
            <a
              className='univ-location au-location'
              href='https://www.annauniv.edu/'
              rel='noopener noreferrer'
              target='_blank'
            >
              <FaMapMarkedAlt />
              <p>
                Chennai, Tamil Nadu, India
              </p>
            </a>
          </h4>
          <h3 className='univ-course au-course'>
            Courses
          </h3>
          <p className='univ-course-list au-course-list'>
            {
              `Web Technologies, Mobile Computing, User Interface Design, 
              Algorithms, Data Structures, Software Project Management, 
              Databases, Object Oriented Programming, Software 
              Engineering, Operating Systems, Computer Networks, 
              System Software, Theory of Computation, Artificial 
              Intelligence, Computer Architecture, Probability and 
              Queueing Theory, Differential Equations.`
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default University;
