import logo from './logo.svg';
import './App.css';
import Profile from './Profile'
import Team from "./Team";
import Contact from './Contact'
/**Component */

function App() {
  return (
    <div className="App">
      <h1>Hello React!!!</h1>


      <Profile name="John" favoriteFood="Wings" favoriteColors={["red", "green"]} />
      <Profile name="Heather" favoriteFood="Pizza" />
      <Profile name="Victor" favoriteFood="Salmon" />





      <Team />
      <Contact />


    </div>
  );
}

export default App;
