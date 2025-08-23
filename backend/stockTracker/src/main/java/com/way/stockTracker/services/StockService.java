package com.way.stockTracker.services;

import com.way.stockTracker.models.Stock;
import com.way.stockTracker.repositories.StockRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StockService {
    @Autowired
    StockRepository stockRepo;

    public List<Stock> getStockResults(String query, int limit) {
        Pageable pageable = PageRequest.of(0, limit);
        return stockRepo.findSomeByText(query, pageable);
    }
}
