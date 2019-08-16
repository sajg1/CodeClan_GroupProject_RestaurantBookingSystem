<<<<<<< HEAD
import React from 'react';
import BookingForm from '../components/BookingForm';
import BookingList from '../components/BookingList';


=======
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
>>>>>>> 8cd0cde882694233beef93ad2028d8292bb30fa4

export default Main;
