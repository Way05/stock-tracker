package com.way.stockTracker.controllers;

import com.way.stockTracker.dto.PostDTO;
import com.way.stockTracker.models.Post;
import com.way.stockTracker.services.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.Instant;

@RestController
@RequestMapping("/api/post")
public class PostController {

    @Autowired
    PostService postService;

    @PostMapping("/create")
    public ResponseEntity<Object> createPost(@ModelAttribute PostDTO createRequest) {
        long postTime = Instant.now().toEpochMilli();
        postService.createPost(new Post(createRequest.getTitle(), createRequest.getContent(), createRequest.getAuthor(), postTime, 0));
        return ResponseEntity.ok("Post created");
    }

    @GetMapping("/retrieve")
    public ResponseEntity<Object> getPosts() {
        return ResponseEntity.ok(postService.getAllPosts());
    }
}
