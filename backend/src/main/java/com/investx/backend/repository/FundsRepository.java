package com.investx.backend.repository;

import com.investx.backend.model.Funds;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface FundsRepository extends MongoRepository<Funds, String> {

    Optional<Funds> findByUserId(String userId);
}