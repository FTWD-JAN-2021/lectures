import logo from './logo.svg';
import './App.css';
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Profile from './Profile'

import { Switch, Route, Link } from 'react-router-dom'

function App() {


  const makeList = () => {
    let links = []
    for (let i = 0; i < 5; i++) {
      links.push(<Link key={i} to={`/profile/${i}`}>{i}'s</Link>)
    }
    return links
  }


  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>

        {makeList()}
        {/* <a href="/about">Traditional About</a> */}
      </nav>

      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route exact path="/about" render={(props) => <About {...props} />} />
        <Route exact path="/contact" render={(props) => <Contact {...props} />} />
        <Route exact path="/profile/:id" render={(props) => <Profile {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
