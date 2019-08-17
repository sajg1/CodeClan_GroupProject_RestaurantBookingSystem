package com.codeclan.example.RestaurantManagement.controllers;

import com.codeclan.example.RestaurantManagement.models.RestaurantTable;
import com.codeclan.example.RestaurantManagement.repositories.BookingRepository.BookingRepository;
import com.codeclan.example.RestaurantManagement.repositories.RestaurantTableRepository.RestaurantTableRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/restaurantTables")
public class RestaurantTableController {
    @Autowired
    RestaurantTableRepository restaurantTableRepository;


    @GetMapping(value = "datebetween/{startDate}/{endDate}")
    public List<RestaurantTable> getBookingsInRange(@DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) @PathVariable LocalDateTime startDate, @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) @PathVariable LocalDateTime endDate){
        return restaurantTableRepository.findAllRestaurantTablesForBookingByDateTimeBetween(startDate,endDate);
    }
}
