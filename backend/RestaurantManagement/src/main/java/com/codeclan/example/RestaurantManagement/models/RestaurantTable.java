package com.codeclan.example.RestaurantManagement.models;


import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;


@Entity
@Table(name="restauranttables")
public class RestaurantTable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name="num")
    private int num;
    @Column(name="capacity")
    private int capacity;

    @JsonIgnore
    @OneToMany(mappedBy = "restaurantTable", fetch = FetchType.LAZY)
    private List<Booking> bookings;


    public RestaurantTable(int num, int capacity) {
        this.num = num;
        this.capacity = capacity;
        this.bookings = new ArrayList<Booking>();
    }

    public RestaurantTable() {}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getNum() {
        return num;
    }

    public void setNum(int num) {
        this.num = num;
    }

    public int getCapacity() {
        return capacity;
    }

    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }

    public List<Booking> getBookings() {
        return bookings;
    }

    public void setBookings(List<Booking> bookings) {
        this.bookings = bookings;
    }
}
