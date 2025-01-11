package com.portfolio.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Health_check {
    @GetMapping("/health-check")
    public String health_check(){
        return "ok";
    }
}
