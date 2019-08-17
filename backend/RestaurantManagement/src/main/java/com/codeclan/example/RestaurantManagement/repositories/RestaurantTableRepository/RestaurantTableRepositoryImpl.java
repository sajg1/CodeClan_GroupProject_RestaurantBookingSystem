package com.codeclan.example.RestaurantManagement.repositories.RestaurantTableRepository;

import com.codeclan.example.RestaurantManagement.models.Booking;
import com.codeclan.example.RestaurantManagement.models.RestaurantTable;
import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.stream.Collectors;

public class RestaurantTableRepositoryImpl implements RestaurantTableRepositoryCustom{
    @Autowired
    EntityManager entityManager;

    @Transactional
    public List<RestaurantTable> findAllRestaurantTablesForBookingByDateTimeBetween(LocalDateTime startDate, LocalDateTime endDate){
        List<RestaurantTable> results = null;
        Session session = entityManager.unwrap(Session.class);

        try{
            Criteria cr = session.createCriteria(RestaurantTable.class);
            cr.createAlias("bookings","bookingAlias");
            cr.add(Restrictions.between("bookingAlias.dateTime",startDate,endDate));

            results = cr.list();

            LinkedHashSet hashSet = new LinkedHashSet(results);
            results = new ArrayList(hashSet);

        }
        catch (HibernateException ex){
            ex.printStackTrace();
        }

        return results;
    }
}
