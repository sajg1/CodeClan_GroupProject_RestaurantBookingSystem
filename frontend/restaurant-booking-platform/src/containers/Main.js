import React, {Component} from 'react';
import BookingsForm from '../components/Bookings/BookingsForm';
import BookingsList from '../components/Bookings/BookingsList';
import CustomersList from '../components/Customers/CustomersList';
import Home from '../components/Home';
import ErrorPage from '../components/ErrorPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar.js';
import './Main.css';
import Request from '../helpers/request';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      bookings: []

    }
    this.handleBookingSubmit = this.handleBookingSubmit.bind(this);
  }

  handleBookingSubmit(submittedBooking) {
    const updatedBooking = [...this.state.bookings, submittedBooking];
    this.setState({bookings: updatedBooking});
  }

  componentDidMount() {
    const request = new Request()
    const bookingsPromise = request.get('/api/bookings');
    console.log(bookingsPromise);
    const promises = [bookingsPromise];
    Promise.all(promises).then((data) => {
      this.setState({
        bookings: data[0]._embedded.bookings
      })
    })
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
            <Route path="/customers" component={CustomersList} />
            <Route
              exact path="/bookings"
              render={(props) => {
                return <BookingsList bookings={this.state.bookings} />
              }}
            />
            <Route component={ErrorPage} />
          </Switch>
        </React.Fragment>
      </Router>

    )
  }
}

export default Main;
