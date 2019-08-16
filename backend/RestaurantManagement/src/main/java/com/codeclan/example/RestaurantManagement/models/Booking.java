package com.codeclan.example.RestaurantManagement.models;

import java.time.LocalDateTime;

public class Booking {
    private Long id;
    private int numberPeople;
    private LocalDateTime dateTime;
    private String additionalInfo;
    private Customer customer;
    private Table table;

    public Booking(int numberPeople, LocalDateTime dateTime, String additionalInfo, Customer customer, Table table) {
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

    public Table getTable() {
        return table;
    }

    public void setTable(Table table) {
        this.table = table;
    }
}
