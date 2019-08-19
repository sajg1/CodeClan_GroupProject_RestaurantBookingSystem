import React, { Component } from "react";

class CustomerDetails extends Component {
  render() {
    return (
      <div className="customerDetails">
        <h2>{this.props.name}</h2>
        <p>{this.props.phoneNumber}</p>
        <p>{this.props.noVisits}</p>
        <p>{this.props.additionalInfo}</p>
      </div>
    );
  }
}

export default CustomerDetails;
