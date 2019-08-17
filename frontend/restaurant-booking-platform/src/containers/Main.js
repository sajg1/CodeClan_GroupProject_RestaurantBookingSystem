import React, {Component} from 'react';
import BookingsForm from '../components/Bookings/BookingsForm';
import BookingsList from '../components/Bookings/BookingsList';
import GuestsList from '../components/Guests/GuestsList';
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

    this.handleBookingSubmit = this.handleBookingSubmit.bind(this);
  }

  handleBookingSubmit(submittedBooking) {
    submittedBooking.id = Date.now();
    const updatedBooking = [...this.state.data, submittedBooking];
    this.setState({data: updatedBooking});

      bookings: []
    }
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
<<<<<<< HEAD
            <Route exact path="/bookings" render={(props) => { return <BookingsList data={this.state.data} />}} />
=======
>>>>>>> develop
            <Route path="/guests" component={GuestsList} />
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
