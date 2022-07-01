import axios from 'axios';
import React, { useState, useEffect } from 'react';
import '../stylesheets/List.css';
import NavBar2 from './NavBar2';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function List() {
  const params = useParams();
  const [games, setGames] = useState([]);

  useEffect(() => {
    let url = 'http://localhost:3001/games/list';
    if (params.search) {
      url = 'http://localhost:3001/games/search/' + params.search;
    }

    axios.get(url).then((response) => {
      console.log(response);
      setGames(response.data);
    });
    const handler = function (e) {
      setGames(e.detail);
    };
    window.addEventListener('search', handler, false);
    return function cleanup() {
      window.removeEventListener('search', handler, false);
    };
  }, [params.search]);

  function getGames() {
    return games.map((game) => (
      <div key={game.GameId} id='listItem'>
        <img src={game.GameThumbnail} alt=''/>
        <h1>{game.Name}</h1>
        <h3>{game.Description}</h3>
        <Link to={`/oneGame/${game.GameId}`}>view</Link>
      </div>
    ));
  }

  return (
    <div>
      <NavBar2 />
      <div className='row'>
        <div className='gameList flex-wrap'>
          {games === null ? <div>loading</div> : getGames()}
        </div>
      </div>
    </div>
  );
}

export default List;