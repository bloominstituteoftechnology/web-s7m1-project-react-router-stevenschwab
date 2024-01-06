import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function MovieCard(props) {
  const { title, director, metascore, stars } = props.movie;

  const navigate = useNavigate();

  return (
    <div className="movie-card" onClick={() => navigate(`/movies/${props.movie.id}`)}>
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>

      {props.isDetailedView && <h3>Actors</h3>}
    
      {props.isDetailedView && stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
    </div>
  );
}
