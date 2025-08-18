package com.way.stockTracker.models;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.Instant;

@Data
@NoArgsConstructor
@Document(collection = "Posts")
public class Post {
    @Id
    private String id;
    private String title;
    private String content;
    private String author;
    private long date;
    private int votes;

    public Post(String title, String content, String author, long date, int votes) {
        this.title = title;
        this.content = content;
        this.author = author;
        this.date = date;
        this.votes = votes;
    }
}
