import React from "react";
import './Customer.css';

const CustomerDetails = (props) => {

  function localHandleDelete() {
    props.onDelete(props.customer.id);
    props.resetCurrentCustomer();
  }

  function showCustomer() {
    if(props.customer != null) {
      console.log("Customer id: ", props.customer.id)
      return(
        <div>
          <table className="customer">
            <tbody>
              <tr>
                <th>Customer Name: </th>
                <td>{props.customer.name}</td>
              </tr>
              <tr>
                <th>Customer Phone Number:</th> <td>{props.customer.phoneNumber}</td>
              </tr>
              <tr>
                <th>Number of Visits: </th>
                <td>{props.customer.noVisits}</td>
              </tr>
              <tr>
                <th>Additional Information: </th> <td>{props.customer.additionalInfo}</td>
              </tr>
              <tr>
                <th></th>
                <td><button onClick={localHandleDelete} value={props.customer.id}>DELETE</button></td>
              </tr>
            </tbody>
          </table>
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
