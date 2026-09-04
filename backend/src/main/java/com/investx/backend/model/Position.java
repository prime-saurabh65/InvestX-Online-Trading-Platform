package com.investx.backend.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "positions")
public class Position {

    @Id
    private String id;

    private String userId;

    private String product;

    private String name;

    private int qty;

    private double avg;

    private double price;

    private double net;

    private double day;

    private boolean isLoss;
}