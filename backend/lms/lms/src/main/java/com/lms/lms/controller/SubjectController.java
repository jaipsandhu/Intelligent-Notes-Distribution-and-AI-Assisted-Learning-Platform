package com.lms.lms.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/home")
public class SubjectController {
    @GetMapping("/maths")
    public String maths() {
        return """
            Mathematics Course:
            - Algebra basics
            - Linear equations
            - Calculus introduction
            - Derivatives & Integrals
            - Problem solving techniques
            """;
    }

    @GetMapping("/physics")
    public String physics() {
        return """
            Physics Course:
            - Laws of motion
            - Work, energy, power
            - Thermodynamics
            - Waves and optics
            - Modern physics basics
            """;
    }

    @GetMapping("/cs")
    public String cs() {
        return """
            Computer Science Course:
            - Programming basics (Java/Python)
            - Data Structures
            - Algorithms
            - OOP concepts
            - Basic system design
            """;
    }
}
