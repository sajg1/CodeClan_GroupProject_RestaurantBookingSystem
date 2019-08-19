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
      tableNumber: '',

    };

    this.handleCustomerChange = this.handleCustomerChange.bind(this);
    this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this);
    this.handlePartySizeChange = this.handlePartySizeChange.bind(this);
    this.handleTableNumberChange = this.handleTableNumberChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  handleSubmit(event){
    event.preventDefault();
    const customerName = this.state.customerName.trim();
    const phoneNumber = this.state.phoneNumber.trim();
    // const date = this.state.date.trim();
    // const time = this.state.time.trim();
    const partySize = this.state.partySize.trim();
    const tableNumber = this.state.tableNumber.trim();


    if (!customerName || !phoneNumber || !partySize || !tableNumber){
      return
    }
    this.props.onClickSubmit({
      customerName: customerName,
      phoneNumber: phoneNumber,
      // date: date,
      // time: time,
      partySize: partySize,
      tableNumber: tableNumber,

    });
  }

  handleCustomerChange(event) {this.setState({customerName: event.target.value})}
  handlePhoneNumberChange(event) {this.setState({phoneNumber: event.target.value})}
  handlePartySizeChange(event) {this.setState({partySize: event.target.value})}
  handleTableNumberChange(event) {this.setState({tableNumber: event.target.value})}

  render(){
    return(
      <form className="booking-form" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Customer name" value={this.state.customerName} onChange={this.handleCustomerChange}/>
        <input type="text" placeholder="Phone number" value={this.state.phoneNumber} onChange={this.handlePhoneNumberChange}/>
        <input type="date"/>
        <input type="number" min="1" max ="10" placeholder="Party size" value={this.state.partySize} onChange={this.handlePartySizeChange}/>
        <select name="table" value={this.state.tableNumber} onChange={this.handleTableNumberChange}>
          <option value="" disabled selected>table</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
        </select>
        <textarea name="comment" placeholder="additional notes" rows="1" cols="30"></textarea>
        <input type="submit" value="Add" />
      </form>
    )
  }
}

export default BookingsForm;
