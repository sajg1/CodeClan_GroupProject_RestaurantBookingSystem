package com.codeclan.example.RestaurantManagement.models;

public class Table {

    private Long id;
    private int num;
    private int capacity;

    public Table(int num, int capacity) {
        this.num = num;
        this.capacity = capacity;
    }

    public Table() {}

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
}
