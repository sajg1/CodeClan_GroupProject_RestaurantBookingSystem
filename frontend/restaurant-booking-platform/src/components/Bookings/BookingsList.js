import React, {Component} from 'react';
import Booking from './Booking';

class BookingsList extends Component {
  render() {
    const bookingNodes = this.props.bookings.map(booking => {
      return (
        <Booking value={booking.value} key={booking.id}>{booking.name}</Booking>
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
