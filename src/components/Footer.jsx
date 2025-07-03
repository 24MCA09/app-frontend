import React from 'react';
import './footer.css';

function Footer() {
  return (
    <>
      <div className='parent'>
        <div className="site-footer bg-dark text-white">
          <div className="container">
            <div className="row">

              {/* About Section */}
              <div className="col-sm-12 col-md-6">
                <h6>About</h6>
                <p className="text-justify">
                  Grab My Tickets is your one-stop platform for booking the latest movies across top theatres in your city.
                  With a smooth user interface, secure payment system, and real-time seat selection, we make movie-going a hassle-free experience.
                  Join thousands of users enjoying fast and reliable movie ticket bookings.
                </p>
              </div>

              {/* Quick Links */}
              <div className="col-xs-6 col-md-3">
                <h6>Quick Links</h6>
                <ul className="footer-links">
                  <li><a href="/">Home</a></li>
                  <li><a href="/about">About Us</a></li>
                  <li><a href="/movies">Browse Movies</a></li>
                  <li><a href="/terms">Terms & Conditions</a></li>
                  <li><a href="/privacy">Privacy Policy</a></li>
                </ul>
              </div>

              {/* Contact Section */}
              <div className="col-xs-6 col-md-3">
                <h6>Contact Us</h6>
                <ul className="footer-links">
                  <li>Grab My Tickets HQ</li>
                  <li>2nd Main Road, RMV Stage II - 1st Block</li>
                  <li>Bengaluru, Karnataka 560095</li>
                  <li>India</li>
                  <li>Email: support@grabmytickets.com</li>
                  <li>Phone: +91 98765 43210</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
