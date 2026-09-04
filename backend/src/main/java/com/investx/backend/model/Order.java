package com.investx.backend.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Data
@Document(collection = "orders")
public class Order {

    @Id
    private String id;

    private String userId;

    private String name;

    private int qty;

    private double price;

    private String mode;

    private LocalDateTime createdAt;
}