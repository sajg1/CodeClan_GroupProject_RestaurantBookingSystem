import React from "react";
import './Bookings.css';

const Booking = (props) => (
    <div className="booking">
      <li>{props.children}</li>
    </div>
  );

export default Booking;
