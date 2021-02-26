import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import Home from './components/Home'
import Stuff from './components/Stuff'
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>Friday App</h1>

      <Switch>
        <Route exact path="/" render={(props) => < Home {...props} />} />
        <Route exact path="/stuff" render={(props) => < Stuff {...props} />} />
      </Switch>

    </div>
  );
}

export default App;
