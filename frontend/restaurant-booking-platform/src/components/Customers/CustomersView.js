import React, { Component } from 'react';
import CustomersList from './CustomersList';
import CustomerDetails from './CustomerDetails';
import './Customer.css';

class CustomersView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCustomer: null
    };
    this.handleCustomerSelected = this.handleCustomerSelected.bind(this);
    this.resetCurrentCustomer = this.resetCurrentCustomer.bind(this);
  }

  handleCustomerSelected(index) {
    const selectedCustomer = this.props.customers[index];
    this.setState( {currentCustomer: selectedCustomer});
  }

  resetCurrentCustomer() {
    this.setState({ currentCustomer: this.props.customers[0] })
  }

  render() {
    return(
      <div className="customer-view">
        <CustomersList
          customers={this.props.customers}
          onCustomerSelected={this.handleCustomerSelected} />
        <CustomerDetails customer={this.state.currentCustomer} onDelete={this.props.onDelete} resetCurrentCustomer={this.resetCurrentCustomer}/>
        </div>
    )
  }
}

export default CustomersView;
