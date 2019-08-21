import React, {Component} from 'react';
import Booking from './Booking';
import './Bookings.css';

class BookingsList extends Component {
 render() {
   //if (this.props.bookings===null || this.props.bookings===undefined || this.props.bookings.length===0)
    // return null
   const bookingNodes = this.props.bookings.map(booking => {
     return (
       <tr className="booking" key={booking.id}>
        <Booking value={booking.value} className="table" booking={booking}></Booking>
        <td>
          <button onClick={() => this.props.onEdit(booking.id)} value={booking.id}>EDIT</button>
          <button onClick={() => this.props.onDelete(booking.id)} value={booking.id}>DELETE</button>
        </td>
       </tr>
     );
   });
   return (
     <div className="bookingList">
       <h2>Restaurant Bookings</h2>
       <table className="bookingTable">
         <tbody>
         <tr>
           <th>Name</th>
           <th>Phone</th>
           <th>Date & Time</th>
           <th>Pax</th>
           <th>Table number</th>
           <th>Additional Information</th>
           <th></th>
         </tr>
         {bookingNodes}
         </tbody>

       </table>
     </div>
   )
 }
}
export default BookingsList;
