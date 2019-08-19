import React from 'react';
import Customer from './Customer';

const CustomersList = (props) => {

  const customerNodes = props.customers.map((customer, index) => {
    return <Customer value={index} key={customer.id}>{customer.name} </Customer>
  })

  return(
    <div className="customers-list">
      <h2>Restaurant Customers</h2>
      {customerNodes}
    </div>
  )
}

export default CustomersList;
