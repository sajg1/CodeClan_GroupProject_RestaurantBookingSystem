import React, {Component} from 'react';
import Booking from './Booking';

class BookingsList extends Component {
  render() {

    const bookingNodes = this.props.bookings.map((booking, index) => {
      return (
        <Booking key={booking.index}>
        When: {booking.dateTime},
        Who: {booking.customer.name},
        How Many: {booking.numberPeople},
        What Table: {booking.restaurantTable.num}
        </Booking>
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
