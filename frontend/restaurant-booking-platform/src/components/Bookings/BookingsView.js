import React from 'react';
import BookingsForm from './BookingsForm';
import BookingsList from './BookingsList';
import './Bookings.css';


const BookingsView = (props) => (
      <div className="main">
      <BookingsForm booking={null} onClickSubmit={props.onBookingSubmit} buttonText={"Add"}/>
      <BookingsList bookings={props.bookings} onDelete={props.onDelete} />
      </div>
)

export default BookingsView;
