package com.codeclan.example.RestaurantManagement.repositories.BookingRepository;

import com.codeclan.example.RestaurantManagement.models.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingRepository extends JpaRepository<Booking,Long> {
}
