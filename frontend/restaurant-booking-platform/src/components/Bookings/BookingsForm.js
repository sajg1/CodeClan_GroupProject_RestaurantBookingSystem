import React, { Component } from 'react';
import './Bookings.css';

class BookingsForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      customerName: '',
      phoneNumber: '',
      additionalCustomerInfo: '',
      dateTime: '',
      numberPeople: '',
      tableNumber: '',
      additionalInfo: ''
    };

    this.handleCustomerChange = this.handleCustomerChange.bind(this);
    this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this);
    this.handleDateTimeChange = this.handleDateTimeChange.bind(this);
    this.handlenumberPeopleChange = this.handlenumberPeopleChange.bind(this);
    this.handleTableNumberChange = this.handleTableNumberChange.bind(this);
    this.handleAdditionalInfoChange = this.handleAdditionalInfoChange.bind(this);
    this.handleAdditionalCustomerInfoChange = this.handleAdditionalCustomerInfoChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event){
    event.preventDefault();
    console.log("this=",this)
    console.log("this.state=",this.state)
    const customerName = this.state.customerName.trim();
    const phoneNumber = this.state.phoneNumber.trim();
    const additionalCustomerInfo = this.state.additionalCustomerInfo.trim();
    const additionalInfo = this.state.additionalInfo.trim();
    const dateTime = this.state.dateTime.trim();
    const numberPeople = this.state.numberPeople.trim();
    const tableNumber = this.state.tableNumber.trim();

    if (!customerName || !phoneNumber || !numberPeople || !tableNumber){
      return
    }
    const newCustomer = {
     name: customerName,
     phoneNumber: phoneNumber,
     noVisits: 0,
     additionalInfo: additionalCustomerInfo
    }

    const newBooking = {
        customer: "http://localhost:8080/api/customer/" + 1,
        dateTime: dateTime,
        numberPeople: numberPeople,
        restaurantTable: "http://localhost:8080/api/restaurantTables/" + tableNumber,
        additionalInfo: additionalInfo
      }

      {/*add logic for is new or not*/}
    this.props.onClickSubmit(newCustomer, newBooking,true);
  }

  handleCustomerChange(event) {this.setState({customerName: event.target.value})}
  handlePhoneNumberChange(event) {this.setState({phoneNumber: event.target.value})}
  handleDateTimeChange(event) {this.setState({dateTime: event.target.value})}
  handlenumberPeopleChange(event) {this.setState({numberPeople: event.target.value})}
  handleTableNumberChange(event) {this.setState({tableNumber: event.target.value})}
  handleAdditionalCustomerInfoChange(event) {this.setState({additionalCustomerInfo: event.target.value})}
  handleAdditionalInfoChange(event) {this.setState({additionalInfo: event.target.value})}

  render(){
    return(
      <form className="bookingForm" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Customer name" value={this.state.customerName} onChange={this.handleCustomerChange}/>

        <input type="text" placeholder="Phone number" value={this.state.phoneNumber} onChange={this.handlePhoneNumberChange}/>

        <textarea name="comment" placeholder="customer info" rows="1" cols="30" value={this.state.additionalCustomerInfo} onChange={this.handleAdditionalCustomerInfoChange}></textarea>

        <input type="datetime-local" value={this.state.dateTime} onChange={this.handleDateTimeChange}/>


        <label>Party Size</label>
        <input type="number" min="1" max="10"  value={this.state.numberPeople} onChange={this.handlenumberPeopleChange}/>

        <label>Table Number</label>
        <select name="table" value={this.state.tableNumber} onChange={this.handleTableNumberChange}>
          <option value="" disabled>table</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
        </select>
        <textarea name="comment" placeholder="additional notes" rows="1" cols="30" value={this.additionalInfo} onChange={this.handleAdditionalInfoChange}></textarea>
        <input type="submit" value="Add"/>
      </form>
    )
  }
}

export default BookingsForm;
