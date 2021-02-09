import { useState, Fragment } from 'react'
import logo from './logo.svg';
import './App.css';
import Profile from './Profile'
import Team from "./Team";
import Contact from './Contact'
import WorkingWithLists from './WorkingWithLists'
/**Component */

function App() {




  return (
    <div className="container">
      <WorkingWithLists />
    </div>
  )
}


function Counter() {

  let [num, setNum] = useState(0)
  let [word, setWord] = useState('on·o·mat·o·poe·ia')

  let style = {
    backgroundColor: 'purple',
    fontSize: `${num}px`
  }


  const addOne = (e) => {
    num = num + 1
    setNum(num)
  }

  return (
    <div className="App" style={style}>
      <p>{Math.random()}</p>

      <h1>Word: {word}</h1>
      <h1>Num: {num}</h1>
      <button onClick={(e) => setWord('somnambulist 😴')}>Change Word</button>
      <button onClick={addOne}>Add One</button>
    </div >
  );
}


export default App;
