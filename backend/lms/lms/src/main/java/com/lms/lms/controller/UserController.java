package com.lms.lms.controller;

import com.lms.lms.entity.Notes;
import com.lms.lms.entity.User;
import com.lms.lms.service.NotesService;
import com.lms.lms.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequiredArgsConstructor
@RequestMapping("/auth")

public class UserController {



        private final UserService userService;



        @PostMapping("/register")
        public void register(@RequestBody User user) {
            userService.register(user);
        }



}
