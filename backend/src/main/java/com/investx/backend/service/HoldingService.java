package com.investx.backend.service;

import com.investx.backend.model.Holding;
import com.investx.backend.repository.HoldingRepository;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HoldingService {

    private final HoldingRepository holdingRepository;

    public HoldingService(HoldingRepository holdingRepository) {
        this.holdingRepository = holdingRepository;
    }

    public List<Holding> getUserHoldings(String userId) {

        return holdingRepository.findByUserId(userId);
    }

    public void processBuy(
            String userId,
            String name,
            int qty,
            double price
    ) {

        Holding holding =
                holdingRepository
                        .findByUserIdAndName(userId, name)
                        .orElse(null);

        if (holding == null) {

            holding = new Holding();

            holding.setUserId(userId);
            holding.setName(name);
            holding.setQty(qty);
            holding.setAvg(price);
            holding.setPrice(price);
            holding.setNet(0);
            holding.setDay(0);

        } else {

            int oldQty = holding.getQty();

            double oldInvestment =
                    holding.getAvg() * oldQty;

            double newInvestment =
                    price * qty;

            int totalQty = oldQty + qty;

            double newAverage =
                    (oldInvestment + newInvestment)
                            / totalQty;

            holding.setQty(totalQty);
            holding.setAvg(newAverage);
            holding.setPrice(price);
        }

        holdingRepository.save(holding);
    }

    public void processSell(
            String userId,
            String name,
            int qty,
            double price
    ) {

        Holding holding =
                holdingRepository
                        .findByUserIdAndName(userId, name)
                        .orElseThrow(() ->
                                new RuntimeException(
                                        "Holding not found"
                                )
                        );

        if (holding.getQty() < qty) {
            throw new RuntimeException(
                    "Insufficient quantity"
            );
        }

        int remainingQty =
                holding.getQty() - qty;

        if (remainingQty == 0) {

            holdingRepository.delete(holding);

        } else {

            holding.setQty(remainingQty);
            holding.setPrice(price);

            holdingRepository.save(holding);
        }
    }
}