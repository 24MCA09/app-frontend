import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import { getMoviesAPI } from '../services/allAPI';
import { Link } from 'react-router-dom';

function AllMovies() {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    try {
      const result = await getMoviesAPI();
      if (result.status === 200) {
        setMovies(result.data);
      }
    } catch (err) {
      console.error("Error fetching movies", err.message);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="d-flex flex-wrap gap-4 justify-content-center p-4">
      {movies.map((movie, index) => (
        <Card key={index} style={{ width: '18rem' }}>
          <Card.Img variant="top" src={movie.image} style={{ height: '300px', objectFit: 'cover' }} />
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text>{movie.description.slice(0, 100)}...</Card.Text>
           <Link id='link' to={`/moviepage/${movie.id}`} state={{ movie: movie }}>Book Now</Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default AllMovies;
