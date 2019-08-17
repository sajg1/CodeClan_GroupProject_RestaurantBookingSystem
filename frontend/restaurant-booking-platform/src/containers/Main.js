import React, {Component} from 'react';
import BookingsForm from '../components/Bookings/BookingsForm';
import BookingsList from '../components/Bookings/BookingsList';
import GuestsList from '../components/Guests/GuestsList';
import Home from '../components/Home';
import ErrorPage from '../components/ErrorPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar.js';
import './Main.css';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [{
        id: 1,
        guestName: 'Bob',
        phoneNumber: '07428992455',
        // date: this.props.date,
        // time: this.props.time,
        partySize: '4',
        tableNumber: '12'
        },
        { id: 2,
          guestName: 'Dan',
          phoneNumber: '0724535645',
          // date: this.props.date,
          // time: this.props.time,
          partySize: '2',
          tableNumber: '8'
        }
      ]
    };
    this.handleBookingSubmit = this.handleBookingSubmit.bind(this);
  }

  handleBookingSubmit(submittedBooking) {
    submittedBooking.id = Date.now();
    const updatedBooking = [...this.state.data, submittedBooking];
    this.setState({data: updatedBooking});
  }

  render() {
    return(
      <Router>
        <React.Fragment>
          <NavBar />
          <div className="main">
            <h1>Restaurant Booking System</h1>
            <h2>Bookings</h2>
            <BookingsForm onClickSubmit={this.handleBookingSubmit} />
          </div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/bookings" render={(props) => { return <BookingsList data={this.state.data} />}} />
            <Route path="/guests" component={GuestsList} />
            <Route component={ErrorPage} />
          </Switch>
        </React.Fragment>
      </Router>

    )
  }
}

export default Main;
