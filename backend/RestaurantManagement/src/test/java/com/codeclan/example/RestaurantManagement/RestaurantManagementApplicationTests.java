package com.codeclan.example.RestaurantManagement;

import com.codeclan.example.RestaurantManagement.repositories.BookingRepository.BookingRepository;
import com.codeclan.example.RestaurantManagement.repositories.CustomerRepository.CustomerRepository;
import com.codeclan.example.RestaurantManagement.repositories.RestaurantTableRepository.RestaurantTableRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class RestaurantManagementApplicationTests {

	@Autowired
	RestaurantTableRepository restaurantTableRepository;

	@Autowired
	BookingRepository bookingRepository;

	@Autowired
	CustomerRepository customerRepository;


	@Test
	public void contextLoads() {
	}

}
