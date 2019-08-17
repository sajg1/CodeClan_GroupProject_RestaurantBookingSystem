package com.codeclan.example.RestaurantManagement.repositories.RestaurantTableRepository;

import com.codeclan.example.RestaurantManagement.models.RestaurantTable;

import java.time.LocalDateTime;
import java.util.List;

public interface RestaurantTableRepositoryCustom {

    List<RestaurantTable> findAllRestaurantTablesForBookingByDateTimeBetween(LocalDateTime startDate, LocalDateTime endDate);
}
