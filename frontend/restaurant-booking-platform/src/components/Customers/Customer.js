import React from 'react';
import CustomerDetails from './CustomerDetails';

const Customer = (props) => (

  <div className="customer">
    <li><a>{props.children}</a></li>
  </div>

)

export default Customer;
