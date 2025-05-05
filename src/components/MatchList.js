import React from 'react';
import MatchCard from './MatchCard';

const MatchList = ({ matches, onSelect }) => {
  return (
    <div className="match-list">
      {matches.map((match) => (
        <MatchCard
          key={match.id}
          match={match}
          onClick={() => onSelect(match)}
        />
      ))}
    </div>
  );
};

export default MatchList;
