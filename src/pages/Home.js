import React from 'react';
import matchData from '../data/matches';
import { useNavigate } from 'react-router-dom';
import { useFavourite } from '../context/FavouriteContext';


const Home = () => {
  const navigate = useNavigate();

  const footballMatches = matchData.filter((match) => match.sport === 'Football').slice(0, 5);
  const basketballMatches = matchData.filter((match) => match.sport === 'Basketball').slice(0, 5);
  const tennisMatches = matchData.filter((match) => match.sport === 'Tennis').slice(0, 5);

 const navigateToMatch = (id) => {
    navigate(`/match/${id}`);
  };

  const { toggleFavourite, isFavourite } = useFavourite();



  return (
    <div className="container">
      <h2 className="section-title">Football</h2>
      <div className="match-list">
        {footballMatches.map((match) => (
          <div key={match.id} className="match-card" onClick={() => navigateToMatch(match.id)}>
            <div className="match-title">{match.title}</div>
            <div className="match-info">
              <span>{match.time}</span>
              <span>{match.venue}</span>
            </div>
            <button onClick={() => toggleFavourite(match)}>
              {isFavourite(match.id) ? '⭐' : '☆'}
            </button>
          </div>
        ))}
      </div>

      <h2 className="section-title">Basketball</h2>
      <div className="match-list">
        {basketballMatches.map((match) => (
          <div key={match.id} className="match-card" onClick={() => navigateToMatch(match.id)}>
            <div className="match-title">{match.title}</div>
            <div className="match-info">
              <span>{match.time}</span>
              <span>{match.venue}</span>
            </div>
            <button onClick={() => toggleFavourite(match)}>
              {isFavourite(match.id) ? '⭐' : '☆'}
             </button>
          </div>
        ))}
      </div>

      <h2 className="section-title">Tennis</h2>
      <div className="match-list">
        {tennisMatches.map((match) => (
          <div key={match.id} className="match-card" onClick={() => navigateToMatch(match.id)}>
            <div className="match-title">{match.title}</div>
            <div className="match-info">
              <span>{match.time}</span>
              <span>{match.venue}</span>
            </div>
            <button onClick={() => toggleFavourite(match)}>
              {isFavourite(match.id) ? '⭐' : '☆'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
