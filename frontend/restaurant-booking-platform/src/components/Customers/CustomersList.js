import React from 'react';
import "./Customer.css";

const CustomersList = (props) => {

  const customerNodes = props.customers.map((customer, index) => {
    return <option value={index} key={index}>{customer.name}</option>
  })

  function handleChange(event) {
    props.onCustomerSelected(event.target.value);
  }

  return(
    <div className="customerList">
      <h2>Restaurant Customers</h2>
      <select id="customer-selector" defaultValue="default" onChange={handleChange}>
        <option disabled value="default">Choose a Customer...</option>
        {customerNodes}
      </select>
    </div>
  )
}

export default CustomersList;
