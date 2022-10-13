package com.example.consumer.listner;

import com.example.consumer.entity.Order;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Service
public class OrderListner {
    @Value("${order.topic.name}")
    private String topicName;



    @KafkaListener(topics = "order-topic", groupId = "foo")
    public void listenGroupFoo(String message) {
        System.out.println("Order has been placed and ready to dispatch: " + message);
        ObjectMapper object = new ObjectMapper();
        Order order = null;
        try {
            order = object.readValue(message, Order.class);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }

    }
}
