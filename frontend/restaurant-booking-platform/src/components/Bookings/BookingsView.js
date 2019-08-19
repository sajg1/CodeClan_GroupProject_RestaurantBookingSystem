import React, {Component} from 'react';
import BookingsForm from './BookingsForm';
import BookingsList from './BookingsList';
import BookingsDetails from './BookingDetails';

class BookingsView extends Component {

  constructor(props) {
    super(props);

    console.log("All Props: ", props);
    this.state = {
      bookings: []
    }
    this.handleBookingSubmit = this.handleBookingSubmit.bind(this);
  }

  handleBookingSubmit(submittedBooking) {
    this.props.onBookingSubmit(submittedBooking);
  }

  render() {
    return(
      <div>
      <h2>New booking</h2>
      <BookingsForm onClickSubmit={this.handleBookingSubmit} />
      <BookingsList bookings={this.props.bookings} />
      </div>
    )
  }
}

export default BookingsView;
