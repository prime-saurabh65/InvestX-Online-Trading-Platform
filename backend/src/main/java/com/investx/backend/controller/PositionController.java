package com.investx.backend.controller;

import com.investx.backend.model.Position;
import com.investx.backend.service.PositionService;

import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/positions")
public class PositionController {

    private final PositionService positionService;

    public PositionController(PositionService positionService) {
        this.positionService = positionService;
    }

    @GetMapping
    public List<Position> getPositions(
            Authentication authentication
    ) {

        String userId = authentication.getName();

        return positionService.getUserPositions(userId);
    }
}