import React, {Component} from 'react';
import Booking from './Booking';
import './Bookings.css';

class BookingsList extends Component {
 render() {
   const bookingNodes = this.props.bookings.map(booking => {

     return (
       <span>
       <Booking value={booking.value} key={booking.id} className="table" booking={booking}>
       </Booking>
       <button>Delete</button>
       </span>
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
           <th>able number</th>
         </tr>
         {bookingNodes}
         </tbody>
       </table>
     </div>
   )
}
}
export default BookingsList;
