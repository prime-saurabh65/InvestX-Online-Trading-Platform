package com.investx.backend.controller;

import com.investx.backend.model.Holding;
import com.investx.backend.service.HoldingService;

import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/holdings")
public class HoldingController {

    private final HoldingService holdingService;

    public HoldingController(HoldingService holdingService) {
        this.holdingService = holdingService;
    }

    @GetMapping
    public List<Holding> getHoldings(
            Authentication authentication
    ) {

        String userId = authentication.getName();

        return holdingService.getUserHoldings(userId);
    }
}