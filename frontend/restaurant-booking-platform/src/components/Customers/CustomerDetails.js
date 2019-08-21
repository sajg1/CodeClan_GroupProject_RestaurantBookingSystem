import React from "react";

const CustomerDetails = (props) => {

  function localHandleDelete() {
    props.onDelete(props.customer.id);
    props.resetCurrentCustomer();
  }

  function showCustomer() {
    if(props.customer != null) {
      return(
        <div>
          <h2>Customer Name: {props.customer.name}</h2>
          <p>Customer Phone Number: {props.customer.phoneNumber}</p>
          <p>Number of Visits: {props.customer.noVisits}</p>
          <p>Additional Information: {props.customer.additionalInfo}</p>
          <button onClick={localHandleDelete} value={props.customer.id}>DELETE</button>
        </div>
      )
    }

  }

  return (
    <div className="customerDetails">
      {showCustomer()}
    </div>
  );
}

export default CustomerDetails;
