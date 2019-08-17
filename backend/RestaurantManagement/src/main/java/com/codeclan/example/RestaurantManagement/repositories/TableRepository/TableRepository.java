package com.codeclan.example.RestaurantManagement.repositories.TableRepository;

import com.codeclan.example.RestaurantManagement.models.RestaurantTable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TableRepository extends JpaRepository<RestaurantTable,Long> {
}
