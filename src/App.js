import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './component/home/Home';
import Favorite from './component/userfav/Favorite';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route exact path="/" component={Home}/>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
