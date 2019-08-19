import React, {Component} from 'react';
import BookingsView from '../components/Bookings/BookingsView';
import CustomersView from '../components/Customers/CustomersList';
import ErrorPage from '../components/ErrorPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar.js';
import './Main.css';
import Request from '../helpers/request';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      bookings: [],
      customers: []
    }
    this.handleBookingSubmit = this.handleBookingSubmit.bind(this);
  }

  handleBookingSubmit(submittedBooking) {

    console.log("Submitted Booking TOP: ", submittedBooking);

    console.log("Bookings: ", this.state.bookings);

    const updatedBooking = [this.state.bookings, submittedBooking];
    this.setState({bookings: updatedBooking});
  }

  componentDidMount() {
    const request = new Request()
    const bookingsPromise = request.get('/api/bookings');
    const customersPromise =  request.get('/api/customers');

    console.log(bookingsPromise);
    console.log(customersPromise);

    const promises = [bookingsPromise, customersPromise];

    Promise.all(promises).then((data) => {
      this.setState({
        bookings: data[0]._embedded.bookings,
        customers: data[1]._embedded.customers
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
          </div>
          <Switch>
            <Route
              exact path="/"
              render={() => <BookingsView onBookingSubmit={this.handleBookingSubmit} bookings={this.state.bookings} />}
            />

            <Route path="/customers" render={() => <CustomersView customers={this.state.customers}/>} />

            <Route component={ErrorPage} />
          </Switch>
        </React.Fragment>
      </Router>
    )
  }
}

export default Main;
