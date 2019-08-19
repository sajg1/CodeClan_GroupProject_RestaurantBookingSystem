import React from 'react';
import Main from './Main';
import NavBar from '../components/NavBar/NavBar';
import BookingsList from '../components/Bookings/BookingsList';
import CustomersList from '../components/Customers/CustomersList';
import Home from '../components/Home';
import ErrorPage from '../components/ErrorPage';
import {shallow} from 'enzyme';

describe("Main", () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Main />));

  it('should render a <h1>', () => {
    expect(wrapper.find("h1").length).toEqual(1);
  });
});
