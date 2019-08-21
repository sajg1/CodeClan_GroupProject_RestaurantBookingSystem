import React, {Component} from 'react';
import BookingsForm from './BookingsForm';
import BookingsList from './BookingsList';
import BookingsDetails from './BookingDetails';
import Request from '../../helpers/request';
import './Bookings.css';


class BookingsView extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    return(
      <div className="main">
      <BookingsForm onClickSubmit={this.props.onBookingSubmit}/>
      <BookingsList bookings={this.props.bookings} onDelete={this.props.onDelete} />
      </div>
    )
  }
}

export default BookingsView;
