package com.codeclan.example.RestaurantManagement.repositories.RestaurantTableRepository;

import com.codeclan.example.RestaurantManagement.models.RestaurantTable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RestaurantTableRepository extends JpaRepository<RestaurantTable,Long> {
}
