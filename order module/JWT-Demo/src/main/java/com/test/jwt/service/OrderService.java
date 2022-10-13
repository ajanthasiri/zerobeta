package com.test.jwt.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.test.jwt.dto.OrderDTO;
import com.test.jwt.entity.Order;
import com.test.jwt.repo.OrderRepo;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
@CrossOrigin
public class OrderService {

    @Autowired
    private final OrderRepo orderRepo;

    @Autowired
    private final ModelMapper modelMapper;

    @Autowired
    private KafkaTemplate<String, String> kafkaTemplate;

    @Value("${order.topic.name}")
    private String topicName;

    ObjectMapper om=new ObjectMapper();

    public OrderService(ModelMapper modelMapper,OrderRepo orderRepo) {
        this.orderRepo = orderRepo;
        this.modelMapper = modelMapper;
    }

    public OrderDTO saveOrder(OrderDTO orderDTO){
        orderRepo.save(modelMapper.map(orderDTO, Order.class));
        String message= null;
        try {
            message = om.writeValueAsString(orderDTO);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        kafkaTemplate.send(topicName,message);
        return orderDTO;
    }

    public List<OrderDTO> getOrders(int id){
        List<Order> orderList=orderRepo.getOrders(id);
        return modelMapper.map(orderList, new TypeToken<List<OrderDTO>>(){}.getType());
    }

    public void cancelOrder(int id){
        orderRepo.cancelOrder(id);
    }
}
