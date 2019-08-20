import React from "react";

const CustomerDetails = (props) => {

  console.log("Customer Details");
  console.log("Props", props);

  function showCustomer() {
    console.log("Show Customer");
    if(props.customer != null) {
      return(
        <div>
          <h2>Customer Name: {props.customer.name}</h2>
          <p>Customer Phone Number: {props.customer.phoneNumber}</p>
          <p>Number of Visits: {props.customer.noVisits}</p>
          <p>Additional Information: {props.customer.additionalInfo}</p>
        </div>
      )
    }

    console.log("Customer is Null");
  }

  return (
    <div className="customerDetails">
      {showCustomer()}
    </div>
  );
}

export default CustomerDetails;
