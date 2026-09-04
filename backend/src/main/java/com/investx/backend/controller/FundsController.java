package com.investx.backend.controller;

import com.investx.backend.dto.FundsRequest;
import com.investx.backend.model.Funds;
import com.investx.backend.service.FundsService;

import jakarta.validation.Valid;

import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/funds")
public class FundsController {

    private final FundsService fundsService;

    public FundsController(FundsService fundsService) {
        this.fundsService = fundsService;
    }

    @GetMapping
    public Funds getFunds(
            Authentication authentication
    ) {

        String userId = authentication.getName();

        return fundsService.getFunds(userId);
    }

    @PostMapping("/deposit")
    public Funds deposit(
            @Valid @RequestBody FundsRequest request,
            Authentication authentication
    ) {

        String userId = authentication.getName();

        return fundsService.deposit(
                userId,
                request
        );
    }

    @PostMapping("/withdraw")
    public Funds withdraw(
            @Valid @RequestBody FundsRequest request,
            Authentication authentication
    ) {

        String userId = authentication.getName();

        return fundsService.withdraw(
                userId,
                request
        );
    }
}