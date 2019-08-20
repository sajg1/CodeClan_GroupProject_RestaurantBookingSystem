import React from 'react';
import CustomerDetails from './CustomerDetails';

const Customer = (props) => (

  <div className="customer">
    <li>{props.children}</li>
  </div>

)

export default Customer;
