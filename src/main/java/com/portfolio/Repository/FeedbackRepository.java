package com.portfolio.Repository;

import com.portfolio.Entity.User;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface FeedbackRepository extends MongoRepository<User, ObjectId> {
}
