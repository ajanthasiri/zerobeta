package com.test.jwt.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class OrderDTO {
    private int id;
    private String itemName;
    private int clientId;
    private int quantity;
    private double totalCost;
    private String shippingAddress;
    private byte orderStatus;
}
