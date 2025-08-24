package com.way.stockTracker.controllers;

import com.way.stockTracker.services.StockService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/stock")
public class StockController {
    @Autowired
    StockService stockService;

    public void add() {

    }

    public void remove() {

    }

    @GetMapping("/search")
    public ResponseEntity<Object> search(@RequestParam("ticker") String ticker) {
        return ResponseEntity.ok(stockService.getStockResults(ticker, 10));
    }
}
