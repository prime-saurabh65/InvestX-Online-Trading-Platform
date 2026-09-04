package com.investx.backend.controller;

import com.investx.backend.service.DashboardService;

import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/dashboard")
public class DashboardController {

    private final DashboardService dashboardService;

    public DashboardController(
            DashboardService dashboardService
    ) {
        this.dashboardService = dashboardService;
    }

    @GetMapping("/summary")
    public Map<String, Object> getSummary(
            Authentication authentication
    ) {

        String userId = authentication.getName();

        return dashboardService.getSummary(userId);
    }
}