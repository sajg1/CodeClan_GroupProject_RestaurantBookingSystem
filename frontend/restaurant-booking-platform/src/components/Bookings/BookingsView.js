import React from 'react';
import BookingsForm from './BookingsForm';
import BookingsList from './BookingsList';
import './Bookings.css';


const BookingsView = (props) => (
      <div className="main">
      <BookingsForm booking={null} restaurantTables={props.restaurantTables} onClickSubmit={props.onBookingSubmit} buttonText={"Add"}/>
      <BookingsList bookings={props.bookings} onEdit={props.onEdit} onDelete={props.onDelete} />
      </div>
)

export default BookingsView;
