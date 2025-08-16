package com.way.stockTracker.services;

import com.way.stockTracker.dto.UserDTO;
import com.way.stockTracker.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private UserService userService;

    @Autowired
    private PasswordService passwordService;

    @Autowired
    private JwtService jwtService;

    public boolean checkUserExists(UserDTO input) {
        User userExists = userService.findUserByUsername(input.getUsername());
        return userExists != null;
    }

    public User signup(UserDTO input) {
        User newUser = new User(input.getUsername(), passwordService.hashPassword(input.getPassword()));
        userService.createUser(newUser);
        return newUser;
    }

    public User login(UserDTO input) {
        return userService.findUserByUsername(input.getUsername());
    }

    public boolean authenticate(UserDTO input) {
        User userExists = userService.findUserByUsername(input.getUsername());
        String dbPasswordHash = userExists.getPassword();
        return passwordService.verifyPassword(input.getPassword(), dbPasswordHash);
    }
}