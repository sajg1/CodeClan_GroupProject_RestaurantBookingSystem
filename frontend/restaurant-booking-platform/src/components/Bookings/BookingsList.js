import React, {Component} from 'react';
import Booking from './Booking';
import './Bookings.css';

class BookingsList extends Component {
 render() {
   const bookingNodes = this.props.bookings.map(booking => {

     return (
       <Booking value={booking.value} key={booking.id} className="table" booking={booking}>
       </Booking>
     );
   });
   return (
     <div className="bookingList">
       <h2>Restaurant Bookings</h2>
       <table>
         <tr>
           <th>Name</th>
           <th>Phone</th>
           <th>Date & Time</th>
           <th>Pax</th>
           <th>able number</th>
         </tr>
         {bookingNodes}
       </table>
     </div>
   )
}
}
export default BookingsList;
