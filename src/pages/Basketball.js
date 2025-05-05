import matchData from '../data/matches';
import { useFavourite } from '../context/FavouriteContext';
import { useNavigate } from 'react-router-dom';

const Basketball = () => {
  const basketballMatches = matchData.filter(match => match.sport === 'Basketball').slice(0, 5);
 const { toggleFavourite, isFavourite } = useFavourite();

 const navigateToMatch = (id) => {
  navigate(`/match/${id}`);
};
  const navigate = useNavigate();
  return (
    <div className="page-container">
      <h2>Basketball Matches</h2>
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
    </div>
  );
};

export default Basketball;
