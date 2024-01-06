import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function SavedList(props) {
  const navigate = useNavigate();
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <Link key={movie.id} to={`/movies/${movie.id}`}>
          <span key={movie.id} className="saved-movie">{movie.title}</span>
        </Link>
      ))}
      <button className="home-button" onClick={() => navigate("/")}>Home</button>
    </div>
  );
}
