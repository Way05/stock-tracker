package com.way.stockTracker.repositories;

import com.way.stockTracker.models.Stock;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface StockRepository extends MongoRepository<Stock, String> {
    @Query("{ticker:{$regex:?0}}")
    List<Stock> findSomeByText(String searchText, Pageable pageable);
}
