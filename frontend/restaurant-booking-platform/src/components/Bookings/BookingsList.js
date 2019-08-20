import React, {Component} from 'react';
import Booking from './Booking';

class BookingsList extends Component {
  render() {

    const bookingNodes = this.props.bookings.map(booking => {

      let date = new Date(booking.dateTime);

      var options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: ('numeric', '2-digit'), minute: ('numeric', '2-digit') };
   
      return (
        <Booking value={booking.value} key={booking.id}>
        {date.toLocaleString('en-GB', options)},
        {booking.customer.name},
        {booking.numberPeople},
        {booking.restaurantTable.num}

        </Booking>
      );

    });

    return (
      <div className="booking-list">

        <h2>Restaurant Bookings</h2>

            <div>
              {bookingNodes}
            </div>

      </div>
    )
}
}

export default BookingsList;
