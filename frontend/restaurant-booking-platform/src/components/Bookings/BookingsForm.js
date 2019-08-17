import React, { Component } from 'react';

class BookingsForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      guestName: '',
      phoneNumber: '',
      // date: this.props.date,
      // time: this.props.time,
      partySize: '',

    };

    this.handleGuestChange = this.handleGuestChange.bind(this);
    this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this);
    this.handlePartySizeChange = this.handlePartySizeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  handleSubmit(event){
    event.preventDefault();
    const guestName = this.state.guestName.trim();
    const phoneNumber = this.state.phoneNumber.trim();
    // const date = this.state.date.trim();
    // const time = this.state.time.trim();
    const partySize = this.state.partySize.trim();


    if (!guestName || !phoneNumber || !partySize){
      return
    }
    this.props.onClickSubmit({
      guestName: guestName,
      phoneNumber: phoneNumber,
      // date: date,
      // time: time,
      partySize: partySize,

    });
  }

  handlePartySizeChange(){
    this.setState(prevState => {
      let newSize = prevState.total - this.props.partySize;
      if(newSize < 0){
        newSize = 0;
      }
      return {partySize: newSize};
    });
  }

  handleGuestChange(event) {this.setState({guestName: event.target.value})}
  handlePhoneNumberChange(event) {this.setState({phoneNumber: event.target.value})}
  handlePartySizeChange(event) {this.setState({
    partySize: event.target.value})}

  render(){
    return(
      <form className="booking-form" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Guest name" value={this.state.guestName} onChange={this.handleGuestChange}/>
        <input type="text" placeholder="Phone number" value={this.state.phoneNumber} onChange={this.handlePhoneNumberChange}/>
        <input type="number" placeholder="Party size" value={this.state.partySize} onChange={this.handlePartySizeChange}/>
        <input type="submit" value="Enter" />
      </form>
    )
  }
}

export default BookingsForm;
