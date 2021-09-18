import './App.css';
import {BrowserRouter as Router , Route, useHistory ,Switch } from 'react-router-dom';
import Navbar from './components/Nav'
import Home from './components/Home'
import Projects from './components/Projects';
import Contact  from './components/Contact';
import About from './components/About';
import Ideas from './components/Ideas'



function App() {
  return (
    <Router>
       <Route exact path="/" ><Home/></Route>
       <Route exact path="/projects" ><Projects/></Route>
       <Route exact path="/contact" ><Contact/></Route>
       <Route exact path="/about" ><About/></Route>
       <Route exact path="/ideas" ><Ideas/></Route>




    </Router>
    
  );
}

export default App;
