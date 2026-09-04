package com.investx.backend.repository;

import com.investx.backend.model.Position;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface PositionRepository extends MongoRepository<Position, String> {

    List<Position> findByUserId(String userId);
}