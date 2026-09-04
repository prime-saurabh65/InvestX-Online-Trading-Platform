package com.investx.backend.controller;

import com.investx.backend.dto.CreateOrderRequest;
import com.investx.backend.model.Order;
import com.investx.backend.service.OrderService;

import jakarta.validation.Valid;

import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @PostMapping
    public Order createOrder(
            @Valid @RequestBody CreateOrderRequest request,
            Authentication authentication
    ) {

        String userId = authentication.getName();

        return orderService.createOrder(
                userId,
                request
        );
    }

    @GetMapping
    public List<Order> getOrders(
            Authentication authentication
    ) {

        String userId = authentication.getName();

        return orderService.getUserOrders(userId);
    }
}