import React, {Fragment} from "react";
import './Bookings.css';


const Booking = ({ booking }) => {
  const date = new Date(booking.dateTime);
  const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: ('numeric', '2-digit'), minute: ('numeric', '2-digit') };

  return (
    <Fragment>
      <td>{booking.customer.name}</td>
      <td>{booking.customer.phoneNumber}</td>
      <td>{date.toLocaleString('en-GB', options)}</td>
      <td>{booking.numberPeople}</td>
      <td>{booking.restaurantTable.number}</td>
      <td>{booking.additionalInfo}</td>
    </Fragment>
  );
};

export default Booking;
