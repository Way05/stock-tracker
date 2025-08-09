package com.way.stockTracker;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepo;

    public void createUser(User user) {
        userRepo.save(user);
    }

    public User findUserByUsername(String username) {
        return userRepo.findByUsername(username);
    }


}
