import { Link, useParams } from 'react-router-dom'
import './moviepage.css'
import { useState, useEffect } from 'react';
import { getMoviebyIdAPI } from '../services/allAPI';

function Moviepage() {
  const [movie, setMovie] = useState([]);
  const { id } = useParams();

  const getMoviebyId = async (movieId) => {
    try {
      const result = await getMoviebyIdAPI(movieId);
      if (result.status === 200) {
        setMovie(result.data);
      }
    } catch (err) {
      console.error("Error:", err.message);
    }
  };
  console.log(movie);

  useEffect(() => {
    getMoviebyId(id);
  }, [id]);

  return (
    <>
      <div className="container">
        <div className="poster">
          <img src={movie.image} alt={movie.title} />
        </div>
        <div className="details">
          <div className="title">{movie.title}</div>
          <div className="interested">👥 156.2K are interested</div>
          <div className="formats">2D</div>
          <div className="info">Director : {movie.director}</div>
          <div className="info">Genre: {movie.genre?.join(', ')}</div>

          <div className="info">Languages : {movie.language}</div>
          <div className="info">Duration: {movie.duration}  </div>
            <div className="info">Rating: {movie.rating}</div>
          <Link id='link' to={`/bookingpage`} state={{ movie: movie }}>Book Now</Link>
          
        </div>
        <div>
          <h5>Watch trailer</h5>
          <iframe src={movie.videourl} title={movie.trailertitle} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>

      <div className="about">
        <h2>About the movie</h2>
        <p>
         {movie.description}
        </p>
      </div>
      <div className="about">
        <h2>Cast</h2>
      </div>
      <div className="about">
        <h2>Review</h2>
      </div>
    </>
  )
}

export default Moviepage