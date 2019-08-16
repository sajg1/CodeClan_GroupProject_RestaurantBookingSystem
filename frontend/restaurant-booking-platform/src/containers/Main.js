import BookingsForm from '../components/BookingsForm';
import BookingsList from '../components/BookingsList';
import GuestsList from '../components/GuestsList';
import Home from '../components/Home';
import ErrorPage from '../components/ErrorPage';
import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from '../components/NavBar';

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Router>
        <React.Fragment>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/bookings" component={BookingsList} />
            <Route path="/guests" component={GuestsList} />
            <Route component={ErrorPage} />
          </Switch>
        </React.Fragment>
      </Router>

    )
  }
}

export default Main;
