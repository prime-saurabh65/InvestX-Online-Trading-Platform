package com.investx.backend.service;

import com.investx.backend.dto.CreateOrderRequest;
import com.investx.backend.model.Order;
import com.investx.backend.repository.OrderRepository;

import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class OrderService {

    private final OrderRepository orderRepository;
    private final HoldingService holdingService;
    private final FundsService fundsService;

    public OrderService(
            OrderRepository orderRepository,
            HoldingService holdingService,
            FundsService fundsService
    ) {
        this.orderRepository = orderRepository;
        this.holdingService = holdingService;
        this.fundsService = fundsService;
    }

    public Order createOrder(
            String userId,
            CreateOrderRequest request
    ) {

        String mode = request.mode().trim().toUpperCase();

        if (!mode.equals("BUY") && !mode.equals("SELL")) {
            throw new RuntimeException(
                    "Order mode must be BUY or SELL"
            );
        }

        double totalAmount =
                request.qty() * request.price();

        if (mode.equals("BUY")) {

            fundsService.deductFunds(
                    userId,
                    totalAmount
            );

            holdingService.processBuy(
                    userId,
                    request.name(),
                    request.qty(),
                    request.price()
            );

        } else {

            holdingService.processSell(
                    userId,
                    request.name(),
                    request.qty(),
                    request.price()
            );

            fundsService.addFunds(
                    userId,
                    totalAmount
            );
        }

        Order order = new Order();

        order.setUserId(userId);
        order.setName(request.name());
        order.setQty(request.qty());
        order.setPrice(request.price());
        order.setMode(mode);
        order.setCreatedAt(LocalDateTime.now());

        return orderRepository.save(order);
    }

    public List<Order> getUserOrders(String userId) {

        return orderRepository
                .findByUserIdOrderByCreatedAtDesc(userId);
    }
}