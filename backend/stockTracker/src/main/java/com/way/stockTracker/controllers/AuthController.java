package com.way.stockTracker.controllers;

import com.way.stockTracker.models.User;
import com.way.stockTracker.services.UserService;
import com.way.stockTracker.dto.LoginRequestDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserService userService;

    @PostMapping("/signup")
    public String signup(@ModelAttribute LoginRequestDTO signupRequest) {
        User checkExists = userService.findUserByUsername(signupRequest.getUsername());
        if(checkExists != null) {
            return "User already exists";
        } else {
            BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(16);
            userService.createUser(new User(signupRequest.getUsername(), encoder.encode(signupRequest.getPassword())));
            return "New user successfully created";
        }
    }

    @PostMapping("/login")
    public String login(@RequestBody LoginRequestDTO loginRequest) {
        return null;
    }
}
