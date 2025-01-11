package com.portfolio.Services;

import com.portfolio.Entity.User;
import com.portfolio.Repository.FeedbackRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FeedbackService {
    @Autowired
    FeedbackRepository feedbackRepository;

    public void saveFeedback(User user){
        feedbackRepository.save(user);
    }
}
