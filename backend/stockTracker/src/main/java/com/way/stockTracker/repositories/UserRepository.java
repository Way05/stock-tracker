package com.way.stockTracker.repositories;

import com.way.stockTracker.models.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.Optional;

public interface UserRepository extends MongoRepository<User, String> {
    @Query("{username:'?0'}")
    User findByUsername(String username);

//    @Query(value="{username:'?0'}", fields="{_id:0,password:1}")
//    String getPasswordHashByUsername(String username);
}
