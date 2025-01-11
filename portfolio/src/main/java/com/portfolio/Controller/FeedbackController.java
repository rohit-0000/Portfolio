package com.portfolio.Controller;

import com.portfolio.Entity.User;
import com.portfolio.Services.FeedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")//we use this because we are hosting frontend on other port
public class FeedbackController {
    @Autowired
    FeedbackService feedbackService;

    @PostMapping("/save")
    ResponseEntity<?> saveFeedback(@RequestBody User user) {
        try{
        feedbackService.saveFeedback(user);
        return new ResponseEntity<>(HttpStatus.CREATED);
        }catch (Exception e){
            System.out.println(e);
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
