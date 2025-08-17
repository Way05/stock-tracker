package com.way.stockTracker.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PostDTO {
    String title;
    String content;
    String author;
    int votes;
}
