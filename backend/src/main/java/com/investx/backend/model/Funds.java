package com.investx.backend.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Data
@Document(collection = "funds")
public class Funds {

    @Id
    private String id;

    private String userId;

    private double availableMargin;

    private double usedMargin;

    private double availableCash;

    private double openingBalance;

    private LocalDateTime updatedAt;
}