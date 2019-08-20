import React, {Component} from 'react';
import BookingsForm from './BookingsForm';
import BookingsList from './BookingsList';
import BookingsDetails from './BookingDetails';
import Request from '../../helpers/request';

class BookingsView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      bookings: []
    }
    this.handleBookingSubmit = this.handleBookingSubmit.bind(this);
    this.handleBookingPost = this.handleBookingPost.bind(this);
  }

  handleBookingSubmit(submittedBooking) {
    console.log("First Handle Bookings");
    this.props.onBookingSubmit(submittedBooking);
  }

  handleBookingPost(booking) {
    const request = new Request();
    console.log("promise?",request.post('/api/bookings', booking).then(() => {
      window.location = '/bookings'
    }))
  }

  render() {
    return(
      <div>
      <h2>New booking</h2>
      <BookingsForm onClickSubmit={this.handleBookingSubmit} handleBookingPost={this.handleBookingPost}/>
      <BookingsList bookings={this.props.bookings} />
      </div>
    )
  }
}

export default BookingsView;
