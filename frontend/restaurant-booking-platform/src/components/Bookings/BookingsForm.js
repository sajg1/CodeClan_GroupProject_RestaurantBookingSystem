import React, { Component } from 'react';
import './Bookings.css';

class BookingsForm extends Component {

  constructor(props){
    super(props);

    if(props.booking !== null) {
      console.log("Booking Prop: ", props.booking);
      this.state = {
        customerName: props.booking.customer.name,
        phoneNumber: props.booking.customer.phoneNumber,
        additionalCustomerInfo: props.booking.customer.additionalInfo,
        dateTime: props.booking.dateTime,
        numberPeople: props.booking.numberPeople,
        tableNumber: props.booking.restaurantTable.number,
        additionalInfo: props.booking.additionalInfo
      }
    } else {
      this.state = {
        customerName: 'Name',
        phoneNumber: '44',
        additionalCustomerInfo: 'Gluten Tolerant',
        dateTime: '',
        numberPeople: '2',
        tableNumber: '1',
        additionalInfo: 'Birthday Party'
      }
    }

    this.handleCustomerChange = this.handleCustomerChange.bind(this);
    this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this);
    this.handleDateTimeChange = this.handleDateTimeChange.bind(this);
    this.handlenumberPeopleChange = this.handlenumberPeopleChange.bind(this);
    this.handleTableNumberChange = this.handleTableNumberChange.bind(this);
    this.handleAdditionalInfoChange = this.handleAdditionalInfoChange.bind(this);
    this.handleAdditionalCustomerInfoChange = this.handleAdditionalCustomerInfoChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)

    console.log("Props: ", this.props);


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
        customer: 1,
        dateTime: dateTime,
        numberPeople: numberPeople,
        restaurantTable: tableNumber,
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
    console.log("Props in Render: ", this.props);
    return(
      <form className="bookingForm" onSubmit={this.handleSubmit}>
      <h2>New booking</h2>
      <table className="booking">
        <tbody>
          <tr>
            <th>Customer name: </th>
            <td><input type="text" placeholder="Customer name" value={this.state.customerName} onChange={this.handleCustomerChange}/></td>
          </tr>
          <tr>
            <th>Phone number: </th>
            <td><input type="text" placeholder="Phone number" value={this.state.phoneNumber} onChange={this.handlePhoneNumberChange}/></td>
          </tr>
          <tr>
            <th>Comment: </th>
            <td><textarea name="comment" placeholder="customer info" value={this.state.additionalCustomerInfo} onChange={this.handleAdditionalCustomerInfoChange}></textarea></td>
          </tr>
          <tr>
            <th>Date and time: </th>
            <td><input type="datetime-local" value={this.state.dateTime} onChange={this.handleDateTimeChange} max="2021-12-31T23:59" required /></td>
          </tr>
          <tr>
            <th><label>Party size:</label></th>
            <td><input type="number" min="1" max="10"  value={this.state.numberPeople} onChange={this.handlenumberPeopleChange}/></td>
          </tr>
          <tr>
            <th><label>Table number:</label></th>
            <td><select name="table" value={this.state.tableNumber} onChange={this.handleTableNumberChange}>
              <option value="" disabled>table</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </select></td>
          </tr>
          <tr>
            <th>Additional notes: </th>
            <td><textarea name="comment" placeholder="additional notes" value={this.state.additionalInfo} onChange={this.handleAdditionalInfoChange}></textarea></td>
          </tr>
            <th></th>
            <td><input type="submit" className="button" value={this.props.buttonText}/></td>
          </tbody>
        </table>
      </form>
    )
  }
}

export default BookingsForm;
