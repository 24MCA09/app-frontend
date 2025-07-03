import React, { useState } from 'react';
import './bookingpage.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { bookTicketAPI } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
const seatsPerRow = 20;


function BookingPage() {
  const location = useLocation();
  const movie = location.state?.movie;

  const [result, setResult] = useState({});
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedTheatre, setSelectedTheatre] = useState("");
  const [selectedSeats, setSelectedSeats] = useState([]);

  const navigate = useNavigate()
  const [show1, setshow1] = useState(false);
  const handleClose = () => setshow1(false);
  const handleshow1 = () => {
    setshow1(true);
  }

  const existingUser = JSON.parse(sessionStorage.getItem("existingUser"));

  const handleSeatClick = (seatId) => {
    setSelectedSeats((prev) =>
      prev.includes(seatId)
        ? prev.filter((s) => s !== seatId)
        : [...prev, seatId]
    );
  };
  const TotalPrice = selectedSeats.length * 100;
  const Totalseats = selectedSeats.length;

  // book tickets
  const handlepay = async () => {
    const seatdetails = {
      email: existingUser.email,
      seatid: selectedSeats,
      totalseats: Totalseats,
      totalprice: TotalPrice,
      theatre: selectedTheatre,
      time: selectedTime,
      title: movie.title,
      image: movie.image
    }
    if (selectedSeats <= 0 || !selectedTheatre || !selectedTime) {
      toast.info('Please select seats,Theatre and time')
    }
    else {
      // console.log(seatdetails);

      const result = await bookTicketAPI(seatdetails)
      if (result.status === 200) {
        toast.success(`Ticket Booked successfully`)
        setResult(result.data)


        handleshow1();
        setTimeout(() => {
          setSelectedSeats([]);
          setSelectedTheatre("");
          setSelectedTime("");
        }, 2500);


      } else {
        toast.error(result.response.data)
        setTimeout(() => {
          setSelectedSeats([]);
          setSelectedTheatre("");
          setSelectedTime("");
        }, 2500);
      }
    }

    console.log(result);

  }
  return (
    <>
      <div>
        <Link id='link' className='m-5 bg-dark' to={'/'} > home</Link>
      </div>
      <div className="container mt-2">

        <div>
          <div className="poster">
            <img src={movie.image} alt={movie.title} />
          </div>
          <div className="details">
            <div className="title">{movie.title}</div>
            <div className="formats">2D</div>
            <div className="info">Director : {movie.director}</div>
            <div className="info">Genre: {movie.genre?.join(', ')}</div>

            <div className="info">Languages : {movie.language}</div>
            <div className="info">Duration: {movie.duration}  </div>
            <div className="info">Rating: {movie.rating}</div>

          </div>
        </div>
        <div className="theatre-container">
          <h3>Select Theatre and Time</h3>
          <div id='movie-time'>
            <button
              className={`m-2 p-2 ${selectedTheatre === "PVR LULU MALL" ? 'selected-btn' : ''}`}
              onClick={() => setSelectedTheatre("PVR LULU MALL")}
            >
              PVR LULU MALL
            </button>

            <button
              className={`m-2 p-2 ${selectedTheatre === "Padma Cinema 4K 3D" ? 'selected-btn' : ''}`}
              onClick={() => setSelectedTheatre("Padma Cinema 4K 3D")}
            >
              Padma Cinema 4K 3D
            </button>

            <button
              className={`m-2 p-2 ${selectedTheatre === "EVM Cinema" ? 'selected-btn' : ''}`}
              onClick={() => setSelectedTheatre("EVM Cinema")}
            >
              EVM Cinema
            </button>

            <button
              className={`m-2 p-2 ${selectedTheatre === "Cinepolis Cinemas" ? 'selected-btn' : ''}`}
              onClick={() => setSelectedTheatre("Cinepolis Cinemas")}
            >
              Cinepolis Cinemas
            </button>
          </div>
          <div id='movie-time'>
            <button
              className={`m-2 p-2 ${selectedTime === "9:45 am" ? 'selected-btn' : ''}`}
              onClick={() => setSelectedTime("9:45 am")}
            >
              9:45 am
            </button>

            <button
              className={`m-2 p-2 ${selectedTime === "2:45 pm" ? 'selected-btn' : ''}`}
              onClick={() => setSelectedTime("2:45 pm")}
            >
              2:45 pm
            </button>

            <button
              className={`m-2 p-2 ${selectedTime === "6:45 pm" ? 'selected-btn' : ''}`}
              onClick={() => setSelectedTime("6:45 pm")}
            >
              6:45 pm
            </button>

            <button
              className={`m-2 p-2 ${selectedTime === "10:45 pm" ? 'selected-btn' : ''}`}
              onClick={() => setSelectedTime("10:45 pm")}
            >
              10:45 pm
            </button>
          </div>
          <h3>Select Your Seats</h3>
          <div>

            <img id='screenimg'
              src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Screen" />
            <p>Facing towards screen</p>
          </div>
       <div className="seats-grid">
  {rows.map((row) => (
    <div key={row} className="seat-row d-flex align-items-center">
      {/* Row label */}
      <div className="row-label" style={{ width: '20px', marginRight: '10px', fontWeight: 'bold' }}>
        {row}
      </div>

      {/* Seats */}
      {Array.from({ length: seatsPerRow }, (_, i) => {
        const seatId = `${row}${i + 1}`;
        const isSelected = selectedSeats.includes(seatId);
        return (
          <div
            key={seatId}
            className={`seat ${isSelected ? 'selected' : ''}`}
            onClick={() => handleSeatClick(seatId)}
          >
            {i + 1}
          </div>
        );
      })}
    </div>
  ))}
</div>


          <div className="selection-info">
            <p>Selected Seats: {selectedSeats.join(', ') || 'None'}</p>
            <p>Total Selected Seats: {Totalseats > 0 ? Totalseats : 'None'}</p>
            <p>Total Amount: {TotalPrice > 0 ? TotalPrice : '0'}</p>
            <p>Venue: {selectedTheatre ? selectedTheatre : 'select a theatre'}</p>
            <p>Time: {selectedTime ? selectedTime : 'select time'}</p>
            <button className='pay-btn' onClick={handlepay}>Pay</button>
          </div>
        </div>
      </div>
      <ToastContainer position='top-center' autoClose={2000} theme='colored' />

      <Modal
        show={show1}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Grab Your Tickets </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="container bg-light">
            <div className="poster text-center">
              <img src={result.image} alt={result.title} style={{ maxWidth: '200px', borderRadius: '10px' }} />
            </div>
            <div className="details mt-3">
              <h4 className="title">{result.title}</h4>
              <p><strong>Theatre:</strong> {result.theatre}</p>
              <p><strong>Show Time:</strong> {result.time}</p>
              <p><strong>Seats:</strong> {result.seatid?.join(', ')}</p>
              <p><strong>Total Amount:</strong> ₹{result.totalprice}</p>
            </div>
          </div>
        </Modal.Body>


        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>
    </>
  );
}

export default BookingPage;
