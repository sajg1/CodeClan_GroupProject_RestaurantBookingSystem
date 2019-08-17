import React from 'react';

const BookingsList = (props) => {

  const bookingItems = props.bookings.map((booking, index) => {
    return <li key="index">{booking.numberPeople}, {booking.dateTime}</li>

  });

  return(
    <div className="booking-list">
      <h2>Restaurant Bookings</h2>
      <p>List of Bookings</p>
      {bookingItems}
    </div>
  )

}

export default BookingsList;
