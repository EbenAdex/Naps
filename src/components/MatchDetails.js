import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import matchData from '../data/matches';
import telegram from '../assets/Telegram.jpg';
import youtube from '../assets/YouTube.jpg';
const MatchDetail = () => {
  const { id } = useParams();
  const match = matchData.find((m) => m.id === parseInt(id));
  const [activeTab, setActiveTab] = useState('Info');

  if (!match) {
    return <div className="match-detail">Match not found</div>;
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Info':
        return (
          <div className="tab-content">
            <h3>Match Info</h3>
            <p><strong>Date:</strong> 19 Apr 2025</p>
            <p><strong>Time:</strong> {match.time}</p>
            <p><strong>Venue:</strong> {match.venue}</p>
          </div>
        );
      case 'Prediction':
        return (
          <div className="tab-content">
            <h3>Prediction</h3>
            <p>Predictions will be added soon.</p>
          </div>
        );
      case 'Line-ups':
        return (
          <div className="tab-content">
            <h3>Team Formations</h3>
            <p><strong>Team A:</strong> {match.formationA || 'TBD'}</p>
            <p><strong>Team B:</strong> {match.formationB || 'TBD'}</p>
          </div>
        );
      case 'Table':
        return (
          <div className="tab-content">
            <h3>Table</h3>
            {match.table?.length > 0 ? (
              <table>
                <thead>
                  <tr>
                    <th>Team</th>
                    <th>Points</th>
                    <th>Position</th>
                  </tr>
                </thead>
                <tbody>
                  {match.table.map((team, index) => (
                    <tr key={index}>
                      <td>{team.name}</td>
                      <td>{team.points}</td>
                      <td>{team.position}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No table data available.</p>
            )}
          </div>
        );
      case 'News':
        return (
          <div className="tab-content">
            <h3>Team News</h3>
            <p>{match.teamNews || 'No news available.'}</p>
          </div>
        );
      case 'H2H':
        return (
          <div className="tab-content">
            <h3>Head to Head</h3>
            {match.headToHead?.length > 0 ? (
              <ul>
                {match.headToHead.map((h2h, index) => (
                  <li key={index}>{h2h}</li>
                ))}
              </ul>
            ) : (
              <p>No H2H data available.</p>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="match-detail">
      <div className="match-header">
        <div className="team">
          <img src={youtube} alt="Team A" />
          <h4>{match.title.split('vs')[0].trim()}</h4>
        </div>
        <div className="time">{match.time}</div>
        <div className="team">
          <img src={telegram} alt="Team B" />
          <h4>{match.title.split('vs')[1].trim()}</h4>
        </div>
      </div>

      <div className="tabs">
        {['Info', 'Prediction', 'Line-ups', 'Table', 'News', 'H2H'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={activeTab === tab ? 'active' : ''}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="content">{renderTabContent()}</div>
    </div>
  );
};

export default MatchDetail;
