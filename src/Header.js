import React, {useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom';

import './css/App.css';
import './css/Header.css';

import Logo from './images/logo512.png';

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

  useEffect(() => {
    const currentPath = location.pathname.split('/')[1];
    if (currentPath) {
      buttonClicked(currentPath);
    } else {
      buttonClicked(buttonName.about);
    }
  });

  const buttonClicked = (id) => {
    Object.values(buttonName).forEach((id) => {
      document.getElementById(id).classList.remove('button-clicked');
    });

    document.getElementById(id).classList.add('button-clicked');
  };

  return (
    <div>
      <header className='app-header'>
        <img
          alt='madi'
          className='logo-header'
          src={
            Logo
          }
          onClick={() => window.location.href = window.location.origin}
        />
        <div className='button-wrapper'>
          <button
            className='header-button'
            id={buttonName.about}
            onClick={() => buttonClicked(buttonName.about)}
          >
            <Link to='/'>
              About
            </Link>
          </button>
          <button
            className='header-button'
            id={buttonName.work}
            onClick={() => buttonClicked(buttonName.work)}
          >
            <Link to='/work'>
              Work
            </Link>
          </button>
          <button
            className='header-button'
            id={buttonName.almaMater}
            onClick={() => buttonClicked(buttonName.almaMater)}
          >
            <Link to='/alma-mater'>
              Alma Mater
            </Link>
          </button>
          <button
            className='header-button'
            id={buttonName.projects}
            onClick={() => buttonClicked(buttonName.projects)}
          >
            <Link to='/projects'>
              Projects
            </Link>
          </button>
          <button
            className='header-button'
            id={buttonName.honors}
            onClick={() => buttonClicked(buttonName.honors)}
          >
            <Link to='/honors'>
              Honors
            </Link>
          </button>
          <button
            className='header-button'
            id={buttonName.resume}
            onClick={() => buttonClicked(buttonName.resume)}
          >
            <a
              href='https://drive.google.com/file/d/16AKbRfD2Ou-A5SsNADsckBEPQ3k7UWdi/view?usp=sharing'
              rel='noopener noreferrer'
              target='_blank'
            >
              Resume
            </a>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
