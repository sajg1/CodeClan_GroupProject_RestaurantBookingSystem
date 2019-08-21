import React, {Component} from 'react';
import BookingsView from '../components/Bookings/BookingsView';
import EditBookingView from '../components/Bookings/EditBookingView';
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
    this.handleCustomerDelete = this.handleCustomerDelete.bind(this);
    this.handleBookingEdit = this.handleBookingEdit.bind(this)
  }

  handleCustomerPost(customer) {
    const request = new Request();
    const result = request.post('/api/customers', customer);
    return result
  }

  handleBookingPost(booking) {
    const request = new Request();
    const result =request.post('/api/bookings', booking)
    return result
  }

  handleBookingDelete(id){
    const request = new Request();
    const url = '/api/bookings/'+id;
    request.delete(url);

    this.state.bookings.forEach((booking, index) => {
      if (booking.id === id) {
        this.state.bookings.splice(index, 1);
      }
    })
    this.setState({bookings: this.state.bookings})
    console.log(this.state.bookings);
  }

  handleCustomerDelete(id) {
    const request = new Request();
    const url = '/api/customers/' + id;
    request.delete(url);

    this.state.customers.forEach((customer, index) => {
      if (customer.id === id) {
        this.state.customers.splice(index,1);
      }
    })
    this.setState({customers: this.state.customers})
  }


  handleBookingSubmit({customer,newBooking,isNewCustomer}) {
    console.log(customer)
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

            const foundRestaurantTable=this.state.restaurantTables.find( table=> table.number.toString()===tableNumber)
            newBooking.restaurantTable = foundRestaurantTable

            console.log("foundRestaurantTable=",foundRestaurantTable)

            let now = new Date();
            newBooking.key = now.getTime();
            this.setState({bookings: [...this.state.bookings, newBooking]})

          })
        })
    }

  }

  fetchBookings() {
    const request = new Request();
    request.get('/api/bookings')
    .then(updatedBookings => this.setState({bookings:updatedBookings}))
  }

  handleBookingEdit({newBooking}) {
    console.log("handleBookingEdit call")

    const request = new Request();
    const updatedBookingId=newBooking.id;
    const tableNumber = newBooking.restaurantTable
    // const foundRestaurantTable=this.state.restaurantTables.find( table=> table.number.toString()===tableNumber)
    newBooking.restaurantTable = "http://localhost:8080/api/restaurantTables/" + tableNumber
    // console.log("foundRestaurantTable=",foundRestaurantTable)

    console.log("URL=",'/api/bookings/'+updatedBookingId)
    request.patch('/api/bookings/'+updatedBookingId,newBooking)
      .then( ()=>window.location='/')
  }

  findBookingById(id) {

    const booking = this.state.bookings.find((booking) => {
      return booking.id = parseInt(id)
    });
    // console.log("Bookings in findBookingById: ", this.state.bookings);
    return booking;
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
            <Route
              exact path="/bookings/edit/:id"
              render={(props) => {

                const id = props.match.params.id
                if(this.state.bookings.length === 0) {
                  return;
                }
                const booking = this.findBookingById(id);
                return <EditBookingView booking={booking} customers={this.state.customers} restaurantTables={this.state.restaurantTables}
                handleBookingEdit={this.handleBookingEdit} />
              }} />

              <Route path="/customers" render={() => <CustomersView customers={this.state.customers} onDelete={this.handleCustomerDelete}/>} />

            <Route component={ErrorPage} />
          </Switch>
        </React.Fragment>
      </Router>
    )
  }
}

export default Main;
