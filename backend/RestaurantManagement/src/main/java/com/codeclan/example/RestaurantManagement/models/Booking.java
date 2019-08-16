package com.codeclan.example.RestaurantManagement.models;

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
    @Column(name = "customer")
    private Customer customer;
    @Column(name = "table")
    private RestaurantTable table;

    public Booking(int numberPeople, LocalDateTime dateTime, String additionalInfo, Customer customer, RestaurantTable table) {
        this.numberPeople = numberPeople;
        this.dateTime = dateTime;
        this.additionalInfo = additionalInfo;
        this.customer = customer;
        this.table = table;
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
        return table;
    }

    public void setTable(RestaurantTable table) {
        this.table = table;
    }
}
