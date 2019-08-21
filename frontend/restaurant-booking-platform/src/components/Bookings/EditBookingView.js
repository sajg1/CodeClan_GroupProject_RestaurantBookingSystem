import React from 'react';
import BookingsForm from './BookingsForm';
import './Bookings.css';

const EditBookingView = (props) => {

  return(
    <div className="main">
    <BookingsForm booking={props.booking} onClickSubmit={props.handleBookingEdit} buttonText={"Edit"}/>
    </div>
  )

}

export default EditBookingView;
