package com.investx.backend.service;

import com.investx.backend.dto.FundsRequest;
import com.investx.backend.model.Funds;
import com.investx.backend.repository.FundsRepository;

import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class FundsService {

    private final FundsRepository fundsRepository;

    public FundsService(FundsRepository fundsRepository) {
        this.fundsRepository = fundsRepository;
    }

    public Funds getFunds(String userId) {

        return fundsRepository
                .findByUserId(userId)
                .orElseThrow(() ->
                        new RuntimeException(
                                "Funds account not found"
                        )
                );
    }

    public Funds deposit(
            String userId,
            FundsRequest request
    ) {

        Funds funds = getFunds(userId);

        funds.setAvailableCash(
                funds.getAvailableCash()
                        + request.amount()
        );

        funds.setAvailableMargin(
                funds.getAvailableMargin()
                        + request.amount()
        );

        funds.setUpdatedAt(LocalDateTime.now());

        return fundsRepository.save(funds);
    }

    public Funds withdraw(
            String userId,
            FundsRequest request
    ) {

        Funds funds = getFunds(userId);

        if (funds.getAvailableCash()
                < request.amount()) {

            throw new RuntimeException(
                    "Insufficient available cash"
            );
        }

        funds.setAvailableCash(
                funds.getAvailableCash()
                        - request.amount()
        );

        funds.setAvailableMargin(
                funds.getAvailableMargin()
                        - request.amount()
        );

        funds.setUpdatedAt(LocalDateTime.now());

        return fundsRepository.save(funds);
    }

    public void deductFunds(
            String userId,
            double amount
    ) {

        Funds funds = getFunds(userId);

        if (funds.getAvailableCash() < amount) {

            throw new RuntimeException(
                    "Insufficient funds"
            );
        }

        funds.setAvailableCash(
                funds.getAvailableCash() - amount
        );

        funds.setAvailableMargin(
                funds.getAvailableMargin() - amount
        );

        funds.setUsedMargin(
                funds.getUsedMargin() + amount
        );

        funds.setUpdatedAt(LocalDateTime.now());

        fundsRepository.save(funds);
    }

    public void addFunds(
            String userId,
            double amount
    ) {

        Funds funds = getFunds(userId);

        funds.setAvailableCash(
                funds.getAvailableCash() + amount
        );

        funds.setAvailableMargin(
                funds.getAvailableMargin() + amount
        );

        double usedMargin =
                funds.getUsedMargin() - amount;

        funds.setUsedMargin(
                Math.max(usedMargin, 0)
        );

        funds.setUpdatedAt(LocalDateTime.now());

        fundsRepository.save(funds);
    }
}