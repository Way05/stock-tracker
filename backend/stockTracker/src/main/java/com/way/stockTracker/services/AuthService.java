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

    public User signup(UserDTO input) {
        User userExists = userService.findUserByUsername(input.getUsername());
        if (userExists != null) {
            throw new RuntimeException("User already exists");
        }
        User newUser = new User(input.getUsername(), passwordService.hashPassword(input.getPassword()));
        userService.createUser(newUser);
        return newUser;
    }

    public User authenticate(UserDTO input) {
        User userExists = userService.findUserByUsername(input.getUsername());
        if (userExists == null) {
            throw new RuntimeException("User does not exist");
        }
        String dbPasswordHash = userExists.getPassword();
        boolean compare = passwordService.verifyPassword(input.getPassword(), dbPasswordHash);
        if (!compare) {
            throw new RuntimeException("Incorrect password");
        }
        return userExists;
    }
}