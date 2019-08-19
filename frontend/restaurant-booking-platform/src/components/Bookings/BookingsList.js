import React, {Component} from 'react';
import Booking from './Booking';

class BookingsList extends Component {
  render() {
    const bookingNodes = this.props.bookings.map(booking => {
      return (
<<<<<<< HEAD
        <Booking value={booking.value} key={booking.id}>
        When: {booking.dateTime},
        Who: {booking.customer.name},
        How Many: {booking.numberPeople},
        What Table: {booking.restaurantTable.num}
        </Booking>
=======
        <Booking value={booking.value} key={booking.id}>{booking.customer.name}</Booking>
>>>>>>> 7ff8f2155d3694e6d14281212f984e98b65480be
      );
    });

    return (
      <div className="booking-list">
        <h2>Restaurant Bookings</h2>
          {bookingNodes}
      </div>
    )
}
}

export default BookingsList;
