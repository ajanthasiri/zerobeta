package com.test.jwt.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Comment;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@JsonIgnoreProperties(ignoreUnknown = true)
@JsonInclude(JsonInclude.Include.NON_NULL)
@Table(name="orders")
public class Order implements Serializable {
    private static final long serialVersionUID = -4551323276601557391L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int clientId;
    private String itemName;
    private int quantity;
    private double totalCost;
    private String shippingAddress;

    @Comment("1 - new, 2 - dispatched, 3 - cancelled")
    private byte orderStatus;

    public static long getSerialVersionUID() {
        return serialVersionUID;
    }
}
