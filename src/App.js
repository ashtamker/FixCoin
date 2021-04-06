import './App.css';
import {BrowserRouter as Router ,Route, Link, Switch, } from 'react-router-dom';
import Home from './component/home/Home';
import { FavoriteProvider } from './component/userfav/Favorite';
import Nav from './component/nav/Nav';
import UserPage from './component/userpage/UserPage';





function App() {
  return (
    <div className="App">
      <FavoriteProvider>
      <Router>
      <Nav />
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/mybalance" component={UserPage}/>
      </Switch>
      </Router>
      </FavoriteProvider>
    </div>
  );
}

export default App;
