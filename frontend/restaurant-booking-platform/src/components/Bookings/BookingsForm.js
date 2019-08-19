import React, { Component } from 'react';

class BookingsForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      customerName: '',
      phoneNumber: '',
      // date: this.props.date,
      // time: this.props.time,
      partySize: '',

    };

    this.handleCustomerChange = this.handleCustomerChange.bind(this);
    this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this);
    this.handlePartySizeChange = this.handlePartySizeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  handleSubmit(event){
    event.preventDefault();
    const customerName = this.state.customerName.trim();
    const phoneNumber = this.state.phoneNumber.trim();
    // const date = this.state.date.trim();
    // const time = this.state.time.trim();
    const partySize = this.state.partySize.trim();


    if (!customerName || !phoneNumber || !partySize){
      return
    }
    this.props.onClickSubmit({
      customerName: customerName,
      phoneNumber: phoneNumber,
      // date: date,
      // time: time,
      partySize: partySize,

    });
  }

  handleCustomerChange(event) {this.setState({customerName: event.target.value})}
  handlePhoneNumberChange(event) {this.setState({phoneNumber: event.target.value})}
  handlePartySizeChange(event) {this.setState({
    partySize: event.target.value})}

  render(){
    return(
      <form className="booking-form" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Customer name" value={this.state.customerName} onChange={this.handleCustomerChange}/>
        <input type="text" placeholder="Phone number" value={this.state.phoneNumber} onChange={this.handlePhoneNumberChange}/>
        <input type="number" min="1" max ="10" placeholder="Party size" value={this.state.partySize} onChange={this.handlePartySizeChange}/>
        <input type="submit" value="Enter" />
      </form>
    )
  }
}

export default BookingsForm;
