import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './card.css';
import { getMoviesAPI } from '../services/allAPI';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Cards() {
  const [allMovies, setAllMovies] = useState([]);
  const navigate = useNavigate();

  const getMovies = async () => {
    try {
      const result = await getMoviesAPI();
      if (result.status === 200) {
        setAllMovies(result.data.slice(0, 4));
      }
    } catch (err) {
      console.error("Error:", err.message);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  console.log(allMovies);
  
  return (
    <div className="d-flex flex-column align-items-center p-4">
      <div className="d-flex flex-wrap gap-4 justify-content-center">
        {allMovies.map((movie, index) => (
          <Card key={index} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={movie.image} style={{ height: '300px', objectFit: 'cover' }} />
            <Card.Body>
              <Card.Title>{movie.title}</Card.Title>
              <Card.Text>{movie.description.slice(0, 80)}...</Card.Text>
             <Link id='link' to={`/moviepage/${movie.id}`}>Book Now</Link>
            </Card.Body>
          </Card>
        ))}
      </div>


      <Button className="mt-4" variant="dark" onClick={() => navigate('/all-movies')}>
        View All Movies
      </Button>
    </div>

    
  );
}

export default Cards;
