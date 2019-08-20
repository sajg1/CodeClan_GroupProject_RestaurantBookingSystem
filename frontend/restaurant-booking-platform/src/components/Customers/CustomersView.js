import React, { Component } from 'react';
import CustomersList from './CustomersList';
import CustomerDetails from './CustomerDetails';
import './Customer.css';

class CustomersView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: [],
      currentCustomer: null
    };
    this.handleCustomerSelected = this.handleCustomerSelected.bind(this);
  }

  handleCustomerSelected(index) {
    const selectedCustomer = this.props.customers[index];
    this.setState( {currentCustomer: selectedCustomer});
    console.log("Current Customer: ", this.state.currentCustomer)

  }

  render() {

    return(
      <div className="customer-view">
        <CustomersList
          customers={this.props.customers}
          onCustomerSelected={this.handleCustomerSelected} />
        <CustomerDetails customer={this.state.currentCustomer} onDelete={this.props.onDelete}/>
        </div>
    )
  }
}

export default CustomersView;
