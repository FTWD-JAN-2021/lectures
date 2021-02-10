import { useState } from 'react'
import './App.css';
import Logo from './Logo';


function App() {

  const [logo, setLogo] = useState(false)
  const [text, setText] = useState('Great Job')

  //logo to sometimes be true sometimes be false 
  const toggleLogo = () => {
    console.log(logo)
    //yo logo is not logo yoyo 
    setLogo(!logo)
  }

  const whatDidIType = () => {
    console.log(text)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(text)
  }

  return (
    <div className="App">
      {text}
      <header className="App-header">

        <form onSubmit={handleSubmit} >
          <input onChange={(e) => setText(e.target.value)} placeholder="..." type="text" />
          <button onClick={whatDidIType} >What did I type?</button>
        </form>


      </header>


      <button onClick={toggleLogo}>Toggle Click</button>

      {logo ? <Logo /> : 'logo is false'}
    </div>
  );
}

export default App;




