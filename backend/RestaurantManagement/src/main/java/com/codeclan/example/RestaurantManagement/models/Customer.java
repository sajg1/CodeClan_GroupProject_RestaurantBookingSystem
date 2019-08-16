package com.codeclan.example.RestaurantManagement.models;

import javax.persistence.*;

@Entity
@Table(name="customers")
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "name")
    private String name;
    @Column(name = "phoneNumber")
    private int phoneNumber;
    @Column(name = "noVisits")
    private int noVisits;
    @Column(name = "additionalInfo")
    private String additionalInfo;

    public Customer(String name, int phoneNumber, int noVisits, String additionalInfo) {
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.noVisits = noVisits;
        this.additionalInfo = additionalInfo;
    }

    public Customer() {}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(int phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public int getNoVisits() {
        return noVisits;
    }

    public void setNoVisits(int noVisits) {
        this.noVisits = noVisits;
    }

    public String getAdditionalInfo() {
        return additionalInfo;
    }

    public void setAdditionalInfo(String additionalInfo) {
        this.additionalInfo = additionalInfo;
    }
}
