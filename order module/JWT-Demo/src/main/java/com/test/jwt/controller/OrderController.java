package com.test.jwt.controller;

import com.test.jwt.dto.OrderDTO;
import com.test.jwt.dto.UserIdDTO;
import com.test.jwt.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("order")
@CrossOrigin(origins = "*")
public class OrderController {
    @Autowired
    private OrderService orderService;

    @GetMapping("/getOrders/{id}")
    public List<OrderDTO> getOrders(@PathVariable int id){
        return orderService.getOrders(id);
    }

    @PutMapping("/cancelOrder/{id}")
    public int cancelOrder(@PathVariable int id){
        orderService.cancelOrder(id);
        return 1;
    }

    @PostMapping("/saveOrder")
    public OrderDTO saveOrder(@RequestBody OrderDTO orderDTO){
        return orderService.saveOrder(orderDTO);
    }
}
