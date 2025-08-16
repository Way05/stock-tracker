package com.way.stockTracker.repositories;

import com.way.stockTracker.models.Post;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PostRepository extends MongoRepository<Post, String> {
}
