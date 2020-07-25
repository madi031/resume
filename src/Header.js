import React, { useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

import './css/App.css';
import './css/Header.css';

import Logo from './images/logo512.png';

// Resume URL
const RESUME_GOOGLE =
  'https://drive.google.com/file/d/1QwIycZfFIFujQL-qn0Hxay7qON0xYtjQ/view?usp=sharing';

const buttonName = {
  about: 'about',
  almaMater: 'alma-mater',
  honors: 'honors',
  projects: 'projects',
  resume: 'resume',
  work: 'work',
};

const Header = () => {
  const location = useLocation();

  const buttonClicked = (id) => {
    Object.values(buttonName).forEach((id) => {
      document.getElementById(id) &&
        document.getElementById(id).classList.remove('button-clicked');
    });

    document.getElementById(id) &&
      document.getElementById(id).classList.add('button-clicked');
  };

  const checkEventClick = (e) => {
    if (
      document.getElementById('side-nav') &&
      document.getElementById('nav-button') &&
      !document.getElementById('side-nav').contains(e.target) &&
      !document.getElementById('nav-button').contains(e.target)
    ) {
      document.getElementById('nav-button') &&
        document
          .getElementById('nav-button')
          .classList.remove('nav-button-open');

      document.getElementById('side-nav') &&
        document.getElementById('side-nav').classList.remove('is-nav-open');
    }
  };

  const handleClick = () => {
    document.getElementById('nav-button') &&
      document.getElementById('nav-button').classList.toggle('nav-button-open');

    document.getElementById('side-nav') &&
      document.getElementById('side-nav').classList.toggle('is-nav-open');
  };

  const sideNavButtonClicked = (id) => {
    Object.values(buttonName).forEach((id) => {
      document.getElementById(`sidenav-${id}`) &&
        document
          .getElementById(`sidenav-${id}`)
          .classList.remove('sidenav-button-clicked');
    });

    document.getElementById(`sidenav-${id}`) &&
      document
        .getElementById(`sidenav-${id}`)
        .classList.add('sidenav-button-clicked');
  };

  useEffect(() => {
    window.addEventListener('click', checkEventClick);

    return () => {
      window.removeEventListener('click', checkEventClick);
    };
  }, []);

  useEffect(() => {
    const currentPath = location.pathname.split('/')[1];
    if (currentPath) {
      buttonClicked(currentPath);
      sideNavButtonClicked(currentPath);
    } else {
      buttonClicked(buttonName.about);
      sideNavButtonClicked(buttonName.about);
    }
  });

  return (
    <div>
      <header className='app-header'>
        <img
          alt='madi'
          className='logo-header'
          src={Logo}
          onClick={() => (window.location.href = window.location.origin)}
        />
        <div className='button-wrapper'>
          <button
            className='header-button'
            id={buttonName.about}
            onClick={() => buttonClicked(buttonName.about)}
          >
            <Link to='/'>About</Link>
          </button>
          <button
            className='header-button'
            id={buttonName.work}
            onClick={() => buttonClicked(buttonName.work)}
          >
            <Link to='/work'>Work</Link>
          </button>
          <button
            className='header-button'
            id={buttonName.almaMater}
            onClick={() => buttonClicked(buttonName.almaMater)}
          >
            <Link to='/alma-mater'>Alma Mater</Link>
          </button>
          <button
            className='header-button'
            id={buttonName.projects}
            onClick={() => buttonClicked(buttonName.projects)}
          >
            <Link to='/projects'>Projects</Link>
          </button>
          <button
            className='header-button'
            id={buttonName.honors}
            onClick={() => buttonClicked(buttonName.honors)}
          >
            <Link to='/honors'>Honors</Link>
          </button>
          <button
            className='header-button'
            id={buttonName.resume}
            onClick={() => buttonClicked(buttonName.resume)}
          >
            <a href={RESUME_GOOGLE} rel='noopener noreferrer' target='_blank'>
              Resume
            </a>
          </button>
        </div>
        <div className='sidenav-wrapper'>
          <button
            className='nav-button'
            id='nav-button'
            onClick={() => handleClick()}
          >
            <FaBars className='mail-icon nav-icon' />
          </button>
        </div>
        <div className='side-nav' id='side-nav'>
          <div className='sidenav-button-wrapper'>
            <button
              className='sidenav-button'
              id={`sidenav-${buttonName.about}`}
              onClick={() => sideNavButtonClicked(buttonName.about)}
            >
              <Link to='/'>About</Link>
            </button>
            <button
              className='sidenav-button'
              id={`sidenav-${buttonName.work}`}
              onClick={() => sideNavButtonClicked(buttonName.work)}
            >
              <Link to='/work'>Work</Link>
            </button>
            <button
              className='sidenav-button'
              id={`sidenav-${buttonName.almaMater}`}
              onClick={() => sideNavButtonClicked(buttonName.almaMater)}
            >
              <Link to='/alma-mater'>Alma Mater</Link>
            </button>
            <button
              className='sidenav-button'
              id={`sidenav-${buttonName.projects}`}
              onClick={() => sideNavButtonClicked(buttonName.projects)}
            >
              <Link to='/projects'>Projects</Link>
            </button>
            <button
              className='sidenav-button'
              id={`sidenav-${buttonName.honors}`}
              onClick={() => sideNavButtonClicked(buttonName.honors)}
            >
              <Link to='/honors'>Honors</Link>
            </button>
            <button
              className='sidenav-button'
              id={`sidenav-${buttonName.resume}`}
              onClick={() => sideNavButtonClicked(buttonName.resume)}
            >
              <a href={RESUME_GOOGLE} rel='noopener noreferrer' target='_blank'>
                Resume
              </a>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
