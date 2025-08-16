package com.way.stockTracker.controllers;

import com.way.stockTracker.models.User;
import com.way.stockTracker.responses.LoginResponse;
import com.way.stockTracker.services.AuthService;
import com.way.stockTracker.services.JwtService;
import com.way.stockTracker.services.PasswordService;
import com.way.stockTracker.services.UserService;
import com.way.stockTracker.dto.UserDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    private AuthService authService;

    @Autowired
    private JwtService jwtService;

    @PostMapping("/signup")
    public ResponseEntity<Object> signup(@ModelAttribute UserDTO signupRequest) {
        boolean userExists = authService.checkUserExists(signupRequest);
        if (!userExists) {
            User signupUser = authService.signup(signupRequest);
            String jwtToken = jwtService.generateToken(signupUser);
            LoginResponse loginResponse = new LoginResponse(jwtToken, jwtService.getJwtExpirationTime());
            return ResponseEntity.ok(loginResponse);
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User already exists");
    }

    @PostMapping("/login")
    public ResponseEntity<Object> login(@ModelAttribute UserDTO loginRequest) {
        boolean userExists = authService.checkUserExists(loginRequest);
        if (userExists) {
            boolean passwordCheck = authService.authenticate(loginRequest);
            if (passwordCheck) {
                User loginUser = authService.login(loginRequest);
                String jwtToken = jwtService.generateToken(loginUser);
                LoginResponse loginResponse = new LoginResponse(jwtToken, jwtService.getJwtExpirationTime());
                return ResponseEntity.ok(loginResponse);
            } else {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Incorrect password");
            }
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User does not exist");
        }
    }
}