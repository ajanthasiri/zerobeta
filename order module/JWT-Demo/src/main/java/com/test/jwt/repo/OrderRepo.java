package com.test.jwt.repo;

import com.test.jwt.entity.Order;
import com.test.jwt.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface OrderRepo extends JpaRepository<Order,Integer> {

    @Query(value="select * from orders where client_id=?1",nativeQuery = true)
    List<Order> getOrders(int id);

    @Modifying
    @Query(value="update orders set order_status='3' where id=?1",nativeQuery = true)
    void cancelOrder(int id);
}
