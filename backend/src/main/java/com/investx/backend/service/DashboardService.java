package com.investx.backend.service;

import com.investx.backend.model.Funds;
import com.investx.backend.model.Holding;
import com.investx.backend.model.User;
import com.investx.backend.repository.HoldingRepository;
import com.investx.backend.repository.UserRepository;

import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class DashboardService {

    private final UserRepository userRepository;
    private final HoldingRepository holdingRepository;
    private final FundsService fundsService;

    public DashboardService(
            UserRepository userRepository,
            HoldingRepository holdingRepository,
            FundsService fundsService
    ) {
        this.userRepository = userRepository;
        this.holdingRepository = holdingRepository;
        this.fundsService = fundsService;
    }

    public Map<String, Object> getSummary(String userId) {

        User user = userRepository
                .findById(userId)
                .orElseThrow(() ->
                        new RuntimeException(
                                "User not found"
                        )
                );

        List<Holding> holdings =
                holdingRepository.findByUserId(userId);

        Funds funds =
                fundsService.getFunds(userId);

        double totalInvestment = 0;
        double currentValue = 0;

        for (Holding holding : holdings) {

            totalInvestment +=
                    holding.getAvg() * holding.getQty();

            currentValue +=
                    holding.getPrice() * holding.getQty();
        }

        double profitLoss =
                currentValue - totalInvestment;

        Map<String, Object> summary = new HashMap<>();

        summary.put("userId", user.getId());
        summary.put("name", user.getName());
        summary.put("email", user.getEmail());

        summary.put(
                "totalInvestment",
                totalInvestment
        );

        summary.put(
                "currentValue",
                currentValue
        );

        summary.put(
                "profitLoss",
                profitLoss
        );

        summary.put(
                "availableCash",
                funds.getAvailableCash()
        );

        summary.put(
                "availableMargin",
                funds.getAvailableMargin()
        );

        return summary;
    }
}