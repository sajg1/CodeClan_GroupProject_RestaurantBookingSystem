package com.codeclan.example.RestaurantManagement.models.projections;

import com.codeclan.example.RestaurantManagement.models.Booking;
import com.codeclan.example.RestaurantManagement.models.Customer;
import com.codeclan.example.RestaurantManagement.models.RestaurantTable;
import com.codeclan.example.RestaurantManagement.repositories.RestaurantTableRepository.RestaurantTableRepository;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.rest.core.config.Projection;

import java.time.LocalDateTime;

@Projection(name = "embedBookingAndRestaurantTable", types = Booking.class)
public interface EmbedBookingAndRestaurantTable {
    Long getId();

    int getNumberPeople();

    LocalDateTime getDateTime();

    String getAdditionalInfo();

    Customer getCustomer();

    RestaurantTable getRestaurantTable();

//    @Value("#{target.getCustomer().getId()}")
//    Long getCustomerID();
//
//    @Value("#{target.getRestaurantTable().getId()}")
//    Long getRestaurantTable();
}
