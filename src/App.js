import './App.css';
import {BrowserRouter as Router ,Route, Link, Switch, } from 'react-router-dom';
import Home from './component/home/Home';
import { FavoriteProvider } from './component/userfav/Favorite';
import Nav from './component/nav/Nav';
import UserPage from './component/userpage/UserPage';
import CoinDetails from './component/coindetails/CoinDetails';
import AboutCrypto from './component/about/AboutCrypto';
import Convert from './component/convert/Convert';





function App() {
  return (
    <div className="App">
      <FavoriteProvider>
      <Router>
      <Nav />
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/!#" component={Home}/>
      <Route path="/convert" component={Convert}/>
      <Route path="/about" component={AboutCrypto}/>
      <Route path="/mybalance" component={UserPage}/>
      <Route path="/usercoins/:id" component={CoinDetails}/>
      </Switch>
      </Router>
      </FavoriteProvider>
      <i className="delete-icon far fa-times-circle text-danger"></i>

    </div>
  );
}

export default App;
