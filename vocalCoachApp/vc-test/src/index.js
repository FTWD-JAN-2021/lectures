import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { SpotifyApiContext, SpotifyApiAxiosContext } from "react-spotify-api";
import axios from "axios";




ReactDOM.render(
  <SpotifyApiAxiosContext.Provider value={axios}>
    <SpotifyApiContext.Provider value={'BQBYht1XLd9rY4yltENDBQtXA5VSqmaM0XrRs3CFscXdrfyYWM4F8ps3zCeJYL3TSRPGJfJsu7gIbzQyJIlAep_EDVntcdePVO5l7P3y_vlbOALWh3xBAagAJR6YUvlZet953nxg3cdOE4biTZdOQt8'}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SpotifyApiContext.Provider>
  </SpotifyApiAxiosContext.Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
