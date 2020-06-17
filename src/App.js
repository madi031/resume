import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import About from './About';
import Footer from './Footer';
import Header from './Header';
import Honors from './Honors';
import Projects from './Projects';
import University from './University';
import Work from './Work';

// eslint-disable-next-line require-jsdoc
function App() {
  return (
    <div className='app-container'>
      <Router>
        <Header />
        <Switch>
          <Route path='/alma-mater'>
            <University />
          </Route>
          <Route path='/honors'>
            <Honors />
          </Route>
          <Route path='/projects'>
            <Projects />
          </Route>
          <Route path='/work'>
            <Work />
          </Route>
          <Route path='/'>
            <About />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
