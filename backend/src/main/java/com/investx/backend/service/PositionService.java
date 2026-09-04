package com.investx.backend.service;

import com.investx.backend.model.Position;
import com.investx.backend.repository.PositionRepository;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PositionService {

    private final PositionRepository positionRepository;

    public PositionService(PositionRepository positionRepository) {
        this.positionRepository = positionRepository;
    }

    public List<Position> getUserPositions(String userId) {

        return positionRepository.findByUserId(userId);
    }
}