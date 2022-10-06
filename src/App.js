import React from 'react'
import { HashRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/Home.js'
import About from './components/About.js';
import Projects from './components/Projects.js';
import WorkExp from './components/WorkExp.js';
import './App.css';

function App() {
  return (
      <>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/projects' component={Projects} />
            <Route path='/work-experience' component={WorkExp}/>
          </Switch>
        </Router>
      </>
  );
}

export default App;
