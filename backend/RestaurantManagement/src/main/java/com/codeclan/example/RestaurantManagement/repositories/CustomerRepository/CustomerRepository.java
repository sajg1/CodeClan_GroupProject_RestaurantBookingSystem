package com.codeclan.example.RestaurantManagement.repositories.CustomerRepository;

import com.codeclan.example.RestaurantManagement.models.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer,Long> {
}
