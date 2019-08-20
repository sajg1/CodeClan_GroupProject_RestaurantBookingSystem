import React, {Component} from 'react';
import BookingsView from '../components/Bookings/BookingsView';
import CustomersView from '../components/Customers/CustomersView';
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
      customers: [],
      restaurantTables: []
    }
    this.handleBookingSubmit = this.handleBookingSubmit.bind(this);
    this.handleBookingPost = this.handleBookingPost.bind(this);
    this.handleBookingDelete = this.handleBookingDelete.bind(this);

  }

  handleCustomerPost(customer) {
    const request = new Request();
    console.log("new customer=",customer)
    const result = request.post('/api/customers', customer);
    console.log("customer result=",result)
    return result
  }

  handleBookingPost(booking) {
    const request = new Request();
    console.log("new booking=",booking)
    const result =request.post('/api/bookings', booking)
    console.log("booking result=",result)
    return result
  }

  handleBookingDelete(id){
    const request = new Request();
    const url = '/api/bookings/'+id;
    console.log("This is the id: ", id)
    request.delete(url);

    const updatedBookings = this.state.bookings.map((booking, index) => {
      if (booking.id == id) {
        this.state.bookings.splice(index, 1);
      }
    })
    this.setState({bookings: this.state.bookings})
    console.log(this.state.bookings);
  }

  handleCustomerDelete(id) {
    const request = new Request();
    const url = '/api/customers/' + id;
    console.log("This is the id for customer: ", id)
    request.delete(url);

    const updateCustomers = this.state.customers.map((customer, index) => {
      if (customer.id == id) {
        this.state.customers.splice(index,1);
      }
    })
    this.setState({customers: this.state.customers})
    console.log(this.state.customers);
  }


  handleBookingSubmit(customer,newBooking,isNewCustomer) {

    if (isNewCustomer){
      this.handleCustomerPost(customer)
      .then( newCustomer => {
          const newCustomerId = newCustomer["id"]
          newBooking.customer="http://localhost:8080/api/customers/"+newCustomerId
          console.log("newBooking after adding customerId",newBooking)

          const tableNumber = newBooking.restaurantTable
          newBooking.restaurantTable = "http://localhost:8080/api/restaurantTables/" + newBooking.restaurantTable


          this.handleBookingPost(newBooking)
          .then(() => {
            this.fetchBookings()
            newBooking.customer = newCustomer
            newBooking.restaurantTable = this.state.restaurantTables[tableNumber]
            let now = new Date();
            newBooking.key = now.getTime();
            this.setState({bookings: [...this.state.bookings, newBooking]})

          })
        })
    }

  }

  fetchBookings() {
    const request = new Request();
    const bookingsPromise = request.get('/api/bookings')
    .then(updatedBookings => this.state.bookings = updatedBookings)
  }

  componentDidMount() {
    const request = new Request();
    const bookingsPromise = request.get('/api/bookings');
    const customersPromise =  request.get('/api/customers');
    const restaurantTablesPromise = request.get('/api/restaurantTables')

    const promises = [bookingsPromise, customersPromise, restaurantTablesPromise];

    Promise.all(promises).then((data) => {
      this.setState({
        bookings: data[0]._embedded.bookings,
        customers: data[1]._embedded.customers,
        restaurantTables: data[2]._embedded.restaurantTables
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
              render={() => <BookingsView onBookingSubmit={this.handleBookingSubmit} bookings={this.state.bookings} onDelete={this.handleBookingDelete} />}
            />
          <Route path="/customers" render={() => <CustomersView customers={this.state.customers} onDelete={this.handleCustomerDelete}/>} />

            <Route component={ErrorPage} />
          </Switch>
        </React.Fragment>
      </Router>
    )
  }
}

export default Main;
