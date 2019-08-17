import React, { Component } from 'react';
import Booking from './Booking';

const BookingsList = (props) => {
  const bookingNodes = props.bookings.map((booking, index) => {
    return <Booking value={index} key={booking.id}>{booking.guestName}</Booking>
  });

    return (
      <div className="booking-list">
        <ul>
          {bookingNodes}
        </ul>
      </div>
    )
}

export default BookingsList;
