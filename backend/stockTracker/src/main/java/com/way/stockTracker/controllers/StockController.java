package com.way.stockTracker.controllers;

import com.way.stockTracker.services.StockService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
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

    @GetMapping("/search")
    public void search() {
        System.out.println(stockService.getStockResults("test", 10));
    }
}
