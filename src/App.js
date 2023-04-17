import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


function App() {

  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
  }, [])

  async function getAllSongs() {
    let response = await axios.get('http://127.0.0.1:5000/api/songs/');
    setSongs(response.data);
  }

  async function addNewSong(newSong) {
    let response = await axios.post('http://127.0.0.1:5000/api/songs/', newSong);
    if(response.status === 201) {
      await getAllSongs();
    }
  }

  const filterSongs = (e) => {
    let filterValue = e.target.value
  }


  return(
<p class='app-link'> Hello World</p>
  )
}

export default App;
