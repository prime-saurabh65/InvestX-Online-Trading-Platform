package com.investx.backend.dto;

import jakarta.validation.constraints.DecimalMin;

public record FundsRequest(

        @DecimalMin(value = "1.0", message = "Amount must be greater than 0")
        double amount
) {
}