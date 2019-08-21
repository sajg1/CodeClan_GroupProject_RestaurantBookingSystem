import React, {Component} from 'react';
import Booking from './Booking';
import './Bookings.css';

class BookingsList extends Component {
 render() {
   const bookingNodes = this.props.bookings.map(booking => {
     console.log("This is the booking ID: ",booking.id)
     return (
       <tr className="booking" key={booking.id}>
         <Booking value={booking.value} className="table" booking={booking}>
         </Booking>
         <td>
        <button onClick={() => this.props.onDelete(booking.id)} value={booking.id}>DELETE</button>
        </td>
       </tr>
     );
   });
   return (
     <div className="bookingList">
       <h2>Restaurant Bookings</h2>
       <table>
         <tbody>
         <tr>
           <th>Name</th>
           <th>Phone</th>
           <th>Date & Time</th>
           <th>Pax</th>
           <th>Table number</th>
         </tr>
         {bookingNodes}
         </tbody>

       </table>
     </div>
   )
}
}
export default BookingsList;
