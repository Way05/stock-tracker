package com.way.stockTracker.controllers;

import com.way.stockTracker.services.StockService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/stock")
public class StockController {
    @Autowired
    StockService stockService;

    public void add() {

    }

    public void remove() {

    }

    @PostMapping("/search")
    public ResponseEntity<Object> search() {
        return ResponseEntity.ok(stockService.getStockResults("test", 10));
    }
}
