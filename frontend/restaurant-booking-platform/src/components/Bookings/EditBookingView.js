import React from 'react';
import BookingsForm from './BookingsForm';

const EditBookingView = (props) => {

  return(
    <BookingsForm booking={props.booking} onClickSubmit={props.handleBookingEdit} buttonText={"Edit"}/>
  )

}

export default EditBookingView;
