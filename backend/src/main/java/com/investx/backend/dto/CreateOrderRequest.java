package com.investx.backend.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;

public record CreateOrderRequest(

        @NotBlank(message = "Stock name is required")
        String name,

        @Min(value = 1, message = "Quantity must be at least 1")
        int qty,

        @Min(value = 1, message = "Price must be greater than 0")
        double price,

        @NotBlank(message = "Order mode is required")
        String mode
) {
}