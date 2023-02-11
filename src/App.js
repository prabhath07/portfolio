import './App.css';
import {BrowserRouter as Router , Route, useHistory ,Switch } from 'react-router-dom';
import Navbar from './components/Nav'
import Home from './components/Home'
import Projects from './components/Projects';
import Contact  from './components/Contact';
import About from './components/About';
import Ideas from './components/Ideas'
import Face from './components/projects/Face'
import Bots from './components/projects/Bots';
import System from './components/projects/System';
import Stocks from './components/projects/Stocks';
import Mlp from './components/projects/Mlp';

function App() {
  return (
    <Router>
       <Route exact path="/" ><Home/></Route>
       <Route exact path="/projects" ><Projects/></Route>
       <Route exact path="/contact" ><Contact/></Route>
       <Route exact path="/about" ><About/></Route>
       <Route exact path="/ideas" ><Ideas/></Route>
       <Route exact path="/projects/face" ><Face/></Route>
       <Route exact path="/projects/stock" ><Stocks/></Route>
       <Route exact path="/projects/bots" ><Bots/></Route>
       <Route exact path="/projects/system" ><System/></Route>
       <Route exact path="/projects/mlp" ><Mlp/></Route>








    </Router>
    
  );
}

export default App;
