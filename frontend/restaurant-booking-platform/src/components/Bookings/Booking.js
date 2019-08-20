import React from "react";
import './Bookings.css';

const Booking = ({ booking }) => {
  const date = new Date(booking.dateTime);
  const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: ('numeric', '2-digit'), minute: ('numeric', '2-digit') };

  return (
    <tr className="booking">
      <td>{booking.customer.name}</td>
      <td>{booking.customer.phoneNumber}</td>
      <td>{date.toLocaleString('en-GB', options)}</td>
      <td>{booking.numberPeople}</td>
      <td>{booking.restaurantTable.num}</td>
    </tr>
  );
};

export default Booking;
