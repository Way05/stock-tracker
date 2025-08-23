package com.way.stockTracker.models;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@NoArgsConstructor
@Document(collection = "Stocks")
public class Stock {
    @Id
    private String id;
    @Indexed
    private String ticker;
    private String company;
    private String price;

    public Stock(String ticker, String company, String price) {
        this.ticker = ticker;
        this.company = company;
        this.price = price;
    }
}
