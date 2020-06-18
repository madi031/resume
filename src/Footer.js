import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';

import './css/App.css';
import './css/Footer.css';

const Footer = () => {
  return (
    <div>
      <footer className='app-footer'>
        <h1>
          I can help.
        </h1>
        <p>
          If you have a project that you want to get started,
          think you need my help with something or just fancy
          saying hi, then get in touch.
        </p>
        <a
          className='footer-contact'
          href='mailto:mail@mathioli.dev'
        >
          <MdMail className='social-icon' />
          <p>
              mail@mathioli.dev
          </p>
        </a>
        <div className='footer-contact-container'>
          <a
            className='footer-contact'
            href='https://www.linkedin.com/in/mathioli-ramalingam-1b265034/'
            rel='noopener noreferrer'
            target='_blank'
          >
            <FaLinkedin className='social-icon' />
          </a>
          <a
            className='footer-contact'
            href='https://github.com/madi031'
            rel='noopener noreferrer'
            target='_blank'
          >
            <FaGithub className='social-icon' />
          </a>
          <a
            className='footer-contact'
            href='https://twitter.com/Mathioli'
            rel='noopener noreferrer'
            target='_blank'
          >
            <FaTwitter className='social-icon' />
          </a>
        </div>
        <div style={{display: 'flex', marginTop: '20px'}}>
          <div style={{marginRight: '10px'}}>
            <a
              className='twitter-share-button'
              data-size='large'
              href='https://twitter.com/intent/tweet?text=Mathioli%20Ramalingam%20-%20Software%20Developer:&via=mathioli'
            >
              Tweet
            </a>
          </div>
          <div
            className='fb-like'
            data-href='https://mathioli.dev'
            data-width=''
            data-layout='button_count'
            data-action='like'
            data-size='large'
            data-share='false'
          >
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
