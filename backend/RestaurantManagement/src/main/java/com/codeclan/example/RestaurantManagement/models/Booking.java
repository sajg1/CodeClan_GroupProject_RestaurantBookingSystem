package com.codeclan.example.RestaurantManagement.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name="bookings")
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "numberPeople")
    private int numberPeople;
    @Column(name = "dateTime")
    private LocalDateTime dateTime;
    @Column(name = "additionalInfo")
    private String additionalInfo;
    @JsonIgnoreProperties("booking")
    @ManyToOne
    @JoinColumn(name = "customer_id",nullable = false)
    private Customer customer;
    @JsonIgnoreProperties("booking")
    @ManyToOne
    @JoinColumn(name = "table_id", nullable = false)
    private RestaurantTable restaurantTable;

    public Booking(int numberPeople, LocalDateTime dateTime, String additionalInfo, Customer customer, RestaurantTable restaurantTable) {
        this.numberPeople = numberPeople;
        this.dateTime = dateTime;
        this.additionalInfo = additionalInfo;
        this.customer = customer;
        this.restaurantTable = restaurantTable;
    }

    public Booking() {}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getNumberPeople() {
        return numberPeople;
    }

    public void setNumberPeople(int numberPeople) {
        this.numberPeople = numberPeople;
    }

    public LocalDateTime getDateTime() {
        return dateTime;
    }

    public void setDateTime(LocalDateTime dateTime) {
        this.dateTime = dateTime;
    }

    public String getAdditionalInfo() {
        return additionalInfo;
    }

    public void setAdditionalInfo(String additionalInfo) {
        this.additionalInfo = additionalInfo;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public RestaurantTable getTable() {
        return restaurantTable;
    }

    public void setTable(RestaurantTable table) {
        this.restaurantTable = table;
    }
}
