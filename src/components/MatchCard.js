import { Link } from 'react-router-dom';

const MatchCard = ({ match }) => {
  return (
    <Link to={`/match/${match.id}`} className="match-card">
      <div className="card">
        <h3>{match.name}</h3>
        <p>{match.date}</p>
        {/* Add other match details here */}
      </div>
    </Link>
  );
};


export default MatchCard;