package com.codeclan.example.RestaurantManagement.components;

import com.codeclan.example.RestaurantManagement.models.Booking;
import com.codeclan.example.RestaurantManagement.models.Customer;
import com.codeclan.example.RestaurantManagement.models.RestaurantTable;
import com.codeclan.example.RestaurantManagement.repositories.BookingRepository.BookingRepository;
import com.codeclan.example.RestaurantManagement.repositories.CustomerRepository.CustomerRepository;
import com.codeclan.example.RestaurantManagement.repositories.RestaurantTableRepository.RestaurantTableRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    RestaurantTableRepository restaurantTableRepository;

    @Autowired
    BookingRepository bookingRepository;

    @Autowired
    CustomerRepository customerRepository;

    public DataLoader (){}

    public void run(ApplicationArguments args){
        //seeds
        LocalDateTime time1 =LocalDateTime.parse("2019-08-27T20:00:00");
        LocalDateTime time2 =LocalDateTime.parse("2019-08-28T20:00:00");
        LocalDateTime time3 =LocalDateTime.parse("2019-08-29T20:00:00");

        RestaurantTable smallTable1 = new RestaurantTable(1,2);
        restaurantTableRepository.save(smallTable1);

        RestaurantTable smallTable2 = new RestaurantTable(2,2);
        restaurantTableRepository.save(smallTable2);

        RestaurantTable largeTable1 = new RestaurantTable(3,8);
        restaurantTableRepository.save(largeTable1);

        RestaurantTable largeTable2 = new RestaurantTable(4,8);
        restaurantTableRepository.save(largeTable2);

        Customer customer1 = new Customer("Bert",1800123456,0,"");
        customerRepository.save(customer1);

        Customer customer2 = new Customer("Davelle",1800123457,0,"");
        customerRepository.save(customer2);

        Customer veganCustomer1= new Customer("Harry",1800123458,0,"vegan");
        customerRepository.save(veganCustomer1);

        Booking bertbooking1 = new Booking(1,time1,"",customer1,smallTable1);
        bookingRepository.save(bertbooking1);

        Booking bertbooking2 = new Booking(1,time2,"",customer1,smallTable1);
        bookingRepository.save(bertbooking2);

        Booking harryBooking1 = new Booking(7,time3,"",veganCustomer1,largeTable1);
        bookingRepository.save(harryBooking1);
    }
}
