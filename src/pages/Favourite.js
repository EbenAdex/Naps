import React from 'react';
import { useFavourite } from '../context/FavouriteContext';

const Favourite = () => {
  const { favourites } = useFavourite();

  return (
    <div className="favourite-page">
      <h2> Favourite Matches</h2>
      {favourites.length === 0 ? (
        <p>No favourite matches yet.</p>
      ) : (
        favourites.map((match) => (
          <div className="match-card" key={match.id}>
            <h4>{match.title}</h4>
            <p>{match.time}</p>
            <p>{match.venue}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Favourite;
