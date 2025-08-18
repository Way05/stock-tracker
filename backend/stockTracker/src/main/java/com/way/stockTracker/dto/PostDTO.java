package com.way.stockTracker.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.ZonedDateTime;

@Getter
@Setter
public class PostDTO {
    String title;
    String content;
    String author;
    ZonedDateTime time;
    int votes;
}
