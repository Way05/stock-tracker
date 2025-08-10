package com.way.stockTracker.services;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class PasswordService {

    private final BCryptPasswordEncoder passwordEncoder;

    public PasswordService() {
        this.passwordEncoder = new BCryptPasswordEncoder(16);
    }

    public String hashPassword(String plaintext) {
        return passwordEncoder.encode(plaintext);
    }

    public boolean verifyPassword(String plaintext, String hashed) {
        return passwordEncoder.matches(plaintext, hashed);
    }

}
