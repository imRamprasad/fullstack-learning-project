package com.Ram.controller;
//package com.Ram.backend;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins="http://localhost:5173")
public class HelloController {

    @GetMapping("/new")
    public String hello() {
        return "Hello Ramprasad! Welcome to Full Stack Development.";
    }
}