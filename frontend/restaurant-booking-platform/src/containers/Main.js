import BookingForm from '../components/BookingsForm';
import BookingsList from '../components/BookingsList';
import Home from '../components/Home';
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
          </Switch>
        </React.Fragment>
      </Router>

    )
  }
}

export default Main;
