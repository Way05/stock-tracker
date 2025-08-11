package com.way.stockTracker.controllers;

import com.way.stockTracker.models.User;
import com.way.stockTracker.services.PasswordService;
import com.way.stockTracker.services.UserService;
import com.way.stockTracker.dto.LoginRequestDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserService userService;

    @Autowired
    private PasswordService passwordService;

    @PostMapping("/signup")
    public String signup(@ModelAttribute LoginRequestDTO signupRequest) {
        User userExists = userService.findUserByUsername(signupRequest.getUsername());
        if(userExists != null) {
            return "User already exists";
        } else {
            userService.createUser(new User(signupRequest.getUsername(), passwordService.hashPassword(signupRequest.getPassword())));
            return "New user successfully created";
        }
    }

    @PostMapping("/login")
    public String login(@ModelAttribute LoginRequestDTO loginRequest) {
        User userExists = userService.findUserByUsername(loginRequest.getUsername());
        if(userExists == null) {
            return "User does not exist";
        } else {
            String dbPasswordHash = userExists.getPassword();
            boolean compare = passwordService.verifyPassword(loginRequest.getPassword(), dbPasswordHash);
            if(compare) {
                return "Password correct";
            } else {
                return "Incorrect password";
            }
        }
    }
}
