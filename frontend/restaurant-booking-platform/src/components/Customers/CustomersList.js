import React from 'react';

const CustomersList = (props) => {

  const customerNodes = props.customers.map((customer, index) => {
    console.log("Customer " + index, customer);
    return <option value={index} key={index}>{customer.name}</option>
  })

  function handleChange(event) {
    console.log("Event: ", event.target.value);
    props.onCustomerSelected(event.target.value);
  }

  return(
    <div className="customers-list">
      <h2>Restaurant Customers</h2>
      <select id="customer-selector" defaultValue="default" onChange={handleChange}>
        <option disabled value="default">Choose a Customer...</option>
        {customerNodes}
      </select>
    </div>
  )
}

export default CustomersList;
