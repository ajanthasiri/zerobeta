package com.example.consumer.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;

import java.io.Serializable;

@JsonIgnoreProperties(ignoreUnknown = true)
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Order  implements Serializable {
    private static final long serialVersionUID = -4551323276601557391L;

    private int id;
    private int clientId;
    private String itemName;
    private int quantity;
    private double totalCost;
    private String shippingAddress;


    private byte orderStatus;

    public static long getSerialVersionUID() {
        return serialVersionUID;
    }

    @Override
    public String toString() {
        return "Order{" +
                "id=" + id +
                ", clientId=" + clientId +
                ", itemName='" + itemName + '\'' +
                ", quantity=" + quantity +
                ", totalCost=" + totalCost +
                ", shippingAddress='" + shippingAddress + '\'' +
                ", orderStatus=" + "new" +
                '}';
    }
}
