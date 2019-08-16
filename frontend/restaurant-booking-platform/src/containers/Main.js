import BookingForm from '../components/BookingsForm';
import BookingList from '../components/BookingsList';
import React, {Component} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
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
        </React.Fragment>
      </Router>

    )
  }
}

export default Main;
