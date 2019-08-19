import React, { Component } from 'react';
import CustomersList from './CustomersList';
import CustomerDetails from './CustomerDetails';

class CustomersView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: [],
      selectedCustomer: null
    };
    this.handleCustomerSelected = this.handleCustomerSelected.bind(this);
  }

  handleCustomerSelected(index) {
    const selectedCustomer = this.state.customers[index];
    this.setState( {selectedCustomer: selectedCustomer})
  }

  render(){
    return(
      <div>
        <CustomersList
          customers={this.props.customers}
          onCustomerSelected={this.handleCustomerSelected} />
        <CustomerDetails customer={this.state.selectedCustomer}/>
        </div>
    )
  }
}

export default CustomersView;
