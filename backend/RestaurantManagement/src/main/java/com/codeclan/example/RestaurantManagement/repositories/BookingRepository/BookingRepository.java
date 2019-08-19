package com.codeclan.example.RestaurantManagement.repositories.BookingRepository;

import com.codeclan.example.RestaurantManagement.models.Booking;
import com.codeclan.example.RestaurantManagement.models.RestaurantTable;
import com.codeclan.example.RestaurantManagement.models.projections.EmbedBookingAndRestaurantTable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;


import java.time.LocalDateTime;
import java.util.List;

@RepositoryRestResource(excerptProjection = EmbedBookingAndRestaurantTable.class)
public interface BookingRepository extends JpaRepository<Booking,Long> {
    List<Booking> findAllBookingsByDateTimeBetween(LocalDateTime startDate,LocalDateTime endDate);
}
