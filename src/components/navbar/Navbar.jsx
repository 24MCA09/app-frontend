import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./navbar.css"
import Auth from '../auth/Auth'
import { useEffect, useState } from 'react';
import { getTicketbyidAPI } from '../../services/allAPI';
import { Link } from 'react-router-dom';

function Navbar() {
  const [show, setshow] = useState(false);
  const [tickets, setTickets] = useState([]);
  const [selectedTicket, setSelectedTicket] = useState(null);

  const handleClose = () => setshow(false);
  const handleshow = () => {
    setshow(true);
    fetchTickets();
  };
  const [show2, setshow2] = useState(false);
  const handleClose2 = () => setshow2(false);
  const handleshow2 = () => {
    setshow2(true);

  }
  const existingUser = JSON.parse(sessionStorage.getItem("existingUser"));

  const handleSignout = () => {
    sessionStorage.removeItem("existingUser");
    window.location.reload();
  };

  const fetchTickets = async () => {
    if (existingUser && existingUser.email) {
      try {
        const result = await getTicketbyidAPI(existingUser.email);
        if (result.status === 200) {
          setTickets(result.data.reverse());
        }
      } catch (err) {
        console.error("Error fetching tickets:", err);
      }
    }
  };

  return (
    <>
      <div id='navbar'>
        <div><a href="/" style={{textDecoration:'none'}}><h2>BOOKNOW</h2></a></div>
        <div id='nav-items'>
          <div>
            <Button>
              <a href="/"> Home</a>
            </Button>
          </div>
          {existingUser ? (
            <div className="user-info">
              <Button>
                <a href="/all-movies"> Movies</a>
              </Button>
              <Button onClick={handleshow}>
                <span>Profile</span>
              </Button>
            </div>
          ) : (
            <Auth />
          )}
        </div>
      </div>

      <Modal show={show} onHide={handleClose} keyboard={false} centered>
        <Modal.Header closeButton></Modal.Header>

        <Modal.Body>
          <div className="card" style={{ height: "300px", overflow: 'hidden', padding: '0px 0px 25px 0px', border: '2px solid black', transform: 'scale(1.03)' }}>
            <img height="200px" width="200px" style={{ margin: 'auto' }}
              src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
              alt="no image" />
            <h3 className='text-center'>{existingUser?.username}</h3>
            <p className='text-center'>{existingUser?.email}</p>
          </div>

          <div>
            <h3 className='mt-5'>Previous Orders</h3>
            <div className="ticket-list" style={{ maxHeight: '200px', overflowY: 'auto' }}>
              {tickets.length > 0 ? (
                tickets.map((ticket, index) => (
                  <div
                    key={index}
                    className="ticket border p-2 my-2 rounded bg-light"
                    onClick={() => {
                      setSelectedTicket(ticket);
                      handleshow2();
                    }}
                  >
                    <strong>{ticket.title}</strong> <br />
                    Seats: {ticket.seatid.join(', ')} <br />
                    Theatre: {ticket.theatre} <br />
                    Time: {ticket.time} <br />
                    ₹{ticket.totalprice}
                  </div>
                ))
              ) : (
                <p>No previous orders found.</p>
              )}
            </div>

          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>Close</Button>
          <Button variant="danger" onClick={handleSignout}>Signout</Button>
        </Modal.Footer>
      </Modal>





      {/* modal 2 */}
      <Modal
        show={show2}
        onHide={handleClose2}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
        
        </Modal.Header>

        <Modal.Body>
          <h3 style={{textAlign:'center'}}>{selectedTicket?.title || "Ticket Details"}</h3>
          {selectedTicket ? (
            <div className="ticket-details text-center">
              <div id='booked-ticket'>

                <img src={selectedTicket.image} alt={selectedTicket.title} style={{ maxWidth: '200px', borderRadius: '10px' }} />
                <p>Use this to redeem Ticket</p>
                <img src="https://docs.lightburnsoftware.com/legacy/img/QRCode/ExampleCode.png" alt="qr code unavailable" style={{ width: '130px', height: '130px', borderRadius: '10px' }} />
              </div>
              <p className="mt-3"><strong>Seats:</strong> {selectedTicket.seatid.join(', ')}</p>
              <p><strong>Theatre:</strong> {selectedTicket.theatre}</p>
              <p><strong>Time:</strong> {selectedTicket.time}</p>
              <p><strong>Total Price:</strong> ₹{selectedTicket.totalprice}</p>
            </div>
          ) : (
            <p>No ticket selected.</p>
          )}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>Close</Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default Navbar;
