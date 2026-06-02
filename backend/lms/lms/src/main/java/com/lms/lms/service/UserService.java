package com.lms.lms.service;

import com.lms.lms.entity.Notes;
import com.lms.lms.entity.User;
import com.lms.lms.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;


    public void register(User user) {


        PasswordEncoder encoder =
                PasswordEncoderFactories.createDelegatingPasswordEncoder();
        user.setPassword(encoder.encode(user.getPassword()));


        userRepository.save(user);

        System.out.println(user.getUsername() +" registered successfully ");
    }



}