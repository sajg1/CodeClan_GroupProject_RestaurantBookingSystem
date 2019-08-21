import React from 'react';
import BookingsForm from './BookingsForm';
import './Bookings.css';

const EditBookingView = (props) => {

  return(
    <div className="main">
    <BookingsForm booking={props.booking}  restaurantTables={props.restaurantTables}  onClickSubmit={props.handleBookingEdit} buttonText={"Save Changes"}/>
    </div>
  )

}

export default EditBookingView;
