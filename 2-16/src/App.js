import { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
//https://api.giphy.com/v1/gifs/search?q=cheeseburger&api_key=E8ZNTtCR8JE0zVSOmFFXC7LkX4oOJ9OC

function App() {
  const [songs, setSongs] = useState([])
  let [song, setSong] = useState('eminem')
  let [giph, setGiph] = useState('')

  useEffect(() => {
    findTheSong()
  }, [])


  const findTheSong = () => {
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${song}`)
      .then(res => {
        console.log(res)
        setSongs(res.data.data)
      })
  }

  const findTheGiph = () => {
    axios.get(`https://api.giphy.com/v1/gifs/search?q=${song}&api_key=E8ZNTtCR8JE0zVSOmFFXC7LkX4oOJ9OC`)
      .then(res => {
        console.log(res)
        setGiph(res.data.data[0].embed_url)
      })
  }

  const findSong = (e) => {
    e.preventDefault()
    findTheSong()
    findTheGiph()
  }
  const showSongs = () => {
    return songs.map(eachSong => {
      return (
        <li key={eachSong.id}>
          {Math.random()}

          <h5>{eachSong.title}</h5>
          <img src={eachSong.album.cover} />

          <audio controls>
            <source src={eachSong.preview} />
          </audio>
        </li>
      )
    })
  }

  return (
    <div className="App">
      <h1>Our Cool Music App</h1>

      <iframe src={giph} />

      <form onSubmit={findSong}>
        <input type="text" placeholder="Fav song?" onChange={(e) => setSong(e.target.value)} />
        <button>Submit</button>
      </form>
      {showSongs()}
    </div>
  );
}

export default App;
