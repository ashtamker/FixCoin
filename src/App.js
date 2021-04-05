import './App.css';
import {BrowserRouter as Router ,Route, Link, Switch, } from 'react-router-dom';
import Home from './component/home/Home';
import Favorite from './component/userfav/Favorite';
import Nav from './component/nav/Nav';



function App() {
  return (
    <div className="App">
      <Router>
      <Nav />
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/mybalance" component={Favorite}/>
      </Switch>
      </Router>
    
    </div>
  );
}

export default App;
