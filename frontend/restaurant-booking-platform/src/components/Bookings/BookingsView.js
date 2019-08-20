import React, {Component} from 'react';
import BookingsForm from './BookingsForm';
import BookingsList from './BookingsList';
import BookingsDetails from './BookingDetails';
import './Bookings.css';

class BookingsView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      bookings: []
    }
    this.handleBookingSubmit = this.handleBookingSubmit.bind(this);
  }

  handleBookingSubmit(submittedBooking) {
    console.log("First Handle Bookings");
    this.props.onBookingSubmit(submittedBooking);
  }

  render() {
    return(
      <div className="main">
      <h2 style={{color: 'red'}}>New booking</h2>
      <BookingsForm onClickSubmit={this.handleBookingSubmit} />
      <BookingsList bookings={this.props.bookings} />
      </div>
    )
  }
}

export default BookingsView;
