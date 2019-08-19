import React, {Component} from 'react';
import BookingsForm from './BookingsForm';
import BookingsList from './BookingsList';
import BookingsDetails from './BookingDetails';

class BookingsView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      bookings: []

    }
    this.handleBookingSubmit = this.handleBookingSubmit.bind(this);
  }

  handleBookingSubmit(submittedBooking) {
    const updatedBooking = [this.state.bookings, submittedBooking];
    this.setState({bookings: updatedBooking});
  }

  render() {
    return(
      <div>
      <h2>New booking</h2>
      <BookingsForm onClickSubmit={this.handleBookingSubmit} />
      <BookingsList bookings={this.state.bookings} />
      </div>
    )
  }
}

export default BookingsView;
