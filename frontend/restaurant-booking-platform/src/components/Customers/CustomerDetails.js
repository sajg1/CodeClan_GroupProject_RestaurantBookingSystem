import React, { Component } from "react";

class CustomerDetails extends Component {
  render() {
    return (
      <div className="customerDetails">
        <h2>{props.name}</h2>
        <p>{props.phoneNumber}</p>
        <p>{props.noVisits}</p>
        <p>{props.additionalInfo}</p>
      </div>
    );
  }
}

export default CustomerDetails;
