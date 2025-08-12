package com.way.stockTracker.controllers;

import com.way.stockTracker.models.User;
import com.way.stockTracker.responses.LoginResponse;
import com.way.stockTracker.services.AuthService;
import com.way.stockTracker.services.JwtService;
import com.way.stockTracker.services.PasswordService;
import com.way.stockTracker.services.UserService;
import com.way.stockTracker.dto.UserDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserService userService;

    @Autowired
    private PasswordService passwordService;

    //    @Autowired
    private AuthService authService;

    @Autowired
    private JwtService jwtService;

    @PostMapping("/signup")
    public ResponseEntity<LoginResponse> signup(@ModelAttribute UserDTO signupRequest) {
        User signupUser = authService.signup(signupRequest);
        String jwtToken = jwtService.generateToken(signupUser);
        LoginResponse loginResponse = new LoginResponse(jwtToken, jwtService.getJwtExpirationTime());
        return ResponseEntity.ok(loginResponse);
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@ModelAttribute UserDTO loginRequest) {
        User loginUser = authService.authenticate(loginRequest);
        String jwtToken = jwtService.generateToken(loginUser);
        LoginResponse loginResponse = new LoginResponse(jwtToken, jwtService.getJwtExpirationTime());
        return ResponseEntity.ok(loginResponse);
    }
}
