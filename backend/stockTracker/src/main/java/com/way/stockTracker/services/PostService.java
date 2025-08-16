package com.way.stockTracker.services;

import com.way.stockTracker.models.Post;
import com.way.stockTracker.repositories.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostService {
    @Autowired
    PostRepository postRepo;

    public void createPost(Post post) {
        postRepo.save(post);
    }

    public List<Post> getAllPosts() {
        return postRepo.findAll();
    }
}