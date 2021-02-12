import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar'
import axios from 'axios'
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home'
import ChuckNorris from './components/ChuckNorris'
import IronBeers from './components/IronBeers'
import RickMorty from './components/RickMorty'
import WikiCountries from './components/WikiCountries'


function App() {

  return (

    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route exact path="/chuck-norris" render={(props) => <ChuckNorris {...props} />} />
        <Route exact path="/iron-beers" render={(props) => <IronBeers {...props} />} />
        <Route exact path="/rick-morty" render={(props) => <RickMorty {...props} />} />
        <Route exact path="/wiki-countries" render={(props) => <WikiCountries {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
