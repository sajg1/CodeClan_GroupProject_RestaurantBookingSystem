import React, { Component } from "react";

const Booking = (props) => (
      <div className="booking">
        <li>{props.children}</li>
      </div>
    );


export default Booking;
